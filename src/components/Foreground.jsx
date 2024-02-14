import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {

  const ref = useRef(null);


  const data = [
    {
      desc: "Hello there, I have designed this card.",
      filesize: "1mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "Hello there, I have designed this card. The card looks great !!",
      filesize: "0.8mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Suggest me anything else.",
      filesize: "3mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Upload", tagColor: "green" },
    },
    {
      desc: "Hello there. What new features could be added in this, I guess varities is important.",
      filesize: "5mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },
    },
  ];

  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-6">
      {data.map((item,index)=>(
        <Card  data ={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
