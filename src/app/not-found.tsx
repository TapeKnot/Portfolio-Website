import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="not-found-section">
      <div className="section-header">
        <h1 className="text-align-center">404 - Lost at Sea</h1>
        <hr/>
        <p className="text-align-center">
          {"Ahoy, matey! Looks like you're a wee bit lost. Good thing I was sailing by!"}<br/>
          {"Let's get you back to port before the rain comes, lad."}
        </p>
      </div>
      <main>
        <div className="button-container">
          <Link className="hyperlink-button" href="/">Return to Port</Link>
        </div>
      </main>
    </div>
  )
}