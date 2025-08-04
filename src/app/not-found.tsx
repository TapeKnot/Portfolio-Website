import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="not-found-section">
      <h1 className="text-align-center">404 Lost at Sea</h1>
      <p className="text-align-center">
        Ahoy, matey! Looks like you're a wee bit lost. Good thing I was sailing by!
        <br/>Let's get you back to port before the rain comes, lad.
      </p>
      <br/>
      <div className="flex-div justify-content-center">
        <Link className="hyperlink-button" href="/">Return to Port</Link>
      </div>
    </div>
  )
}