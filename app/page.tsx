import { PostList } from "./components/posts-list"
import { Hero } from "./components/hero"
import { siteConfig } from "@/config/site"

export default function Home() {
  const { display, heading, subheading } = siteConfig.content.hero

  return (
    <main className="min-h-screen py-12">
      {display && <Hero heading={heading} subheading={subheading} />}
      <div className="flex flex-col gap-6">
        <PostList limit={4} />
      </div>
    </main>
  )
}
