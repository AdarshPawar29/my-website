import ParentSize from "@visx/responsive/lib/components/ParentSize";
import Example from "./Streamgraph/Example";
import useForceUpdate from "./Streamgraph/useForceUpdate";
import WorkTree from "./WorkCard/WorkTree";

type Props = {};

const Work = (props: Props) => {
  const forceUpdate = useForceUpdate();
  const handleBackground: any = () => {
    forceUpdate();
  };
  return (
    <div className="work">
      <div className="work-background">
        <ParentSize>
          {({ width, height }) => <Example width={width} height={height} />}
        </ParentSize>
      </div>
      {/* <div className="html">{"<html>"}</div>
      <div className="body">{"<body>"}</div>
      <div className="tree">{"<tree>"}</div> */}
      <div className="work-card">
        <WorkTree handleBackground={() => handleBackground()} />
      </div>
      {/* <div className="tree">{"</tree>"}</div>
      <div className="body">{"</body>"}</div>
      <div className="html">{"</html>"}</div> */}
    </div>
  );
};

export default Work;
//Commented the background animation right now but can be used later
