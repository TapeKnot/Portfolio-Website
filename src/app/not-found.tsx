import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2 className="text-align-center">404 Page Not Found</h2>
      <p className="text-align-center">
        Oops! It looks like you tried to access a page that does not exist.
        How about we return you to the home page instead?
      </p>
      <Link href="/">Home</Link>
    </div>
  )
}