import Link from 'next/link';
import { prisma } from '@/db';

// const a  = prisma.todo.create({
//   data: {
//     title: 'test',
//     complete: false
//   }
// });

const todos = await prisma.todo.findMany();

console.log({todos})

export default async function Home() {

  const todos = await prisma.todo.findMany();

  return (
    <>

      <header className="flex items-center justify-between mb-5">
        <h1 className="text-xl">TODOS</h1>
        <Link className="border border-slate-300 rounded px-3 py-2 hover:bg-slate-700" href="/new">New</Link>
      </header>

      <ul className="">
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>

    </>
  );
}
