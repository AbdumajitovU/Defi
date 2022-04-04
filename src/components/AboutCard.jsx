import React from "react";

function AboutCard(props) {
  return (
    <div>
      <div className="flex h-full flex-col border text-left rounded-2xl py-12 px-8 hover:scale-105">
        <div>
          <div className="bg-[#00d8ff] inline-flex p-2 rounded-full">
            {props.icon}
          </div>
          <h3 className="text-xl font-bold py-4">{props.title}</h3>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
