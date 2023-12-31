import React from "react";

const CrudTableRow = ({ elemento, setDataToEdit, deleteData }) => {
  let { titulo, descripcion, id } = elemento; //contiene todos los datos suministrado al momento de crear la tarea en el CRUD

  return (
    <tr>
      <td>{id}</td>
      <td>{titulo}</td>
      <td>{descripcion}</td>
      <td>
        <button className="btn btn-primary" onClick={() => setDataToEdit(elemento)}>Editar</button>
        <button className="btn btn-danger" onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
