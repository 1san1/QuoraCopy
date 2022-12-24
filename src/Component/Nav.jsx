import React from "react";
import QuoraHlogo from "./Icon/QuoraHlogo.png";
import san from "./image/san.JPG";
import HomeIcon from "@mui/icons-material/Home";
import FilterListIcon from "@mui/icons-material/FilterList";
import CreateIcon from "@mui/icons-material/Create";
import GroupsIcon from "@mui/icons-material/Groups";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LanguageIcon from "@mui/icons-material/Language";
// import { fontSize } from "@mui/system";

// const createSpaceUser = [
//   {
//     userName: "hari",
//     // spaceChoosen: [
//     //   {
//     //     spaceName: "Healthy diet",
//     //     image:
//     //       "https://images.unsplash.com/photo-1542814880-7e62cf14b7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
//     //   },
//     //   {
//     //     spaceName: "Cars",
//     //     image:
//     //       "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=983&q=80",
//     //   },
//     //   {
//     //     spaceName: "Coding",
//     //     image:
//     //       "https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     //   },
//     // ],
//     notifications:
//   },
// ];

export default function Nav() {
  return (
    <div className="navigation">
      <div className="logoLeftNavI">
        <img src={QuoraHlogo} className="pntr" alt="" />
      </div>
      <div className="centerNavI">
        <div className="homeI pntr borderingIconC iconInactiveColor">
          <HomeIcon style={{ width: "30px", height: "30px" }} />
        </div>
        <div className="followingI pntr borderingIconC iconInactiveColor">
          <FilterListIcon />
        </div>
        <div className="answerI pntr borderingIconC iconInactiveColor">
          <CreateIcon />
          <div className="numberNewA">
            <p>1</p>
          </div>
        </div>
        <div className="spacesI pntr borderingIconC iconInactiveColor">
          <GroupsIcon />
        </div>
        <div className="notificationI pntr borderingIconC iconInactiveColor">
          <NotificationsIcon />
          <div className="numberNewN">
            <p>2</p>
          </div>
        </div>
        <div className="searchInput">
          <SearchIcon className="searchI" />
          <input type="text" placeholder="Search Quora" />
        </div>
      </div>
      <div className="rightNavI">
        <div className="profileImgI pntr borderingIconR">
          <img className="profileImage" src={san} alt="" />
        </div>
        <div className="languageI pntr borderingIconR">
          <LanguageIcon className="langI" />
        </div>
        <div className="addQuestion pntr">
          <div className="addQuestionD">
            <p>Add Question</p>
          </div>
          <div className="keyArrow">
            <KeyboardArrowDownIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
