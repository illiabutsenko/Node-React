import { useEffect, useRef } from "react";

const WithRenderTime = (WrappedComponent) => {
  return function withRenderTime(props) {
    const renderTimeStart = useRef(performance.now());

    useEffect(() => {
      const renderTimeEnd = performance.now();
      const renderTime = renderTimeEnd - renderTimeStart.current;
      console.log(`${WrappedComponent.name} rendered in ${renderTime}ms`);
    });
    return <WrappedComponent {...props} />;
  };
};

export default WithRenderTime;
