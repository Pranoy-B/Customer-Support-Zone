import React, { useState } from "react";
import { toast } from "react-toastify";

const ToggleCardButton = ({card, TaskCard, setTaskCard}) => {
  const [clicked, setClicked] = useState(true);
  const [disabled,setDisabled] = useState(false)
  const handleClick = () => {
    
    setClicked(!clicked);
    setDisabled(true)
    setTaskCard([...TaskCard, card])
    toast("Task in Progress")
   
  };
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`pt-2 pb-2 pr-5 pl-5 rounded-3xl text-black font-bold ${
        clicked ? "bg-green-300" : "bg-yellow-300"
      }`}
    >
      {clicked ? "Open" : "In Progress"}
    </button>
  );
};

export default ToggleCardButton;
