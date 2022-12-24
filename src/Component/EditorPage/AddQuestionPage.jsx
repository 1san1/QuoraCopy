import { useState } from "react";
import San from "../image/san.JPG";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import QuestionVisibility from "./QuestionVisibility";

export default function AddQuestionPage() {
  const [counter, setCounter] = useState("none");
  const [qVisibilityStatus, setQVisibilityStatus] = useState("Public");
  const [opacityy, setOpacityy] = useState("1");

  return (
    <div className="AQCPaddQuestion">
      <div className="AQPTopBar">
        <div className="AQPTopBarInner">
          <h3>Tips on getting good answers quickly</h3>
          <ul>
            <li>Make sure your question has not been asked already</li>
            <li>Keep your question short and to the point</li>
            <li>Double-check grammar and spelling</li>
          </ul>
        </div>
      </div>
      <div className="AQPMiddleBar">
        <div className="AQPMiddleBarInner">
          <div className="AQPMiddleBarImage">
            <img src={San} alt="" />
          </div>
          <PlayArrowIcon
            className="playArrowIcon"
            style={{ width: "18px", height: "18px" }}
          />
          <div
            className="AQPMBQuesVisibility"
            onClick={() =>
              counter === "none" ? setCounter("") : setCounter("none")
            }
            onMouseDown={() => setOpacityy("0.8")}
            onMouseUp={() => setOpacityy("1")}
          >
            <div
              className="AQPMBQuesVisibilityInner"
              style={{ opacity: `${opacityy}` }}
            >
              {qVisibilityStatus === "Public" ? (
                <PeopleAltOutlinedIcon />
              ) : (
                <PersonOutlineOutlinedIcon />
              )}
              <span>{qVisibilityStatus}</span>
              <div className="QuestionVisibilityInner">
                <ExpandMoreRoundedIcon />
              </div>
            </div>
            <div
              className="QuestionVisibilityInnerInner"
              style={{ display: `${counter}` }}
            >
              <QuestionVisibility
                setQVisibilityStatus={setQVisibilityStatus}
                qVisibilityStatus={qVisibilityStatus}
              />
            </div>
          </div>
        </div>
        <div className="AQPMBQuestionInput">
          <input
            type="text"
            placeholder={`${'Start your question with "What", "How", "Why", etc.'}`}
          />
        </div>
      </div>
    </div>
  );
}

export function BottomBarAddQuestion() {
  return (
    <div className="AQCBBAQMain">
      <div className="BBAQCancel pntr">Cancel</div>
      <div className="BBAQAddQuestion pntr">Add Question</div>
    </div>
  );
}
