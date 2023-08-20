import Link from 'next/link'
import { prisma } from '@/db'
import TodoItem from '@/components/TodoItem'

// const a  = prisma.todo.create({
//   data: {
//     title: 'test',
//     complete: false
//   }
// });

async function qweqwe() {

  const todos = await prisma.todo.findMany()

  // const todos = await prisma.todo.create({
  //   data: {
  //     title: 'test',
  //     complete: false
  //   }
  // })

}

async function toggleTodo(id: string, complete: boolean) {
  'use server'

  await prisma.todo.update(
    {
      where: {id},
      data: {complete}
    }
  )
}

export default async function Home() {
  const todos = await prisma.todo.findMany()

  return <>
    <header className="flex items-center justify-between mb-5">
    <header className="flex items-center justify-between mb-5">
      <h1 className="text-xl">TODOS</h1>
      <Link className="border border-slate-300 rounded px-3 py-2 hover:bg-slate-700" href="/new">New</Link>
    </header>
    <ul className="">
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo}></TodoItem>
      ))}
    </ul>
  </>
}
