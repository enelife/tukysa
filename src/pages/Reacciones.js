import React from 'react'
import { Link } from 'react-router-dom'
import icon1 from '../images/reacciones-icon1.png'
import icon2 from '../images/reacciones-icon2.png'
import graph1 from '../images/reacciones-img1.png'
import graph2 from '../images/reacciones-img2.png'

const Reacciones = () => {
  return (
    <section>
    <div className="row bgTitle">
        <div className="col-md-12 pt-5 pr-5 pl-5 pb-4">
        <h2 className="fs30 white text-left"><b>POSOLOGÍA Y DOSIFICACIÓN</b></h2>
        </div>
    </div>
    <div className="row">
        <div className="col-lg-3 col-0 p-4">
        <div className="d-flex flex-column align-items-start w280">
        <p className="fs24 orange text-left"><b>Manejo</b></p>
        <div className="pb-2 sideMenu w-100 d-flex justify-content-start"><Link className="sideMenuItem sideActive text-left" to="/posologia">Posología y dosificación</Link></div>
        <Link to="/reacciones" className="pb-2 pt-2 sideMenu w-100 d-flex justify-content-between align-items-center"><span className="sideMenuItem text-left" >Manejo de reacciones adversas</span> <span class="blue fs20">&gt;</span></Link>
        <Link to="/interacciones" className="pb-2 pt-2 w-100 d-flex justify-content-between align-items-center"><span className="sideMenuItem text-left" >Interacciones con otros medicamentos</span> <span class="blue fs20">&gt;</span></Link>
        </div>
        </div>
        <div className='col-lg-9 col-12 p-5 d-flex flex-column'>
            <div class="manejoCard p-4 mw900">
            <p className="fs24 blue text-left"><span className='orange'><b>TUKYSA<sup>®</sup></b> (tucatinib)</span> <b>está indicado en combinación con trastuzumab y capecitabina para el tratamiento de pacientes adultos con cáncer de mama HER2-positivo localmente avanzado o metastásico</b> que hayan recibido por lo menos dos pautas de tratamiento anti-HER2 anteriores.<sup>1</sup></p>
            </div>
            <div className="d-flex mt-4"><img src={icon1} width="50" height="50" alt="icon" className="p-2"/> <span className='fs30 blueL text-left'>EN EL ESTUDIO <b>HER2CLIMB</b></span></div>
            <p className="fs19 blue text-left pl-4 mt-3">Los eventos adversos más comunes fueron en su mayoría de <b>grado 1 o 2.<sup>3</sup></b></p>
            <img src={graph1} width="793" alt="Tabla de la pauta posológica recomendad" className="img-fluid pl-4"/>
            <div class="d-flex mt-4"><img src={icon2} width="50" height="50" alt="icon" className="p-2"/> <span className='fs30 blueL text-left'> <b>REDUCCIONES DE DOSIS</b> RECOMENDADAS POR REACCIONES ADVERSAS<sup>4</sup></span></div>
            <img src={graph2} width="597" alt="Tabla de la pauta posológica recomendad" className="img-fluid mt-3 pl-5"/>
            <div class="d-flex mt-4"><img src={icon2} width="50" height="50" alt="icon" className="p-2"/> <span className='fs30 blueL text-left'> <b>MODIFICACIONES DE DOSIS</b> RECOMENDADAS POR REACCIONES ADVERSAS<sup>4</sup></span></div>
            <table width="900" border="0" cellSpacing="0" cellPadding="0" >
                <tbody>
                  <tr>
                    <td>Reacción adversa</td>
                    <td>Gravedad<sup>*</sup></td>
                    <td>Modificación de la dosis de tucatinib</td>
                  </tr>
                </tbody>
              </table>
            <p className="grey fs11 mb-0 pt-1 text-left">*Los grados están basados en los Criterios de Terminología Común para Reacciones Adversas del Instituto Nacional del Cáncer (National Cancer Institute), Versión 4.03.</p>
        </div>
    </div>
    <div className="row">
        <div className="col-md-12 p-4 pl-5 pr-5">
            <p className="grey fs12 text-left"><b>Abreviaturas:</b>  <b>ALT:</b> alanina aminotransferasa; <b>AST:</b> aspartato aminotransferasa; <b>GFR:</b>E receptor del factor de crecimiento epidérmico; <b>HER2:</b> receptor 2 del factor de crecimiento epidérmico humano; <b>LSN:</b> límite superior a al normalidad; <b>TKI:</b> inhibidor de la tirosina quinasa.</p>
            <p className="grey fs12 text-left"><b>Referencia: 1.</b> Ulrich L, <i>et al.</i> Breast Cancer (Dove Med Press). 2021;13:361-381. 2. Curigliano G, et al. Ann Oncol 2022 Mar;33(3):321-329.3. Murthy RK, et al. N Engl J Med. 2020;382(7):597-609.4. Ficha técnica TUKYSA®. 07/2023.</p>
            <p className="grey fs12 text-left"><span className="black">&#9660;</span> Este medicamento está sujeto a un seguimiento adicional, es prioritaria la notificación de sospechas de reacciones adversas asociadas a este medicamento.</p>
        </div>
    </div>
</section>
  )
}

export default Reacciones