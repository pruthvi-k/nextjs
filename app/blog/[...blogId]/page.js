import React from "react";

const About = ({ params }) => {
  console.log("params :>> ", params);
  const blogId = params.blogId;
  return (
    <div>
      Dynamic Routes:{" "}
      {blogId &&
        blogId.length > 0 &&
        blogId.map((item, i) => <li key={i}>{item}</li>)}
    </div>
  );
};

export default About;
