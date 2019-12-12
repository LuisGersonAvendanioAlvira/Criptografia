import React, { Component } from 'react';
import './Buscador.css';

class Buscador extends Component {

     leerDatos = (e) => {
          // termino de busqueda
          const termino = e.target.value;

          var htmlspecialchars = require('htmlspecialchars');
          //console.log(htmlspecialchars("</script>'foo!"));

          console.log(htmlspecialchars(termino));
          // enviamos por props
          this.props.busqueda(htmlspecialchars(termino));
     }

     render() {
          //pattern="[a-z]{1,15}"

          return (
               <form className="buscador">
                    <input type="text" maxLength="10"  placeholder="Búsqueda" onChange={this.leerDatos} />
               </form>
          );
     }
}

export default Buscador;