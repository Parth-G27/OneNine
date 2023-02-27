import React from 'react';


import plat_Hero1 from './solhero-1.json';
import plat_Hero2 from './solhero-2.json';
import Lottie from 'lottie-react';


const SolHero = () => {
   return (
      <>
         <section className="services__area-2 mt-120 pt-70 pb-140 p-relative" style={{ background: ``, backgroundPosition: 'top', backgroundSize: 'cover' }}>      
               <div className="about__area-2 pt-130 pl-20">
                  <div className="row">
                  <Lottie className="col-xl-4 col-lg-4" speed={null} loop={true} animationData ={plat_Hero1} />
                     <div className="col-xl-7 col-lg-6">
                        <div className="about__content pl-140">
                           <div className="section__title section__title-sh mb-25 ">
                              <h3 >Human & AI enabled Workforce of the Future</h3>
                           </div>
                           <p  >  As AI has become a more significant driver of economic activity, there has been increased interest from organizations to train all of the workforce with data driven skillsets.  Organizations can enable digital transformation & create workforce of the future using OneNine AI to train all the employees about data driven decision making.  It reduces entry barriers for individuals and businesses to start using AI and machine learning. </p>                              
                           <p className='wee'> Workforce enabled with practical AI skillsets & data driven solutions to their problems</p>                        
                        </div>
                     </div>                     
                  </div>
               </div>
         </section>

         <section className="services__area-3 mt-10 pt-20 pb-10 p-relative" style={{ background: `url(assets/img/bg/3.png)`, backgroundPosition: 'top', backgroundSize: 'cover' }}>
               <div className="about__area-2 pt-10 pl-20">
                  <div className="row">
                  <div className="col-xl-7 col-lg-5">
                        <div className="about__content pl-10 ">
                           <div className="section__title section__title-sh mb-25 mt-80">
                              <h3 >Solving Global Issues that impact all of us</h3>
                           </div>
                           <p>We are using AI to solve global issues like Carbon Emission, Space Weather Prediction & Pupil Distortion Detection. We also enable future workforce to build impactful projects using our Platform thought exclusive partnership with AVS Academy Flagship Student Projects & New Jersey Institute of Technology, a leading technological research university in the world.</p>
                           <p className='wee'>Build Innovative organization while making positive impact in the world</p>
                        </div>
                     </div>
                   <Lottie className="col-xl-4 col-lg-4" speed={null} loop={true} animationData ={plat_Hero2} />                                  
                  </div>
               </div>  
         </section>

         <section className="services__area-3 mt-120 pt-70 pb-140 p-relative" style={{ background: ``, backgroundPosition: 'top', backgroundSize: 'cover' }}>      
               <div className="about__area-2 pt-130 pl-20">
                  <div className="row">
                  <Lottie className="col-xl-4 col-lg-4" speed={null} loop={true} animationData ={plat_Hero1} />
                     <div className="col-xl-7 col-lg-6">
                        <div className="about__content pl-140">
                           <div className="section__title section__title-sh mb-25 ">
                              <h3 >Customer Churn Prediction</h3>
                           </div>
                           <p >Historical customer data is combined with machine learning algorithms to rank a customer’s likelihood to churn. Various algorithms are used in the model library to evaluates performance metrics using cross-validation. Understand the precise customer behaviors and attributes that can signal the risk and timing of customer churn. The accuracy of the technique used is obviously critical to the success of any retention efforts.</p>                              
                           <p className='wee'>Identify customers with high churn probability & engage before they churn</p>                        
                        </div>
                     </div>                     
                  </div>
               </div>
         </section>




      </>
   );
};

export default SolHero;