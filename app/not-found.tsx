import Link from "next/link"

export default function NotFound() {
  return (
    <div className="space-y-6 py-24 text-center">
      <h1 className="text-6xl text-primary">Not Found</h1>
      <p className="text-2xl text-secondary">404</p>
      <Link className="btn btn-outline btn-primary" href="/">
        Return Home
      </Link>
    </div>
  )
}
