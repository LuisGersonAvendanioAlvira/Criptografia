import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navegacion.css';

class Navegacion extends Component {

     cerrarSesion = () => {
          this.props.auth.logout();
     }

     iniciarSesion = () => {
          this.props.auth.login();
     }




     render() {

          const { isAuthenticated } = this.props.auth;
          let resultado;

          

          if (isAuthenticated()) {
               resultado = <Link to={'/productos'} className="boton" onClick={this.cerrarSesion}>Cerrar Sesión</Link>
          } else {
               
               resultado = <Link to={'/#'} className="boton" onClick={this.iniciarSesion}>Iniciar Sesión</Link>

          }



          return (
               <nav className="navegacion">
                    <NavLink to={'/nosotros'} activeClassName="activo">Nosotros</NavLink>
                    <NavLink to={'/productos'} activeClassName="activo">Productos</NavLink>
                    <NavLink to={'/contacto'} activeClassName="activo">Contacto</NavLink>
                    {resultado}
               </nav>
          );
     }
}

export default Navegacion;