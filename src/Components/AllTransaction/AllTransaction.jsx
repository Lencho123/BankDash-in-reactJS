import React from 'react'
import './AllTransaction.css'
import { transactions } from "../../Data.js";


function AllTransaction() {
  return (
    <table>
        {transactions.map((row) =>
          row.description === "description" ? (
            <tr>
              <th>{row.icon + row.description}</th>
              <th>{row.transactionId}</th>
              <th>{row.type}</th>
              <th>{row.card}</th>
              <th>{row.date}</th>
              <th>{row.ammount}</th>
              <th>{row.receipt}</th>
            </tr>
          ) : (
            <tr>
              <td>{row.icon + row.description}</td>
              <td>{row.transactionId}</td>
              <td>{row.type}</td>
              <td>{row.card}</td>
              <td>{row.date}</td>
              <td>{row.ammount}</td>
              <td>
                <button className="button">Download</button>
              </td>
            </tr>
          )
        )}
      </table>
  )
}

export default AllTransaction
