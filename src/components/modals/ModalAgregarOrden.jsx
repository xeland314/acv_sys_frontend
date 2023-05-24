import Modal from "./Modal";
import FormNuevaOrden from "../forms/formNuevaOrden";
const ModalAgregarOrden = () => {
  return (
    <>
      <Modal
        buttonText="agregar nueva orden"
        title="Nueva Orden"
        body={<FormNuevaOrden />}
      />
    </>
  );
};

export default ModalAgregarOrden;
