import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";
import ArrowCircleDownSharpIcon from "@mui/icons-material/ArrowCircleDownSharp";
import { useLocation } from "react-router-dom";
type Props = {};
const SideNav = (props: Props) => {
  const location = useLocation();
  const downloadFile = () => {
    window.location.href =
      "https://github.com/AdarshPawar29/my-cv/raw/main/Adarsh's%20Resume.pdf";
  };
  console.log(location.pathname);
  return (
    <div className="side-nav">
      <div className="side-nav-title"></div>
      <div className="side-nav-btn">
        <Link to={"/about"}>About</Link>
        <Link to={"/skill"}>My Skills</Link>
        <Link to={"/work"}>Work & Study</Link>
        <Link to={"/contact"}>Contacts</Link>
      </div>
      <div className="side-nav-social">
        <IconButton
          aria-label="github"
          size="medium"
          color="inherit"
          href="https://github.com/AdarshPawar29"
          target={"_blank"}
        >
          <GitHubIcon fontSize="inherit" />
        </IconButton>

        <IconButton
          aria-label="linked-in"
          size="medium"
          color="inherit"
          href="https://www.linkedin.com/in/adarshpawar28/"
          target={"_blank"}
        >
          <LinkedInIcon fontSize="inherit" />
        </IconButton>

        <IconButton
          aria-label="resume"
          size="medium"
          color="inherit"
          onClick={downloadFile}
        >
          <ArrowCircleDownSharpIcon fontSize="inherit" />
        </IconButton>
      </div>
    </div>
  );
};

export default SideNav;
