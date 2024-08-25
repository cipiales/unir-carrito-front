import React, { useState, useEffect } from "react";

const BuscarItems = () => {
    const [productos, setProductos] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const [error, setError] = useState(null);

    useEffect(() => {
        const cargarDatos = async () => {
            try {
                const response = await fetch("JSON/productos.json");
                const data = await response.json();
                setProductos(data.productos);
            } catch (err) {
                setError(err);
            }
        };
        cargarDatos();
    }, []);

    if (error) {
        return <p>Error de carga: {error.message}</p>;
    }
    let productosFiltrados = null;
    console.log("Productos:"+productos);
   if (productos.length>0){
     productosFiltrados = productos.filter((producto) =>
    producto.nombre?.toLowerCase().includes(busqueda.toLocaleLowerCase())
    );
    console.log(productosFiltrados);
   }
    

    

    return (
        <div>

<h2>Buscar Productos</h2>
      <input
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Buscar productos..."
      />
     
        {productos.length > 0 &&
            <div className="row">
            
                {
                productosFiltrados.map((producto) => (
                    <div key={producto.nombre} className="col-md-4" >


                        <div className="card mt-5" >
                            <div className="card-header">
                                <h2>{producto.nombre}</h2>
                            </div>
                            <ul className="list-group list-group-flush">
                            <li className="list-group-item"><b>Id:</b>  {producto.id}</li>
                                <li className="list-group-item"><b>Precio:</b> {producto.precio}</li>
                                
                                
                            </ul>
                        </div>


                    </div>
                ))}
            </div>
            }

        </div>
    );
};

export default BuscarItems;



//Desde Aqui
