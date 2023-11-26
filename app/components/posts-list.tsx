import Link from "next/link"
import { compareDesc, format, parseISO } from "date-fns"
import { allPosts, Post } from "contentlayer/generated"

function PostCard(post: Post) {
  return (
    <div className="shadow-0 card bg-base-200 transition-all duration-500 hover:-translate-y-2 hover:bg-base-300 hover:shadow-2xl">
      <Link href={post.url} className="absolute inset-0"></Link>
      {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
      <div className="card-body">
        <h2 className="card-title text-2xl">{post.title}</h2>
        <time dateTime={post.date} className="text-xs text-secondary">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        {post.description && <div>{post.description}</div>}
      </div>
    </div>
  )
}

type PostListProps = {
  limit?: number
}

export const PostList = ({ limit }: PostListProps) => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )

  const postsToDisplay = limit ? posts.slice(0, limit) : posts

  return (
    <div className="flex flex-col gap-8">
      {postsToDisplay.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  )
}
