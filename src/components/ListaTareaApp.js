import React, { useState } from "react";
import Form from "./Form";
import Table from "./Table";

const initialDb = [ //base de dato con ejemplos previamente llenados
  {
    id: 1692927436982,
    titulo: "Hacer la compra",
    descripcion: "1 cartón de huevo, 2 bolsas de leche, Verduras, 2 libras de azúcar, Frutas, Arroz, Aceite, Avena y Café.",
  },
  {
    id: 1692654853971,
    titulo: "Comprar Ventilador",
    descripcion: "Ir al exito a comprar un ventilador para la sala y aprovechar los puntos exito.",
  },
  {
    id: 1692157865329,
    titulo: "LLevar a arreglar la moto",
    descripcion: "Ir a que le hagan el cambio de aceite a la moto y que la revisen.",
  },
];

const CrudApp = () => {
  const [db, setDb] = useState(initialDb); 
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => { //crear datos
    data.id = Date.now();
    setDb([...db, data]);
  };

  const updateData = (data) => { //actializar datos
    let newData = db.map((elemento) => (elemento.id === data.id ? data : elemento));
    setDb(newData);
  };

  const deleteData = (id) => { //eliminar datos
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      let newData = db.filter((data) => data.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <div>
        <Form
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <Table
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
    </div>
  );
};

export default CrudApp;
