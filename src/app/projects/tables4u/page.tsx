import { Slideshow } from '../../../components/slideshow/slideshow'
import { slides } from '../../../data/tables4u-data.json'

export default function Page() {
  return (
    <article>
      <div className="section-header">
        <h1 className="text-align-center">Tables4u</h1>
        <hr/>
        <p className="text-align-center">A convenient table reservation website.</p>
      </div>
      <main>
        <section className="project-overview-container">
          <div className="logistics-container">
            <p>
              <b>Type: </b>Website<br/>
              <b>Project Status: </b>Complete<br/>
              <b>Duration: </b>1.5 Months<br/>
              <b>Team Size: </b>4<br/>
              <b>Roles: </b>Programmer, Database Manager<br/>
              <b>Languages: </b>TypeScript, HTML, CSS<br/>
              <b>Tools: </b>React, Node.js, Next.js, Git<br/>
            </p>
          </div>
          <div className="width-75">
            <Slideshow data={slides}/>
          </div>
        </section>
      </main>
    </article>
  );
}
