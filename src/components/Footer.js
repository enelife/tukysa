import React from 'react'
import seagen from '../images/logo-seagen.png'

const Footer = () => {
  return (
    <div className="row bgBlue">
        <div className="col-md-6 pt-2 pb-4 pl-5 d-flex justify-content-start">
        <img src={seagen} width="100" alt="Seagen" className="p-2"/>
        </div>
        <div className="col-md-6 pt-2 pb-4 pl-5 d-flex justify-content-end">
          <p className='fs11 white text-right mt-2 mr-4'>ES-TUP-23-158-MT, diciembre 2023</p>
        </div>
    </div>
  )
}

export default Footer