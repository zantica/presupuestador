import "./App.css";
import { useState } from "react";
import { createPdf } from "./logic/logic";

function App() {
  const [data, setData] = useState({
    owner: null,
    client: null,
    price: null,
  });

  const handleClick = (e) => {
    e.preventDefault();
    createPdf(data);
  };

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <div className="app">
      <form className="form">
        <span>Nombre empresa</span>
        <input
          type="text"
          name="owner"
          value={data.owner}
          onChange={handleOnchange}
        />{" "}
        <span>Nombre cliente</span>
        <input
          type="text"
          name="client"
          value={data.client}
          onChange={handleOnchange}
        />{" "}
        <span>Precio</span>
        <input
          type="text"
          name="price"
          value={data.price}
          onChange={handleOnchange}
        />
        <button type="submit" onClick={handleClick}>
          Generar
        </button>
      </form>
    </div>
  );
}

export default App;
