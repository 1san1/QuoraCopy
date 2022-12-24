import { useState, createContext, useContext, createRef } from "react";
import San from "../image/san.JPG";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import QuestionVisibility from "./QuestionVisibility";
import sanitizeHtml from "sanitize-html";
import ContentEditable from "react-contenteditable";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatIndentIncreaseIcon from "@mui/icons-material/FormatIndentIncrease";
import FormatIndentDecreaseIcon from "@mui/icons-material/FormatIndentDecrease";
import TitleIcon from "@mui/icons-material/Title";
import RedoIcon from "@mui/icons-material/Redo";
import UndoIcon from "@mui/icons-material/Undo";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import { FontType } from "../AddQCreatePst";
import { useEffect } from "react";
import React from "react";
// const data = `
//   <h1>Create LIfe</h1> <br/>
//         <p>
//           <i>Life is awesome</i>
//           <br />
//           <b>Time and tides waits for no one</b>
//         </p>
//   `;

export default function CreatePostPage({ font }) {
  const [counter, setCounter] = useState("none");
  const [qVisibilityStatus, setQVisibilityStatus] = useState("Public");
  const [opacityy, setOpacityy] = useState("1");
  // const [html, setHtml] = useState("");
  // const [editable, setEditable] = useState(true);

  // let contentEditable = createRef();

  // const sanitizeConf = {
  //   allowedTags: ["b", "i", "em", "strong", "a", "p", "h1"],
  //   allowedAttributes: { a: ["href"] },
  // };

  // const sanitize = () => {
  //   // console.log("sanitizing");
  //   setHtml(sanitizeHtml(html, sanitizeConf));
  // };
  // console.log(html);
  // console.log(document.getElementsByClassName("createPostTextDiv")[0].children);
  return (
    <div className="createPostPage">
      <div className="CPPAnswerVisibility"></div>
      <div className="AQPMiddleBarInnerCPP">
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
      {/* here contentEditable will allow content inside div element to be edited */}
      <div
        className="createPostTextDiv"
        // contentEditable="true"
        // onInput={(e) => console.log(e.currentTarget.textContent)}
        // dangerouslySetInnerHTML={{ __html: data }}
      >
        {/* https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand#see_also */}

        <MyComponent />
      </div>
      <div className="createPostBottomImageTextEditor"></div>
    </div>
  );
}

// const textStyle = createContext("h1");

