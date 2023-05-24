import React from "react";
import Modal from "../components/modals/Modal";
import FormNuevaOrden from "../components/forms/formNuevaOrden";
import FormCerrarOrden from "../components/forms/FormCerrarOrden";
import ModalAgregarOrden from "../components/modals/ModalAgregarOrden";
import ModalCerrarOrden from "../components/modals/ModalCerrarOrden";

const Operaciones = () => {
  return (
    <div className="mx-auto container">
      <h1 className="">Orden de movimiento</h1>
     <ModalAgregarOrden/>
      <table className="table mt-4">
        <thead className="table-dark">
          <tr>
            <th scope="col">No. Orden</th>
            <th scope="col">Fecha elaboración</th>
            <th scope="col">Conductor</th>
            <th scope="col">Km/H salida</th>
            <th scope="col">Itinerario</th>
            <th scope="col">Detalle comisión</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td></td>
            <td></td>
            <td>
              <Modal
                buttonText="cerrar orden"
                title="Cierre de orden"
                body={<FormCerrarOrden />}
              />
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td></td>
            <td></td>
            <td>
              <ModalCerrarOrden/>
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td></td>
            <td></td>
            <td>
              <Modal
                buttonText="cerrar orden"
                title="Cierre de orden"
                body={<FormCerrarOrden />}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Operaciones;
