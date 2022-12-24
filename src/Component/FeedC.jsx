import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CloseIcon from "@mui/icons-material/Close";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ReplyIcon from "@mui/icons-material/Reply";
import CommentIcon from "@mui/icons-material/Comment";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { useState } from "react";
import ReadMore from "./utilities/ReadMore";
// import { useEffect } from "react";

const ListOfData = [
  {
    id: 0,
    profileName: "Rita Morgan",
    profileImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    followStatus: false,
    profileCredentials: "Loves Quora",
    postDate: "Nov 2",
    postQuestion:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ab?",
    postAnswer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam provident doloribus ex a excepturi sint earum neque saepe nulla dolore similique dolor, ratione harum quisquam quia delectus sequi natus ad quod magni placeat ea! Laboriosam aliquid odit ea minus ipsum perferendis dolore quidem alias! Illum, labore sunt ducimus fugit adipisci minus accusamus aliquid tempora cupiditate praesentium ipsum aspernatur. Velit, autem.",
    likes: 5,
    shares: 22,
    comments: [],
  },
  {
    id: 1,
    profileName: "Danield Quoran",
    profileImage:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    followStatus: false,
    profileCredentials: "Msc,Csit from university of Kathmandu",
    postDate: "Nov 6",
    postQuestion:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ab?",
    postAnswer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam provident doloribus ex a excepturi sint earum neque saepe nulla dolore similique dolor, ratione harum quisquam quia delectus sequi natus ad quod magni placeat ea! Laboriosam aliquid odit ea minus ipsum perferendis dolore quidem alias! Illum, labore sunt ducimus fugit adipisci minus accusamus aliquid tempora cupiditate praesentium ipsum aspernatur. Velit, autem.",
    likes: 100,
    shares: 90,
    comments: [],
  },
  {
    id: 2,
    profileName: "Valkyrie Val",
    profileImage:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    followStatus: false,
    profileCredentials: "Loves Quora",
    postDate: "Nov 2",
    postQuestion:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ab?",
    postAnswer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam provident doloribus ex a excepturi sint earum neque saepe nulla dolore similique dolor, ratione harum quisquam quia delectus sequi natus ad quod magni placeat ea! Laboriosam aliquid odit ea minus ipsum perferendis dolore quidem alias! Illum, labore sunt ducimus fugit adipisci minus accusamus aliquid tempora cupiditate praesentium ipsum aspernatur. Velit, autem.",
    likes: 5,
    shares: 22,
    comments: [],
  },
  {
    id: 3,
    profileName: "Yolanda Putin",
    profileImage:
      "https://images.unsplash.com/photo-1531908012224-8f8865e79a96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    followStatus: false,
    profileCredentials: "Loves Quora",
    postDate: "Nov 2",
    postQuestion:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ab?",
    postAnswer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam provident doloribus ex a excepturi sint earum neque saepe nulla dolore similique dolor, ratione harum quisquam quia delectus sequi natus ad quod magni placeat ea! Laboriosam aliquid odit ea minus ipsum perferendis dolore quidem alias! Illum, labore sunt ducimus fugit adipisci minus accusamus aliquid tempora cupiditate praesentium ipsum aspernatur. Velit, autem.",
    likes: 5,
    shares: 22,
    comments: [],
  },
  {
    id: 4,
    profileName: "Kit Cat",
    profileImage:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=423&q=80",
    followStatus: false,
    profileCredentials: "Loves Quora",
    postDate: "Nov 2",
    postQuestion:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ab?",
    postAnswer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam provident doloribus ex a excepturi sint earum neque saepe nulla dolore similique dolor, ratione harum quisquam quia delectus sequi natus ad quod magni placeat ea! Laboriosam aliquid odit ea minus ipsum perferendis dolore quidem alias! Illum, labore sunt ducimus fugit adipisci minus accusamus aliquid tempora cupiditate praesentium ipsum aspernatur. Velit, autem.",
    likes: 5,
    shares: 22,
    comments: [],
  },
  {
    id: 5,
    profileName: "Daniel Shepherd",
    profileImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    followStatus: false,
    profileCredentials: "Loves Quora",
    postDate: "Nov 2",
    postQuestion:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ab?",
    postAnswer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam provident doloribus ex a excepturi sint earum neque saepe nulla dolore similique dolor, ratione harum quisquam quia delectus sequi natus ad quod magni placeat ea! Laboriosam aliquid odit ea minus ipsum perferendis dolore quidem alias! Illum, labore sunt ducimus fugit adipisci minus accusamus aliquid tempora cupiditate praesentium ipsum aspernatur. Velit, autem.",
    likes: 5,
    shares: 22,
    comments: [],
  },
];

