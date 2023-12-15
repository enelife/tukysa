import React, { useState } from 'react';
import CustomModal from "../components/Modal";
import { Link } from "react-router-dom";
import ft from '../images/ft-icon.png';
import logos1 from '../images/inicio-logo-esmo.png'
import logos2 from '../images/inicio-logo-nccn.png'
import logos3 from '../images/inicio-logo-col3.png'
import col1cta1 from '../images/incio-col1-cta1.png'
import col1cta2 from '../images/incio-col1-cta2.png'
import col2cta1 from '../images/incio-col2-cta1.png'
import col2cta2 from '../images/incio-col2-cta2.png'
import col3cta1 from '../images/incio-col3-cta1.png'
import col3cta2 from '../images/incio-col3-cta2.png'
import col3cta3 from '../images/incio-col3-cta3.png'
import col3cta4 from '../images/incio-col3-cta4.png'
import col1img from '../images/incio-col1-img.png'
import imgModal1 from '../images/modal1-img1.png'
import imgModal2 from '../images/modal2-img1.png'
import imgModal3 from '../images/modal3-img1.png'
import imgModal4 from '../images/modal4-img1.png'
import imgModal5 from '../images/modal5-img1.png'
import imgModal6 from '../images/modal6-img1.png'
import imgModal7 from '../images/modal7-img1.png'
import imgModal8 from '../images/modal8-img1.png'
import close from '../images/close-icon.png'



