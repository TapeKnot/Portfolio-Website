export default function Home() {
  return (
    <div>
      <main>
        <div className="foreground-section">
          <h1 className="text-align-center">Benjamin Levy</h1>
          <h2 className="text-align-center">Software Engineer & Game Programmer</h2>
          <br/>
          <p className="text-align-center">
            Hi!
            Welcome to my website, created from scratch using React.<br/>
            Here, you can find some of the projects I have worked on as well as my resume.
          </p>
        </div>
        <div className="project-card-container">
          <div className="project-card">
            <a href="https://ratgoosesuitstudios.github.io/" target="_blank">
              <img className="project-card-img" src='/travelling-with-taste.png' alt="travelling-with-taste"/>
            </a>
            <div className="tag-container">
                <div className="tag-type">Game</div>
                <div className="tag-role">Programming</div>
                <div className="tag-role">Design</div>
                <div className="tag-role">Tech. Art</div>
                <div className="tag-tool">Unreal</div>
                <div className="tag-tool">Jira</div>
                <div className="tag-language">Blueprints</div>
            </div>
            <p>Developed a 3D goofy stealth game about rats stealing from cheese-trafficking airport security.</p>
          </div>
          <div className="project-card">
            <a href="https://tapeknot.itch.io/bippits" target="_blank">
              <img className="project-card-img" src='/bippits.png' alt="bippits"/>
            </a>
            <div className="tag-container">
                <div className="tag-type">Game</div>
                <div className="tag-type">Engine</div>
                <div className="tag-role">Programming</div>
                <div className="tag-language">C++</div>
            </div>
            <p>Recreated the ASCII art game engine Dragonfly and developed a tricky block-stacking game with the engine.</p>
          </div>
          <div className="project-card">
            <a href="https://github.com/TapeKnot" target="_blank">
              <img className="project-card-img" src='/tables4u.png' alt="tables4u"/>
            </a>
            <div className="tag-container">
                <div className="tag-type">Website</div>
                <div className="tag-role">Programming</div>
                <div className="tag-role">Databases</div>
                <div className="tag-tool">React</div>
                <div className="tag-tool">AWS</div>
                <div className="tag-language">Javascript</div>
                <div className="tag-language">HTML</div>
            </div>
            <p>Created a restaurant reservation website enabling customers to conveniently book tables anywhere at any time.</p>
          </div>
        </div>
        <a href="" className="text-align-center"><h2>See More Projects!</h2></a>
        <br/>
      </main>
    </div>
  );
}
