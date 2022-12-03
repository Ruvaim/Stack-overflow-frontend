import React from "react";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import TagsList from "./TagsList";
import "./Tags.css";
import "../../App.css";
// import RightSidebar from "../../Components/RightSidebar/RightSidebar";

const Tags = () => {
  const tagsList = [
    {
      id: 1,
      tagName: "javascript",
      tagDesc:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto temporibus esse inventore ea provident ex consectetur laborum quo ab deserunt nesciunt perspiciatis ",
    },
    {
      id: 2,
      tagName: "python",
      tagDesc:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto temporibus esse inventore ea provident ex consectetur laborum quo ab deserunt nesciunt perspiciatis laudantium",
    },
    {
      id: 3,
      tagName: "c#",
      tagDesc:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto temporibus esse inventore ea provident ex consectetur laborum quo ab deserunt nesciunt perspiciatis laudantium mollitia quod, odit porro officiis",
    },
    {
      id: 4,
      tagName: "java",
      tagDesc:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto temporibus esse inventore ea provident ex consectetur laborum quo ab perspiciatis ",
    },
    {
      id: 5,
      tagName: "php",
      tagDesc:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto temporibus esse inventore ea provident ex consectetur laborum quo ab deserunt nesciunt perspiciatis laudantium mollitia quod, odit porro officiis magni quaerat",
    },
    {
      id: 6,
      tagName: "html",
      tagDesc:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto temporibus esse inventore ea provident ex consectetur laborum quo ab deserunt nesciunt perspiciatis ",
    },
    {
      id: 7,
      tagName: "android",
      tagDesc:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto temporibus esse inventore ea provident ex consectetur laborum quo ab deserunt nesciunt perspiciatis laudantium mollitia ",
    },
    {
      id: 8,
      tagName: "css",
      tagDesc:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto temporibus esse inventore ea provident ex consectetur laborum quo ab deserunt nesciunt perspiciatis laudantium mollitia quod",
    },
    {
      id: 9,
      tagName: "Reactjs",
      tagDesc:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto temporibus esse inventore ea provident ex consectetur laborum quo ab deserunt nesciunt perspiciatis laudantium mollitia quod, odit porro officiis magni quaerat animi ",
    },
    {
      id: 10,
      tagName: "node.js",
      tagDesc:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto temporibus esse inventore ea provident ex consectetur laborum quo ab deserunt nesciunt perspiciatis laudantium mollitia quod, odit porro officiis magni",
    },
  ];

  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        <h1 className="tags-h1">Tags</h1>
        <p className="tags-p">
          A tag is a keyword or label that categorizes your question with other,
          similar questions.
        </p>
        <p className="tags-p">
          Using the right tags makes it easier for other to find and answer your
          question.
        </p>
        <div className="tags-list-container">
          {tagsList.map((tag) => (
            <TagsList tag={tag} key={tagsList.id} />
          ))}
        </div>
      </div>
      {/* <RightSidebar /> */}
    </div>
  );
};

export default Tags;