export function BottomBarCreatePost() {
  const setFont = useContext(FontType);
  const [file, setFile] = useState([]);

  const handleFileChange = (e) => {
    const file = URL.createObjectURL(e.target.files[0]);
    document.execCommand(
      "insertHTML",
      false,
      `<img src=${file} width="100px" height="100px"/>`
    );
  };
  // console.log(file);

  // https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications#example_using_object_urls_to_display_images

  // function handleFileChange(e) {
  //   if (!e.files.length) {
  //     console.log("No file");
  //   } else {
  //     setFile(URL.createObjectURL(e.target.files[0]));
  //   }
  // }

  // console.log(file);
  // let imagee = "<img src='" + file + "'>";
  // const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files) {
  //     setFile(e.target.files[0]);
  //   }
  // };

  // const handleUploadClick = () => {
  //   if (!file) {
  //     return;
  //   }

  //   // 👇 Uploading the file using the fetch API to the server
  //   fetch("https://httpbin.org/post", {
  //     method: "POST",
  //     body: file,
  //     // 👇 Set headers manually for single file upload
  //     headers: {
  //       "content-type": file.type,
  //       "content-length": `${file.size}`, // 👈 Headers need to be a string
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.error(err));
  // };

  return (
    <div className="AQCBBCPMain">
      <div className="AQCBBCPeditingButtons">
        <div
          className="headingButton pntr"
          // onClick={() =>
          //   setStyling(styling === "formatBlock" ? "" : "formatBlock")
          // }
          onMouseDown={(evt) => {
            evt.preventDefault();
            // Avoids loosing focus from the editable area
            document.execCommand("formatBlock", false, "h3"); // Send the command to the browser
          }}
        >
          <TitleIcon />
        </div>
        <div
          className="BoldButton pntr"
          // onClick={() => setStyling(styling !== "bold" ? "" : "bold")}
          onMouseDown={(evt) => {
            evt.preventDefault(); // Avoids loosing focus from the editable area
            document.execCommand("bold", false, ""); // Send the command to the browser
          }}
        >
          <FormatBoldIcon />
        </div>
        <div
          className="ItalicButton pntr"
          // onClick={() => setStyling(styling === "italic" ? "" : "italic")}
          onMouseDown={(evt) => {
            evt.preventDefault(); // Avoids loosing focus from the editable area
            document.execCommand("italic", false, ""); // Send the command to the browser
          }}
        >
          <FormatItalicIcon />
        </div>
        <div
          className="ListButton pntr"
          // onClick={() => setFont("orderedlist")}
          onMouseDown={(evt) => {
            evt.preventDefault(); // Avoids loosing focus from the editable area
            document.execCommand("insertorderedlist", false, ""); // Send the command to the browser
          }}
        >
          <FormatListNumberedIcon />
        </div>
        <div
          className="ListButton pntr"
          // onClick={() => setFont("unorderedlist")}
          onMouseDown={(evt) => {
            evt.preventDefault(); // Avoids loosing focus from the editable area
            document.execCommand("insertunorderedlist", false, ""); // Send the command to the browser
          }}
        >
          <FormatListBulletedIcon />
        </div>
        <div
          className="ListButton pntr"
          // onClick={() => setFont("unorderedlist")}
          onMouseDown={(evt) => {
            evt.preventDefault(); // Avoids loosing focus from the editable area
            document.execCommand("indent", false, ""); // Send the command to the browser
          }}
        >
          <FormatIndentIncreaseIcon />
        </div>
        <div
          className="ListButton pntr"
          // onClick={() => setFont("unorderedlist")}
          onMouseDown={(evt) => {
            evt.preventDefault(); // Avoids loosing focus from the editable area
            document.execCommand("outdent", false, ""); // Send the command to the browser
          }}
        >
          <FormatIndentDecreaseIcon />
        </div>
        <div
          className="ListButton pntr"
          // onClick={() => setFont("unorderedlist")}
          onMouseDown={(evt) => {
            evt.preventDefault(); // Avoids loosing focus from the editable area
            document.execCommand("redo", false, ""); // Send the command to the browser
          }}
        >
          <RedoIcon />
        </div>
        <div
          className="ListButton pntr"
          // onClick={() => setFont("unorderedlist")}
          onMouseDown={(evt) => {
            evt.preventDefault(); // Avoids loosing focus from the editable area
            document.execCommand("undo", false, ""); // Send the command to the browser
          }}
        >
          <UndoIcon />
        </div>

        <div
          className="imageUpload pntr"
          // onClick={handleFileChange}
          // onMouseDown={(evt) => {
          //   evt.preventDefault(); // Avoids loosing focus from the editable area
          //   {
          //     document.execCommand(
          //       "insertHTML",
          //       false,
          //       `<img src=${file} width="50px" height="50px"/>`
          //     );
          //   }
          // }}
        >
          <label htmlFor="file-input">
            <InsertPhotoIcon className="pntr" />
          </label>
          <input id="file-input" type="file" onChange={handleFileChange} />
        </div>
      </div>
      <div className="AQCBBCPPostButtons pntr">Post</div>
    </div>
  );
}

// I imported from https://codesandbox.io/s/simple-rich-text-editor-in-react-forked-43f1oc?file=/src/index.js:180-1818
class MyComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      html: ``,
      editable: true,
    };
  }
  handleChange = (evt) => {
    this.setState({ html: evt.target.value });
  };

  sanitizeConf = {
    allowedTags: ["b", "i", "em", "strong", "a", "p", "h1"],
    allowedAttributes: { a: ["href"] },
  };

  // sanitize = () => {
  //   this.setState({ html: sanitizeHtml(this.state.html, this.sanitizeConf) });
  // };

  toggleEditable = () => {
    this.setState({ editable: !this.state.editable });
  };

  render = () => {
    console.log(this.state.html);
    return (
      <div className="editableMain">
        <ContentEditable
          className="editable"
          tagName="pre"
          html={this.state.html} // innerHTML of the editable div
          disabled={!this.state.editable} // use true to disable edition
          onChange={this.handleChange} // handle innerHTML change
          // onBlur={this.sanitize} //this sanitize helps prevent website from cross site scripting
        />
      </div>
    );
  };
}
