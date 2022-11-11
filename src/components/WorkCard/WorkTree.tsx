import React, { useRef, useState, useEffect } from "react";
import { useSpring, a } from "@react-spring/web";
import useMeasure from "react-use-measure";
import { Container, Title, Frame, Content, toggle } from "./styles";
import * as Icons from "./icons";
import useForceUpdate from "../Streamgraph/useForceUpdate";

function usePrevious<T>(value: T) {
  const ref = useRef<T>();
  useEffect(() => void (ref.current = value), [value]);
  return ref.current;
}

const Tree = React.memo<
  React.HTMLAttributes<HTMLDivElement> & {
    defaultOpen?: boolean;
    name: string | JSX.Element;
  }
>(({ children, name, style, defaultOpen = false }) => {
  const [isOpen, setOpen] = useState(defaultOpen);
  const previous = usePrevious(isOpen);
  const [ref, { height: viewHeight }] = useMeasure();
  const { height, opacity, y } = useSpring({
    from: { height: 0, opacity: 0, y: 0 },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      y: isOpen ? 0 : 20,
    },
  });
  // @ts-ignore
  const Icon: any =
    Icons[`${children ? (isOpen ? "Minus" : "Plus") : "Close"}SquareO`];

  return (
    <Frame>
      <Icon
        style={{ ...toggle, opacity: children ? 1 : 0.3 }}
        onClick={() => {
          setOpen(!isOpen);
        }}
      />
      <Title style={style}>{name}</Title>
      <Content
        style={{
          opacity,
          height: isOpen && previous === isOpen ? "auto" : height,
        }}
      >
        <a.div ref={ref} style={{ y }} children={children} />
      </Content>
    </Frame>
  );
});

const showName = (name: string, date: string) => {
  return (
    <span>
      {name} <span style={{ color: "#0ffdd8" }}>{date}</span>
    </span>
  );
};

export default function WorkTree(props: any) {
  const handlePress = () => props.handleBackground();

  return (
    <Container>
      <g onClick={handlePress} onTouchStart={handlePress}>
        <Tree name="⏳ My Timeline">
          <Tree name="👨🏻‍💻 Job">
            <Tree name={showName(" Bristlecone", "(3+ yrs)")}>
              <Tree
                name={showName("Software Engineer", "(Jul 2022 - Present)")}
              />
              <Tree
                name={showName("Consultant", "(Aug 2021 - Jul 2022 · 1 yr)")}
              />
              <Tree
                name={showName(
                  "Associate Consultant",
                  "(Jul 2020 - Aug 2021 · 1 yr 2 mos)"
                )}
              />
              <Tree
                name={showName("Internship ", "(Nov 2019 - Jul 2020 · 9 mos)")}
              />
            </Tree>
          </Tree>
          <Tree name="👨🏻‍🎓 Collage">
            <Tree name=" Lovely Professional University">
              <Tree
                name={showName("Computer Science Engineering", "(2016 - 2022)")}
              />
            </Tree>
          </Tree>

          <Tree name={<span>🎒 School</span>}>
            <Tree name="🦍💨 School was boring"></Tree>
          </Tree>
        </Tree>
      </g>
    </Container>
  );
}
{
  /* <Tree name="custom content">
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: 200,
                    padding: 10,
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      background: "black",
                      borderRadius: 5,
                    }}
                  />
                </div>
              </Tree> */
}
