import Link from 'next/link'

export default function Home() {
  return (
    <main className="py-12">
      <div className='flex flex-col gap-6'>
        <div>
          <Link className="link link-primary font-bold" href="/settings">
            Settings
          </Link>
        </div>
        Blog
        <button className="btn btn-primary">Button</button>
      </div>
    </main>
  )
}
