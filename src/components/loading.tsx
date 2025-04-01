import { CircleNotch } from 'phosphor-react'

export function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-zinc-800">
      <div className="flex justify-center gap-4">
        <CircleNotch weight="thin" className="h-24 w-24 animate-spin text-zinc-400" />
      </div>
    </div>
  )
}
