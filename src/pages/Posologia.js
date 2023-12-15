import React from 'react'
import { Link } from 'react-router-dom'
import icon1 from '../images/posologia-icon1.png'
import icon2 from '../images/posologia-icon2.png'
import tabla1 from '../images/posologia-img1.png'

const Posologia = () => {
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
                <div class="d-flex mt-4"><img src={icon1} width="50" height="50" alt="icon" className="p-2"/> <span className='fs30 blueL text-left'> <b>PAUTA POSOLÓGICA RECOMENDADA<sup>1</sup></b></span></div>
                <img src={tabla1} width="898" alt="Tabla de la pauta posológica recomendad" className="img-fluid"/>
                <p class="grey fs11 mb-0 pt-1 text-left"><b><sup>†</sup>Continuamente, hasta progresión de la enfermedad o toxicidad inaceptable.</b></p>
                <p class="grey fs11 mb-0 text-left"><sup>*</sup>Tucatinib se debe suspender de forma permanente en pacientes que no toleren 150 mg por vía oral dos veces al día.</p>
                <div class="d-flex mt-4"><img src={icon2} width="50" height="50" alt="icon" className="p-2"/> <span className='fs30 blueL text-left'> <b>FORMA DE ADMINISTRACIÓN<sup>1</sup></b></span></div>
                <div class="p-4 mw900">
                <p className="fs19 grey text-left p-3 borA"><b class="orange">Tucatinib</b> debe tomarse con <b class="blue">12 horas de diferencia,</b> a la misma hora todos los días, <b class="blue">con o sin una comida.<sup>1</sup></b></p>
                <p className="fs19 grey text-left p-3 borA mt-4"><b class="orange">Tucatinib</b> <b class="blue">puede tomarse al mismo tiempo que capecitabina.<sup>1</sup></b></p>
                <p className="fs19 grey text-left p-3 borA mt-4">El paciente debe <b className="blue">tragar los comprimidos enteros,</b> sin masticar o triturar el comprimido.<sup>1</sup></p>
                <p className="fs19 grey text-left p-3 borA mt-4"><b className="blue">En caso de olvido de dosis,</b> el paciente debe tomar la siguiente dosis a la hora prevista.<sup>1</sup></p>
                <p className="fs19 grey text-left p-3 borA mt-4"><b className="blue">En caso de vómito después de ingerir el comprimido,</b> no tomar una dosis adicional y continuar con la siguiente dosis programada.<sup>1</sup></p>
                </div>
                
            </div>
        </div>
        <div className="row">
            <div className="col-md-12 p-4 pl-5 pr-5">
                <p className="grey fs12 text-left"><b>Abreviaturas:</b> <b>HER2:</b> receptor 2 del factor de crecimiento epidérmico humano; <b>IV:</b> vía intravenosa; <b>LSN:</b> límite superior de la normalidad; <b>SC:</b> vía subcutánea.</p>
                <p className="grey fs12 text-left"><b>Referencia: 1.</b> Ficha técnica TUKYSA<sup>®</sup>. 07/2023.</p>
                <p className="grey fs12 text-left"><span className="black">&#9660;</span> Este medicamento está sujeto a un seguimiento adicional, es prioritaria la notificación de sospechas de reacciones adversas asociadas a este medicamento.</p>
            </div>
        </div>
    </section>
  )
}

export default Posologia