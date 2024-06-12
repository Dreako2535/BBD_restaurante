import { render } from "@testing-library/react";
import React from "react";
import { Form } from "react-router-dom";
import "../style/Formulario.css"

export default class Formu extends React.Component{
    render(){
        return (
            <div className="formulario">
                <form className="container">
                    <label className="nombre">Nombre del personaje: </label>
                    <input type="text" name="nombre" className="name"/>
                    <br/> <br/>
                    <label className="descripcion">Descripción: </label>
                    <input type="text" name="descripcion" className="description"/>
                    <br/> <br/>
                    <label className="imagen">imagen: </label>
                    <input type="file" name="img" className="img" />
                    <br/> <br/>
                    <label>color: </label>
                    <input type="text" name="color"/>
                    <br/> <br/>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        ) 
    }
}