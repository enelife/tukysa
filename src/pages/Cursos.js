import React from "react";
import curso from "../images/cursos-img1.png"

const Cursos = () => {
    return(
     <section>
        <div className="row bgTitle">
            <div className="col-md-12 pt-5 pr-5 pl-5 pb-4">
            <h2 className="fs30 white text-left"><b>CURSOS ACREDITADOS</b></h2>
            </div>
        </div>
        <div className="row d-flex justify-content-center p-2">
          <div className=" col-lg-8 col-md-11 col-11 paperCard bgGrey p-2 d-flex justify-content-between align-items-center mt-5">
          <img src={curso} width="283" alt="Acceder" class="img-fluid p-2"/>
          <div class="p-4 d-flex flex-column justify-content-start align-items-start">
            <p className="grey fs24 text-left">SCIENTIFIC BITES es un programa que acerca de manera ágil e innovadora los avances y actualizaciones que se producen, constantemente, en el ámbito de la investigación clínica y traslacional del Cáncer de Mama.</p>
            <p className="grey fs18 text-left">Plataforma de acceso abierto y gratuito para el colectivo de profesionales dedicados a la investigación en el campo de la oncología.</p>
            <span><a href="https://www.scientificbites.com/?lang=en" target='_blank' rel="noreferrer" className="PaperButton fs20 mt-3">ACCEDER</a></span>
          </div>
          </div>
        </div>
        <div className="row">
            <div className="col-md-12 p-4 pl-5 pr-5">
                <p className="grey fs12 text-left"><span className="black">&#9660;</span> Este medicamento está sujeto a un seguimiento adicional, es prioritaria la notificación de sospechas de reacciones adversas asociadas a este medicamento.</p>
            </div>
        </div>
     </section>
    )
}

export default Cursos