import { allPosts } from "contentlayer/generated"
import { useMDXComponent } from "next-contentlayer/hooks"
import { notFound } from "next/navigation"
import { format, parseISO } from "date-fns"
import type { MDXComponents } from "mdx/types"
import Link from "next/link"
import Image from "next/image"

const mdxComponents: MDXComponents = {
  // Override the default <a> element to use the next/link component.
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  // Add a custom component.
  Image: ({ src, alt, width, height }) => (
    <Image src={src} width={width} height={height} alt={alt} />
  ),
}

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) notFound()
  return { title: post.title }
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

  if (!post) notFound()

  const MDXContent = useMDXComponent(post.body.code)

  return (
    <article className="py-8 prose">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-secondary text-sm">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <h1 className="text-5xl font-bold mb-8">{post.title}</h1>
      </div>
      <MDXContent components={mdxComponents} />
    </article>
  )
}
