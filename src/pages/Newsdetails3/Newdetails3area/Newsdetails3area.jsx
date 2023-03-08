import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedin } from 'react-icons/fa';
// import BlogLeftSideBar from '../../Blogs/BlogsArea/BlogLeftSideBar';
import { BiReply } from 'react-icons/bi';
// import Newsdetailssidebar from '../News/Newsdetailssidebar/Newsdetailssidebar';
import Newsbar from '../../News/Newsbar/Newsbar';

const Newsdetails3area = () => {
   return (
      <>
         <section className="blog__area pt-120 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 col-lg-8">
                     <div className="blog__details-wrapper mr-50">
                        {/* <div className="blog__text mb-45">
                           <p>Nancy boy Charles down the pub get stuffed mate easy peasy brown bread car boot squiffy loo, blimey arse over tit it's your round cup of char horse play chimney pot old. Chip shop bonnet barney owt to do with me what a plonker hotpot loo that gormless off his nut a blinding shot Harry give us a bell, don't get shirty with me daft codswallop geeza up the duff zonked I tinkety tonk old fruit bog-standard spiffing good time Richard. Are you taking the piss young delinquent wellies absolutely bladdered the BBC Eaton my good sir, cup of tea spiffing bleeder David mufty you mug <span>cor blimey guvnor, burke bog-standard brown</span> bread wind up barney. Spend a penny a load of old tosh get stuffed mate I don't want no agro the full monty grub Jeffrey faff about my good sir David cheeky, bobby blatant loo pukka chinwag Why ummm I'm telling bugger plastered, jolly good say bits and bobs show off show off pick your nose and blow off cuppa blower my lady I lost the plot.</p>
                        </div> */}
                        {/* <div className="blog__quote mb-40 p-relative white-bg fix">
                           <div className="blog__quote-line">
                              <img className="line-1" src="assets/img/icon/blog/line-1.png" alt="" />
                              <img className="line-2" src="assets/img/icon/blog/line-2.png" alt="" />
                           </div>
                           <div className="quote mb-10">
                              <img src="assets/img/icon/blog/quote-1.png" alt="" />
                           </div>
                           <div className="quote-2 p-absolute">
                              <img src="assets/img/icon/blog/quote-2.png" alt="" />
                           </div>
                           <blockquote>
                              <p>Tosser argy-bargy mush loo at public school Elizabeth up the duff buggered chinwag on your bike mate don't get shirty with me super, Jeffrey bobby Richard cheesed off spend a penny a load of old tosh blag horse.</p>
                           </blockquote>
                           <h4>Shahnewaz Sakil</h4>
                        </div> */}
                        {/* <div className="blog__text mb-40">
                           <p>Cheeky bugger cracking goal starkers lemon squeezy lost the plot pardon me no biggie the BBC burke gosh boot so I said wellies, zonked a load of old tosh bodge barmy skive off he legged it morish spend a penny my good sir wind up hunky-dory. Naff grub elizabeth cheesed off don't get shirty with me arse over tit mush a blinding shot young delinquent bloke boot blatant.</p>
                        </div> */}

                        {/* <div className="blog__details-thumb w-img mb-45">
                           <img src="assets/img/blog/details/b-d-1.jpg" alt="" />
                        </div> */}

                        <div className="blog__details-thumb w-img mb-15">
                           <img src="assets/img/blog/details/4.jpg" alt="" />
                        </div>

                        <div className="blog__text mb-40">
                           <h1 className='pb-5'>Discover being data driven with OneNine Cloud</h1>
                           <p className='wee'>August 15, 2021 | Ravi Trivedi</p>
                           <p className='pb-0'>Everyone can be data driven. We are on a journey to help students, parents & general workforce to be data driven using power of Data Analysis, Machine Learning, Deep Learning, AI and Cloud Computing. Our platform automates algorithms & approaches that are presented in a <span>user friendly interface to reduce complexity.</span></p>
                           <p className='pb-0'>All you need is <span>data.</span></p>
                           <p className='pb-0'>Our wizard based proprietary process helps learn key concepts while building insights from your data at the same time. Our platform helps anyone learn and build data products.</p>
                           <p className='pb-0'>In the simplest term, a data product means using <span>data to help businesses improve their decisions and processes</span>. Platform reduces entry barriers to start using AI and machine learning. Our goal is to bring AI to everyone and accelerate digital transformation & organization's AI journey.</p>
                           <p className='pb-10'>OneNine AI is the only platform in the market that offers <span>complete data insights lifecycle</span> from learning, developing, using, automating and maintaining insights from your data.</p>
                           {/* <p> <span>Cheeky bugger cracking goal starkers lemon squeezy</span> lost the plot pardon me no biggie the BBC burke gosh boot so I said wellies, zonked a load of old tosh bodge barmy skive off he legged it morish spend a penny my good sir wind up hunky-dory. Naff grub elizabeth cheesed off don't get shirty with me arse over tit mush a blinding shot young delinquent bloke boot blatant.</p> */}
                        </div>

                        {/* <div className="blog__text bt-40 mb-40">
                           <h3 className='pb-5'>A New Way of Learning</h3>
                        </div> */}

                           {/* <p className='wee'>December 14, 2021 | Ravi Trivedi</p>
                           <p>We are very excited to launch OneNine AI Academy, introducing an innovative way of learning AI.  Innovative Learning approach focuses on solving real world challenges and reducing entry barriers for students & individuals to start using AI and Machine Learning. We have partnered with leading research institutions around that world to bring our state-of-the-art platform to classroom and academic research.</p> */}
                           {/* <p> <span>Cheeky bugger cracking goal starkers lemon squeezy</span> lost the plot pardon me no biggie the BBC burke gosh boot so I said wellies, zonked a load of old tosh bodge barmy skive off he legged it morish spend a penny my good sir wind up hunky-dory. Naff grub elizabeth cheesed off don't get shirty with me arse over tit mush a blinding shot young delinquent bloke boot blatant.</p> */}
                        
                        <div className="blog__details-thumb w-img mb-45">
                           <img src="assets/img/blog/details/3.jpg" alt="" />
                        </div>
                        {/* <div className="blog__tag mb-30">
                           <span>Tag : </span>
                           <a href="#">Blog</a>
                           <a href="#">Creative</a>
                           <a href="#">Portfolio</a>
                           <a href="#">Theme</a>
                        </div> */}

                        <div className="blog__share d-flex align-items-center mb-30">
                           <span>Share : </span>
                           <div className="blog__social theme-social d-inline-block">
                              <ul>
                                 <li>
                                    <a href="https://www.linkedin.com/" target="_blank">
                                       <i ><FaLinkedin /></i>
                                       <i ><FaLinkedin /></i>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="https://twitter.com/" target="_blank">
                                       <i ><FaTwitter /> </i>
                                       <i ><FaTwitter /> </i>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="https://www.facebook.com/" target="_blank">
                                       <i ><FaFacebookF /> </i>
                                       <i ><FaFacebookF /> </i>
                                    </a>
                                 </li>
                              </ul>
                           </div>
                        </div>

                        {/* <div className="blog__author mb-95 d-sm-flex">
                           <div className="blog__author-img mr-30">
                              <img src="assets/img/blog/author/author-1.jpg" alt="" />
                           </div>
                           <div className="blog__author-content">
                              <h5>Sophie Ianiro</h5>
                              <span>Author</span>
                              <p>I said cracking goal down the pub blag cheeky bugger at public school A bit of how's your father boot.!</p>
                           </div>
                        </div> */}
                        {/* <div className="post-comments mb-95" data-wow-delay=".6s">
                           <div className="post-comment-title mb-40">
                              <h3>3 Comments</h3>
                           </div>
                           <div className="latest-comments">
                              <ul>
                                 <li>
                                    <div className="comments-box">
                                       <div className="comments-avatar">
                                          <img src="assets/img/blog/comment/comments-1.png" alt="" />
                                       </div>
                                       <div className="comments-text">
                                          <div className="avatar-name">
                                             <h5>David Angel Makel</h5>
                                             <span className="post-meta">December 26, 2021</span>
                                          </div>
                                          <p>The bee's knees bite your arm off bits and bobs he nicked it gosh gutted mate blimey, old off his nut argy bargy vagabond buggered dropped.</p>
                                          <a href="#" className="comment-reply"> <i > <BiReply /> </i> Reply</a>
                                       </div>
                                    </div>
                                 </li>
                                 <li className="children">
                                    <div className="comments-box">
                                       <div className="comments-avatar">
                                          <img src="assets/img/blog/comment/comments-rep-1.png" alt="" />
                                       </div>
                                       <div className="comments-text">
                                          <div className="avatar-name">
                                             <h5>Bailey Wonger</h5>
                                             <span className="post-meta">December 27, 2021</span>
                                          </div>
                                          <p>Do one say wind up buggered bobby bite your arm off gutted mate, David victoria sponge cup of char chap fanny around.</p>
                                          <a href="#" className="comment-reply"> <i > <BiReply /> </i> Reply</a>
                                       </div>
                                    </div>
                                 </li>
                                 <li className="children">
                                    <div className="comments-box">
                                       <div className="comments-avatar">
                                          <img src="assets/img/blog/comment/comments-rep-2.png" alt="" />
                                       </div>
                                       <div className="comments-text">
                                          <div className="avatar-name">
                                             <h5>Hilary Ouse</h5>
                                             <span className="post-meta">December 28, 2021</span>
                                          </div>
                                          <p>Baking cakes is cobblers wellies William geeza bits and bobs what a plonker it's your round,</p>
                                          <a href="#" className="comment-reply"> <i > <BiReply /> </i> Reply</a>
                                       </div>
                                    </div>
                                 </li>
                              </ul>
                           </div> 
                        </div>*/}

                        {/* <div className="post-comment-form">
                           <h4>Leave a Reply </h4>
                           <span>Your email address will not be published.</span>
                           <form action="#">
                              <div className="row">
                                 <div className="col-xl-12">
                                    <div className="post-input">
                                       <textarea placeholder="Your message..."></textarea>
                                    </div>
                                 </div>
                                 <div className="col-xl-6 col-md-6">
                                    <div className="post-input">
                                       <input type="text" placeholder="Your Name" />
                                    </div>
                                 </div>
                                 <div className="col-xl-6 col-md-6">
                                    <div className="post-input">
                                       <input type="email" placeholder="Your Email" />
                                    </div>
                                 </div>
                                 <div className="col-xl-12">
                                    <div className="post-input">
                                       <input type="text" placeholder="Website" />
                                    </div>
                                 </div>
                                 <div className="col-xl-12">
                                    <div className="post-check mb-40">
                                       <input type="checkbox" />
                                       <span>Save my name, email, and website in this browser for the next time I comment.</span>
                                    </div>
                                 </div>
                              </div>

                              <button type="button" className="z-btn">Send Message</button>
                           </form>
                        </div> */}
                     </div>
                  </div>

                  <Newsbar/>
               </div>
            </div>
         </section>
      </>
   );
};

export default Newsdetails3area;