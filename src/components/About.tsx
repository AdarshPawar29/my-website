// import ParentSize from "@visx/responsive/lib/components/ParentSize";
import { Link } from "react-router-dom";
import Animation from "./Animation/Animation";
// import Example from "./Patterns/Example";

type Props = {};
const About = (props: Props) => {
  return (
    <div className="about">
      {/* <ParentSize>
        {({ width, height }) => <Example width={width} height={height} />}
      </ParentSize> */}
      {/* <div className="about-info"> */}
      <div className="html">{"<html>"}</div>
      <div className="body">{"<body>"}</div>
      <div>
        <div className="h2">{"<h2>"}</div>
        <div className="my">
          <h2>My, Myself & I</h2>
        </div>
        <div className="h2">{"</h2>"}</div>
      </div>
      <div className="my-info-para">
        <div className="p">{"<p>"}</div>
        <div className="my-info">
          <p>
            I create successful responsive websites that are fast, easy to use,
            and built with best practices. The main area of my expertise is
            front-end development, HTML, CSS, JS, building small and medium web
            apps, custom plugins, features, animations, and coding interactive
            layouts.
          </p>
          <p>
            Well-organized person, problem solver, independent employee with
            high attention to detail. Fan of outdoor activities, TV series and
            English literature.
          </p>
          <p>
            Interested in the entire frontend spectrum and working on ambitious
            projects with positive people.
          </p>
          <p>
            <Link to={"/contact"} style={{ color: "#0ffdd8" }}>
              Let's make something special.
            </Link>
          </p>
        </div>
        <div className="p">{"</p>"}</div>
      </div>
      <div className="body">{"</body>"}</div>
      <div className="html">{"</html>"}</div>

      <Animation />
    </div>
    // </div>
  );
};

export default About;
