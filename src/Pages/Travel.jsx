import React from "react";
// import "../Pages/HomePage/Homestyle.css"
import "../Pages/HomePage/Design.css"
import LatestArticles from "./HomePage/LatestArticles/LatestArticles";
import Data from "../Data";
import SideArticles from "./HomePage/LatestArticles/SideArticles";
import TopPost from "./HomePage/LatestArticles/TopPost";

const Travel = () => {
  console.log(Data);
  return (
    <div>
      <div className="container2">
        <div className="latestTitleInPage">
          <div className="latestText">Travel</div>
          <div className="topPostsText">Top Posts</div>
        </div>
        <div className="boxes">
          <div className="splitBox">
            <div className="leftSplitBox">
              {Data.filter((curElem) => {
                return curElem.category === "Travel";
              }).map((elem) => {
                return (
                  <LatestArticles
                    key={elem.id}
                    img={elem.imgUrl}
                    titleText={elem.title}
                    des={(elem.description).slice(0,50)}
                  />
                );
              })}
            </div>
            <div className="rightSplitBox">
                <div className="staticBox">
                  <TopPost />
                </div>
                {Data.filter((curElem) => {
                  return curElem.category === "Travel";
                }).map((elem) => {
                  return (
                    <SideArticles
                      key={elem.id}
                      img={elem.imgUrl}
                      titleText={elem.title}
                    />
                  );
                })}
              </div>
            <hr className="line2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travel;
