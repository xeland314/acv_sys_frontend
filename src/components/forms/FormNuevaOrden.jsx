const FormNuevaOrden = () => {
  return (
    <form action="">
      <select
        class="form-select"
        aria-label="Default select example"
        name="placa"
        id=""
      >
        <option selected>Seleccione un vehiculo</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <input
        type="text"
        placeholder="Km/H de salida"
        className="form-control"
      />
      <select
        name="conductor"
        id=""
        class="form-select"
        aria-label="Default select example"
      >
        <option selected>Seleccione un conductor</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <input type="text" placeholder="Itinerario" className="form-control" />
      <input
        type="text"
        placeholder="Detalle comision"
        className="form-control"
      />
    </form>
  );
};

export default FormNuevaOrden;
