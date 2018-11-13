import React from "react";

const Loading = (props) => {
  if (props.error) {
    return <h3>🙊 </h3>;
  } else if (props.pastDelay) {
    return <h3>xx</h3>;
  } else {
    return null;
  }
}
export default Loading;
