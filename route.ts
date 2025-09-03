import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2024-06-20' });

const STRIPE_PRICES = {
  lite: 'price_LITE_xxx',
  standard: 'price_STD_xxx',
  premium: 'price_PREM_xxx',
  premium_addon_twice_weekly: 'price_PREM_ADDON_2x_xxx',
} as const;

export async function POST(req: NextRequest) {
  try {
    const { plan, addonTwiceWeekly } = await req.json();

    if (!['lite','standard','premium'].includes(plan)) {
      return NextResponse.json({ error: 'Invalid plan' }, { status: 400 });
    }

    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [
      { price: STRIPE_PRICES[plan as keyof typeof STRIPE_PRICES], quantity: 1 }
    ];

    if (plan === 'premium' && addonTwiceWeekly) {
      line_items.push({ price: STRIPE_PRICES.premium_addon_twice_weekly, quantity: 1 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items,
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/?canceled=1`,
      billing_address_collection: 'required',
      customer_creation: 'if_required',
    });

    return NextResponse.json({ url: session.url });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Checkout error' }, { status: 500 });
  }
}
