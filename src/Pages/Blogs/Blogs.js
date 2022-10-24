import React from "react";

const Blogs = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-secondary mt-28 p-8 rounded-2xl mb-12">
        <h2 className="text-4xl">
          How will you improve the performance of a React Application?
        </h2>
        <p>
          There is too many ways to improve performance in a react application.
          Like we can optimize our images because images fle size is too big.
          Making the resolution lower and using less size images can help to
          optimize images. And we can more optimizing like memorizing or caching
          fetch data. We can use react-query for caching data. And we have to
          prevent re-render because re render decreases performance of our
          website. And one of the most important thing for performance that we
          can implement lazy-loading so that our application don't have too much
          load at a time.
        </p>
      </div>
      <div className="bg-secondary p-8 rounded-2xl mb-12">
        <h2 className="text-4xl">
          What are the different ways to manage a state in a React application?
        </h2>
        <p>
          There is too many options to manage states in react application. One
          of the ways is using local state. In local state, we can use useState
          hook. And this is the best and recommended way to manage state from
          performance. Another one is global state. This one is the state that
          can go into multiple components. Like a user is logged in. so we can
          access him in many pages or components like navbar, dashboard, user
          profile and many more. Another one is server state, when we fetch data
          this is server state. We have to wait for server responding the data.
          And URL state is that data contains on our UI. Like pathname, params,
          query. This is the URL state.
        </p>
      </div>
      <div className="bg-secondary p-8 rounded-2xl mb-12">
        <h2 className="text-4xl">How does prototypical inheritance work</h2>
        <p>
          Prototypical inheritance is a javascript feature. Prototypical
          inheritance is a javascript feature that we can add method and
          properties. By prototypical inheritance we can write methods. We can
          access properties of the object in another property of this object. By using prototypical inheritance we can share function or methods
        </p>
      </div>
    </div>
  );
};

export default Blogs;
