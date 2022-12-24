import React, { useState, createContext, useRef } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import AddQuestionPage, {
  BottomBarAddQuestion,
} from "./EditorPage/AddQuestionPage";
import CreatePostPage, {
  BottomBarCreatePost,
} from "./EditorPage/CreatePostPage";

// here what we clicked first in order to access this page based on that
// component will preset to "add question" or "create post"

export const FontType = createContext("paragraph");

// export default function AddQCreatePst() {
export default function AddQCreatePst({ useOutsideAlerter }) {
  const [state, setState] = useState("addQuestion");
  const [font, setFont] = useState("paragraph");

  // the code beow is used to access the positon and call useOUtsideAlerter
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div className="addQCreatePost" ref={wrapperRef}>
      {/* <div className="addQCreatePost"> */}
      <div className="addQCreatePostInner">
        <div className="AQCPTopBar">
          <div className="AQCPTopBarCloseIcon pntr">
            <div className="AQCPTopBarCloseIconInner">
              <CloseRoundedIcon />
            </div>
          </div>
          <div
            className="AQCPTopBarAddQuestion pntr"
            onClick={() => setState("addQuestion")}
          >
            <div className="AQCPTopBarAddQuestionInner">Add Question</div>
            <div
              className="AQCPTopBarAddQuestionBorder"
              style={{
                borderTopColor: `${
                  state === "addQuestion" ? "#4490fc" : "transparent"
                }`,
                backgroundColor: `${
                  state === "addQuestion" ? "#4490fc" : "transparent"
                }`,
              }}
            ></div>
          </div>
          <div
            className="AQCPTopBarCreatePost pntr"
            onClick={() => setState("createPost")}
          >
            <div className="AQCPTopBarCreatePostInner">Create Post</div>
            <div
              className="AQCPTopBarCreatePostBorder"
              style={{
                borderTopColor: `${
                  state !== "addQuestion" ? "#4490fc" : "transparent"
                }`,
                backgroundColor: `${
                  state !== "addQuestion" ? "#4490fc" : "transparent"
                }`,
              }}
            ></div>
          </div>
        </div>
        <div className="AQCPToggleComponents">
          {state === "addQuestion" ? (
            <AddQuestionPage />
          ) : (
            <CreatePostPage font={font} />
          )}
        </div>
        <div className="AQCPBottomBar">
          <FontType.Provider value={setFont}>
            <BottomBar state={state} />
          </FontType.Provider>
        </div>
      </div>
    </div>
  );
}

function BottomBar({ state }) {
  return (
    <div className="AQCPBottomBarMain">
      {state === "addQuestion" ? (
        <BottomBarAddQuestion />
      ) : (
        <BottomBarCreatePost />
      )}
    </div>
  );
}
