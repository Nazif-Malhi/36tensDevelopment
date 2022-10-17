import React from "react";
import "./DataTable.css";
import { People } from "../../assets/images";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const DataTable = ({ column, rows }) => {
  const sliced = rows.slice(1);
  return (
    <div className="datatable_wrapper">
      <table>
        <thead>
          <th className="checkbox">
            <input type={"checkbox"} className="thinput" />
            <label className="thlabel">checkbox</label>
          </th>
          {column.map((key, index) => {
            return <th id={index}>{key}</th>;
          })}
          <th style={{ textAlign: "center" }}>Action</th>
        </thead>
        <tbody>
          <tr>
            <td className="imgtd">
              <div className="wrapper">
                <input type={"checkbox"} className="thinput" />
                <label className="thlabel">checkbox</label>
              </div>
            </td>
            <th>
              <img src={People} alt="logo" />
              <div className="text">
                <h6>{rows[0]}</h6>
              </div>
            </th>
            {sliced.map((key, index) => {
              return <td id={index}>{key}</td>;
            })}
            <td>
              <div className="actionClass">
                <div className="iconwrapper">
                  <CiEdit color="black" fontSize={"1.5rem"} />
                </div>
                <div className="iconwrapper">
                  <MdDelete color="red" fontSize={"1.5rem"} />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
