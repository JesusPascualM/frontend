import { React } from "react";
import { useForm } from "react-hook-form";
import "./Formulario.css";

const Formulario = ({ title, setFilters }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setFilters(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="formulario">
        <div className="contTitulo">
          <h1>{title}</h1>
        </div>
        <label>Selecciona tu motazo</label>
        <select
          name="select"
          id="selectBrand"
          className="register"
          {...register("name")}
        >
          <option value="">Todos las motos</option>
          <option value="yamaha">Yamaha</option>
          <option value="honda">Honda</option>
          <option value="bmw">BMW</option>
          <option value="vespa">VESPA</option>
          <option value="kawasaki">KAWASAKI</option>
        </select>

        <br />

        <label>Relevancia</label>
        <select
          name="select"
          id="selectColor"
          className="register"
          {...register("relevance")}
        >
          <option value="">Cualquier relevancia</option>
          <option value="1">1*</option>
          <option value="2">2*</option>
          <option value="3">3*</option>
          <option value="4">4*</option>
          <option value="5">5*</option>
        </select>

        <br />

        <label>Precio máximo</label>
        <input
          type="number"
          name="price"
          id="inputPrice"
          className="register"
          {...register("price")}
        />

        <br />
        <input id="button" type="submit" value="Buscar" />
      </form>
    </>
  );
};

export default Formulario;
