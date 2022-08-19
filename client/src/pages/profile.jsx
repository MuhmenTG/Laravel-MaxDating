import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from '../component/layout/header';
import PageHeader from '../component/layout/pageheader';
import FooterSection from '../component/layout/footer';
import FilterSearchSection from '../component/section/filtersearch';
import WidgetLikeSection from '../component/section/widgetlike';
import WidgetGroupSection from '../component/section/widgetgroup';
import AllPhotos from '../component/section/photos';
import GroupItemTwo from '../component/items/groupitemtwo';

class ProfilePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <PageHeader title={'Profile Single'} />
                <section className="profile-section padding-tb">
                    <div className="container">
                        <div className="section-wrapper">
                            <div className="member-profile">
                                <div className="profile-item">
                                    <div className="profile-cover">
                                        <img src="assets/images/profile/cover.jpg" alt="cover-pic" />
                                        <div className="edit-photo custom-upload">
                                            <div className="file-btn"><i className="icofont-camera"></i>
                                                Edit Photo</div>
                                            <input type="file" />
                                        </div>
                                    </div>
                                    <div className="profile-information">
                                        <div className="profile-pic">
                                            <img src="assets/images/profile/Profile.jpg" alt="DP" />
                                            <div className="custom-upload">
                                                <div className="file-btn">
                                                    <span className="d-none d-lg-inline-block"> <i className="icofont-camera"></i>
                                                        Edit</span>
                                                    <span className="d-lg-none mr-0"><i className="icofont-plus"></i></span></div>
                                                <input type="file" />
                                            </div>
                                        </div>
                                        <div className="profile-name">
                                            <h4>William Smith</h4>
                                            <p>Active 02 Minutes Ago</p>
                                        </div>
                                        <ul className="profile-contact">
                                            <li>
                                                <a href="#">
                                                    <div className="icon"><i className="icofont-envelope"></i></div>
                                                    <div className="text">
                                                        <p>Private Message</p>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                                <div className="profile-item d-none">
                                    <div className="lab-inner">
                                        <div className="lab-thumb">
                                            <a href="#"><img src="assets/images/profile/Profile.jpg" alt="profile" /></a>
                                        </div>
                                        <div className="lab-content">
                                            <div className="profile-name">
                                                <div className="p-name-content">
                                                    <h4>William Smith</h4>
                                                    <p>Active 02 Minutes Ago</p>
                                                </div>

                                                <div className="contact-button">
                                                    <button className="contact-btn">
                                                        <i className="icofont-info-circle"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <ul className="profile-contact">
                                                <li>
                                                    <a href="#">
                                                        <div className="icon"><i className="icofont-user"></i></div>
                                                        <div className="text">
                                                            <p>Add Friends</p>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div className="icon"><i className="icofont-envelope"></i></div>
                                                        <div className="text">
                                                            <p>Publice Message</p>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div className="icon"><i className="icofont-envelope"></i></div>
                                                        <div className="text">
                                                            <p>Private Message</p>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="profile-details">
                                    <nav className="profile-nav">
                                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                            <button className="nav-link active" id="nav-ativity-tab" data-bs-toggle="tab"
                                                data-bs-target="#activity" type="button" role="tab" aria-controls="activity"
                                                aria-selected="true">Activity</button>
                                            <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab"
                                                data-bs-target="#profile" type="button" role="tab" aria-controls="profile"
                                                aria-selected="false">Profile</button>
                                            <button className="nav-link" id="nav-friends-tab" data-bs-toggle="tab"
                                                data-bs-target="#friends" type="button" role="tab" aria-controls="friends"
                                                aria-selected="false">Friends <span className="item-number">16</span></button>
                                            <button className="nav-link" id="nav-groups-tab" data-bs-toggle="tab"
                                                data-bs-target="#likes" type="button" role="tab" aria-controls="groups"
                                                aria-selected="false">Peoples, who I liked <span className="item-number">06</span></button>
                                            <button className="nav-link" id="nav-groups-tab" data-bs-toggle="tab"
                                                data-bs-target="#likedme" type="button" role="tab" aria-controls="groups"
                                                aria-selected="false">Peoples, who liked me <span className="item-number">06</span></button>
                                            <button className="nav-link" id="nav-photos-tab" data-bs-toggle="tab"
                                                data-bs-target="#photos" type="button" role="tab" aria-controls="photos"
                                                aria-selected="false">Photos</button>
                                         <button className="nav-link" id="nav-photos-tab" data-bs-toggle="tab"
                                                data-bs-target="#photos" type="button" role="tab" aria-controls="photos"
                                                aria-selected="false">Settings</button>
                                            

                                        </div>
                                    </nav>
                                    <div className="tab-content" id="nav-tabContent">
                                        <div className="tab-pane activity-page fade show active" id="activity" role="tabpanel">
                                            <div>
                                                <div className="row">
                                                    <div className="col-xl-8">
                                                        <article>
                                                            <div className="activity-tab">
                                                                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                                                    <li className="nav-item" role="presentation">
                                                                        <button className="nav-link" id="pills-personal-tab"
                                                                            data-bs-toggle="pill" data-bs-target="#pills-personal"
                                                                            type="button" role="tab" aria-controls="pills-personal"
                                                                            aria-selected="false"><i className="icofont-user"></i>
                                                                            Personal</button>
                                                                    </li>
                                                                    <li className="nav-item" role="presentation">
                                                                        <button className="nav-link active" id="pills-mentions-tab"
                                                                            data-bs-toggle="pill" data-bs-target="#pills-mentions"
                                                                            type="button" role="tab" aria-controls="pills-mentions"
                                                                            aria-selected="true"><i className="icofont-edit"></i>
                                                                            Mentions</button>
                                                                    </li>
                                                                    <li className="nav-item" role="presentation">
                                                                        <button className="nav-link" id="pills-favorites-tab"
                                                                            data-bs-toggle="pill" data-bs-target="#pills-favorites"
                                                                            type="button" role="tab" aria-controls="pills-favorites"
                                                                            aria-selected="false"><i className="icofont-heart-alt"></i>
                                                                            Favorites</button>
                                                                    </li>
                                                        
                                                                
                                                                    <li className="custom-select">
                                                                        <select>
                                                                            <option value="1">Everything</option>
                                                                            <option value="2">Recent</option>
                                                                            <option value="3">Relevant</option>
                                                                            <option value="4">Popular</option>
                                                                        </select>
                                                                    </li>
                                                                </ul>
                                                                <div className="tab-content activity-content" id="pills-tabContent">
                                                                    <div className="tab-pane fade" id="pills-personal" role="tabpanel"
                                                                        aria-labelledby="pills-personal-tab">
                                                                        <div className="post-item mb-20">
                                                                            <div className="post-content">
                                                                                <div className="post-author">
                                                                                    <div className="post-author-inner">
                                                                                        <div className="author-thumb">
                                                                                            <img src="assets/images/profile/dp.png"
                                                                                                alt="img" />
                                                                                        </div>
                                                                                        <div className="author-details">
                                                                                            <h6><a href="#">William Smith</a></h6>
                                                                                            <ul className="post-status">
                                                                                                <li className="post-privacy"><i
                                                                                                        className="icofont-world"></i>
                                                                                                    Public</li>
                                                                                                <li className="post-time">6 Mintues Ago
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="post-description">
                                                                                    <p>Quickly deliver going forward methods info
                                                                                        create empowerment before client-centered
                                                                                        bandwdth
                                                                                        Credibly pontficate interoperable leadership
                                                                                        skills ands B2B data awesome Continually
                                                                                        whiteboard
                                                                                        ands B2B data awesome Continually whiteboard
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="post-meta">
                                                                                <div className="post-meta-top">
                                                                                    <p><a href="#"><i className="icofont-like"></i> <i
                                                                                                className="icofont-heart"></i> <i
                                                                                                className="icofont-laughing"></i>
                                                                                            <span>Julia,
                                                                                                Petrova and 306 like this</span></a>
                                                                                    </p>
                                                                                    <p>
                                                                                        <a href="#">136 Comments</a>
                                                                                    </p>
                                                                                </div>
                                                                                <div className="post-meta-bottom">
                                                                                    <ul className="react-list">
                                                                                        <li className="react"><a href="#"><i
                                                                                                    className="icofont-like"></i>
                                                                                                Like</a> </li>
                                                                                        <li className="react"><a href="#">
                                                                                                <i
                                                                                                    className="icofont-speech-comments"></i>
                                                                                                Comment
                                                                                            </a></li>
                                                                                        <li className="react"><a href="#">
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="post-item mb-20">
                                                                            <div className="post-content">
                                                                                <div className="post-author">
                                                                                    <div className="post-author-inner">
                                                                                        <div className="author-thumb">
                                                                                            <img src="assets/images/profile/dp.png"
                                                                                                alt="img" />
                                                                                        </div>
                                                                                        <div className="author-details">
                                                                                            <h6><a href="#">William Smith</a></h6>
                                                                                            <ul className="post-status">
                                                                                                <li className="post-privacy"><i
                                                                                                        className="icofont-world"></i>
                                                                                                    Public</li>
                                                                                                <li className="post-time">6 Mintues Ago
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="post-description">
                                                                                    <p>Quickly deliver going forward methods info
                                                                                        create empowerment before client-centered
                                                                                        bandwdth
                                                                                        Credibly pontficate interoperable leadership
                                                                                        skills ands B2B data awesome Continually
                                                                                        whiteboard
                                                                                        ands B2B data awesome Continually whiteboard

                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="post-meta">
                                                                                <div className="post-meta-top">
                                                                                    <p><a href="#"><i className="icofont-like"></i> <i
                                                                                                className="icofont-heart"></i> <i
                                                                                                className="icofont-laughing"></i>
                                                                                            <span>Julia,
                                                                                                Petrova and 306 like this</span></a>
                                                                                    </p>
                                                                                    <p>
                                                                                        <a href="#">136 Comments</a>
                                                                                    </p>
                                                                                </div>
                                                                                <div className="post-meta-bottom">
                                                                                    <ul className="react-list">
                                                                                        <li className="react"><a href="#"><i
                                                                                                    className="icofont-like"></i>
                                                                                                Like</a> </li>
                                                                                        <li className="react"><a href="#">
                                                                                                <i
                                                                                                    className="icofont-speech-comments"></i>
                                                                                                Comment
                                                                                            </a></li>
                                                                                        <li className="react"><a href="#">
                                                                                                
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="post-item mb-20">
                                                                            <div className="post-content">
                                                                                <div className="post-author">
                                                                                    <div className="post-author-inner">
                                                                                        <div className="author-thumb">
                                                                                            <img src="assets/images/profile/dp.png"
                                                                                                alt="img" />
                                                                                        </div>
                                                                                        <div className="author-details">
                                                                                            <h6><a href="#">William Smith</a></h6>
                                                                                            <ul className="post-status">
                                                                                                <li className="post-privacy"><i
                                                                                                        className="icofont-world"></i>
                                                                                                    Public</li>
                                                                                                <li className="post-time">6 Mintues Ago
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="post-description">
                                                                                    <p>Quickly deliver going forward methods info
                                                                                        create empowerment before client-centered
                                                                                        bandwdth
                                                                                        Credibly pontficate interoperable leadership
                                                                                        skills ands B2B data awesome Continually
                                                                                        whiteboard
                                                                                        ands B2B data awesome Continually whiteboard

                                                                                    </p>
                                                                                    <div className="post-desc-img">
                                                                                        <div className="row g-3">
                                                                                            <div className="col-md-6">
                                                                                                <img src="assets/images/profile/post-image/02.jpg"
                                                                                                    alt="img" />
                                                                                            </div>
                                                                                            <div className="col-md-6">
                                                                                                <img src="assets/images/profile/post-image/03.jpg"
                                                                                                    alt="img" />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="post-meta">
                                                                                <div className="post-meta-top">
                                                                                    <p><a href="#"><i className="icofont-like"></i> <i
                                                                                                className="icofont-heart"></i> <i
                                                                                                className="icofont-laughing"></i>
                                                                                            <span>Julia,
                                                                                                Petrova and 306 like this</span></a>
                                                                                    </p>
                                                                                    <p>
                                                                                        <a href="#">136 Comments</a>
                                                                                    </p>
                                                                                </div>
                                                                                <div className="post-meta-bottom">
                                                                                    <ul className="react-list">
                                                                                        <li className="react"><a href="#"><i
                                                                                                    className="icofont-like"></i>
                                                                                                Like</a> </li>
                                                                                        <li className="react"><a href="#">
                                                                                                <i
                                                                                                    className="icofont-speech-comments"></i>
                                                                                                Comment
                                                                                            </a></li>
                                                                                        <li className="react"><a href="#">
                                                                                                
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="load-btn">
                                                                            <a href="#" className="lab-btn">Load More Post <i
                                                                                    className="icofont-spinner"></i></a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="tab-pane fade mentions-section show active"
                                                                        id="pills-mentions" role="tabpanel"
                                                                        aria-labelledby="pills-mentions-tab">
                                                                        <div className="create-post mb-20">
                                                                            <div className="lab-inner">
                                                                                <div className="lab-thumb">
                                                                                    <div className="thumb-inner">
                                                                                        <div className="thumb-img">
                                                                                            <img src="assets/images/profile/dp.png"
                                                                                                alt="img" />
                                                                                        </div>
                                                                                        <div className="thumb-content">
                                                                                            <h6><a href="#">
                                                                                                    William Smith
                                                                                                </a>
                                                                                            </h6>
                                                                                            <div className="custom-select">
                                                                                                <select>
                                                                                                    <option value="1">&#xf02c;
                                                                                                        Public</option>
                                                                                                    <option value="2">&#xec61;
                                                                                                        Private</option>
                                                                                                    <option value="3">&#xed0d;
                                                                                                        Friends</option>
                                                                                                </select>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="lab-content">
                                                                                    <form action="#" className="post-form">
                                                                                        <input type="text"
                                                                                            placeholder="Whats on your mind. William?" />
                                                                                        <div className="content-type">
                                                                                            <ul className="content-list">
                                                                                                <li className="text"><a href="#">
                                                                                                        <i className="icofont-edit"></i>
                                                                                                        Text
                                                                                                    </a></li>
                                                                                                <li className="image-video">
                                                                                                    <div className="file-btn"><i
                                                                                                            className="icofont-camera"></i>
                                                                                                        Photo/Videos</div>
                                                                                                    <input type="file" />
                                                                                                </li>
                                                                                                <li className="attach-file">
                                                                                                    <div className="file-btn"><i
                                                                                                            className="icofont-paper-clip"></i>
                                                                                                        Attach File</div>
                                                                                                    <input type="file" />
                                                                                                </li>
                                                                                                <li className="post-submit">
                                                                                                    <input type="submit"
                                                                                                        value="Post"
                                                                                                        className="lab-btn" />
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </form>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="post-item mb-20">
                                                                            <div className="post-content">
                                                                                <div className="post-author">
                                                                                    <div className="post-author-inner">
                                                                                        <div className="author-thumb">
                                                                                            <img src="assets/images/profile/dp.png"
                                                                                                alt="img" />
                                                                                        </div>
                                                                                        <div className="author-details">
                                                                                            <h6><a href="#">William Smith</a></h6>
                                                                                            <ul className="post-status">
                                                                                                <li className="post-privacy"><i
                                                                                                        className="icofont-world"></i>
                                                                                                    Public</li>
                                                                                                <li className="post-time">6 Mintues Ago
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="post-description">
                                                                                    <p>Quickly deliver going forward methods info
                                                                                        create empowerment before client-centered
                                                                                        bandwdth
                                                                                        Credibly pontficate interoperable leadership
                                                                                        skills ands B2B data awesome Continually
                                                                                        whiteboard
                                                                                        ands B2B data awesome Continually whiteboard
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="post-meta">
                                                                                <div className="post-meta-top">
                                                                                    <p><a href="#"><i className="icofont-like"></i> <i
                                                                                                className="icofont-heart"></i> <i
                                                                                                className="icofont-laughing"></i>
                                                                                            <span>Julia,
                                                                                                Petrova and 306 like this</span></a>
                                                                                    </p>
                                                                                    <p>
                                                                                        <a href="#">136 Comments</a>
                                                                                    </p>
                                                                                </div>
                                                                                <div className="post-meta-bottom">
                                                                                    <ul className="react-list">
                                                                                        <li className="react"><a href="#"><i
                                                                                                    className="icofont-like"></i>
                                                                                                Like</a> </li>
                                                                                        <li className="react"><a href="#">
                                                                                                <i
                                                                                                    className="icofont-speech-comments"></i>
                                                                                                Comment
                                                                                            </a></li>
                                                                                        <li className="react"><a href="#">
                                                                                                
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="post-item mb-20">
                                                                            <div className="post-content">
                                                                                <div className="post-author">
                                                                                    <div className="post-author-inner">
                                                                                        <div className="author-thumb">
                                                                                            <img src="assets/images/profile/dp.png"
                                                                                                alt="img" />
                                                                                        </div>
                                                                                        <div className="author-details">
                                                                                            <h6><a href="#">William Smith</a></h6>
                                                                                            <ul className="post-status">
                                                                                                <li className="post-privacy"><i
                                                                                                        className="icofont-world"></i>
                                                                                                    Public</li>
                                                                                                <li className="post-time">6 Mintues Ago
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="post-description">
                                                                                    <p>Quickly deliver going forward methods info
                                                                                        create empowerment before client-centered
                                                                                        bandwdth
                                                                                        Credibly pontficate interoperable leadership
                                                                                        skills ands B2B data awesome Continually
                                                                                        whiteboard
                                                                                        ands B2B data awesome Continually whiteboard

                                                                                    </p>
                                                                                    <div className="post-desc-img">
                                                                                        <img src="assets/images/profile/post-image/01.jpg"
                                                                                            alt="img" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="post-meta">
                                                                                <div className="post-meta-top">
                                                                                    <p><a href="#"><i className="icofont-like"></i> <i
                                                                                                className="icofont-heart"></i> <i
                                                                                                className="icofont-laughing"></i>
                                                                                            <span>Julia,
                                                                                                Petrova and 306 like this</span></a>
                                                                                    </p>
                                                                                    <p>
                                                                                        <a href="#">136 Comments</a>
                                                                                    </p>
                                                                                </div>
                                                                                <div className="post-meta-bottom">
                                                                                    <ul className="react-list">
                                                                                        <li className="react"><a href="#"><i
                                                                                                    className="icofont-like"></i>
                                                                                                Like</a> </li>
                                                                                        <li className="react"><a href="#">
                                                                                                <i
                                                                                                    className="icofont-speech-comments"></i>
                                                                                                Comment
                                                                                            </a></li>
                                                                                        <li className="react"><a href="#">
                                                                                                
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="post-item mb-20">
                                                                            <div className="post-content">
                                                                                <div className="post-author">
                                                                                    <div className="post-author-inner">
                                                                                        <div className="author-thumb">
                                                                                            <img src="assets/images/profile/dp.png"
                                                                                                alt="img" />
                                                                                        </div>
                                                                                        <div className="author-details">
                                                                                            <h6><a href="#">William Smith</a></h6>
                                                                                            <ul className="post-status">
                                                                                                <li className="post-privacy"><i
                                                                                                        className="icofont-world"></i>
                                                                                                    Public</li>
                                                                                                <li className="post-time">6 Mintues Ago
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="post-description">
                                                                                    <p>Quickly deliver going forward methods info
                                                                                        create empowerment before client-centered
                                                                                        bandwdth
                                                                                        Credibly pontficate interoperable leadership
                                                                                        skills ands B2B data awesome Continually
                                                                                        whiteboard
                                                                                        ands B2B data awesome Continually whiteboard

                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="post-meta">
                                                                                <div className="post-meta-top">
                                                                                    <p><a href="#"><i className="icofont-like"></i> <i
                                                                                                className="icofont-heart"></i> <i
                                                                                                className="icofont-laughing"></i>
                                                                                            <span>Julia,
                                                                                                Petrova and 306 like this</span></a>
                                                                                    </p>
                                                                                    <p>
                                                                                        <a href="#">136 Comments</a>
                                                                                    </p>
                                                                                </div>
                                                                                <div className="post-meta-bottom">
                                                                                    <ul className="react-list">
                                                                                        <li className="react"><a href="#"><i
                                                                                                    className="icofont-like"></i>
                                                                                                Like</a> </li>
                                                                                        <li className="react"><a href="#">
                                                                                                <i
                                                                                                    className="icofont-speech-comments"></i>
                                                                                                Comment
                                                                                            </a></li>
                                                                                        <li className="react"><a href="#">
                                                                                                
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="post-item mb-20">
                                                                            <div className="post-content">
                                                                                <div className="post-author">
                                                                                    <div className="post-author-inner">
                                                                                        <div className="author-thumb">
                                                                                            <img src="assets/images/profile/dp.png"
                                                                                                alt="img" />
                                                                                        </div>
                                                                                        <div className="author-details">
                                                                                            <h6><a href="#">William Smith</a></h6>
                                                                                            <ul className="post-status">
                                                                                                <li className="post-privacy"><i
                                                                                                        className="icofont-world"></i>
                                                                                                    Public</li>
                                                                                                <li className="post-time">6 Mintues Ago
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="post-description">
                                                                                    <p>Quickly deliver going forward methods info
                                                                                        create empowerment before client-centered
                                                                                        bandwdth
                                                                                        Credibly pontficate interoperable leadership
                                                                                        skills ands B2B data awesome Continually
                                                                                        whiteboard
                                                                                        ands B2B data awesome Continually whiteboard

                                                                                    </p>
                                                                                    <div className="post-desc-img">
                                                                                        <div className="row g-3">
                                                                                            <div className="col-md-6">
                                                                                                <img src="assets/images/profile/post-image/02.jpg"
                                                                                                    alt="img" />
                                                                                            </div>
                                                                                            <div className="col-md-6">
                                                                                                <img src="assets/images/profile/post-image/03.jpg"
                                                                                                    alt="img" />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="post-meta">
                                                                                <div className="post-meta-top">
                                                                                    <p><a href="#"><i className="icofont-like"></i> <i
                                                                                                className="icofont-heart"></i> <i
                                                                                                className="icofont-laughing"></i>
                                                                                            <span>Julia,
                                                                                                Petrova and 306 like this</span></a>
                                                                                    </p>
                                                                                    <p>
                                                                                        <a href="#">136 Comments</a>
                                                                                    </p>
                                                                                </div>
                                                                                <div className="post-meta-bottom">
                                                                                    <ul className="react-list">
                                                                                        <li className="react"><a href="#"><i
                                                                                                    className="icofont-like"></i>
                                                                                                Like</a> </li>
                                                                                        <li className="react"><a href="#">
                                                                                                <i
                                                                                                    className="icofont-speech-comments"></i>
                                                                                                Comment
                                                                                            </a></li>
                                                                                        <li className="react"><a href="#">
                                                                                                
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="load-btn">
                                                                            <a href="#" className="lab-btn">Load More Post <i
                                                                                    className="icofont-spinner"></i></a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="tab-pane fade" id="pills-favorites" role="tabpanel"
                                                                        aria-labelledby="pills-favorites-tab">

                                                                        <div className="post-item mb-20">
                                                                            <div className="post-content">
                                                                                <div className="post-author">
                                                                                    <div className="post-author-inner">
                                                                                        <div className="author-thumb">
                                                                                            <img src="assets/images/profile/dp.png"
                                                                                                alt="img" />
                                                                                        </div>
                                                                                        <div className="author-details">
                                                                                            <h6><a href="#">William Smith</a></h6>
                                                                                            <ul className="post-status">
                                                                                                <li className="post-privacy"><i
                                                                                                        className="icofont-world"></i>
                                                                                                    Public</li>
                                                                                                <li className="post-time">6 Mintues Ago
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="post-description">
                                                                                    <p>Quickly deliver going forward methods info
                                                                                        create empowerment before client-centered
                                                                                        bandwdth
                                                                                        Credibly pontficate interoperable leadership
                                                                                        skills ands B2B data awesome Continually
                                                                                        whiteboard
                                                                                        ands B2B data awesome Continually whiteboard

                                                                                    </p>
                                                                                    <div className="post-desc-img">
                                                                                        <img src="assets/images/profile/post-image/01.jpg"
                                                                                            alt="img" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="post-meta">
                                                                                <div className="post-meta-top">
                                                                                    <p><a href="#"><i className="icofont-like"></i> <i
                                                                                                className="icofont-heart"></i> <i
                                                                                                className="icofont-laughing"></i>
                                                                                            <span>Julia,
                                                                                                Petrova and 306 like this</span></a>
                                                                                    </p>
                                                                                    <p>
                                                                                        <a href="#">136 Comments</a>
                                                                                    </p>
                                                                                </div>
                                                                                <div className="post-meta-bottom">
                                                                                    <ul className="react-list">
                                                                                        <li className="react"><a href="#"><i
                                                                                                    className="icofont-like"></i>
                                                                                                Like</a> </li>
                                                                                        <li className="react"><a href="#">
                                                                                                <i
                                                                                                    className="icofont-speech-comments"></i>
                                                                                                Comment
                                                                                            </a></li>
                                                                                        <li className="react"><a href="#">
                                                                                                
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="post-item mb-20">
                                                                            <div className="post-content">
                                                                                <div className="post-author">
                                                                                    <div className="post-author-inner">
                                                                                        <div className="author-thumb">
                                                                                            <img src="assets/images/profile/dp.png"
                                                                                                alt="img" />
                                                                                        </div>
                                                                                        <div className="author-details">
                                                                                            <h6><a href="#">William Smith</a></h6>
                                                                                            <ul className="post-status">
                                                                                                <li className="post-privacy"><i
                                                                                                        className="icofont-world"></i>
                                                                                                    Public</li>
                                                                                                <li className="post-time">6 Mintues Ago
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="post-description">
                                                                                    <p>Quickly deliver going forward methods info
                                                                                        create empowerment before client-centered
                                                                                        bandwdth
                                                                                        Credibly pontficate interoperable leadership
                                                                                        skills ands B2B data awesome Continually
                                                                                        whiteboard
                                                                                        ands B2B data awesome Continually whiteboard

                                                                                    </p>
                                                                                    <div className="post-desc-img">
                                                                                        <div className="row g-3">
                                                                                            <div className="col-md-6">
                                                                                                <img src="assets/images/profile/post-image/02.jpg"
                                                                                                    alt="img" />
                                                                                            </div>
                                                                                            <div className="col-md-6">
                                                                                                <img src="assets/images/profile/post-image/03.jpg"
                                                                                                    alt="img" />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="post-meta">
                                                                                <div className="post-meta-top">
                                                                                    <p><a href="#"><i className="icofont-like"></i> <i
                                                                                                className="icofont-heart"></i> <i
                                                                                                className="icofont-laughing"></i>
                                                                                            <span>Julia,
                                                                                                Petrova and 306 like this</span></a>
                                                                                    </p>
                                                                                    <p>
                                                                                        <a href="#">136 Comments</a>
                                                                                    </p>
                                                                                </div>
                                                                                <div className="post-meta-bottom">
                                                                                    <ul className="react-list">
                                                                                        <li className="react"><a href="#"><i
                                                                                                    className="icofont-like"></i>
                                                                                                Like</a> </li>
                                                                                        <li className="react"><a href="#">
                                                                                                <i
                                                                                                    className="icofont-speech-comments"></i>
                                                                                                Comment
                                                                                            </a></li>
                                                                                        <li className="react"><a href="#">
                                                                                                
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="load-btn">
                                                                            <a href="#" className="lab-btn">Load More Post <i
                                                                                    className="icofont-spinner"></i></a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="tab-pane fade" id="pills-friends" role="tabpanel"
                                                                        aria-labelledby="pills-friends-tab">

                                                                        <div className="post-item mb-20">
                                                                            <div className="post-content">
                                                                                <div className="post-author">
                                                                                    <div className="post-author-inner">
                                                                                        <div className="author-thumb">
                                                                                            <img src="assets/images/profile/dp.png"
                                                                                                alt="img" />
                                                                                        </div>
                                                                                        <div className="author-details">
                                                                                            <h6><a href="#">William Smith</a></h6>
                                                                                            <ul className="post-status">
                                                                                                <li className="post-privacy"><i
                                                                                                        className="icofont-world"></i>
                                                                                                    Public</li>
                                                                                                <li className="post-time">6 Mintues Ago
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="post-description">
                                                                                    <p>Quickly deliver going forward methods info
                                                                                        create empowerment before client-centered
                                                                                        bandwdth
                                                                                        Credibly pontficate interoperable leadership
                                                                                        skills ands B2B data awesome Continually
                                                                                        whiteboard
                                                                                        ands B2B data awesome Continually whiteboard

                                                                                    </p>
                                                                                    <div className="post-desc-img">
                                                                                        <div className="row g-3">
                                                                                            <div className="col-md-6">
                                                                                                <img src="assets/images/profile/post-image/02.jpg"
                                                                                                    alt="img" />
                                                                                            </div>
                                                                                            <div className="col-md-6">
                                                                                                <img src="assets/images/profile/post-image/03.jpg"
                                                                                                    alt="img" />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="post-meta">
                                                                                <div className="post-meta-top">
                                                                                    <p><a href="#"><i className="icofont-like"></i> <i
                                                                                                className="icofont-heart"></i> <i
                                                                                                className="icofont-laughing"></i>
                                                                                            <span>Julia,
                                                                                                Petrova and 306 like this</span></a>
                                                                                    </p>
                                                                                    <p>
                                                                                        <a href="#">136 Comments</a>
                                                                                    </p>
                                                                                </div>
                                                                                <div className="post-meta-bottom">
                                                                                    <ul className="react-list">
                                                                                        <li className="react"><a href="#"><i
                                                                                                    className="icofont-like"></i>
                                                                                                Like</a> </li>
                                                                                        <li className="react"><a href="#">
                                                                                                <i
                                                                                                    className="icofont-speech-comments"></i>
                                                                                                Comment
                                                                                            </a></li>
                                                                                        <li className="react"><a href="#">
                                                                                                
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="post-item mb-20">
                                                                            <div className="post-content">
                                                                                <div className="post-author">
                                                                                    <div className="post-author-inner">
                                                                                        <div className="author-thumb">
                                                                                            <img src="assets/images/profile/dp.png"
                                                                                                alt="img" />
                                                                                        </div>
                                                                                        <div className="author-details">
                                                                                            <h6><a href="#">William Smith</a></h6>
                                                                                            <ul className="post-status">
                                                                                                <li className="post-privacy"><i
                                                                                                        className="icofont-world"></i>
                                                                                                    Public</li>
                                                                                                <li className="post-time">6 Mintues Ago
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="post-description">
                                                                                    <p>Quickly deliver going forward methods info
                                                                                        create empowerment before client-centered
                                                                                        bandwdth
                                                                                        Credibly pontficate interoperable leadership
                                                                                        skills ands B2B data awesome Continually
                                                                                        whiteboard
                                                                                        ands B2B data awesome Continually whiteboard
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="post-meta">
                                                                                <div className="post-meta-top">
                                                                                    <p><a href="#"><i className="icofont-like"></i> <i
                                                                                                className="icofont-heart"></i> <i
                                                                                                className="icofont-laughing"></i>
                                                                                            <span>Julia,
                                                                                                Petrova and 306 like this</span></a>
                                                                                    </p>
                                                                                    <p>
                                                                                        <a href="#">136 Comments</a>
                                                                                    </p>
                                                                                </div>
                                                                                <div className="post-meta-bottom">
                                                                                    <ul className="react-list">
                                                                                        <li className="react"><a href="#"><i
                                                                                                    className="icofont-like"></i>
                                                                                                Like</a> </li>
                                                                                        <li className="react"><a href="#">
                                                                                                <i
                                                                                                    className="icofont-speech-comments"></i>
                                                                                                Comment
                                                                                            </a></li>
                                                                                        <li className="react"><a href="#">
                                                                                                
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="post-item mb-20">
                                                                            <div className="post-content">
                                                                                <div className="post-author">
                                                                                    <div className="post-author-inner">
                                                                                        <div className="author-thumb">
                                                                                            <img src="assets/images/profile/dp.png"
                                                                                                alt="img" />
                                                                                        </div>
                                                                                        <div className="author-details">
                                                                                            <h6><a href="#">William Smith</a></h6>
                                                                                            <ul className="post-status">
                                                                                                <li className="post-privacy"><i
                                                                                                        className="icofont-world"></i>
                                                                                                    Public</li>
                                                                                                <li className="post-time">6 Mintues Ago
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="post-description">
                                                                                    <p>Quickly deliver going forward methods info
                                                                                        create empowerment before client-centered
                                                                                        bandwdth
                                                                                        Credibly pontficate interoperable leadership
                                                                                        skills ands B2B data awesome Continually
                                                                                        whiteboard
                                                                                        ands B2B data awesome Continually whiteboard

                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="post-meta">
                                                                                <div className="post-meta-top">
                                                                                    <p><a href="#"><i className="icofont-like"></i> <i
                                                                                                className="icofont-heart"></i> <i
                                                                                                className="icofont-laughing"></i>
                                                                                            <span>Julia,
                                                                                                Petrova and 306 like this</span></a>
                                                                                    </p>
                                                                                    <p>
                                                                                        <a href="#">136 Comments</a>
                                                                                    </p>
                                                                                </div>
                                                                                <div className="post-meta-bottom">
                                                                                    <ul className="react-list">
                                                                                        <li className="react"><a href="#"><i
                                                                                                    className="icofont-like"></i>
                                                                                                Like</a> </li>
                                                                                        <li className="react"><a href="#">
                                                                                                <i
                                                                                                    className="icofont-speech-comments"></i>
                                                                                                Comment
                                                                                            </a></li>
                                                                                        <li className="react"><a href="#">
                                                                                                
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="load-btn">
                                                                            <a href="#" className="lab-btn">Load More Post <i
                                                                                    className="icofont-spinner"></i></a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="tab-pane fade" id="pills-groups" role="tabpanel"
                                                                        aria-labelledby="pills-groups-tab">
                                                                        <div className="post-item mb-20">
                                                                            <div className="post-content">
                                                                                <div className="post-author">
                                                                                    <div className="post-author-inner">
                                                                                        <div className="author-thumb">
                                                                                            <img src="assets/images/profile/dp.png"
                                                                                                alt="img" />
                                                                                        </div>
                                                                                        <div className="author-details">
                                                                                            <h6><a href="#">William Smith</a></h6>
                                                                                            <ul className="post-status">
                                                                                                <li className="post-privacy"><i
                                                                                                        className="icofont-world"></i>
                                                                                                    Public</li>
                                                                                                <li className="post-time">6 Mintues Ago
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="post-description">
                                                                                    <p>Quickly deliver going forward methods info
                                                                                        create empowerment before client-centered
                                                                                        bandwdth
                                                                                        Credibly pontficate interoperable leadership
                                                                                        skills ands B2B data awesome Continually
                                                                                        whiteboard
                                                                                        ands B2B data awesome Continually whiteboard

                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="post-meta">
                                                                                <div className="post-meta-top">
                                                                                    <p><a href="#"><i className="icofont-like"></i> <i
                                                                                                className="icofont-heart"></i> <i
                                                                                                className="icofont-laughing"></i>
                                                                                            <span>Julia,
                                                                                                Petrova and 306 like this</span></a>
                                                                                    </p>
                                                                                    <p>
                                                                                        <a href="#">136 Comments</a>
                                                                                    </p>
                                                                                </div>
                                                                                <div className="post-meta-bottom">
                                                                                    <ul className="react-list">
                                                                                        <li className="react"><a href="#"><i
                                                                                                    className="icofont-like"></i>
                                                                                                Like</a> </li>
                                                                                        <li className="react"><a href="#">
                                                                                                <i
                                                                                                    className="icofont-speech-comments"></i>
                                                                                                Comment
                                                                                            </a></li>
                                                                                        <li className="react"><a href="#">
                                                                                                
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="load-btn">
                                                                            <a href="#" className="lab-btn">Load More Post <i
                                                                                    className="icofont-spinner"></i></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </article>
                                                    </div>

                                                    <div className="col-xl-4">
                                                        <aside className="mt-5 mt-xl-0">
                                                           
                                                            <WidgetLikeSection />
                                                       
                                                        </aside>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                            <div>
                                                <div className="row">
                                                    <div className="col-xl-8">
                                                        <article>
                                                            <div className="info-card mb-20">
                                                                <div className="info-card-title">
                                                                    <h6>Base Info</h6>
                                                                </div>
                                                                <div className="info-card-content">
                                                                    <ul className="info-list">
                                                                        <li>
                                                                            <p className="info-name">Name</p>
                                                                            <p className="info-details">William </p>
                                                                        </li>
                                                                        <li>
                                                                            <p className="info-name">Firstmame</p>
                                                                            <p className="info-details">Smith</p>
                                                                        </li>
                                                                        <li>
                                                                            <p className="info-name">My gender</p>

                                                                            <div className="custom-select right w-100">
                                                                            <select
                                                                                name="gender"
                                                                                id="gender"
                                                                                
                                                                            >
                                                                                <option value="0">Select wished gender </option>
                                                                                <option value="male">Male</option>
                                                                                <option value="female">Female</option>
                                                                                <option value="others">Others</option>
                                                                            </select>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <p className="info-name"> Marital status</p>

                                                                            <div className="custom-select right w-100">
                                                                            <select
                                                                                name="userMaritalStatus"
                                                                                id="userMaritalStatus"
                                                                                
                                                                            >
                                                                                <option value="" disabled selected>Choose Marital Status</option>
                                                                                <option value="Single">Single</option>
                                                                                <option value="married">married</option>
                                                                            </select>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <p className="info-name">Age</p>
                                                                            <div className="custom-select right w-100">
                                                                            <select
                                                                                name="userAge"
                                                                                id="userAge"
                                                                                
                                                                            >
                                                                                <option value="0">Select age </option>
                                                                                <option value="1">1</option>
                                                                                <option value="3">3</option>
                                                                                <option value="3">3</option>
                                                                            </select>
                                                                            </div>
                                                                        </li>
                                                               
                                                                        <li>
                                                                            <p className="info-name">I'm living in</p>

                                                                            <div className="custom-select right w-100">
                                                                            <select
                                                                                name="userLocation"
                                                                                id="userLocation"
                                                                                
                                                                            >
                                                                                <option value="" disabled selected>Choose city</option>
                                                                                <option value="Oslo">Oslo</option>
                                                                                <option value="Copenhagen">Copenhagen</option>
                                                                            </select>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="info-card mb-20">
                                                                <div className="info-card-title">
                                                                    <h6>Myself Summary</h6>
                                                                </div>
                                                                <div className="info-card-content">
                                                                    <p>Collaboratively innovate compelling mindshare after
                                                                        prospective partnerships Competently sereiz long-term
                                                                        high-impact internal or "organic" sources via user friendly
                                                                        strategic themesr areas creat Dramatically coordinate
                                                                        premium partnerships rather than standards compliant
                                                                        technologies ernd Dramatically matrix ethical collaboration
                                                                        and idea-sharing through opensource methodologies and
                                                                        Intrinsicly grow collaborative platforms vis-a-vis effective
                                                                        scenarios. Energistically strategize cost effective ideas
                                                                        before the worke unde.</p>
                                                                </div>
                                                            </div>
                                                            <div className="info-card mb-20">
                                                                <div className="info-card-title">
                                                                    <h6>Looking For</h6>
                                                                </div>
                                                                <div className="info-card-content">
                                                                    <ul className="info-list">
                                                                        <li>
                                                                            <p className="info-name">Things I'm looking for</p>

                                                                            <div className="custom-select right w-100">
                                                                            <select
                                                                                name="sexOfPotentialCandidate"
                                                                                id="sexOfPotentialCandidate"
                                                                                
                                                                            >
                                                                                <option value="0">Select wished gender </option>
                                                                                <option value="male">Male</option>
                                                                                <option value="female">Female</option>
                                                                                <option value="others">Others</option>
                                                                            </select>
                                                                            </div>
                                                                        </li>
                                                                 
                                                                        <li>
                                                                            <p className="info-name">Min age of potential match</p>

                                                                            <div className="custom-select right w-100">
                                                                            <select
                                                                                name="minAgeOfPotentialCandidate"
                                                                                id="minAgeOfPotentialCandidate"
                                                                                
                                                                            >
                                                                                <option value="0">Select age </option>
                                                                                <option value="1">1</option>
                                                                                <option value="3">3</option>
                                                                                <option value="3">3</option>
                                                                            </select>
                                                                            </div>
                                                                        </li>

                                                                        <li>
                                                                            <p className="info-name">Max age of potential match</p>

                                                                            <div className="custom-select right w-100">
                                                                            <select
                                                                                name="maxAgeOfPotentialCandidate"
                                                                                id="maxAgeOfPotentialCandidate"
                                                                                
                                                                            >
                                                                                <option value="0">Select age </option>
                                                                                <option value="1">1</option>
                                                                                <option value="3">3</option>
                                                                                <option value="3">3</option>
                                                                            </select>
                                                                            </div>
                                                                        </li>

                                                                        <li>
                                                                            <p className="info-name">Min height of potential match</p>

                                                                            <div className="custom-select right w-100">
                                                                            <select
                                                                                name="minHeightOfPotentialCandidate"
                                                                                id="minHeightOfPotentialCandidate"
                                                                                
                                                                            >
                                                                                <option value="0">Select height </option>
                                                                                <option value="1">1</option>
                                                                                <option value="3">3</option>
                                                                                <option value="3">3</option>
                                                                            </select>
                                                                            </div>
                                                                        </li>

                                                                        <li>
                                                                            <p className="info-name">Max height of potential match</p>

                                                                            <div className="custom-select right w-100">
                                                                            <select
                                                                                name="maxHeightOfPotentialCandidate"
                                                                                id="maxHeightOfPotentialCandidate"
                                                                                
                                                                            >
                                                                                <option value="0">Select height </option>
                                                                                <option value="1">1</option>
                                                                                <option value="3">3</option>
                                                                                <option value="3">3</option>
                                                                            </select>
                                                                            </div>
                                                                        </li>
                                         
                                                                        <li>
                                                                            <p className="info-name">Min weight of potential match</p>

                                                                            <div className="custom-select right w-100">
                                                                            <select
                                                                                name="minWeightOfPotentialCandidate"
                                                                                id="minWeightOfPotentialCandidate"
                                                                                
                                                                            >
                                                                                <option value="0">Select weight </option>
                                                                                <option value="1">1</option>
                                                                                <option value="3">3</option>
                                                                                <option value="3">3</option>
                                                                            </select>
                                                                            </div>
                                                                        </li>

                                                                        <li>
                                                                            <p className="info-name">Max weight of potential match</p>

                                                                            <div className="custom-select right w-100">
                                                                            <select
                                                                                name="maxWeightOfPotentialCandidate"
                                                                                id="maxWeightOfPotentialCandidate"
                                                                                
                                                                            >
                                                                                <option value="0">Select weight </option>
                                                                                <option value="1">1</option>
                                                                                <option value="3">3</option>
                                                                                <option value="3">3</option>
                                                                            </select>
                                                                            </div>
                                                                        </li>
                                                                        
                                                                        <li>
                                                                            <p className="info-name">Potential match living in</p>

                                                                            <div className="custom-select right w-100">
                                                                            <select
                                                                                name="cityOfPotentialCandidate"
                                                                                id="cityOfPotentialCandidate"
                                                                                
                                                                            >
                                                                                <option value="" disabled selected>Choose city</option>
                                                                                <option value="Oslo">Oslo</option>
                                                                                <option value="Copenhagen">Copenhagen</option>
                                                                            </select>
                                                                            </div>
                                                                        </li>

                                                                        <li>
                                                                            <p className="info-name">Potential match Marital status</p>

                                                                            <div className="custom-select right w-100">
                                                                            <select
                                                                                name="wishedStatusPotentialCandidate"
                                                                                id="wishedStatusPotentialCandidate"
                                                                                
                                                                            >
                                                                                <option value="" disabled selected>Choose Marital Status</option>
                                                                                <option value="Single">Single</option>
                                                                                <option value="married">married</option>
                                                                            </select>
                                                                            </div>
                                                                        </li>

                                                                        <li>
                                                                            <p className="info-name">Potential match religion</p>

                                                                            <div className="custom-select right w-100">
                                                                            <select
                                                                                name="religionOfPotentialCandidate"
                                                                                id="religionOfPotentialCandidate"
                                                                                
                                                                            >
                                                                                <option value="" disabled selected>Choose Religion</option>
                                                                                <option value="Islam">Islam</option>
                                                                                <option value="Hinduism">Hinduism</option>
                                                                                <option value="Christianity">Christianity</option>
                                                                                <option value="Jews">Jews</option>
                                                                            </select>
                                                                            </div>
                                                                        </li>

                                                                        <li>
                                                                            <p className="info-name">Potential Smoking status</p>

                                                                            <div className="custom-select right w-100">
                                                                            <select
                                                                                name="smokingStatusOfPotentialCandidate"
                                                                                id="smokingStatusOfPotentialCandidate"
                                                                                
                                                                            >
                                                                                 <option value="" selected>Choose Smoking status</option>
                                                                                    <option value="No">No</option>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="Sometimes">Sometimes</option>
                                                                            </select>
                                                                            </div>
                                                                        </li>

                                                                        <li>
                                                                            <p className="info-name">Potential match eye color</p>

                                                                            <div className="custom-select right w-100">
                                                                            <select
                                                                                name="eyeColorOfPotentialCandidate"
                                                                                id="eyeColorOfPotentialCandidate"
                                                                                
                                                                            >
                                                                                <option value="" selected>Choose eye color</option>
                                                                                <option value="Amber">Amber</option>
                                                                                <option value="Blue">Blue</option>
                                                                                <option value="Brown">Brown</option>
                                                                                <option value="Gray">Gray</option>
                                                                                <option value="Green">Green</option>
                                                                                <option value="Hazel">Hazel</option>
                                                                            </select>
                                                                            </div>
                                                                        </li>

                                                                        <li>
                                                                            <p className="info-name">Potential match hair color</p>

                                                                            <div className="custom-select right w-100">
                                                                            <select
                                                                                name="hairColorOfPotentialCandidate"
                                                                                id="hairColorOfPotentialCandidate"
                                                                                
                                                                            >
                                                                                <option value="" selected>hair color</option>
                                                                                <option value="Amber">Amber</option>
                                                                                <option value="Blue">Blue</option>
                                                                                <option value="Brown">Brown</option>
                                                                                <option value="Gray">Gray</option>
                                                                                <option value="Green">Green</option>
                                                                                <option value="Hazel">Hazel</option>
                                                                            </select>
                                                                            </div>
                                                                        </li>

                                                                        <li>
                                                                            <p className="info-name">Potential match body style</p>

                                                                            <div className="custom-select right w-100">
                                                                            <select
                                                                                name="bodyOfPotentialCandidate"
                                                                                id="bodyOfPotentialCandidate"
                                                                                
                                                                            >
                                                                                <option value="" disabled selected> Select physique </option>
                                                                                <option value="Thin"> Thin </option>
                                                                                <option value="Normal"> Normal </option>
                                                                                <option value="Well-trained"> Well-trained </option>
                                                                                <option value="Overweight"> Overweight </option>
                                                                                <option value="Other"> Other </option>
                                                                            </select>
                                                                            </div>
                                                                        </li>
                                         
                                                                        <li>
                                                                            <p className="info-name">Potential match apperance</p>

                                                                            <div className="custom-select right w-100">
                                                                            <select
                                                                                name="apperanceOfPotentialCandidate"
                                                                                id="apperanceOfPotentialCandidate"
                                                                                
                                                                            >
                                                                                <option value="" disabled selected> Select Appearance </option>
                                                                                <option value="Very attractive"> Very attractive </option>
                                                                                <option value="Attractive"> Attractive </option>
                                                                                <option value="Medium"> Medium </option>
                                                                                <option value="Not relevant or important"> Not relevant or important </option>
                                                                            </select>
                                                                            </div>
                                                                        </li>
                                         
                                                                        <li>
                                                                            <p className="info-name">Potential match clothing style</p>

                                                                            <div className="custom-select right w-100">
                                                                            <select
                                                                                name="clothingOfPotentialCandidate"
                                                                                id="clothingOfPotentialCandidate"
                                                                                
                                                                            >
                                                                                <option value="" disabled selected> Select clothing style </option>
                                                                                <option value="Classic"> Classic </option>
                                                                                <option value="Old School"> Old School </option>
                                                                                <option value="Branded"> Branded </option>
                                                                                <option value="Goth"> Goth </option>
                                                                                <option value="Other"> Other </option>
                                                                            </select>
                                                                            </div>
                                                                        </li>
                                         
                                                                        <li>
                                                                            <p className="info-name">Potential match body art</p>

                                                                            <div className="custom-select right w-100">
                                                                            <select
                                                                                name="BodyArtOfPotentialCandidate"
                                                                                id="BodyArtOfPotentialCandidate"
                                                                                
                                                                            >
                                                                                 <option value="" disabled selected> Select Body Decoration </option>
                                                                                <option value="Piercing"> Piercings </option>
                                                                                <option value="Tattoo"> Tattoo </option>
                                                                            </select>
                                                                            </div>
                                                                        </li>
                                         
                                                                        <li>
                                                                            <p className="info-name">Potential match education</p>

                                                                            <div className="custom-select right w-100">
                                                                            <select
                                                                                name="educationOfPotentialCandidate"
                                                                                id="educationOfPotentialCandidate"            
                                                                            >
                                                                                <option value="" disabled selected>Choose Education</option>
                                                                                <option value="high school education">high school education</option>
                                                                                <option value="university education">university education</option>
                                                                                <option value="Technical">Technical</option>
                                                                                <option value="Academic">Academic</option>
                                                                                <option value="Other">Other</option>
                                                                               
                                                                            </select>
                                                                            </div>
                                                                        </li>

                                                                        <li>
                                                                            <p className="info-name">Potential match job in</p>

                                                                            <div className="custom-select right w-100">
                                                                            <select
                                                                                name="jobOfPotentialCandidate"
                                                                                id="jobOfPotentialCandidate"            
                                                                            >
                                                                                 <option value="" disabled selected> Select Employment </option>
                                                                                <option value="Information Technology"> Information Technology </option>
                                                                                <option value="Engineering and Engineering"> Engineering and Engineering </option>
                                                                                <option value="Management and Staff"> Management and Staff </option>
                                                                                <option value="Trade and service"> Trade and service </option>
                                                                                <option value="Social and health"> Social and health </option>
                                                                                <option value="Office and Finance"> Office and Finance </option>
                                                                                <option value="Sales and Communications"> Sales and Communications </option>
                                                                                <option value="Other"> Other </option>
                                                                            </select>
                                                                            </div>
                                                                        </li>

                                                                        <li>
                                                                            <p className="info-name">Potential match living style</p>

                                                                            <div className="custom-select right w-100">
                                                                            <select
                                                                                name="livingStyleOfPotentialCandidate"
                                                                                id="livingStyleOfPotentialCandidate"            
                                                                            >
                                                                                  <option value="" disabled selected> Select your Housing situation </option>
                                                                                    <option value="College"> College </option>
                                                                                    <option value="Own house"> Own house </option>
                                                                                    <option value="Condominium"> Condominium </option>
                                                                                    <option value="Condominium"> Condominium </option>
                                                                                    <option value="Other"> Other </option>
                                                                            </select>
                                                                            </div>
                                                                        </li>

                                                                        <li>
                                                                            <p className="info-name">Potential match prefered vehicle</p>

                                                                            <div className="custom-select right w-100">
                                                                            <select
                                                                                name="vehicleOfPotentialCandidate"
                                                                                id="vehicleOfPotentialCandidate"            
                                                                            >
                                                                                <option value="" disabled selected> Select your transportation </option>
                                                                                <option value="Have a car"> Have a car </option>
                                                                                <option value="Do not have a house"> Do not have a car </option>
                                                                                <option value="Cycle"> Cycle </option>
                                                                                <option value="Motorcycle"> Motorcycle </option>
                                                                                <option value="Other"> Other </option>
                                                                            </select>
                                                                            </div>
                                                                        </li>

                                                                        <li>
                                                                            <p className="info-name">Potential match kids</p>

                                                                            <div className="custom-select right w-100">
                                                                            <select
                                                                                name="numOfChildrenOfPotentialCandidate"
                                                                                id="numOfChildrenOfPotentialCandidate"            
                                                                            >
                                                                                <option value="" disabled selected> number of children </option>
                                                                                <option value="1">1</option>
                                                                                <option value="2">2</option>
                                                                                <option value="3">3</option>
                                                                                <option value="4">4</option>
                                                                            </select>
                                                                            </div>
                                                                        </li>

                                                                        <li>
                                                                            <p className="info-name">Potential match salery</p>

                                                                            <div className="custom-select right w-100">
                                                                            <select
                                                                                name="jobOfPotentialCandidate"
                                                                                id="jobOfPotentialCandidate"            
                                                                            >
                                                                                     <option value="more then 3000 kr,-">more then 3000</option>
                                                                                    <option value="5.000-10.000 kr,-">5.000-10.000 kr,-</option>
                                                                                    <option value="10.000-15.000 kr,-">10.000-15.000 kr,-</option>
                                                                                    <option value="15.000-25.000 kr,-">15.000-25.000 kr,-</option>
                                                                                    <option value="25.000-30.000 kr,-">25.000-30.000 kr,-</option>
                                                                                    <option value="30.000-35.000 kr,-">30.00i0-35.000 kr,-</option>
                                                                                    <option value="30.000-35.000 kr,-">30.000-35.000 kr,-</option>
                                                                                    <option value="35.000-40.000 kr,-">35.000-40.000 kr,-</option>
                                                                                    <option value="40.000-45.000 kr,-">40.000-45.000 kr,-</option>
                                                                                    <option value="45.000-50.000 kr,-">45.000-50.000 kr,-</option>
                                                                                    <option value="+50.000 kr,-">+50.000 kr,-</option>
                                                                                <option value="Other"> Other </option>
                                                                            </select>
                                                                            </div>
                                                                        </li>
                                         
                                         
                                         
                                        
                                        
                                        
                                                                       
                                                                    </ul>
                                                        
                                                                </div>
                                                            </div>
                                                            <div className="info-card mb-20">
                                                                <div className="info-card-title">
                                                                    <h6>Lifestyle</h6>
                                                                </div>
                                                                <div className="info-card-content">
                                                                    <ul className="info-list">
                                                                        <li>
                                                                            <p className="info-name">Potential match education</p>

                                                                            <div className="custom-select right w-100">
                                                                            <select
                                                                                name="userMaximumEducation"
                                                                                id="userMaximumEducation"            
                                                                            >
                                                                                <option value="" disabled selected>Choose Education</option>
                                                                                <option value="high school education">high school education</option>
                                                                                <option value="university education">university education</option>
                                                                                <option value="Technical">Technical</option>
                                                                                <option value="Academic">Academic</option>
                                                                                <option value="Other">Other</option>
                                                                               
                                                                            </select>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <p className="info-name">Religion </p>
                                                                            <div className="custom-select right w-100">
                                                                            <select
                                                                                name="userReligion"
                                                                                id="userReligion"
                                                                                
                                                                            >
                                                                                <option value="" disabled selected>Choose Religion</option>
                                                                                <option value="Islam">Islam</option>
                                                                                <option value="Hinduism">Hinduism</option>
                                                                                <option value="Christianity">Christianity</option>
                                                                                <option value="Jews">Jews</option>
                                                                            </select>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <p className="info-name"> Smoking status</p>

                                                                            <div className="custom-select right w-100">
                                                                            <select
                                                                                name="userSmokingStaus"
                                                                                id="userSmokingStaus"
                                                                                
                                                                            >
                                                                                 <option value="" selected>Choose Smoking status</option>
                                                                                    <option value="No">No</option>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="Sometimes">Sometimes</option>
                                                                            </select>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <p className="info-name">Drinking status</p>

                                                                            <div className="custom-select right w-100">
                                                                            <select
                                                                                name="userDrinkingStatus"
                                                                                id="userDrinkingStatus"
                                                                                
                                                                            >
                                                                                 <option value="" selected>Choose Smoking status</option>
                                                                                    <option value="No">No</option>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="Sometimes">Sometimes</option>
                                                                            </select>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <p className="info-name">Drinking status</p>

                                                                            <div className="custom-select right w-100">
                                                                            <select
                                                                                name="userParentStatus"
                                                                                id="userParentStatus"
                                                                                
                                                                            >
                                                                                <option value="" selected>Do you have kids?</option>
                                                                                <option value="No">No</option>
                                                                                <option value="Yes">Yes</option>
                                                                                <option value="I want to">I want to</option>
                                                                                <option value="Coming/soon">Coming/soon</option>
                                                                            </select>
                                                                            </div>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                 
                                                            <div className="info-card">
                                                                <div className="info-card-title">
                                                                    <h6>Physical info</h6>
                                                                </div>
                                                                <div className="info-card-content">
                                                                    <ul className="info-list">
                                                                        <li>
                                                                            <p className="info-name">Height</p>
                                                                            <div className="custom-select right w-100">
                                                                            <select
                                                                                name="userHeight"
                                                                                id="userHeight"
                                                                                
                                                                            >
                                                                                <option value="0">Select Height </option>
                                                                                <option value="1">1</option>
                                                                                <option value="3">3</option>
                                                                                <option value="3">3</option>
                                                                            </select>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <p className="info-name">Weight</p>
                                                                            <div className="custom-select right w-100">
                                                                            <select
                                                                                name="userWeight"
                                                                                id="userWeight"
                                                                            >
                                                                                <option value="0">Select Height </option>
                                                                                <option value="1">1</option>
                                                                                <option value="3">3</option>
                                                                                <option value="3">3</option>
                                                                            </select>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <p className="info-name">Eye color</p>

                                                                            <div className="custom-select right w-100">
                                                                            <select
                                                                                name="userEyeColor"
                                                                                id="userEyeColor"
                                                                                
                                                                            >
                                                                                <option value="" selected>Choose eye color</option>
                                                                                <option value="Amber">Amber</option>
                                                                                <option value="Blue">Blue</option>
                                                                                <option value="Brown">Brown</option>
                                                                                <option value="Gray">Gray</option>
                                                                                <option value="Green">Green</option>
                                                                                <option value="Hazel">Hazel</option>
                                                                            </select>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                             <p className="info-name">hair color</p>

                                                                                        <div className="custom-select right w-100">
                                                                                            <select
                                                                                                name="userHairColor"
                                                                                                id="userHairColor"
                                                                                                
                                                                                            >
                                                                                                <option value="" selected>hair color</option>
                                                                                                <option value="Amber">Amber</option>
                                                                                                <option value="Blue">Blue</option>
                                                                                                <option value="Brown">Brown</option>
                                                                                                <option value="Gray">Gray</option>
                                                                                                <option value="Green">Green</option>
                                                                                                <option value="Hazel">Hazel</option>
                                                                                            </select>
                                                                                        </div>
                                                                        </li>
                                                                        <li>
                                                                            <p className="info-name">Clothing lothing style</p>

                                                                            <div className="custom-select right w-100">
                                                                            <select
                                                                                name="userClothingStyle"
                                                                                id="userClothingStyle"
                                                                                
                                                                            >
                                                                                <option value="" disabled selected> Select clothing style </option>
                                                                                <option value="Classic"> Classic </option>
                                                                                <option value="Old School"> Old School </option>
                                                                                <option value="Branded"> Branded </option>
                                                                                <option value="Goth"> Goth </option>
                                                                                <option value="Other"> Other </option>
                                                                            </select>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <p className="info-name">Housing situation </p>

                                                                            <div className="custom-select right w-100">
                                                                            <select
                                                                                name="userLivingStyle"
                                                                                id="userLivingStyle"            
                                                                            >
                                                                                  <option value="" disabled selected> Select your Housing situation </option>
                                                                                    <option value="College"> College </option>
                                                                                    <option value="Own house"> Own house </option>
                                                                                    <option value="Condominium"> Condominium </option>
                                                                                    <option value="Condominium"> Condominium </option>
                                                                                    <option value="Other"> Other </option>
                                                                            </select>
                                                                            </div>
                                                                        </li>
                                                                      
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                        </article>
                                                    </div>

                                                    <div className="col-xl-4">
                                                        <aside className="mt-5 mt-xl-0">
                                                           
                                                            <WidgetLikeSection />
                                                       
                                                        </aside>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="tab-pane fade" id="friends" role="tabpanel" aria-labelledby="nav-friends-tab">
                                        <div>
                                                <div className="row">
                                                    <div className="col-xl-8">
                                                        <article>
                                                            <div className="row gy-4 gx-3 justify-content-center">
                                                                <div className=" col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/01.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">jenifer Guido</Link> </h6>
                                                                                <p>Active 1 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/02.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Andrea Guido</Link> </h6>
                                                                                <p>Active 2 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/03.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Anna hawk</Link> </h6>
                                                                                <p>Active 5 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/04.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Andreas Adam</Link> </h6>
                                                                                <p>Active 4 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/05.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Alaina T</Link> </h6>
                                                                                <p>Active 1 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/06.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Aron Smith</Link> </h6>
                                                                                <p>Active 3 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/07.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Helen Gomz</Link> </h6>
                                                                                <p>Active 3 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/08.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Andrez jr</Link> </h6>
                                                                                <p>Active 5 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/09.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Ladiga Guido</Link> </h6>
                                                                                <p>Active 5 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/10.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Andrea Guido</Link> </h6>
                                                                                <p>Active 1 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/11.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Jene Aiko</Link> </h6>
                                                                                <p>Active 4 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/12.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Jhon Cena</Link> </h6>
                                                                                <p>Active 2 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/13.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Irfan Patel </Link> </h6>
                                                                                <p>Active 5 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/14.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Hames Radregez</Link> </h6>
                                                                                <p>Active 1 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/15.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Johan ben</Link> </h6>
                                                                                <p>Active 2 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/16.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Johannes</Link> </h6>
                                                                                <p>Active 6 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/17.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Helena Mind</Link> </h6>
                                                                                <p>Active 4 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/18.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Virat Alba</Link> </h6>
                                                                                <p>Active 3 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/19.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Afrin Nawr</Link> </h6>
                                                                                <p>Active 5 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/20.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Jason Roy</Link> </h6>
                                                                                <p>Active 2 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </article>
                                                    </div>

                                                    <div className="col-xl-4">
                                                        <aside className="mt-5 mt-xl-0">
                                                           
                                                          
                                                       
                                                        </aside>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-pane fade" id="likes" role="tabpanel" aria-labelledby="nav-groups-tab">
                                        <div>
                                                <div className="row">
                                                    <div className="col-xl-8">
                                                        <article>
                                                            <div className="row gy-4 gx-3 justify-content-center">
                                                                <div className=" col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/01.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">jenifer Guido</Link> </h6>
                                                                                <p>Active 1 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/02.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Andrea Guido</Link> </h6>
                                                                                <p>Active 2 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/03.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Anna hawk</Link> </h6>
                                                                                <p>Active 5 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/04.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Andreas Adam</Link> </h6>
                                                                                <p>Active 4 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/05.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Alaina T</Link> </h6>
                                                                                <p>Active 1 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/06.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Aron Smith</Link> </h6>
                                                                                <p>Active 3 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/07.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Helen Gomz</Link> </h6>
                                                                                <p>Active 3 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/08.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Andrez jr</Link> </h6>
                                                                                <p>Active 5 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/09.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Ladiga Guido</Link> </h6>
                                                                                <p>Active 5 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/10.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Andrea Guido</Link> </h6>
                                                                                <p>Active 1 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/11.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Jene Aiko</Link> </h6>
                                                                                <p>Active 4 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/12.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Jhon Cena</Link> </h6>
                                                                                <p>Active 2 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/13.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Irfan Patel </Link> </h6>
                                                                                <p>Active 5 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/14.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Hames Radregez</Link> </h6>
                                                                                <p>Active 1 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/15.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Johan ben</Link> </h6>
                                                                                <p>Active 2 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/16.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Johannes</Link> </h6>
                                                                                <p>Active 6 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/17.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Helena Mind</Link> </h6>
                                                                                <p>Active 4 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/18.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Virat Alba</Link> </h6>
                                                                                <p>Active 3 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/19.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Afrin Nawr</Link> </h6>
                                                                                <p>Active 5 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/20.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Jason Roy</Link> </h6>
                                                                                <p>Active 2 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </article>
                                                    </div>

                                                    <div className="col-xl-4">
                                                        <aside className="mt-5 mt-xl-0">
                                                           
                                                          
                                                       
                                                        </aside>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-pane fade" id="likedme" role="tabpanel" aria-labelledby="nav-groups-tab">
                                        <div>
                                                <div className="row">
                                                    <div className="col-xl-8">
                                                        <article>
                                                            <div className="row gy-4 gx-3 justify-content-center">
                                                                <div className=" col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/01.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">jenifer Guido</Link> </h6>
                                                                                <p>Active 1 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/02.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Andrea Guido</Link> </h6>
                                                                                <p>Active 2 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/03.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Anna hawk</Link> </h6>
                                                                                <p>Active 5 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/04.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Andreas Adam</Link> </h6>
                                                                                <p>Active 4 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/05.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Alaina T</Link> </h6>
                                                                                <p>Active 1 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/06.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Aron Smith</Link> </h6>
                                                                                <p>Active 3 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/07.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Helen Gomz</Link> </h6>
                                                                                <p>Active 3 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/08.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Andrez jr</Link> </h6>
                                                                                <p>Active 5 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/09.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Ladiga Guido</Link> </h6>
                                                                                <p>Active 5 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/10.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Andrea Guido</Link> </h6>
                                                                                <p>Active 1 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/11.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Jene Aiko</Link> </h6>
                                                                                <p>Active 4 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/12.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Jhon Cena</Link> </h6>
                                                                                <p>Active 2 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/13.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Irfan Patel </Link> </h6>
                                                                                <p>Active 5 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/14.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Hames Radregez</Link> </h6>
                                                                                <p>Active 1 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/15.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Johan ben</Link> </h6>
                                                                                <p>Active 2 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/16.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Johannes</Link> </h6>
                                                                                <p>Active 6 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/17.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Helena Mind</Link> </h6>
                                                                                <p>Active 4 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/18.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Virat Alba</Link> </h6>
                                                                                <p>Active 3 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/19.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Afrin Nawr</Link> </h6>
                                                                                <p>Active 5 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-4 col-6">
                                                                    <div className="lab-item member-item style-1">
                                                                        <div className="lab-inner">
                                                                            <div className="lab-thumb">
                                                                                <img src="assets/images/member/20.jpg"
                                                                                    alt="member-img" />
                                                                            </div>
                                                                            <div className="lab-content">
                                                                                <h6><Link to="/profile">Jason Roy</Link> </h6>
                                                                                <p>Active 2 Day</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </article>
                                                    </div>

                                                    <div className="col-xl-4">
                                                        <aside className="mt-5 mt-xl-0">
                                                           
                                                          
                                                       
                                                        </aside>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>                           
                                        
                                        <div className="tab-pane fade" id="photos" role="tabpanel" aria-labelledby="nav-photos-tab">
                                            <AllPhotos />
                                        </div>

                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <FooterSection />
            </div>
        );
    }
}

export default ProfilePage;