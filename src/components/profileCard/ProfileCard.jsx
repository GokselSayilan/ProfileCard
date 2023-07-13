import React from "react";
import "./profileCard.css";

function ProfileCard() {
  return (
    <div className="profileCard">
        <img src="assets/images/bg-pattern-bottom.svg" className="bgCircleRight" />
        <img src="assets/images/bg-pattern-top.svg" className="bgCircleLeft" />
      <div className="profileCardWrapper">
        <div className="profileCardBox ">
          <div className="profileCardBoxTop">
            <img
              src="assets/images/bg-pattern-card.svg"
              alt=""
              className="profileCardBoxTopBg"
            />
            <img
              src="assets/images/image-victor.jpg"
              alt=""
              className="profileCardBoxTopProfileImg"
            />
          </div>
          <div className="profileCardBoxMiddle">
            <h3 className="profileName">
              Victor Crest<span className="profileAge">26</span>
            </h3>
            <span className="profileCountry">London</span>
          </div>
          <hr className="profileCardSep"/>
          <div className="profileCardBoxBottom">
            <div className="profileCardBoxBottomInfo">
              <h3 className="profileCardBoxBottomInfoTitle">80K</h3>
              <span className="profileCardBoxBottomInfoDesc">Followers</span>
            </div>
            <div className="profileCardBoxBottomInfo">
              <h3 className="profileCardBoxBottomInfoTitle">803K</h3>
              <span className="profileCardBoxBottomInfoDesc">Likes</span>
            </div>
            <div className="profileCardBoxBottomInfo">
              <h3 className="profileCardBoxBottomInfoTitle">1.4K</h3>
              <span className="profileCardBoxBottomInfoDesc">Photos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
