import React from "react";
import san from "./image/san.JPG";

export default function AnsAd({ handleOptions }) {
  return (
    <div className="ansAdM">
      <div className="ansAdMInner">
        <div className="ans">
          <div className="topOfAns">
            <div className="profileImgAns">
              <img className="profilePicAns" src={san} alt="" />
            </div>
            <p className="whatAsk pntr">What do you want to ask or share?</p>
          </div>
          <div className="bottomOfAns">
            <div className="ask pntr" onClick={() => handleOptions("")}>
              Ask
            </div>
            <div className="borderLine">|</div>
            <div className="answer pntr">Answer</div>
            <div className="borderLine">|</div>
            <div className="post pntr" onClick={() => handleOptions("")}>
              Post
            </div>
          </div>
        </div>
        <div className="advBlock">
          <div className="advImg"></div>
          <div className="borderAdvBlock"></div>
          <div className="advDesc">Advertisement</div>
        </div>
        <div className="websiteInfo"></div>
      </div>
    </div>
  );
}
