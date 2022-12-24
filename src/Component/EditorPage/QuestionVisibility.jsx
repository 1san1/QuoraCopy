import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

export default function QuestionVisibility({
  setQVisibilityStatus,
  qVisibilityStatus,
}) {
  return (
    <div className="QuestionVisibilityDropDownMenu">
      <div className="QuestionVisibilityTriangle"></div>
      <div className="QuestionVisibilityList">
        <ul>
          <li
            className="visibilityList"
            onClick={() => setQVisibilityStatus("Public")}
          >
            <div className="visibilityListContent">
              <h4>Public</h4>
              <p>
                Others will see your identity aongside this question on your
                profile and in their feeds.
              </p>
            </div>
            {qVisibilityStatus === "Public" ? (
              <span>
                <CheckRoundedIcon
                  style={{ color: "#4490fc" }}
                  className="checkRoundedIcon"
                />
              </span>
            ) : null}
          </li>
          <li
            className="visibilityList"
            onClick={() => setQVisibilityStatus("Limited")}
          >
            <div className="visibilityListContent">
              <h4>Limited</h4>
              <p>
                Your identity will be shown but this question will not appear in
                your followers' feeds or your profile.
              </p>
            </div>

            {qVisibilityStatus === "Limited" ? (
              <span>
                <CheckRoundedIcon
                  style={{ color: "#4490fc" }}
                  className="checkRoundedIcon"
                />
              </span>
            ) : null}
          </li>
        </ul>
      </div>
    </div>
  );
}
