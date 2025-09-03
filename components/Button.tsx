
import * as React from 'react'
export function Button({ className = '', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`inline-flex items-center rounded-xl px-5 py-3 text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 transition ${className}`} {...props} />
  )
}
