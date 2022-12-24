// import logo from './logo.svg';
import "./style.css";
import Nav from "./Component/Nav";
import CrSpaceL from "./Component/CrSpaceL";
import FeedC from "./Component/FeedC";
import AnsAd from "./Component/AnsAd";
import AddQCreatePst from "./Component/AddQCreatePst";
import { useState, useRef, useEffect } from "react";
import { Hidden } from "@mui/material";

function App() {
  const [statem, setStatem] = useState("none");

  function handleOptions(resp) {
    setStatem(resp);
    console.log("hello world");
  }

  // useOutsideAlerter function is used to detect click outside the component and set display of component to none
  // for further information on this go to following link https://stackoverflow.com/questions/32553158/detect-click-outside-react-component

  function useOutsideAlerter(ref) {
    useEffect(() => {
      // Alert if clicked on outside of element
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setStatem("none");
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  return (
    <>
      <div className="container">
        <div
          className="anotherDiv"
          style={{
            display: `${statem}`,
            position: "fixed",
            top: "0px",
            right: "0px",
            width: "100%",
            height: "100%",
            backgroundColor: "#181818",
            opacity: 0.8,
            zIndex: "1000",
          }}
        ></div>
        <Nav />
        <div
          className="containerContent"
          // how to hide the vertical scrollbar
          // as we have hide the horizontal scrollbar when another window popup
          style={{
            overflowX: `${statem === "none" ? "visible" : "hidden"}`,
            // overflowY: `${statem === "none" ? "visible" : "hidden"}`,
          }}
        >
          <CrSpaceL />
          <FeedC />
          <AnsAd handleOptions={handleOptions} />
        </div>
      </div>

      {statem !== "none" ? (
        <AddQCreatePst useOutsideAlerter={useOutsideAlerter} />
      ) : null}
    </>
  );
}

export default App;

// <AddQCreatePst />
