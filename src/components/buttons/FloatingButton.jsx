import React from "react";
import DownloadButton from "./DownloadButton";

export default function FloatingButton(props) {
  return (
    // <div className="cursor-pointer fixed bottom-3 right-14 text-antiflash border rounded-full p-2">
    //   <DownloadButton file={props.file} filename={props.filename} />
    // </div>
    <div className="myclass cursor-pointer text-antiflash border rounded-full p-2">
      <DownloadButton file={props.file} filename={props.filename} />
    </div>
  );
}
