import React from 'react';

import { Link } from 'react-router-dom';

const Newsbar = () => {
    return (
        <>
            <div className="col-xl-4 col-lg-4">
                <div className="blog__sidebar">
                    <div className="sidebar__widget mb-50 ">
                        {/* <div className="sidebar__widget-content">
                            <div className="search">
                                <form action="#">
                                    <input type="text" placeholder="Search..." />
                                    <button type="button"><i > <FaSearch /> </i></button>
                                </form>
                            </div>
                        </div> */}
                    </div>
                    <div className="sidebar__widget mb-75 ">
                        <div className="sidebar__widget-title mb-50">
                            <h4>Recent News</h4>
                        </div>
                        <div className="sidebar__widget-content">
                            <div className="rc-post">
                                <ul>
                                    <li className="d-flex mb-20">
                                        <div className="rc-thumb mr-15">
                                            <Link to="/newsdetails1"><img src="assets/img/blog/rc/1.jpg"
                                                alt="rc-post" /></Link>
                                        </div>
                                        <div className="rc-text">
                                            <h6><Link to="/newsdetails1">Launching OneNineAI Academy
                                                </Link></h6>
                                            <div className="rc-meta"><span>Dec 14, 2021</span> </div>
                                        </div>
                                    </li>
                                    <li className="d-flex mb-20">
                                        <div className="rc-thumb mr-15">
                                            <Link to="/newsdetails2"><img src="assets/img/blog/rc/2.jpg"
                                                alt="rc-post" /></Link>
                                        </div>
                                        <div className="rc-text">
                                            <h6><Link to="/newsdetails2">OneNineAI partners with a top public research university</Link>
                                            </h6>
                                            <div className="rc-meta"><span>Aug 15, 2021</span> </div>
                                        </div>
                                    </li>
                                    <li className="d-flex mb-20">
                                        <div className="rc-thumb mr-15">
                                            <Link to="/newsdetails3"><img src="assets/img/blog/rc/3.jpg"
                                                alt="rc-post" /></Link>
                                        </div>
                                        <div className="rc-text">
                                            <h6><Link to="/newsdetails3">Discover being data driven with OneNine Cloud</Link>
                                            </h6>
                                            <div className="rc-meta"><span>Aug 15, 2021</span> </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <div className="sidebar__widget mb-75 ">
                        <div className="sidebar__widget-title mb-50">
                            <h4>Categories</h4>
                        </div>
                        <div className="sidebar__widget-content">
                            <div className="cat-link">
                                <ul>
                                    <li><Link to="/blogDetails">Web Design (6)</Link></li>
                                    <li><Link to="/blogDetails"> Web Development (14)</Link></li>
                                    <li><Link to="/blogDetails">Graphics (12)</Link></li>
                                    <li><Link to="/blogDetails">IOS/Android Design (10)</Link></li>
                                    <li><Link to="/blogDetails">App & Saas (4)</Link></li>
                                    <li><Link to="/blogDetails">Fresh Products (9)</Link></li>
                                    <li><Link to="/blogDetails">Saas Design (8)</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="sidebar__widget mb-60 ">
                        <div className="sidebar__widget-title mb-50">
                            <h4>Recent Comments</h4>
                        </div>
                        <div className="sidebar__widget-content">
                            <div className="rc__comments">
                                <ul>
                                    <li className="d-flex mb-25">
                                        <div className="rc__comments-icon mr-30">
                                            <i ><FaRegComment style={{marginTop:'-2px'}} /></i>
                                        </div>
                                        <div className="rc__comments-content">
                                            <h6>Justin Case</h6>
                                            <p>My lady mush hanky panky young delinquent.!</p>
                                        </div>
                                    </li>
                                    <li className="d-flex mb-25">
                                        <div className="rc__comments-icon mr-30">
                                            <i ><FaRegComment style={{marginTop:'-2px'}} /></i>
                                        </div>
                                        <div className="rc__comments-content">
                                            <h6>Eric Widget</h6>
                                            <p>My lady mush hanky panky young delinquent.!</p>
                                        </div>
                                    </li>
                                    <li className="d-flex mb-25">
                                        <div className="rc__comments-icon mr-30">
                                            <i ><FaRegComment style={{marginTop:'-2px'}} /></i>
                                        </div>
                                        <div className="rc__comments-content">
                                            <h6>Penny Tool</h6>
                                            <p>My lady mush hanky panky young delinquent.!</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="sidebar__widget mb-50 ">
                        <div className="sidebar__widget-title mb-50">
                            <h4>Popular Tags</h4>
                        </div>
                        <div className="sidebar__widget-content">
                            <div className="tags">
                                <Link to="/blogDetails">The Saas</Link>
                                <Link to="/blogDetails">Pix Saas Blog</Link>
                                <Link to="/blogDetails">Landing</Link>
                                <Link to="/blogDetails">UI/UX Design</Link>
                                <Link to="/blogDetails">Branding</Link>
                                <Link to="/blogDetails">Animation</Link>
                                <Link to="/blogDetails">Design</Link>
                                <Link to="/blogDetails">Ideas</Link>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default Newsbar;

