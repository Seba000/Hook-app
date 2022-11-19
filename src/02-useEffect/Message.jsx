import { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    //mount
    const onMouseMove = ({ x, y }) => {
      const coords = { x, y };
      console.log(coords);
    };
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      //unmount
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h1>Usuario existente</h1>
    </>
  );
};
