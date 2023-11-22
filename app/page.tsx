import { ThemeToggle } from './components/theme-toggle'

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto py-12 p-4">
      <div className='flex flex-col gap-6'>
        <ThemeToggle />

        Blog
        <button className="btn btn-primary">Button</button>
      </div>
    </main>
  )
}
