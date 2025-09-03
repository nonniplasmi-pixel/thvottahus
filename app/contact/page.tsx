
"use client";
import { useState } from 'react'
import { Button } from '@/components/Button'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const mailto = `mailto:hallo@thvottahus.is?subject=Skráning / fyrirspurn&body=Nafn:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0A%0ASkilaboð:%0A${encodeURIComponent(msg)}`

  return (
    <main className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-3xl font-bold mb-2">Hafa samband</h1>
      <p className="text-slate-600 mb-6">Fylltu út, eða sendu okkur beint á <a className="underline" href="mailto:hallo@thvottahus.is">hallo@thvottahus.is</a>.</p>
      <div className="space-y-3">
        <div>
          <label className="text-sm font-medium">Nafn</label>
          <input className="w-full border rounded-xl px-3 py-2" value={name} onChange={e=>setName(e.target.value)} placeholder="Fullt nafn" />
        </div>
        <div>
          <label className="text-sm font-medium">Netfang</label>
          <input className="w-full border rounded-xl px-3 py-2" value={email} onChange={e=>setEmail(e.target.value)} placeholder="netfang@dæmi.is" />
        </div>
        <div>
          <label className="text-sm font-medium">Skilaboð</label>
          <textarea className="w-full border rounded-xl px-3 py-2 min-h-[140px]" value={msg} onChange={e=>setMsg(e.target.value)} placeholder="Séróskir, póstnúmer, o.s.frv." />
        </div>
        <a href={mailto}><Button className="rounded-xl w-full">Senda í tölvupósti</Button></a>
      </div>
    </main>
  )
}
