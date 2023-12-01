import React from 'react'
import { useSelector } from 'react-redux'
import { FaMoneyBill } from "react-icons/fa";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { SiDependencycheck } from "react-icons/si";

export default function Statis() {
    const budget = useSelector((state)=>state.calculB.budget)
    const depenses = useSelector((state)=>state.calculB.depenses)
    const sum = depenses.reduce((som,d)=>som + d.montant,0)
  return (
    <div className="stats">
      <div className="bdg">
        <FaMoneyBill className="bdg1" /> <h2>BUDGET : {budget} DH </h2>
      </div>
      <div className="dpns">
        <SiDependencycheck className="dpns1" /> <h2>EXPENSES : {sum} DH</h2>
      </div>
      <div className="ecrt">
        <FaBalanceScaleLeft className="ecrt1" />{" "}
        <h2>GAP : {budget - sum} DH</h2>
      </div>
    </div>
  );
}
