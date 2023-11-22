import Link from 'next/link'
import { PostList } from './components/posts-list'

export default function Home() {
  return (
    <main className="py-12 min-h-screen">
      <div className='flex flex-col gap-6'>
        <PostList />
      </div>
    </main>
  )
}
