import { PostList } from "./components/posts-list"
import { Hero } from "./components/hero"

export default function Home() {
  return (
    <main className="py-12 min-h-screen">
      <Hero />
      <div className="flex flex-col gap-6">
        <PostList />
      </div>
    </main>
  )
}
