import React from "react";
import TableRow from "./TableRow";

const CrudTable = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div className="container justify-content-center text-center">
      <h3 className="text-center mb-3">Lista</h3>
      <table className="table table-hover table-primary">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Titulo</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((elemento) => (
              <TableRow
                key={elemento.id}
                elemento={elemento}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          ) : (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
