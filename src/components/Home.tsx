import { Button } from "@mui/material";
import { useRef } from "react";
import { Link } from "react-router-dom";
type AddFunction = (msg: string) => void;
type Props = {};
const Introduction = (props: Props) => {
  return (
    <div className="home">
      <div className="html">{"<html>"}</div>
      <div className="body">{"<body>"}</div>
      <div>
        <div className="h2">{"<h2>"}</div>
        <div className="my">
          <h2>Hi,</h2>
          <h2>I'm Adarsh,</h2>
        </div>
        <div className="h2">{"</h2>"}</div>
      </div>
      <div className="my-info-para">
        <div className="p">{"<p>"}</div>
        <div className="my-info">
          <p>Front End Developer / React Expert</p>
          <p>
            My areas of interest include • Web Development • Data Science •
            Solving Problems.
          </p>
        </div>
        <div className="p">{"</p>"}</div>
        <div className="link">{"<Link>"}</div>
        <Link
          to={"/about"}
          style={{ color: "#0ffdd8", paddingLeft: "50px", fontSize: "18px" }}
        >
          more about me!
        </Link>
        <div className="link">{"</Link>"}</div>
      </div>
      <div className="body">{"</body>"}</div>
      <div className="html">{"</html>"}</div>
    </div>
  );
};

export default Introduction;
