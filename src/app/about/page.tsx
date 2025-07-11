import Image from "next/image";

export default function Page() {
  return (
    <div>
      <main>
        <div className="section-header">
          <h1 className="text-align-center">About Me</h1>
          <hr/>
        </div>
        <div className="foreground-section">
          <div className="about-me-container">
            <Image className="profile-img" src='benjamin-levy.JPEG' alt="benjamin-levy"/>
            <p className="about-me-text">
              Hi there!
              I am Benjamin Levy, a passionate software engineer and game programmer.
              When I am not creating games, I like to play guitar, go on hikes, and collect video game memorabilia.
              <br/>
              I am currently looking for work, so feel free to reach out if you are interested in working together.
            </p>
          </div>
          <div className="section-header">
            <h2 className="text-align-center">Skills & Technologies</h2>
            <hr/>
          </div>
          <div className="skills-container">
            <Image className="skill-img" src='/skills-technologies/colored/js.svg' alt="Javascript"/>
            <Image className="skill-img" src='/skills-technologies/colored/ts.svg' alt="Typescript"/>
            <Image className="skill-img" src='/skills-technologies/colored/HTML5.svg' alt="HTML5"/>
            <Image className="skill-img" src='/skills-technologies/colored/css.png' alt="CSS"/>
            <Image className="skill-img" src='/skills-technologies/colored/c.svg' alt="C"/>
            <Image className="skill-img" src='/skills-technologies/colored/cpp.svg' alt="C++"/>
            <Image className="skill-img" src='/skills-technologies/colored/c-sharp.svg' alt="C#"/>
            <Image className="skill-img" src='/skills-technologies/colored/java.svg' alt="Java"/>
            <Image className="skill-img" src='/skills-technologies/colored/sql.svg' alt="SQL"/>
          </div>
          <div className="skills-container">
            <Image className="skill-img" src='/skills-technologies/colored/react.svg' alt="React"/>
            <Image className="skill-img" src='/skills-technologies/colored/node.js.svg' alt="Node.js"/>
            <Image className="skill-img" src='/skills-technologies/colored/next.js.svg' alt="Next.js"/>
          </div>
          <div className="skills-container">
            <Image className="skill-img" src='/skills-technologies/colored/unreal-vertical.svg' alt="Unreal"/>
            <Image className="skill-img" src='/skills-technologies/colored/unity.png' alt="Unity"/>
            <Image className="skill-img" src='/skills-technologies/colored/godot-vertical.svg' alt="Godot"/>
          </div>
          <div className="section-header">
            <h2 className="text-align-center">Resume</h2>
            <hr/>
          </div>
          <div className="resume-buttons-container">
            <a>Download</a>
            <a>Open in New Tab</a>
            <a>LinkedIn</a>
          </div>
          <div className="resume-container">
            <embed className="margin-auto" src="Benjamin-Levy-Resume.pdf" width="800px" height="1480px"/>
          </div>
        </div>
      </main>
    </div>
  );
}
