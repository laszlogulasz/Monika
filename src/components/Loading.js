import React from "react";

const Loading = props => {
  if (props.error) {
    return (
      <span role="img" aria-label="Speak-No-Evil Monkey">
        🙊
      </span>
    );
  } else if (props.pastDelay) {
    return <h3>Loading...</h3>;
  } else {
    return null;
  }
};
export default Loading;
