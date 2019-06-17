import React from "react";
import Rainbow from '../hoc_components/Rainbow';

const About = props => {
  setTimeout(() => {
    props.history.push("/App");
  }, 2000);

  return (
    <div className="container">
      <h4 className="center">This is the about page</h4>
      <p>
        It's currently not finished therefore I'll let you be here for 2 secs
        only.
      </p>
    </div>
  );
};

export default Rainbow(About);