const Inicio = () => {
    const [modal1IsOpen, setModal1IsOpen] = useState(false);
    const [modal2IsOpen, setModal2IsOpen] = useState(false);
    const [modal3IsOpen, setModal3IsOpen] = useState(false);
    const [modal4IsOpen, setModal4IsOpen] = useState(false);
    const [modal5IsOpen, setModal5IsOpen] = useState(false);
    const [modal6IsOpen, setModal6IsOpen] = useState(false);
    const [modal7IsOpen, setModal7IsOpen] = useState(false);
    const [modal8IsOpen, setModal8IsOpen] = useState(false);

    const openModal = (modalId) => {
        switch (modalId) {
            case 1:
                setModal1IsOpen(true);
                break;
            case 2:
                setModal2IsOpen(true);
                break;
            case 3:
                setModal3IsOpen(true);
                break;
            case 4:
                setModal4IsOpen(true);
                break;
            case 5:
                setModal5IsOpen(true);
                break;
            case 6:
                setModal6IsOpen(true);
                break;
            case 7:
                setModal7IsOpen(true);
                break;
            case 8:
                setModal8IsOpen(true);
                break;
            default:
                break;
        }
    };
    const closeModal = (modalId) => {
        switch (modalId) {
            case 1:
                setModal1IsOpen(false);
                break;
            case 2:
                setModal2IsOpen(false);
                break;
            case 3:
                setModal3IsOpen(false);
                break;
            case 4:
                setModal4IsOpen(false);
                break;
            case 5:
                setModal5IsOpen(false);
                break;
            case 6:
                setModal6IsOpen(false);
                break;
            case 7:
                setModal7IsOpen(false);
                break;
            case 8:
                setModal8IsOpen(false);
                break;
            default:
                break;
        }
    };
    return (
        <section>
            <div className="row bgInicio pr-2 pl-2 pt-2">
                <div className="col-md-3 col-0">

                </div>
                <div className="col-md-9 col-12 p-4 d-flex flex-column align-items-start bgWhiteO">
                    <p className="fs19 blue text-left"><span className="orange"><b>TUKYSA</b><sup>®</sup> (tucatinib)</span> está indicado en combinación con trastuzumab y capecitabina para el <b>tratamiento de pacientes adultos con cáncer de mama HER2-positivo localmente avanzado o metastásico</b> que hayan recibido por lo menos dos pautas de tratamiento anti-HER2 anteriores.</p>
                    <ul className="bullet fs19">
                        <li className="fs19 grey text-left"><span className="orange"><b>Tucatinib</b></span> <b className="blue">mejoró de manera significativa</b> todas las variables de <b className="blue">eficacia (SLP, SG y TRO)* en pacientes con CMm HER2+</b> previamente tratadas con 2 pautas de tratamiento anti-HER2.<sup>2</sup></li>
                        <li className="fs19 grey text-left mt-2">El <b>beneficio de</b> <span className="orange"><b>tucatinib</b></span> fue <b className="blue">consistente en todos los subgrupos de pacientes,</b> incluyendo pacientes <b className="blue">con y sin metástasis cerebrales.<sup>2</sup></b></li>
                        <li className="fs19 grey text-left mt-2"><span className="orange"><b>Tucatinib</b></span> presentó un <b className="blue">perfil de seguridad manejable,</b> con <b className="blue">únicamente un 5,9% de discontinuaciones<sup>3**</sup></b>y <b className="blue">mantuvo la calidad de vida</b> a lo largo de todo el tratamiento.<sup>3,4</sup></li>
                        <li className="fs19 grey text-left mt-2"><span className="orange"><b>Tucatinib</b></span> <b className="blue">retrasó la aparición de nuevas lesiones cerebrales casi 1 año</b> (11,1 meses) respecto al grupo control <b className="blue">para todas las pacientes (con y sin metástasis cerebrales).5</b></li>
                        <li className="fs19 grey text-left mt-2">Los resultados de <b className="blue">eficacia y tolerabilidad</b> del triplete de <span className="orange"><b>tucatinib</b></span> en la <b className="blue">práctica clínica real</b> fueron <b className="blue">similares</b>a los resultados del estudio <b className="blue">HER2CLIMB</b> mostrando <b className="blue">beneficio después de T-DXd,</b> incluso en pacientes con peor pronóstico.<sup>6,7</sup></li>
                    </ul>
                    <a className="fs15 grey ftButton ml-4" href="https://docs.ene.es/mail/seagen/FT_Tukysa_07_2023.pdf" target='_blank' rel="noreferrer"><img src={ft} alt="Ficha técnica Tukysa" width="18" className="p-2 logoFT" /> Ficha técnica de TUKYSA<sup>®</sup> 07/2023</a>
                </div>
            </div>
            <div>
                <div className="row bgLBlue p-2 pt-5 pb-5 d-flex justify-content-around">
                    <div className="col-lg-3 col-md-5 col-12 bgWhite p-4 ml-2 mt-1 borR d-flex flex-column align-items-center">
                        <img src={logos1} width="165" alt="Logo ESMO" />
                        <p className="fs19 grey text-center mt-3"><b className="blue">Las guías ESMO</b> recomiendan <b className="orange">tucatinib</b> + trastuzumab + capecitabina como <b className="blue">primera opción</b> terapéutica para pacientes en <b className="blue">3L CMm HER2+</b> y como la <b className="blue">opción preferente</b> en <b className="blue">2L CMm HER2+</b> en pacientes con <b className="blue">metástasis cerebrales.<sup>8,9</sup></b></p>
                        <p className="fs19 grey text-center"><b className="blue">ESMO</b> ha otorgado a <b className="orange">tucatinib</b> el <b className="blue">score 4 MCBS</b>, lo que implica <b className="blue">beneficio clínico sustancial.<sup>9</sup></b></p>
                        <button type="button" onClick={() => openModal(1)} class="button0"><img src={col1cta1} width="272" alt="Ver gráfica" /></button>
                        <button type="button" onClick={() => openModal(2)} class="button0"><img src={col1cta2} width="272" alt="Ver gráfica" /></button>
                        <img src={col1img} width="106" alt="Agent Score" class="mt-1" />

                    </div>
                    <div className="col-lg-3 col-md-5 col-12 bgWhite p-4 ml-2 mt-1 borR d-flex flex-column align-items-center">
                        <img src={logos2} className="img-fluid" width="220" alt="logos NCCN y AGO" />
                        <p className="fs19 grey text-center mt-3"><b className="azul">Las guías NCCN y AGO</b> recomiendan <b class="orange">tucatinib</b> + trastuzumab + capecitabina como <b className="azul">opción</b> terapéutica <b>preferente</b> para pacientes en <b>3L CMm HER2+.<sup>10-12</sup></b></p>
                        <p className="fs19 grey text-center"><b className="azul">Las guías NCCN</b> recomiendan <b class="orange">tucatinib</b> + trastuzumab + capecitabina como <b class="azul">opción preferente en 2L CMm HER2+</b> en pacientes con <b className="azul">metástasis cerebrales activas.<sup>10,11</sup></b></p>
                        <button type="button" onClick={() => openModal(3)} class="button0"><img src={col2cta1} width="272" alt="Ver gráfica" /></button>
                        <button type="button" onClick={() => openModal(4)} class="button0 mt-3"><img src={col2cta2} width="225" alt="Ver gráfica" /></button>
                    </div>
                    <div className="col-lg-3 col-md-5 col-12 bgWhite p-4 mt-1 borR d-flex flex-column align-items-center">
                        <img src={logos3} className="img-fluid" alt="Logos" />
                        <p className="fs19 grey text-center mt-3"><b className="azul">Las guías italianas, francesas, canadienses y austriacas</b> recomiendan <b className="orange">tucatinib</b> + trastuzumab + capecitabina como <b className="azul">terapia de elección para pacientes con CMm HER2+ detrás</b> del uso de <b className="azul">T-DXd.<sup>13-17</sup></b></p>
                        <p className="fs19 grey text-center"><b className="azul">Las guías AIOM</b> recomiendan <b className="orange">tucatinib</b> como <b className="azul">terapia preferente en 2L</b> para pacientes con <b className="azul">CMm HER2+ con metástasis cerebrales activas.<sup>13</sup></b></p>
                        <button type="button" onClick={() => openModal(5)} class="button0"><img src={col3cta1} width="171" alt="Ver gráfica" /></button>
                        <button type="button" onClick={() => openModal(6)} class="button0 mt-3"><img src={col3cta2} width="171" alt="Ver gráfica" /></button>
                        <button type="button" onClick={() => openModal(7)} class="button0"><img src={col3cta3} width="171" alt="Ver gráfica" /></button>
                        <button type="button" onClick={() => openModal(8)} class="button0 mt-3"><img src={col3cta4} width="236" alt="Ver gráfica" /></button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 p-4 pl-5 pr-5">
                    <p className="grey fs12 text-left mb-0">* La SLP fue de 7,8 meses (HR 0,54; IC 95%: 0,42-0,71; p&lt;0,001); la SG fue de 21,9 meses (HR 0,66; IC 95%: 0,50-0,88; p=0,005) y la TRO fue del 40,6% (IC 95%: 35,3-46,0, p&lt;0,001).<sup>2</sup></p>
                    <p className="grey fs12 text-left">**	Discontinuidades debido a eventos adversos surgidos a raíz del tratamiento, definidos como nuevos eventos o eventos que empeoraron al mismo tiempo o después de recibir la primera dosis del tratamiento de estudio, y hasta 30 días después de la última dosis.<sup>3</sup></p>
                    <p className="grey fs12 text-left">El laboratorio titular de la autorización de comercialización de <span className="black">&#9660;</span>trastuzumab deruxtecán es DAIICHI SANKYO EUROPE GMBH.</p>
                    <p className="grey fs12 text-left"><span className="black">&#9660;</span> Este medicamento está sujeto a un seguimiento adicional, es prioritaria la notificación de sospechas de reacciones adversas asociadas a este medicamento.</p>
                    <p className="grey fs12 text-left"><b>Abreviaturas: 2L/3L:</b> segunda/tercera línea; <b>CMm:</b> cáncer de mama metastásico; <b>HER2:</b> receptor 2 del factor de crecimiento epidérmico humano; HR: hazard ratio; <b>IC:</b> intervalo de confianza; <b>SG:</b> supervivencia global; <b>SLP:</b> supervivencia libre de progresión; <b>T-DXd:</b> trastuzumab deruxtecán; <b>TKI:</b> inhibidor de la tirosina quinasa; TRO: tasa de respuesta objetiva.</p>
                    <p className="grey fs12 text-left mb-0"><b>Referencias: </b><b>1.</b> Ficha técnica tucatinib. 07/2023. <b>2.</b> Murthy R, <i>et al.</i> N Engl J Med. 2020;382(7):597-609. <b>3.</b> Curigliano G, <i>et al.</i> Ann Oncol 2022 Mar;33(3):321- 329. <b>4.</b> Ulrich L. <i>et al.</i> Breast Cancer: Targets Ther. 2021;13:361-381. <b>5.</b> Lin NU, <i>et al.</i> JAMA Oncol. 2023 Feb 1;9(2):197-205. <b>6.</b> Kaufman A, <i>et al.</i> Póster presentado en SABCS 2022, Annual Congress, San Antonio, Texas, USA . Dec 6-10, 2022. <b>7.</b> Anders C, <i>et al.</i> ASCO; Chicago, IL, USA; June 2-6, 2023; Abstract No. 1051. <b>8.</b> Gennari A, <i>et al</i>. ESMO Clinical Practice Guideline for the diagnosis, staging and treatment of patients with metastatic breast cancer. Ann Oncol 2021 Dec;32(12):1475- 1495. <b>9.</b> ESMO Metastatic Breast Cancer Living Guideline-HER2-positive Breast Cancer.Disponible en:  https://www.esmo.org/living-guidelines/esmo-metastatic-breast-cancer-living-guideline/her2-positive-breast-cancer/her2-positive-breast-cancer/third-line-and-beyond. Último acceso: Agosto 2023.</p>
                    <p className="grey fs12 text-left">  <b>10.</b> NCCN Clinical Practice Guidelines in Oncology (NCCN Guidelines<sup>®</sup>). Breast cancer. Version 4.2023. Disponible en: https://www.nccn.org/ login?ReturnURL=https://www.nccn.org/professionals/physician_gls/pdf/breast.pdf. Último acceso: Julio 2023. <b>11.</b> NCCN Guidelines for Central Nervous System Cancers. VERSION 1.2023 UPDATE. Disponible en: https://www.nccn.org/login?ReturnURL=https://www.nccn.org/professionals/physician_gls/pdf/cns.pdf. Último acceso: Julio 2023. <b>12.</b> AGO. Diagnosis and Treatment of Patients with Early and Advanced Breast Cancer. Disponible en: https://www.ago-online.de/fileadmin/ago-online/downloads/_leitlinien/kommission_mamma/2022/englisch/Einzeldateien/AGO_2022E_26_Therapy_algorithms.pdf. <b>13.</b> Linee Guida Aiom 2023. Carcinoma Mamario Avanzato. Disponible en: https://www.iss.it/documents/20126/8403839/LG_C008_AIOM_Ca-mammario-avanzato-TTT2.pdf. Último acceso: Octubre 2023. <b>14.</b> RPC sur les Cancers du sein. Disponible en: https://sein.cours-rpc-saintpaul.fr/wp-content/uploads/2023/02/RPC-NICE-ST-PAUL-2023-SAMEDI-MATIN-FINAL-RESULTATS-version-site-1.pdf. Último acceso: Julio 2023. <b>15.</b> CADTH. Provisional Funding Algorithm. HE2-positive metastatic breast cancer. 2023. Disponible en: https://www.cadth.ca/sites/default/files/pdf/PH0016-HER2-mBC-CAPCA-Endorsement_FINAL.pdf. Último acceso: Julio 2023. <b>16.</b> Ferrario C, <i>et al.</i> Novel Therapies for the Treatment ofHER2-Positive Advanced Breast Cancer: A Canadian Perspective. Curr Oncol. 2022;29(4):2720-2734. <b>17.</b> Rinnerthaler G, <i>et al.</i> Austrian treatment algorithms in HER2- positive metastatic breast cancer: a 2022 update. Wien Klin Wochenschr. 2022 Oct;134(19-20):683-692. </p>
                </div>
            </div>
            <div
                style={{
                    textAlign: "center",
                    display: "block",
                    padding: 30,
                    margin: "auto",
                }}>

                <CustomModal modalId={1} isOpen={modal1IsOpen} onClose={() => closeModal(1)}>
                    <>
                        <p class="text-right"><Link onClick={() => closeModal(1)}><img src={close} width="43" alt="cerrar" /></Link></p>
                        <p className="fs19 blue text-center mt-2">Las guías ESMO recomiendan el uso del triplete <b class="orange">tucatinib</b> + trastuzumab + capecitabina <b class="azul">como primera opción terapéutica para pacientes en 3L CMm HER2+.</b><sup>1</sup></p>
                        <img src={imgModal1} className="img-fluid pt-2" width="900" alt="Gráfica" />
                        <p className="grey fs12 text-left mb-0 mt-2">Figura extraída de ESMO Metastatic Breast Cancer Living Guideline-HER2-positive Breast Cancer.</p>
                        <p className="grey fs12 text-left mb-0">El laboratorio titular de la autorización de comercialización de trastuzumab emtansina es ROCHE REGISTRATION GMBH.</p>
                        <p className="grey fs12 text-left mb-0">El laboratorio titular de la autorización de comercialización de trastuzumab deruxtecán es DAIICHI SANKYO EUROPE GMBH.</p>
                        <p className="grey fs12 text-left mb-0">El laboratorio titular de la autorización de comercialización de lapatinib es NOVARTIS EUROPHARM LIMITED.</p>
                        <p className="grey fs12 text-left mb-0">El laboratorio titular de la autorización de comercialización de neratinib es PIERRE FABRE MEDICAMENT.</p>
                        <p className="grey fs12 text-left mb-0"><span className="black">&#9660;</span>Neratinib está sujeto a seguimiento adicional, es prioritaria la notificación de sospechas de reacciones adversas asociada a este medicamento.</p>
                        <p className="grey fs12 text-left mb-0">Neratinib en combinación con quimioterapia no está aprobado en España.</p>
                        <p className="grey fs12 text-left mb-0">Margetuximab no está comercializado en España.</p>
                        <p className="grey fs12 text-left mb-0">Morado: categorías generales o estratificación; naranja: cirugía; verde: RT; blanco: otros aspectos del manejo; azul: terapia antitumoral sistémica.</p>
                        <p className="grey fs12 text-left mb-0"><b>BM:</b> metástasis cerebral; <b>ChT:</b> quimioterapia; <b>CNS:</b> sistema nervioso central; <b>EMA:</b> Agencia Europea de Medicamentos; <b>ESCAT:</b> ESMO Escala para la Accionabilidad Clínica de Objetivos Moleculares; <b>FDA:</b> Administración de Alimentos y Medicamentos; <b>HER2:</b> receptor 2 del factor de crecimiento epidérmico humano; <b>MBC:</b> cáncer de mama metastásico; <b>MCBS:</b> ESMO-Escala de Magnitud del Beneficio Clínico; <b>PD:</b> enfermedad progresiva; <b>RT:</b> radioterapia; <b>SRT:</b> radioterapia estereotáctica; <b>T-DM1:</b> ado-trastuzumab emtansina; <b>WBRT:</b> radioterapia cerebral total.</p>
                        <p className="grey fs12 text-left mb-0">(a) No hay datos para ninguna de estas combinaciones después de la terapia basada en tucatinib y/o trastuzumab deruxtecán. (b) Se utilizó ESMO-MCBS v1.1 (Cherny, 2017) para calcular las puntuaciones para nuevas terapias/indicaciones aprobadas por la EMA o FDA. Las puntuaciones han sido calculadas por el Grupo de Trabajo de ESMO-MCBS y validadas por el Comité de Guías de ESMO (https://www.esmo.org/guidelines/esmo-mcbs/esmo-mcbs-evaluation-forms). (c) Las puntuaciones ESCAT se aplican únicamente a las alteraciones genómicas. Estas puntuaciones han sido definidas por los autores de las directrices y validadas por el Grupo de Trabajo de Investigación Traslacional y Medicina de Precisión de la ESMO (Mateo, 2018). (d) Aprobado por la FDA, no aprobado por la EMA. (e) Si no se recibió como terapia de segunda línea. (f) Mantener la terapia sistémica actual a menos que la PD sea externa al CNS. (g) Si no se utilizó previamente, incluyendo todos los demás medicamentos que también son una opción de tratamiento en segunda línea. (h) ESCAT aplicable si se amplifica el gen HER2 mediante FISH.</p>
                        <p className="grey fs12 text-left mb-0">ESMO Metastatic Breast Cancer Living Guideline-HER2-positive Breast Cancer.Disponible en: https://www.esmo.org/living-guidelines/esmo-metastatic-breast-cancer-living-guideline/her2-positive-breast-cancer/her2-positive-breastcancer/third-line-and-beyond. Último acceso: Junio 2023.</p>
                        <p className="grey fs12 text-left mb-0"><span className="black">&#9660;</span> Este medicamento está sujeto a un seguimiento adicional, es prioritaria la notificación de sospechas de reacciones adversas asociadas a este medicamento.</p>
                    </>
                </CustomModal>
                <CustomModal modalId={2} isOpen={modal2IsOpen} onClose={() => closeModal(2)}>
                    <>
                        <p class="text-right"><Link onClick={() => closeModal(2)}><img src={close} width="43" alt="cerrar" /></Link></p>
                        <p className="fs19 blue text-center mt-2">Las guías ESMO recomiendan el uso del triplete <b class="orange">tucatinib</b> + trastuzumab + capecitabina como <b>la opción preferente en 2L de CMm HER2+ en pacientes con metástasis cerebrales activas.</b><sup>1</sup></p>
                        <img src={imgModal2} className="img-fluid pt-2" width="900" alt="Gráfica" />
                        <p className="grey fs12 text-left mb-0 mt-2">Figura extraída de ESMO Metastatic Breast Cancer Living Guideline-HER2-positive Breast Cancer.</p>
                        <p className="grey fs12 text-left mb-0">El laboratorio titular de la autorización de comercialización de trastuzumab/pertuzumab y trastuzumab emtansina es ROCHE REGISTRATION GMBH.</p>
                        <p className="grey fs12 text-left mb-0">El laboratorio titular de la autorización de comercialización de trastuzumab deruxtecán es DAIICHI SANKYO EUROPE GMBH.</p>
                        <p className="grey fs12 text-left mb-0"><span className="black">&#9660;</span>Trastuzumab/pertuzumab y  <span className="black">&#9660;</span>trastuzumab deruxtecán están sujetos a seguimiento adicional, es prioritaria la notificación de sospechas de reacciones adversas asociadas a estos medicamentos.</p>
                        <p className="grey fs12 text-left mb-0">Trastuzumab/pertuzumab está indicado en combinación con docetaxel para el tratamiento de pacientes adultos con cáncer de mama HER2-positivo localmente recidivante irresecable o metastásico, que no han recibido tratamiento previo anti-HER2 o quimioterapia para la enfermedad metastásica.</p>
                        <p className="grey fs12 text-left mb-0">El tratamiento con trastuzumab/pertuzumab se puede continuar hasta progresión de la enfermedad o toxicidad inaceptable incluso si se ha interrumpido el tratamiento con docetaxel.</p>
                        <p className="grey fs12 text-left mb-0">ESMO Metastatic Breast Cancer Living Guideline-HER2-positive Breast Cancer.</p>
                        <p className="grey fs12 text-left mb-0">Morado: categorías generales o estratificación; naranja: cirugía; verde: RT; blanco: otros aspectos del manejo; azul: terapia antitumoral sistémica.</p>
                        <p className="grey fs12 text-left mb-0"><b>BM:</b> metástasis cerebral; <b>ChT:</b> quimioterapia; <b>CNS:</b> sistema nervioso central; <b>EMA:</b> Agencia Europea de Medicamentos; <b>ESCAT:</b> Escala para la Accionabilidad Clínica de Objetivos Moleculares de ESMO; <b>ET:</b> terapia endocrina; <b>FDA:</b> Administración de Alimentos y Medicamentos; <b>HER2:</b> receptor 2 del factor de crecimiento epidérmico humano; <b>HR:</b> receptor hormonal; <b>MBC:</b> cáncer de mama metastásico; <b>MCBS:</b> Escala de Magnitud del Beneficio Clínico de ESMO; <b>PD:</b> enfermedad progresiva; <b>RT:</b> radioterapia; <b>SRT:</b> radioterapia estereotáctica; <b>T-DM1:</b> ado-trastuzumab emtansina; <b>WBRT:</b> radioterapia cerebral total.</p>
                        <p className="grey fs12 text-left mb-0">(a) Se utilizó la versión 1.1 de ESMO-MCBS (Cherny, 2017) para calcular las puntuaciones para nuevas terapias/indicaciones aprobadas por la EMA o FDA. Las puntuaciones han sido calculadas por el Grupo de Trabajo de ESMO-MCBS y validadas por el Comité de Guías de ESMO (https://www.esmo.org/guidelines/esmo-mcbs/esmo-mcbs-evaluation-forms). (b) Las puntuaciones ESCAT se aplican únicamente a las alteraciones genómicas. Estas puntuaciones han sido definidas por los autores de las directrices y validadas por el Grupo de Trabajo de Investigación Traslacional y Medicina de Precisión de la ESMO (Mateo, 2018). (c) ESCAT aplicable si se amplifica el gen HER2 mediante FISH. (d) Incluyendo bloqueo dual neoadyuvante o T-DM1 adyuvante. (e) Mantener la terapia sistémica actual a menos que la PD sea externa al CNS. (f) No aprobado por la FDA para su uso en segunda línea.</p>
                        <p className="grey fs12 text-left mb-0">1. ESMO Metastatic Breast Cancer Living Guideline-HER2-positive Breast Cancer.Disponible en: https://www.esmo.org/living-guidelines/esmo-metastatic-breast-cancer-living-guideline/her2-positive-breast-cancer/her2-positivebreast-cancer/third-line-and-beyond. Último acceso: Junio 2023.</p>
                        <p className="grey fs12 text-left mb-0"><span className="black">&#9660;</span> Este medicamento está sujeto a un seguimiento adicional, es prioritaria la notificación de sospechas de reacciones adversas asociadas a este medicamento.</p>
                    </>
                </CustomModal>
                <CustomModal modalId={3} isOpen={modal3IsOpen} onClose={() => closeModal(3)}>
                    <>
                        <p class="text-right"><Link onClick={() => closeModal(3)}><img src={close} width="43" alt="cerrar" /></Link></p>
                        <p className="fs19 blue text-center mt-2">Las guías NCCN recomiendan el uso de <b className="orange">tucatinib</b> + trastuzumab + capecitabina <b>como opción preferente para pacientes 3L CMm HER2+ con y sin metástasis cerebrales, ambos con categoría 1 de evidencia.<sup>1,2</sup></b></p>
                        <img src={imgModal3} className="img-fluid pt-2" width="900" alt="Gráfica" />
                        <p className="grey fs12 text-left mb-0 mt-2">Figura extraída de NCCN Clinical Practice Guidelines in Oncology (NCCN Guidelines). Breast cancer. Version 4.2023.</p>
                        <p className="grey fs12 text-left mb-0">Disponible en: https://www.nccn.org/professionals/physician_gls/pdf/breast.pdf. Último acceso: junio 2023.</p>
                        <p className="grey fs12 text-left mb-0">El laboratorio titular de la autorización de comercialización de trastuzumab emtansina es ROCHE REGISTRATION GMBH.</p>
                        <p className="grey fs12 text-left mb-0">El laboratorio titular de la autorización de comercialización de trastuzumab deruxtecán es DAIICHI SANKYO EUROPE GMBH.</p>
                        <p className="grey fs12 text-left mb-0">El laboratorio titular de la autorización de comercialización de lapatinib es NOVARTIS EUROPHARM LIMITED.</p>
                        <p className="grey fs12 text-left mb-0">El laboratorio titular de la autorización de comercialización de neratinib es PIERRE FABRE MEDICAMENT.</p>
                        <p className="grey fs12 text-left mb-0">Neratinib en combinación con quimioterapia no está aprobado en España.</p>
                        <p className="grey fs12 text-left mb-0">Eribulina está aprobado para uso en segunda línea.</p>
                        <p className="grey fs12 text-left mb-0">El laboratorio titular de la autorización de comercialización de eribulina es EISAI GMBH.</p>
                        <p className="grey fs12 text-left mb-0">Margetuximab no está comercializado en España.</p>
                        <p className="grey fs12 text-left mb-0"><sup>j</sup>Ver consideraciones adicional para aquellos pacientes que reciban una terapia sistémica dirigida frente a HER2 (BINV-Q 4). <sup>k</sup>Evaluar las mutaciones de la línea germinal BRCA1/2 en todos los pacientes con cáncer de mama recurrente o metastásico para identificar candidatos para la terapia con inhibidores de PARP. Mientras que olaparib y talazoparib están indicados por la FDA en la enfermedad HER2 negativa, esta avalado el uso en cualquier subtipo de cáncer de mama asociado con una mutación de la línea germinal. Existe evidencia de bajo nivel para los tumores positivos para HER2, por lo tanto se les asigna una categoría 2A. <sup>l</sup>Trastuzumab/pertuzumab de mantenimiento después de la respuesta (con terapia endocrina concomitante si cáncer de mama metastásico ER2+ y HER2+). <sup>m</sup>Fam-trastuzumab deruxtecán-nxki se puede considerar en el contexto de primera línea como una opción para pacientes seleccionados (es decir, aquellos con progresión rápida dentro de los 6 meses de tratamiento neoadyuvante o adyuvante).[12 meses para regímenes que contienen pertuzumab]). Fam-trastuzumab deruxtecán-nxki está asociado con enfermedad pulmonar intersticial (ILD)/neumonitis. Se recomienda un control regular de este efecto secundario grave. Para pacientes con antecedentes de ILD/neumonitis, no hay datos sobre el manejo de la seguridad o toxicidad de este medicamento en un ensayo. <sup>n</sup>Tucatinib + trastuzumab + capecitabina es el régimen preferido en pacientes con progresión tanto sistémica como a nivel de SNC en el contexto de tercera línea y posterior; y puede administrarse en el contexto de segunda línea. <sup>o</sup>Puede usarse como una opción para la tercera línea y más allá; se desconoce la secuencia óptima para el tratamiento de tercera línea y posteriores. Si no es un candidato, fam-trastuzumab T-DM1 podría considerarse en la segunda línea. <sup>p</sup>Las múltiples líneas de quimioterapia concomitante con terapia anti-HER2 (trastuzumab o un TKI) ofrecen un beneficio clínico para el cáncer de mama metastásico HER2+ no resecable recurrente, y han sido evaluados en ensayos clínicos de fase 2 o 3.</p>
                        <p className="grey fs12 text-left mb-0">La experiencia clínica sugiere un beneficio clínico frecuente para este tratamiento. Sin embargo, no hay datos significativos para el uso de alguno de estos regímenes entre los pacientes tratados previamente con quimioterapia basada en pertuzumab, ado-trastuzuamb emtansina, fam-trastuzumab deruxtecán-nxki o trastuzumab/capecitabina/tucatinib. Por lo tanto, se desconoce la secuencia óptima o el verdadero beneficio de la terapia. qTrastuzumab administrado en combinación con una antraciclina está asociado con una toxicidad cardiaca significativa. Debe evitarse el uso concomitante de trastuzumab y pertuzumab con una antraciclina. rTrastuzumab se puede combinar de manera segura con todos los agentes preferidos que no contienen antraciclinas y otros agentes individuales enumerados en BINV-Q 6 para el cáncer de mama metastásico o recurrente.</p>
                        <p className="grey fs12 text-left mb-0">Categoría 1: Basado en alto nivel de evidencia (ensayo fase III controlado de larga randomización), con un consenso unánime de que la intervención es apropiada.</p>
                        <p className="grey fs12 text-left mb-0"><b>3L:</b> tercera línea de tratamiento; <b>CMm:</b> cáncer de mama metastásico; <b>HER2:</b> receptor 2 del factor de crecimiento epidérmico humano; <b>NCCN:</b> National Comprehensive Cancer Network.</p>
                        <p className="grey fs12 text-left mb-0"><b>1.</b> ESMO Metastatic Breast Cancer Living Guideline-HER2-positive Breast Cancer.Disponible en: https://www.esmo.org/living-guidelines/esmo-metastatic-breast-cancer-living-guideline/her2-positive-breast-cancer/her2-positivebreast-cancer/third-line-and-beyond. Último acceso: Junio 2023.</p>
                        <p className="grey fs12 text-left mb-0"><b>2.</b> NCCN Clinical Practice Guidelines in Oncology. Central Nervous System Cancers (NCCN Guidelines). Disponible en: https://www.nccn.org/professionals/physician_gls/pdf/cns.pdf. Último acceso: Junio 2023.</p>
                    </>
                </CustomModal>
                <CustomModal modalId={4} isOpen={modal4IsOpen} onClose={() => closeModal(4)}>
                    <>
                        <p class="text-right"><Link onClick={() => closeModal(4)}><img src={close} width="43" alt="cerrar" /></Link></p>
                        <p className="fs19 blue text-center mt-2">Las guías AGO recomiendan el uso del triplete de <b className="orange">tucatinib</b> + trastuzumab + capecitabina <b>como opción preferente para pacientes 3L CMm HER2+.<sup>1</sup></b></p>
                        <img src={imgModal4} className="img-fluid pt-2 mb-2" width="900" alt="Gráfica" />
                        <p className="grey fs12 text-left mb-0 mt-2">Figura extraída de AGO. Diagnosis and Treatment of Patients with Early and Advanced Breast Cancer. Disponible en: https://www.ago-online.de/fileadmin/agoonline/downloads/_leitlinien/kommission_mamma/2022/englisch/Einzeldateien/AGO_2022E_26_Therapy_algorithms.pdf. Último acceso: Junio 2023.</p>
                        <p className="grey fs12 text-left mb-0">Disponible en: https://www.nccn.org/professionals/physician_gls/pdf/breast.pdf. Último acceso: junio 2023.</p>
                        <p className="grey fs12 text-left mb-0">El laboratorio titular de la autorización de comercialización de trastuzumab/pertuzumab y trastuzumab emtansina es ROCHE REGISTRATION GMBH.</p>
                        <p className="grey fs12 text-left mb-0">El laboratorio titular de la autorización de comercialización de trastuzumab deruxtecán es DAIICHI SANKYO EUROPE GMBH.</p>
                        <p className="grey fs12 text-left mb-0">El laboratorio titular de la autorización de comercialización de neratinib es PIERRE FABRE MEDICAMENT.</p>
                        <p className="grey fs12 text-left mb-0">El laboratorio titular de la autorización de comercialización de lapatinib es NOVARTIS EUROPHARM LIMITED.</p>
                        <p className="grey fs12 text-left mb-0">La combinación trastuzumab/pertuzumab no tiene indicación aprobada junto a terapia endocrina en España.</p>
                        <p className="grey fs12 text-left mb-0">Trastuzumab/pertuzumab no tiene indicación junto a un inhibidor de la aromatasa en España.</p>
                        <p className="grey fs12 text-left mb-0"><sup>a</sup>Sin beneficio de supervivencia general, considere la quimioterapia de inducción. bDocetaxel (++), paclitaxel (++) o nab-paclitaxel (+); cSolo después de T-DM1. dSolo si HR positivo; esolo si HR negativo AGO ++, mayor grado de recomendación.</p>
                        <p className="grey fs12 text-left mb-0"><b>3L:</b> tercera línea de tratamiento; <b>AGO:</b> Asociación de Ginecología Oncológica; <b>AI:</b> inhibidor de aromatasa; <b>Cap:</b> capecitabina; <b>CMm:</b> cáncer de mama metastásico; <b>CTx:</b> Quimioterapia; <b>ETx:</b> Terapia endocrina; <b>HER2:</b> receptor 2 del factor de crecimiento epidérmico humano; <b>HR:</b> receptor hormonal; <b>Lap:</b> lapatinib; <b>mths:</b> meses; <b>Ner:</b> neratinib; <b>Pz:</b> pertuzumab; <b>T-DM1:</b> trastuzumab emtansina; <b>T-DXd:</b> trastuzumab deruxtecán; <b>TFI:</b> intervalo libre de tratamiento; <b>Tuc:</b> tucatinib; <b>Tz:</b> trastuzumab.</p>
                        <p className="grey fs12 text-left mb-0">1. AGO. Diagnosis and Treatment of Patients with Early and Advanced Breast Cancer. Disponible en: https://www.ago-online.de/fileadmin/ago-online/downloads/_leitlinien/kommission_mamma/2022/englisch/Einzeldateien/AGO_2022E_26_Therapy_algorithms.pdf. Último acceso: Junio 2023.</p>
                    </>
                </CustomModal>
                <CustomModal modalId={5} isOpen={modal5IsOpen} onClose={() => closeModal(5)}>
                    <>
                        <p class="text-right"><Link onClick={() => closeModal(5)}><img src={close} width="43" alt="cerrar" /></Link></p>
                        <p className="fs19 blue text-center mt-2">Las guías italianas recomiendan el uso de <b className="orange">tucatinib</b> + trastuzumab + capecitabina como <b>primera opción terapéutica para pacientes en 3L CMm HER2+</b> y como <b>opción preferente</b> en <b>2L CMm HER2+</b> en pacientes con <b>metástasis cerebrales activas.<sup>1</sup></b></p>
                        <img src={imgModal5} className="img-fluid pt-2 mb-2" width="743" alt="Gráfica" />
                        <p className="grey fs12 text-left mb-0 mt-2">*Indicazione rimborsata se precedente ADC anti-HER2.</p>
                        <p className="grey fs12 text-left mb-0">Figura extraída de: Linee Guida Aiom 2023. Carcinoma Mamario Avanzato. </p>
                        <p className="grey fs12 text-left mb-0">Disponible en: https://www.iss.it/documents/20126/8403839/LG_C008_AIOM_Ca-mammarioavanzato-TTT2.pdf.</p>
                        <p className="grey fs12 text-left mb-0"><b>2L:</b> segunda línea; <b>3L:</b> tercera línea; <b>ADC:</b> anticuerpo conjugado; <b>CMm:</b> cáncer de mama metastástico; <b>DFI:</b> intervalo libre de enfermedad; <b>HER2:</b> receptor 2 del factor de crecimiento epidérmico humano; <b>HR:</b> receptor hormonal; <b>T-DM1:</b> trastuzumab emtansina.</p>
                        <p className="grey fs12 text-left mb-0">1. Linee Guida Aiom 2023. Carcinoma Mamario Avanzato. Disponible en: https://www.iss.it/documents/20126/8403839/LG_C008_AIOM_Ca-mammarioavanzato-TTT2.pdf. Último acceso: Octubre 2023.</p>
                    </>
                </CustomModal>
                <CustomModal modalId={6} isOpen={modal6IsOpen} onClose={() => closeModal(6)}>
                    <>
                        <p class="text-right"><Link onClick={() => closeModal(6)}><img src={close} width="43" alt="cerrar" /></Link></p>
                        <p className="fs19 blue text-center mt-2">Las guías francesas recomiendan el uso de <b className="orange">tucatinib</b> + trastuzumab + capecitabina como <b>terapia de elección</b> para pacientes en 3L CMm HER2+ <b>detrás de T-DXd.</b><sup>1</sup></p>
                        <img src={imgModal6} className="img-fluid pt-2 mb-2" width="882" alt="Gráfica" />
                        <p className="grey fs12 text-left mb-0 mt-2">Figura extraída de RPC sur les Cancers du sein. Disponible en: https://sein.cours-rpc-saintpaul.fr/wp-content/uploads/2023/02/RPC-NICE-ST-PAUL-2023-SAMEDI-MATIN-FINAL-RESULTATS-version-site-1.pdf. Último acceso: Junio 2023.</p>
                        <p className="grey fs12 text-left mb-0">El laboratorio titular de la autorización de comercialización de trastuzumab deruxtecán es DAIICHI SANKYO EUROPE GMBH.</p>
                        <p className="grey fs12 text-left mb-0"><b>3L:</b> tercera línea de tratamiento; <b>CMm:</b> cáncer de mama metastásico; <b>HER2:</b> receptor 2 del factor de crecimiento epidérmico humano; <b>T-DXd:</b> trastuzumab deruxtecán.</p>
                        <p className="grey fs12 text-left mb-0"><b>1.</b> RPC sur les Cancers du sein. Disponible en: https://sein.cours-rpc-saintpaul.fr/wp-content/uploads/2023/02/RPC-NICE-ST-PAUL-2023-SAMEDI-MATIN-FINAL-RESULTATS-version-site-1.pdf. Último acceso: junio 2023.</p>
                    </>
                </CustomModal>
                <CustomModal modalId={7} isOpen={modal7IsOpen} onClose={() => closeModal(7)}>
                    <>
                        <p class="text-right"><Link onClick={() => closeModal(7)}><img src={close} width="43" alt="cerrar" /></Link></p>
                        <p className="fs19 blue text-center mt-2">Las guías canadienses y la agencia de medicamentos CADTH recomiendan el uso del triplete de <b className="orange">tucatinib</b> + trastuzumab + capecitabina <b>como terapia de elección</b> en pacientes 3L CMm HER2+ <b>tras un ADC previo (T-DM1 o T-DXd).</b><sup>1,2</sup></p>
                        <img src={imgModal7} className="img-fluid pt-2 mb-2" width="900" alt="Gráfica" />
                        <p className="grey fs12 text-left mb-0 mt-2">Figura extraída de CADTH. Disponible en: https://www.cadth.ca/sites/default/files/pdf/PH0016-HER2-mBC-CAPCA-Endorsement_FINAL.pdf. Último acceso: Junio 2023.</p>
                        <p className="grey fs12 text-left mb-0">El laboratorio titular de la autorización de comercialización de trastuzumab deruxtecán es DAIICHI SANKYO EUROPE GMBH.</p>
                        <p className="grey fs12 text-left mb-0">El laboratorio titular de la autorización de comercialización de trastuzumab/pertuzumab y trastuzumab emtansina es ROCHE REGISTRATION GMBH.</p>
                        <p className="grey fs12 text-left mb-0"><sup>a</sup>Tenga en cuenta que trastuzumab deruxtecán se puede usar en este contexto si han pasado ≥ 12 meses desde la finalización del tratamiento adyuvante con trastuzumab emtansina, independientemente de la progresión de la enfermedad. <sup>b</sup>pERC señaló que los pacientes deberían poder cambiar de trastuzumab deruxtecán a trastuzumab emtansina por razones de toxicidad si no hay evidencia de la progresión de la enfermedad. <sup>c</sup>En algunas provincias, pertuzumab-trastuzumab-taxano puede estar disponible para pacientes que recaen menos de 6 meses después de trastuzumab adyuvante.</p>
                        <p className="grey fs12 text-left mb-0"><b>3L:</b> tercera línea de tratamiento; <b>ADC:</b> anticuerpo conjugado; <b>CADTH:</b> Canada’s drug and health technology agency; <b>CMm:</b> cáncer de mama metastásico; <b>HER2:</b> receptor 2 del factor de crecimiento epidérmico humano; <b>T-DM1:</b> ado-trastuzumab emtansina; <b>T-DXd:</b> Trastuzumab Deruxtecán.</p>
                        <p className="grey fs12 text-left mb-0"><b>1.</b> CADTH. Disponible en: https://www.cadth.ca/sites/default/files/pdf/PH0016-HER2-mBC-CAPCA-Endorsement_FINAL.pdf. Último acceso: junio 2023. 2. Ferrario C et al. Curr Oncol. 2022;29(4):2720-2734</p>
                    </>
                </CustomModal>
                <CustomModal modalId={8} isOpen={modal8IsOpen} onClose={() => closeModal(8)}>
                    <>
                        <p class="text-right"><Link onClick={() => closeModal(8)}><img src={close} width="43" alt="cerrar" /></Link></p>
                        <p className="fs19 blue text-center mt-2">Las guías austriacas recomiendan el uso de <b className="orange">tucatinib</b> + trastuzumab + capecitabina <b>como terapia de elección</b> para pacientes en 3L CMm HER2+ <b>detrás</b> del tratamiento con <b>T-DXd.</b><sup>1</sup></p>
                        <img src={imgModal8} className="img-fluid pt-2 mb-2" width="900" alt="Gráfica" />
                        <p className="grey fs12 text-left mb-0 mt-2">Figura extraída de Rinnerthaler G, et al. Wien Klin Wochenschr. 2022.</p>
                        <p className="grey fs12 text-left mb-0">El laboratorio titular de la autorización de comercialización de trastuzumab deruxtecán es DAIICHI SANKYO EUROPE GMBH.</p>
                        <p className="grey fs12 text-left mb-0">El laboratorio titular de la autorización de comercialización de trastuzumab/pertuzumab y trastuzumab emtansina es ROCHE REGISTRATION GMBH.</p>
                        <p className="grey fs12 text-left mb-0">El laboratorio titular de la autorización de comercialización de lapatinib es NOVARTIS EUROPHARM LIMITED.</p>
                        <p className="grey fs12 text-left mb-0">El laboratorio titular de la autorización de comercialización de neratinib es PIERRE FABRE MEDICAMENT.</p>
                        <p className="grey fs12 text-left mb-0">El laboratorio titular de la autorización de comercialización de abemaciclib es ELI LILLY NEDERLAND B.V.</p>
                        <p className="grey fs12 text-left mb-0">Neratinib en combinación con capecitabina no está aprobado en España.</p>
                        <p className="grey fs12 text-left mb-0">Pembrolizumab en combinación con trastuzumab no está aprobado en España.</p>
                        <p className="grey fs12 text-left mb-0">Abemaciclib en combinación con trastuzumab y fulvestrant no está aprobado en España</p>
                        <p className="grey fs12 text-left mb-0"><b>3L:</b> tercera línea de tratamiento; <b>Abema:</b> abemaciclib; <b>AI:</b> inhibidor de aromatasa; <b>Cap:</b> capecitabina; <b>Chemo:</b> quimioterapia; <b>CMm:</b> cáncer de mama metastásico; <b>DPD:</b> dehisropirimidina deshidrogenasa; <b>Ful:</b> fulvestrant; <b>HER2:</b> receptor 2 del factor de crecimiento epidérmico humano; <b>L:</b> lapatinib; <b>N:</b> neratinib; <b>P:</b> pertuzumab; <b>Pembro:</b> pembrolizumab; <b>T:</b> Trastuzumab; <b>T-DM1:</b> trastuzumab emtansina; <b>T-DXd:</b> trastuzumab deruxtecán; <b>Tuc:</b> tucatinib.</p>
                        <p className="grey fs12 text-left mb-0"><sup>*</sup>No tienen autorización en la Unión Europea.</p>
                        <p className="grey fs12 text-left mb-0"><b>1.</b> Rinnerthaler G, <i>et al.</i> Wien Klin Wochenschr. 2022;134(19-20):683-692.</p>
                    </>
                </CustomModal>
            </div>
        </section>
    )
}


export default Inicio