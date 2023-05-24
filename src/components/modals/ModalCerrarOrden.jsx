import FormCerrarOrden from "../forms/FormCerrarOrden";
import Modal from "./Modal";
const ModalCerrarOrden = () => {
  return (
    <>
      <Modal
        buttonText="cerrar orden"
        title="Cerrar orden Orden"
        body={<FormCerrarOrden />}
      />
    </>
  );
};

export default ModalCerrarOrden;
