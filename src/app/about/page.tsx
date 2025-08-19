import Image from "next/image";
import benjaminLevy from '../../../public/benjamin-levy.jpeg'
import js from '../../../public/skills-technologies/colored/js.svg'
import ts from '../../../public/skills-technologies/colored/ts.svg'
import html from '../../../public/skills-technologies/colored/HTML5.svg'
import css from '../../../public/skills-technologies/colored/css.png'
import c from '../../../public/skills-technologies/colored/c.svg'
import cpp from '../../../public/skills-technologies/colored/cpp.svg'
import cSharp from '../../../public/skills-technologies/colored/c-sharp.svg'
import java from '../../../public/skills-technologies/colored/java.svg'
import sql from '../../../public/skills-technologies/colored/sql.svg'
import react from '../../../public/skills-technologies/colored/react-horizontal.png'
import nodejs from '../../../public/skills-technologies/colored/nodejs-horizontal-light.svg'
import nextjs from '../../../public/skills-technologies/colored/nextjs-light.svg'
import unreal from '../../../public/skills-technologies/colored/unreal-horizontal-light.svg'
import unity from '../../../public/skills-technologies/colored/unity-light-cropped.svg'
import godot from '../../../public/skills-technologies/colored/godot-light.svg'

export default function Page() {
  return (
    <article>
      <div className="section-header">
        <h1 className="text-align-center">About Me</h1>
        <span/>
      </div>
      <main>
        <section className="about-me-container">
          <div className="responsive-img-container">
            <Image className="profile-img" src={benjaminLevy} alt="benjamin-levy"/>
          </div>
          <p className="about-me-text">
            Hi there!
            I am Benjamin Levy, a passionate software engineer and game programmer.
            When I am not creating games, I like to play guitar, go on hikes, and collect video game memorabilia.
            <br/>
            I am currently looking for work, so feel free to reach out if you are interested in working together.
          </p>
        </section>
        <section>
          <div className="section-header">
            <h2>Skills & Technologies</h2>
            <hr/>
          </div>
          <div className="skill-container">
            <div className="responsive-img-container"><Image className="skill-img" src={react} alt="React"/></div>
            <div className="responsive-img-container"><Image className="skill-img" src={nodejs} alt="Node.js"/></div>
            <div className="responsive-img-container"><Image className="skill-img" src={nextjs} alt="Next.js"/></div>
          </div>
          <div className="skill-container">
            <div className="responsive-img-container"><Image className="skill-img" src={unreal} alt="Unreal"/></div>
            <div className="responsive-img-container"><Image className="skill-img" src={unity} alt="Unity"/></div>
            <div className="responsive-img-container"><Image className="skill-img" src={godot} alt="Godot"/></div>
          </div>
          <div className="skill-container">
            <div className="responsive-img-container"><Image className="skill-img-language" src={js} alt="Javascript"/></div>
            <div className="responsive-img-container"><Image className="skill-img-language" src={ts} alt="Typescript"/></div>
            <div className="responsive-img-container"><Image className="skill-img-language" src={html} alt="HTML5"/></div>
            <div className="responsive-img-container"><Image className="skill-img-language" src={css} alt="CSS"/></div>
            <div className="responsive-img-container"><Image className="skill-img-language" src={c} alt="C"/></div>
            <div className="responsive-img-container"><Image className="skill-img-language" src={cpp} alt="C++"/></div>
            <div className="responsive-img-container"><Image className="skill-img-language" src={cSharp} alt="C#"/></div>
            <div className="responsive-img-container"><Image className="skill-img-language" src={java} alt="Java"/></div>
            <div className="responsive-img-container"><Image className="skill-img-language" src={sql} alt="SQL"/></div>
          </div>
        </section>
        <section>
          <div className="section-header">
            <h2 className="text-align-center">Resume</h2>
            <hr/>
          </div>
          <div className="button-container">
            <a className="hyperlink-button" href="/Benjamin-Levy-Resume.pdf" download>Download</a>
            <a className="hyperlink-button" href="/Benjamin-Levy-Resume.pdf" target="_blank">Open in New Tab</a>
            <a className="hyperlink-button" type="application/pdf" href="https://www.linkedin.com/in/levybe/" target="_blank">LinkedIn</a>
          </div>
          <embed className="margin-auto" src="Benjamin-Levy-Resume.pdf" width="100%" height="1150em"/>
        </section>
      </main>
    </article>
  );
}
