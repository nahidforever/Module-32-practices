import React, { useState } from "react";

const Show_Hide = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleText = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      {isVisible && <p>Hello, React Learner!</p>}
      <button onClick={toggleText}>
        {isVisible ? "Hide Text" : "Show Text"}
      </button>
    </div>
  );
};

export default Show_Hide;
