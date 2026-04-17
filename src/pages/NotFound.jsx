import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="mt-2 opacity-70">Page not found</p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-full bg-primary px-6 py-2 text-primary-foreground"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}