
"use client";
import { useState, useMemo } from 'react'
import { Sparkles, Truck, Shield, BadgeCheck, ArrowRight, Calendar, Check, Phone, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/Button'

const BRAND = { name: 'Þvottahús', tagline: 'Áskrift að hreinu lífi', phone: '+354 555 1234', email: 'hallo@thvottahus.is', address: 'Suðurlandsbraut 10, Reykjavík' }

const PLANS = [
  { id: 'lite', name: 'Lite', price: 12900, desc: '1 poki á viku · ~6–8 kg' },
  { id: 'standard', name: 'Standard', price: 19900, desc: '2 pokar á viku · ~12–16 kg', popular: true },
  { id: 'premium', name: 'Premium', price: 34900, desc: '3 pokar á viku · ~18–24 kg' },
] as const
type PlanId = typeof PLANS[number]['id']

export default function Page() {
  const [selected, setSelected] = useState<PlanId>('standard')
  const price = useMemo(()=> PLANS.find(p=>p.id===selected)!.price, [selected])

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <header className="flex items-center justify-between py-3 border-b">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-xl bg-slate-900 text-white grid place-items-center"><Sparkles className="w-4 h-4"/></div>
          <span className="font-semibold">{BRAND.name}</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#plans" className="hover:opacity-70">Verð</a>
          <a href="#how" className="hover:opacity-70">Svona virkar</a>
          <a href="#faq" className="hover:opacity-70">FAQ</a>
          <a href="/contact" className="hover:opacity-70">Hafa samband</a>
        </nav>
      </header>

      <section className="grid md:grid-cols-2 gap-10 items-center pt-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">Þvottur sem þjónusta.<span className="block text-slate-500">Sótt, þvegið og skilað – á áskrift.</span></h1>
          <p className="mt-5 text-slate-600 max-w-prose">Engin vigtun. <strong>Allt sem kemst í pokann</strong> er innan pakkans. Þú velur plan, við sækjum og skila hreinu – alltaf á sama degi.</p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
            <div className="flex items-center gap-2"><Truck className="w-4 h-4"/> Sótt & skilað</div>
            <div className="flex items-center gap-2"><Shield className="w-4 h-4"/> Gæðatryggt</div>
            <div className="flex items-center gap-2"><BadgeCheck className="w-4 h-4"/> Engin binding fyrsta mán.</div>
          </div>
        </div>
        <div className="border rounded-2xl p-5">
          <div className="text-lg font-semibold mb-2">Veldu plan</div>
          <div className="grid grid-cols-3 gap-2 mb-4">
            {PLANS.map(p=> (
              <button key={p.id} onClick={()=>setSelected(p.id)} className={`rounded-xl border p-3 text-left hover:border-slate-900 transition ${selected===p.id? 'border-slate-900 bg-slate-50' : ''}`}>
                <div className="font-semibold">{p.name}</div>
                <div className="text-sm text-slate-500">{p.price.toLocaleString('is-IS')} kr/mán</div>
              </button>
            ))}
          </div>
          <div className="rounded-xl bg-slate-50 border p-3 flex items-center justify-between">
            <div>
              <div className="text-sm text-slate-500">Mánuðargjald</div>
              <div className="text-2xl font-bold">{price.toLocaleString('is-IS')} kr</div>
            </div>
            <a href="/contact"><Button className="rounded-xl">Hafa samband <ArrowRight className="ml-2 w-4 h-4"/></Button></a>
          </div>
          <p className="text-xs text-slate-500 mt-2">Aukapoki: 3.000 kr. Engin vigtun – allt sem kemst í pokann.</p>
        </div>
      </section>

      <section id="plans" className="py-12">
        <h2 className="text-3xl font-bold mb-6">Verð & pakkar</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {PLANS.map(p=> (
            <div key={p.id} className={`border rounded-2xl p-5 ${p.popular? 'border-slate-900 shadow' : ''}`}>
              <div className="flex items-center justify-between mb-1">
                <div className="font-semibold">{p.name}</div>
                {p.popular && <span className="text-xs px-2 py-1 rounded-full bg-slate-900 text-white">Vinsælast</span>}
              </div>
              <div className="text-slate-500 text-sm mb-3">{p.desc}</div>
              <div className="text-3xl font-bold mb-4">{p.price.toLocaleString('is-IS')} kr <span className="text-base text-slate-500 font-normal">/ mán</span></div>
              <ul className="space-y-2 text-sm mb-4">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5"/>Sótt & skilað 1× vikulega</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5"/>Allt sem kemst í pokann</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5"/>SMS þegar bílstjóri er á leiðinni</li>
              </ul>
              <a href="/contact"><Button className="w-full rounded-xl">Velja {p.name}</Button></a>
            </div>
          ))}
        </div>
      </section>

      <section id="how" className="py-12">
        <h2 className="text-3xl font-bold mb-6">Svona virkar þetta</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[{title:'Við sækjum', text:'Við sækjum pokana á þínu svæði á föstum degi.'}, {title:'Þvottur & pökkun', text:'Við þvoum, þurrkum og brjótum fagmannlega.'}, {title:'Við skílum', text:'Skilað heim daginn eftir á sama tíma.'}].map((s, i)=> (
            <div key={i} className="border rounded-2xl p-5">
              <div className="font-semibold mb-2">{s.title}</div>
              <div className="text-sm text-slate-600">{s.text}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="py-12">
        <h2 className="text-3xl font-bold mb-6">Algengar spurningar</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-2xl p-5"><div className="font-semibold mb-1">Er vigtun?</div><div className="text-sm text-slate-600">Nei. Allt sem kemst í pokann er innan pakkans.</div></div>
          <div className="border rounded-2xl p-5"><div className="font-semibold mb-1">Hvenær er skilað?</div><div className="text-sm text-slate-600">Daginn eftir söfnun, á bilinu 17:00–21:00.</div></div>
        </div>
      </section>

      <footer className="border-t pt-8 mt-8">
        <div className="grid md:grid-cols-4 gap-6 text-sm pb-8">
          <div>
            <div className="flex items-center gap-2 mb-2"><div className="w-7 h-7 rounded-xl bg-slate-900 text-white grid place-items-center"><Sparkles className="w-4 h-4"/></div><span className="font-semibold">{BRAND.name}</span></div>
            <p className="text-slate-600">{BRAND.tagline}</p>
          </div>
          <div>
            <div className="font-semibold mb-2">Hafðu samband</div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4"/>{BRAND.phone}</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4"/>{BRAND.email}</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4"/>{BRAND.address}</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Upplýsingar</div>
            <ul className="space-y-2">
              <li><a href="#plans" className="hover:underline">Verð & pakkar</a></li>
              <li><a href="#how" className="hover:underline">Svona virkar</a></li>
              <li><a href="#faq" className="hover:underline">Spurt & svarað</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Skilmálar</div>
            <p className="text-slate-600">Engin binding fyrsta mánuð, síðan má segja upp hvenær sem er með mánaðar fyrirvara.</p>
          </div>
        </div>
        <div className="text-xs text-slate-400 text-center pb-8">© {new Date().getFullYear()} Þvottahús. Öll réttindi áskilin.</div>
      </footer>
    </main>
  )
}
