import React, { Component } from 'react';
import './SingleProductos.css';

import axios from 'axios';


class SingleProducto extends Component
{
     state = {
          productos: {}
     }

     componentWillMount() {

          this.queryAPI();
     }

     decrypt = (text)=>{

          const crypto = require('crypto'),
               algorithm = 'aes-256-ctr',
               password = 'arquitectura20199102arutcetiuqra'

          var decipher = crypto.createDecipher(algorithm,password)
          var dec = decipher.update(text,'hex','utf8')
          dec += decipher.final('utf8');
          return dec;
     }

     queryAPI = () => {
          const { getAccessToken } = this.props.auth;

          const headers = { 'Authorization': `Bearer ${getAccessToken()}` };

          const url = 'http://localhost:4100/productos';


          return axios.get(url, { headers })
               .then((respuesta) => {
                         this.setState({ 
                              productos: JSON.parse(this.decrypt(respuesta.data))[this.props.idProducto]
                         })
                    });

     }



     render() { 
          const {id, nombre, precio, descripcion, imagen} = this.state.productos;

          if(id == null || nombre == null || precio == null || descripcion == null || imagen == null)
          {
               return (null);
          }

          return (  
               <React.Fragment>
                    <div className="info-producto">
                         <div className="imagen">
                              <img src={`/img/${imagen}.png`} alt={nombre} />
                         </div>    

                         <div className="info">
                              <h2>{nombre}</h2>
                              <p className="precio">$ {precio}</p>
                              <p>{descripcion}</p>
                         </div>
                    </div>
               </React.Fragment>
          );
     }
};export default SingleProducto;

/*
const SingleProducto = (props) => {

     if(!props) return null;

     const {imagen, nombre, precio, descripcion} = props.producto;
     
     return (
          
          <div className="info-producto">
               <div className="imagen">
                    <img src={`/img/${imagen}.png`} alt={nombre} />
               </div>    

               <div className="info">
                    <h2>{nombre}</h2>
                    <p className="precio">$ {precio}</p>
                    <p>{descripcion}</p>
               </div>
               
          </div>
          
          <React.Fragment>
               <div>
                    Hola desde SingleProducto
               </div>
          </React.Fragment>
     )
}
 
export default SingleProducto;
*/