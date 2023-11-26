import { PostList } from "./components/posts-list"
import { Hero } from "./components/hero"
import { siteConfig } from "@/config/site"

export default function Home() {

  const displayHero = siteConfig.displayHero;

  return (
    <main className="min-h-screen py-12">
      { displayHero && <Hero /> }
      <div className="flex flex-col gap-6">
        <PostList />
      </div>
    </main>
  )
}
