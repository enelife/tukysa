import React from "react";
import paper1 from "../images/papers-img1.png"
import paper2 from "../images/papers-img2.png"
import paper3 from "../images/papers-img3.png"
import paper4 from "../images/papers-img4.png"
import paper5 from "../images/papers-img5.png"
import paper6 from "../images/papers-img6.png"
import paper7 from "../images/papers-img7.png"
import paper8 from "../images/papers-img8.png"


const Papers = () => {
    return(
       <section>
        <div className="row bgTitle">
            <div className="col-md-12  pt-5 pr-5 pl-5 pb-4">
            <h2 className="fs30 white text-left"><b>PAPERS</b></h2>
            </div>
        </div>
        <div>
            <div className="row p-2 pt-5 pb-5 d-flex justify-content-around">
                <div className="col-lg-3 col-12 paperCard p-4 ml-2 mt-1 d-flex flex-column align-items-center">
                <p className="fs20 blue text-center">Estudio HER2CLIMB, primer análisis provisional: Murthy RK <i>et al.</i></p>
                <img src={paper1} width="234" alt="Acceder"/>
                <a href="https://www.nejm.org/doi/full/10.1056/nejmoa1914609" target='_blank' rel="noreferrer" className="PaperButton fs18 mt-3">ACCEDER</a>
                </div>
                <div className="col-lg-3 col-12 paperCard p-4 ml-2 mt-1 d-flex flex-column align-items-center">
                <p className="fs20 blue text-center">Estudio HER2CLIMB, segundo análisis provisional: Curigliano G <i>et al.</i></p>
                <img src={paper2} width="256" alt="Acceder"/>
                <a href="https://www.annalsofoncology.org/article/S0923-7534(21)04879-1/fulltext" target='_blank' rel="noreferrer" className="PaperButton fs18 mt-3">ACCEDER</a>
                </div>
                <div className="col-lg-3 col-12 paperCard p-4 ml-2 mt-1 d-flex flex-column align-items-center">
                <p className="fs20 blue text-center">Estudio HER2CLIMB, calidad de vida: Mueller V <i>et al.</i></p>
                <img src={paper3} width="149" alt="Acceder"/>
                <a href="https://www.ejcancer.com/article/S0959-8049(21)00334-8/fulltext" target='_blank' rel="noreferrer" className="PaperButton fs18 mt-3">ACCEDER</a>
                </div>
            </div>
        </div>
        <div>
            <div className="row p-2 pb-5 d-flex justify-content-around">
                <div className="col-lg-3 col-12 paperCard p-4 ml-2 mt-1 d-flex flex-column align-items-center">
                <p className="fs20 blue text-center">Estudio JAMA, retraso de BM: Lin NU <i>et al.</i></p>
                <img src={paper4} width="234" alt="Acceder"/>
                <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9716438/?utm_source=Env%C3%ADo+Interno+Seagen&utm_campaign=f41f71adf3-EMAIL_CAMPAIGN_2016_10_31_COPY_01&utm_medium=email&utm_term=0_6cccff043f-f41f71adf3-90407317" target='_blank' rel="noreferrer" className="PaperButton fs18 mt-3">ACCEDER</a>
                </div>
                <div className="col-lg-3 col-12 paperCard p-4 ml-2 mt-1 d-flex flex-column align-items-center">
                <p className="fs18 blue text-center">HER2-Selective and Reversible Tyrosine Kinase Inhibitor Tucatinib Potentiates the Activity of T-DM1 in Preclinical Models of HER2-positive Breast Cancer: Olson D <i>et al.</i></p>
                <img src={paper5} width="234" alt="Acceder"/>
                <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10519189/" target='_blank' rel="noreferrer" className="PaperButton fs18 mt-3">ACCEDER</a>
                </div>
                <div className="col-lg-3 col-12 paperCard p-4 ml-2 mt-1 d-flex flex-column align-items-center">
                <p class="bgTiCard">EVIDENCIA EN VIDA REAL</p>
                <p className="fs20 blue text-center">Póster Komodo: <br/>Anders C <i>et al.</i></p>
                <img src={paper6} width="212" alt="Acceder"/>
                <a href="https://docs.ene.es/mail/seagen/TUC-HEOR-020b_ASCO_Komodo_poster.pdf" target='_blank' rel="noreferrer" className="PaperButton fs18 mt-3">ACCEDER</a>
                </div>
            </div>
        </div>
        <div>
            <div className="row p-2 pb-5 d-flex justify-content-around">
                <div className="col-lg-3 col-12 paperCard p-4 ml-2 mt-1 d-flex flex-column align-items-center">
                <p class="bgTiCard">EVIDENCIA EN VIDA REAL</p>
                <p className="fs20 blue text-center">Póster Flatiron: Kaufman PA <i>et al.</i></p>
                <img src={paper7} width="283" alt="Acceder"/>
                <a href="https://docs.ene.es/mail/seagen/TUC-HEOR-006_Tukysa_Flatiron_EMR_study_Poster.pdf" target='_blank' rel="noreferrer" className="PaperButton fs18 mt-3">ACCEDER</a>
                </div>
                <div className="col-lg-3 col-12 paperCard p-4 ml-2 mt-1 d-flex flex-column align-items-center">
                <p class="bgTiCard">EVIDENCIA EN VIDA REAL</p>
                <p className="fs18 blue text-center">Póster 12 de Octubre: Tolosa P <i>et al.</i></p>
                <img src={paper8} width="283" alt="Acceder"/>
                <a href="https://docs.ene.es/mail/seagen/posters_12Octubre2023.pdf" target='_blank' rel="noreferrer" className="PaperButton fs18 mt-3">ACCEDER</a>
                </div>
                <div className="col-lg-3 col-12  p-4 ml-2 mt-1 d-flex flex-column align-items-center">
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12 p-4 pl-5 pr-5">
                <p className="grey fs12 text-left mb-0">El laboratorio titular de la autorización de comercialización de trastuzumab emtansina es ROCHE REGISTRATION GMBH.</p>
                <p className="grey fs12 text-left"><span className="black">&#9660;</span> Este medicamento está sujeto a un seguimiento adicional, es prioritaria la notificación de sospechas de reacciones adversas asociadas a este medicamento.</p>
            </div>
        </div>
       </section>
    )
}

export default Papers