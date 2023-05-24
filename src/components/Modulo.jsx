const Modulo = (props) => {
  return (
    <div className="card me-auto">
      <div className="card-body">
      <a href={props.href}>{props.descripcion}</a>
      </div>
    </div>
  );
};

export default Modulo;
