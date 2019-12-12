import React, { Component } from 'react';
import './Contacto.css';
import ReCAPTCHA from "react-google-recaptcha";

let recaptchaRef = React.createRef();

class Contacto extends Component {

     login = () => {
          this.props.auth.login();

     }

     onSubmit = () => {
          const recaptchaValue = recaptchaRef.current.getValue();
          this.props.onSubmit(recaptchaValue);
     }

     leerDatos = (e) => {
          const termino = e.target.value;

          var htmlspecialchars = require('htmlspecialchars');

          console.log(htmlspecialchars(termino));
     }



     render() {

          const { isAuthenticated } = this.props.auth;

          console.log(isAuthenticated());

          return (
               <React.Fragment>
                    {isAuthenticated() && (
                         <form onSubmit={this.onSubmit}>
                              <legend>Formulario de Contacto</legend>
                              <div className="input-field">
                                   <label>Nombre: </label>
                                   <input  type="text" placeholder="Tu Nombre" onChange={this.leerDatos}/>
                              </div>
                              <div className="input-field">
                                   <label>Email: </label>
                                   <input type="email" placeholder="Tu Email" onChange={this.leerDatos}/>
                              </div>
                              <div className="input-field">
                                   <label>Mensaje: </label>
                                   <textarea></textarea>
                              </div>
                              <div className="recaptcha">
                                   <ReCAPTCHA
                                   ref={recaptchaRef}
                                   //6LcXVscUAAAAAC_aVwkoamV3pM5-WOV-1sOS8hBX
                                   //6LcLVscUAAAAAMjVvEWl1R2S7w8PL7o88CsdivsD
                                   sitekey="6LeLW8cUAAAAAKJ95jshib60s0M54BIhmgaLcnvH"
                                   onChange={this.onChange}
                              />
                              </div>

                              <div className="input-field enviar">
                                   <input type="submit" value="Enviar" />
                              </div>

                         </form>
                    )}

                    {!isAuthenticated() && (
                         <div className="contenedor-boton">
                              <p>Para Enviar un mensaje debes estar logueado</p>
                              <a className="boton" onClick={this.login}>Iniciar Sesión</a>
                         </div>
                    )}
               </React.Fragment>
          )
     }
}

export default Contacto;
