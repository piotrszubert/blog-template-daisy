import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'

function PostCard(post: Post) {
    return (
      <div className="mb-8">
        <h2 className="mb-1 text-xl">
          <Link href={post.url} className="link link-secondary">
            {post.title}
          </Link>
        </h2>
        <time dateTime={post.date} className="text-primary text-xs">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        {/* <div className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.body.html }} /> */}
      </div>
    )
}

export const PostList = () => {
    const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

    return(
        <div>
            {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
            ))}
        </div>
    );
}