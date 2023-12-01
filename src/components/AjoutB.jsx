import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addB } from "../redux/Slice";

export default function AjoutB() {
  const dispatch = useDispatch();

  const [budg, setBudg] = useState();
  const handleOnChaneB = (e) => {
    setBudg(Number(e.target.value));
  };
  return (
    <div className="ajout">
      <input type="text" onChange={handleOnChaneB} value={budg} placeholder="Enter The budget"/>
      <button onClick={() => dispatch(addB(budg))}>Add To Budget</button>
    </div>
  );
}
