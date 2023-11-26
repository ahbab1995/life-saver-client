import React from "react";
import Iframe from "react-iframe";

const Prosvideo = () => {
  return (
    <div>
      <h1 className="lg:text-5xl text-3xl my-16 text-center">
        Pros about Life-Saver
      </h1>
      <div className="justify-items-center grid gap-5 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 lg:p-8 md:px-8">
        <Iframe
          width="420"
          height="300"
          src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=xQ_IQS3VKjA"
        ></Iframe>
        <Iframe
          width="420"
          height="300"
          src="https://www.youtube.com/embed/watch?playlist=NLfdhNud7X0" 
        ></Iframe>
        <Iframe
          width="420"
          height="300"
          src="https://www.youtube.com/embed/watch?playlist=PY4ExLQyF4w"
        ></Iframe>
      </div>
    </div>
  );
};

export default Prosvideo;
