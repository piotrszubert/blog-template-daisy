import Link from 'next/link'
import { PostList } from './components/posts-list'

export default function Home() {
  return (
    <main className="py-12">
      <div className='flex flex-col gap-6'>
        <div className="flex">
          <Link className="link link-primary font-bold ms-auto" href="/settings">
            Settings
          </Link>
        </div>
        <PostList />
        
      </div>
    </main>
  )
}
