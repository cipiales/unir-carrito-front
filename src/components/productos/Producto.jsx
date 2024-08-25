import React, { useState, useEffect } from 'react';
import '../productos/Producto.css';


function Producto() {
    const [productos, setProductos] = useState([]);
    const [shoppingCart, setShoppingCart] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        fetch('JSON/productos.json')
            .then(response => response.json())
            .then(data => setProductos(data.productos))
    }, []);

    const agregarAlCarrito = (producto) => {
        setShoppingCart([...shoppingCart, producto]);
        setTotal(total + producto.precio);
    }
 

    return (
        <div>
            <h2>Productos</h2> 
          

            <div className='row'>

                <div className='productos col-md-8'>
                    <div className='row'>
                        {productos.map(product => (
                            <div className='col-md-4 mt-3' key={product.id}>
                                <div className="card" >
                                    <div className="card-header">
                                        <h4>{product.nombre}</h4>
                                    </div>

                                    <div className="card-body">
                                        <p className="card-text"><strong>Precio:</strong>${product.precio}</p>
                                        <p >
                                            <button className='btn btn-secondary btn-sm' onClick={() => agregarAlCarrito(product)}>Agregar al carrito</button>
                                        </p>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

          

            </div>
        </div>
    );
}

export default Producto;
