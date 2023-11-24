import Link from "next/link"

export default function NotFound() {
    return (
      <div className="py-24 text-center space-y-6">
        <h1 className="text-6xl text-primary">Not Found</h1>
        <p className="text-secondary text-2xl">404</p>
        <Link className="btn btn-primary btn-outline" href="/">Return Home</Link>
      </div>
    )
  }