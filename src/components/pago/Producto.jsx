import React, { useState, useEffect } from 'react';
import '../productos/Producto.css';
import { useParams } from "react-router-dom"


function Pago() {
    const [productos, setProductos] = useState([]);
    const { valor } = useParams();

    useEffect(() => {
        fetch('JSON/productos.json')
            .then(response => response.json())
            .then(data => setProductos(data.productos))
    }, []);

    
 

    return (
        <div>
        
           
          

            <div className='row'>

                <div className='productos col-md-8'>
                    <div className='row'>
                    <h1>El valor a Pagar es: <strong>{valor}</strong> </h1>
                    </div>
                </div>

          

            </div>
        </div>
    );
}

export default Pago;
