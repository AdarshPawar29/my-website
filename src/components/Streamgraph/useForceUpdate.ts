import { useState } from "react";

export default function useForceUpdate() {
  console.log("updated");
  const [, setValue] = useState<number>(0);
  return () => setValue((value) => value + 1); // update state to force render
}
