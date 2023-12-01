import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addD } from "../redux/Slice";
import uuid from "react-uuid";

export default function AjoutD() {
  const dispatch = useDispatch();
  const [tit, setTit] = useState("");
  const [mont, setMont] = useState();
  return (
    <div className="ajout">
      <div>
        <input
          type="text"
          placeholder="Title of the expense"
          onChange={(e) => setTit(e.target.value)}
          value={tit}
        />
      </div>
      <div><input type="text" placeholder="Amount of the expense" onChange={(e)=>setMont(Number(e.target.value))}  /></div>
      <button onClick={()=>dispatch(addD({id:uuid(),titre:tit,montant:mont}))}>Add Expense</button>
    </div>
  );
}
