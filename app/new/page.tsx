import Link from 'next/link'
import { prisma } from '@/db'
import { redirect } from 'next/navigation'

async function createTodo(form: FormData) {
  'use server'

  const title = form.get('title')

  if (typeof title !== 'string' || title.length === 0) {
    throw new Error('Title not good')
  }

  await prisma.todo.create({
    data: {
      title: title,
      complete: false
    }
  })

  redirect("/")
}

export default function NewPage() {
  return <>

    <header className="flex items-center justify-between mb-5">
      <h1 className="text-xl">NEW</h1>
    </header>

    <form action={createTodo} className="flex gap-2 flex-col">

      <input
        type="text"
        name="title"
        className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
      />

      <div className="flex justify-end gap-1">

        <Link href=".." className="border border-slate-300 rounded px-3 py-2 hover:bg-slate-700">Cancel</Link>
        <button type="submit" className="border border-slate-300 rounded px-3 py-2 hover:bg-slate-700">Save</button>

      </div>

    </form>

  </>
}
