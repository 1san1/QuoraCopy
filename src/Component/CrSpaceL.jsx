import React from "react";

const createSpaceUser = [
  {
    userName: "hari",
    spaceChoosen: [
      {
        id: 0,
        spaceName: "Healthy diet",
        image:
          "https://images.unsplash.com/photo-1542814880-7e62cf14b7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
      },
      {
        id: 1,
        spaceName: "Cars",
        image:
          "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=983&q=80",
      },
      {
        id: 2,
        spaceName: "Coding",
        image:
          "https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      },
    ],
  },
];
export default function CrSpaceL() {
  const user = "hari";
  let createSpaceUserList = createSpaceUser.filter((i) => i.userName === user);
  console.log(createSpaceUserList);
  return (
    <div className="crSpaceLM">
      <div className="crSpaceLMI">
        <div className="createSp">
          <div className="another">
            <span className="createSpI">+</span>
            <p>Create Space</p>
          </div>
        </div>
        {createSpaceUserList[0].spaceChoosen.map((items) => (
          <div key={items.id} className="recommendSp">
            <img src={items.image} alt="" />
            <p>{items.spaceName}</p>
          </div>
        ))}{" "}
      </div>
    </div>
  );
}
