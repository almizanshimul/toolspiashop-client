import React from "react";

const MyPortfolio = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto">
        <div className="bg-secondary mb-3 mt-20 rounded-2xl p-10">
          <h2 className="text-5xl"><strong>Name:</strong> Al Mizan</h2>
          <h4 className="lg:text-2xl mb-3"><strong>Email:</strong> mshimul314@gmail.com</h4>
          <p>
            <strong>Educational Background:</strong> I am a student of Honours 1st year. My College
            Name is Nawabgnaj Govt. College. My
            department is Accounting.<br/>
            I am a professional web developer with more than two years of experience. I create web application using React JS, Node JS, Express JS, MongoDB, and Bootstrap or Tailwind.
          </p>
        </div>
        <div className="bg-secondary mt-5 p-10 rounded-2xl">
          <h3 className="text-3xl font-bold">
            My <span className="text-primary">Skills</span>
          </h3>
          <ol className="list-decimal pl-7 pt-7">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React Js</li>
            <li>Firebase Authentication</li>
            <li>Node JS.</li>
            <li>MongoDB</li>
          </ol>
          <h4 className="text-3xl my-5 font-bold">Projects</h4>
          <p>
          FurniCorner:{" "}
            <a className="underline" href="https://assignment-10-61513.web.app/">
            https://assignment-10-61513.web.app/
            </a>
          </p>
          <p>
          Traveler Guide:{" "}
            <a className="underline" href="https://independent-service-prov-ff540.web.app/">
              https://independent-service-prov-ff540.web.app/
            </a>
          </p>
          <p>
            Product Analysis:{" "}
            <a className="underline" href="https://transcendent-gaufre-331a75.netlify.app/">
            https://transcendent-gaufre-331a75.netlify.app/
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
