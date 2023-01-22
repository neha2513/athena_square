import "./App.css";
import "./Custom.css";
import Video1 from "./videos/Video1.mp4";
import Video2 from "./videos/Video2.mp4";
import Video3 from "./videos/Video3.mp4";
import Buttons from "./components/Buttons";
import Data from "./components/Data";

function App() {
  return (
    <div className="App">
      <header className="App-header container">
        <h1>Double the hires, half the effort</h1>
        <p>
          Open conversations and nurture relationships at scale and be the first
          choice when your ideal candidate is ready to explore.
        </p>

        <Buttons />
      </header>

      <section>
        <div className="right">
          <div className="inner">
            <h2 className="text-center">SECTION 1</h2>
            <Data />
          </div>
        </div>

        <div className="left">
          <div className="inner sticky">
            <div className="videoPlayer bg">
              <video
                src={Video1}
                width="750"
                height="500"
                loop
                autoPlay="true"
                controls
              ></video>
            </div>
          </div>
        </div>
      </section>

      <video src={Video2} width="750" height="500" controls></video>
      <video src={Video3} width="750" height="500" controls></video>
    </div>
  );
}

export default App;
