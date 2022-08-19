import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

const contactnumber = "+800-123-4567 6587";
const location = "Beverley, New York 224 USA";

class Header extends Component {

    menuTrigger() {
        document.querySelector('.menu').classList.toggle('active')
        document.querySelector('.header-bar').classList.toggle('active')
    }
    menuTriggerTwo() {
        document.querySelector('.header-top').classList.toggle('open')
        // document.querySelector('.header-bar').classList.toggle('active')
    }
    // menuTriggerThree() {
    //     document.querySelector('.menu-item-has-children').classList.toggle('open')
    //     document.querySelector('.header-bar').classList.remove('active')
    // }

    
    
    render() {
        window.addEventListener('scroll', function() {
            var value = window.scrollY;
            if (value > 200) {
                document.querySelector('.header-section').classList.add(['header-fixed'], ['fadeInUp'])
            }else{
                document.querySelector('.header-section').classList.remove(['header-fixed'], ['fadeInUp'])
            }
        });

        // var elements = document.querySelectorAll('.menu-item-has-children > a');
        // for(var i in elements) {
        //     if(elements.hasOwnProperty(i)) {
        //         elements[i].onclick = function() {
        //             this.parentElement.querySelector('.submenu').classList.toggle("active");
        //             this.classList.toggle("open");
        //         }
        //     }
        // }

        return (
            <header className="header-section">
                <div className="header-top">
                    <div className="container">
                        <div className="header-top-area">
                            <ul className="left">
                                <li>
                                    <i className="icofont-ui-call"></i> <span>{contactnumber}</span>
                                </li>
                                <li>
                                    <i className="icofont-location-pin"></i> {location}
                                </li>
                            </ul>
                            <ul className="social-icons d-flex align-items-center">
                                <li>
                                    <p>
                                        Find us on :
                                    </p>
                                </li>
                                <li>
                                    <a href="#" className="fb"><i className="icofont-facebook-messenger"></i></a>
                                </li>
                                <li>
                                    <a href="#" className="twitter"><i className="icofont-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="#" className="vimeo"><i className="icofont-vimeo"></i></a>
                                </li>
                                <li>
                                    <a href="#" className="skype"><i className="icofont-skype"></i></a>
                                </li>
                                <li>
                                    <a href="#" className="rss"><i className="icofont-rss-feed"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="header-bottom">
                    <div className="container">
                        <div className="header-wrapper">
                            <div className="logo">
                                <Link to="/">
                                    <img src="assets/images/logo/logo.png" alt="logo" />
                                </Link>
                            </div>
                            <div className="menu-area">
                                <ul className="menu">
                                    <li>
                                        <NavLink to="/">Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/profile">My Profile</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/about-us">friend requests</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/notifications">My Notifications 2</NavLink>
                                    </li>
                             
                                    {/* <li>
                                        <NavLink to="/like">Likes</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/friends">Friend Request</NavLink>
                                    </li> */}
                                    <li>
                                        <NavLink to="/members">All Members</NavLink>
                                    </li>
                                    
                                    <li>
                                        <NavLink to="/blog">Blog</NavLink>
                                    </li>
                                  



                                    {/* 
                                    <li className="menu-item-has-children">
                                        <a href="#" role="button" data-bs-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">Features</a>
                                        <ul className="submenu dropdown-menu">
             
                                            <li><NavLink to="/login">Login</NavLink></li>
                                            <li><NavLink to="/signup">Sign Up</NavLink></li>
                                            <li><NavLink to="/pricing">Pricing Plan</NavLink></li>
                                            <li><NavLink to="/*">404 Page</NavLink></li>

                                             <ul class="list-unstyled">
                                                <li><a href="index.php">Home</a></li>
                                                <li><a href="search_partner.php">Explore</a></li>
                                                <li><a href="online_search_result.php">Online Users</a></li>    
                                                <li><a href="blog.php">Blog</a></li>
                                                <li><a href="about_us.php">About us</a></li>
                                                <li><a href="contact_us.php">Contact Us</a></li>
                                                <li><a href="shop.php">Under Construction</a></li>
                                            </ul>

                                        </ul

                                                                <ul class="list-unstyled">
                                            <li><a href="newUserProfilePage.php">My Account</a></li>
                                            <li><a href="settings.php">My Settings</a></li>
                                            <li><a href="search_partner.php">Explore</a></li>
                                            <li><a href="blog.php">Blog</a></li>
                                            <li><a href="friend_request.php">Friend Requests</a></li>
                                            <li><a href="favorite.php">Love&Likes</a></li>
                                            <li><a href="chat.php">My messsages</a></li>
                                            <li><a href="shoppy.php">Shopping</a></li>
                                        </ul>
                                    </li> */}

                                    {/* <li className="menu-item-has-children">
                                        <a href="#" role="button" data-bs-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">Blog</a>
                                        <ul className="submenu dropdown-menu">
                                          
                                            <li><NavLink to="/blog-single">Blog Single</NavLink></li>
                                        </ul>
                                    </li> */}
                                    <li><NavLink to="/contact">Contact</NavLink></li>
                                </ul>
                                <NavLink to="/login" className="login"><i className="icofont-user"></i> <span>LOG IN</span> </NavLink>
                                {/* <NavLink to="/signup" className="signup"><i className="icofont-users"></i> <span>SIGN UP</span> </NavLink> */}

                                <div className="header-bar d-lg-none" onClick={this.menuTrigger}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="ellepsis-bar d-lg-none" onClick={this.menuTriggerTwo}>
                                    <i className="icofont-info-square"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;