import React, { Fragment, useState } from "react";
import "./Table.css";
import Modal from "./Modal";

function Table() {
  const [OpenModal, setOpenModal] = useState(false);
  const [rows, setRows] = useState([
    {
      name: "Sid",
      address: "Kolhapur",
    },
    {
      name: "Rohit",
      address: "Kolhapur",
    },
  ]);

  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);
    setOpenModal(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };

  return (
    <Fragment>
      <div className="divElement">
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => setOpenModal(true)}
        >
          Add
        </button>
      </div>
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th className="th">Sr.No</th>
              <th className="data">Student Name</th>
              <th className="data">Address</th>
              <th className="th">Action</th>
            </tr>
            <tr></tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => {
              return (
                <tr key={idx}>
                  <td className="th">{row.id}</td>
                  <td className="data1">{row.name}</td>
                  <td className="data1">{row.address}</td>
                  <td className="th">
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      id="edit"
                      onClick={() => handleEditRow(idx)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      id="delete"
                      onClick={() => handleDeleteRow(idx)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Modal
        open={OpenModal}
        onSubmit={handleSubmit}
        onclose={() => {
          setOpenModal(false);
          setRowToEdit(null);
        }}
        defaultValue={rowToEdit !== null && rows[rowToEdit]}
      />
    </Fragment>
  );
}

export default Table;