export default function FeedC() {
  // const [styling, setStyling] = useState({});
  const [components, setComponents] = useState(null);
  // const [readMore, setReadMore] = useState(false);
  const handlePopUp = (e, key) => {
    e.preventDefault();
    setComponents(<PopUpProfile listId={key} />);
    // if any problem for creating another property "listId" instead of using the key see the following link for further clearity https://stackoverflow.com/questions/33682774/how-to-access-the-key-property-from-a-reactjs-component
    // furthermore key is hidden
  };

  return (
    <div className="feedCM">
      <div className="feedCMI">
        {ListOfData.map((item, key) => (
          <div key={key} className="firstOne">
            <div className="postUpprBr">
              <div
                key={key}
                className="quoranProfImg"
                onMouseOver={(e) => handlePopUp(e, key)}
                onMouseOut={() => {
                  setComponents(null);
                }}
                style={
                  components !== null && components.props.listId === key
                    ? { position: "relative" }
                    : { position: "static" }
                }
              >
                <img src={item.profileImage} alt="" />
                {components !== null && components.props.listId === key
                  ? components
                  : null}
                {/* {components !== null && components.props.listId === key
                  ? { position: "relative" }
                  : { position: "static" }} */}
              </div>
              <div className="quoranInfo">
                <div className="quoranInfoTop">
                  <div className="quoranInfoTopLeft">
                    <div className="name pntr">
                      <h4>{item.profileName}</h4>
                      {/* {components} */}
                    </div>
                    <div className="pointInBetween"></div>
                    <p className="followTag pntr">Follow</p>
                  </div>
                  <div className="quoranInfoTopRight">
                    <div className="optionIcon pntr">
                      <MoreHorizIcon />
                    </div>
                    <div className="closeIcon pntr">
                      <CloseIcon />
                    </div>
                  </div>
                </div>
                <div className="quoranInfoBottom">
                  <div className="personDetails">
                    <p>
                      <span className="credentials">
                        {item.profileCredentials}
                      </span>
                    </p>
                    <div className="pointInBetween"></div>
                    <p>
                      <span className="postDate pntr">{item.postDate}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="postMiddleBr">
              <h4 className="postQuestion pntr">{item.postQuestion}</h4>
              <ReadMore>{item.postAnswer}</ReadMore>
              {/* {readMore ? (
                <p>{item.postAnswer}</p>
              ) : (
                <p>
                  {item.postAnswer.substring(0, 150)}
                  <span
                    key={key}
                    onClick={() => {
                      setReadMore(true);
                    }}
                    className="readMore"
                    style={{
                      color: "blue",
                      cursor: "pointer",
                      marginLeft: "10px",
                    }}
                  >
                    Read More...
                  </span>
                </p>
              )} */}
            </div>
            <div className="postLowerBr">
              <div className="postLowerBrUpDownVote">
                <div className="thumbsUpIcon pntr">
                  <ThumbUpIcon />
                  <p>{item.likes}</p>
                </div>
                <div className="thumbsDownIcon pntr">
                  <ThumbDownIcon />
                </div>
              </div>
              <div className="postLowerBrShareComment">
                <div className="shareIcon pntr">
                  <ReplyIcon />
                  <p>{item.shares}</p>
                </div>
                <div className="commentIcon pntr">
                  <CommentIcon className="commentI" />
                  <p>{item.comments.length}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PopUpProfile() {
  return (
    <div className="popUpProfileContainer">
      <div className="topOfPopUpProfile">
        <div className="topOfPopUpProfileImage">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            alt=""
          />
        </div>
        <div className="topOfPopUpProfileName">
          <p>Rita Morgan</p>
        </div>
      </div>
      <div className="centerOfPopUpProfile">
        <div className="centerOfPopUpProfileCredentials defaultFlex">
          <div className="workIcon">
            <BusinessCenterOutlinedIcon />
          </div>
          <div className="nameOfCompany">Universalis</div>
        </div>
        <div className="centerOfPopUpProfileAdacdemicQualification defaultFlex">
          <div className="schoolIcon">
            <SchoolOutlinedIcon />
          </div>
          <div className="institutionName">
            Lord Mcbre University of Applied Science
          </div>
        </div>
        <div className="centerOfPopUpProfileLivesIn defaultFlex">
          <div className="locationIcon">
            <LocationOnOutlinedIcon />
          </div>
          <div className="locationName">SanFrancisco</div>
        </div>
        <div className="centerOfPopUpProfileViews defaultFlex">
          <div className="viewsIcon">
            <VisibilityOutlinedIcon />
          </div>
          <div className="contentViews">
            <p>1.3 million views</p>
          </div>
        </div>
      </div>
      <div className="popUpProfileBottomBorder"></div>
      <div className="bottomOfPopUpProfile">
        <div className="bottomOfPopUpProfileFollowing backgroundBorder pntr">
          <p>Following</p>
        </div>
        <div className="bottomOfPopUpProfileNotifyMe backgroundBorder pntr">
          <p>Notify me</p>
        </div>
        <div className="bottomOfPopUpProfileAskQuestion backgroundBorder pntr">
          <p>Ask Question</p>
        </div>
        <div className="bottomOfPopUpProfileMore backgroundBorder pntr">
          <MoreHorizOutlinedIcon />
        </div>
      </div>
    </div>
  );
}
