import React from "react";
import { useSelector } from "react-redux";

export default function List() {
  const depenses = useSelector((state) => state.calculB.depenses);
  return (
    <div className="list">
      <table >
        <thead>
          <tr>
            <th>
              <h4>Title</h4>
            </th>
            <th>
              <h4>Amount</h4>
            </th>
          </tr>
        </thead>
        <tbody>
          { depenses.map((el) => (
            <tr key={el.id}>
              <td>{el.titre}</td>
              <td>{el.montant} DH</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
