import React from 'react';
import { Link } from 'react-router-dom';

const SinglePrice = ({title,price,active,one,two,three,four,five,six,seven,link}) => {
   return (
      <>
         <div className="col-xl-4 col-lg-4 col-md-6">
            <div className={`price__item ${active && active} p-relative transition-3 text-center fix mb-30`}>
               <div className="price__shape transition-3 p-absolute">
                  <img src="assets/img/icon/price/triangle.png" alt=""/>
               </div>
               <div className="price__inner p-relative">
                  <p>{title}</p>
                  <div className="price__tag mb-45">
                     <h1>{`$${price}`}</h1>
                     <span>Per month</span>
                  </div>
                  <div className="price__features text-start mb-55">
                     <ul>
                        <li><span>{one}</span></li>
                        <li><span>{two}</span></li>
                        <li><span>{three}</span></li>
                        <li><span>{four}</span></li>
                        <li><span>{five}</span></li>
                        <li><span>{six}</span></li>
                        <li><span>{seven}</span></li>
                     </ul>
                  </div>
                  <a href={link} className="price-btn">Get Started</a>
               </div>
            </div>
         </div>
      </>
   );
};

export default SinglePrice;