import React, { useRef, useEffect } from "react";

interface Props {
  onClick: () => void;
  children: any;
}

const OnClickAway = (props: Props) => {
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (e: any) => {
    // @ts-ignore: Object is possibly 'null'.
    if (ref.current.contains(e.target)) return;
    props.onClick();
  };

  return <div ref={ref}>{props.children}</div>;
};

export default OnClickAway;
