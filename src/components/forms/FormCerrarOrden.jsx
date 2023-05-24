const FormCerrarOrden = () => {
  return (
    <form action="">
      <input type="text" placeholder="fecha retorno" className="form-control" />
      <input type="text" placeholder="km/h retorno"className="form-control" />
      <input type="text" placeholder="km/h actual" className="form-control"/>
      <label htmlFor="cumplimiento">Cumplimiento</label>
      <input type="checkbox" name="" id="cumplimiento" className="form-control"/>
    </form>
  );
};

export default FormCerrarOrden;
