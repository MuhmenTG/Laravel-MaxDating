import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const posttitle = "our Recent news";
const abouttitle = "About TuruLav";
const aboutpara = "Energistically coordinate highly efficient procesr partnerships befor revolutionar growth strategie improvement viaing awesome";
const newstitle = "Our Newsletter Signup";
const newspara = "By subscribing to our mailing list you will always be update with the latest news from us.";


let RecentPostList = [
    {
        imgUrl: 'assets/images/footer/01.jpg',
        imgAlt: 'recent post',
        postTitle: 'Enable Seamin Matera Forin And Our Orthonal Create Vortals.',
        postDate: 'July 23, 2021',
    },
    {
        imgUrl: 'assets/images/footer/02.jpg',
        imgAlt: 'recent post',
        postTitle: 'Enable Forin And Our Orthonal Create Vortals.',
        postDate: 'July 23, 2021',
    },
    {
        imgUrl: 'assets/images/footer/03.jpg',
        imgAlt: 'recent post',
        postTitle: 'Dynamca Network Otuitive Catays For Plagiarize Mindshare After.',
        postDate: 'July 23, 2021',
    },
]

class FooterSection extends Component {
    constructor(props){
        super(props);
        this.state = {
            newsEmail: '',
        };
    }
    render() {
        
        return (
            <footer className="footer-section">
                <div className="footer-top">
                    <div className="container">
                        <div className="row g-3 justify-content-center g-lg-0">
                            <div className="col-lg-4 col-sm-6 col-12">
                                <div className="footer-top-item lab-item">
                                    <div className="lab-inner">
                                        <div className="lab-thumb">
                                            <img src="assets/images/footer/icons/01.png" alt="Phone-icon" />
                                        </div>
                                        <div className="lab-content">
                                            <span>Phone Number : +88019 339 702 520</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-12">
                                <div className="footer-top-item lab-item">
                                    <div className="lab-inner">
                                        <div className="lab-thumb">
                                            <img src="assets/images/footer/icons/02.png" alt="email-icon" />
                                        </div>
                                        <div className="lab-content">
                                            <span>Email : admin@turulav.com</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-12">
                                <div className="footer-top-item lab-item">
                                    <div className="lab-inner">
                                        <div className="lab-thumb">
                                            <img src="assets/images/footer/icons/03.png" alt="location-icon" />
                                        </div>
                                        <div className="lab-content">
                                            <span>Address : 30 North West New York 240</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-middle padding-tb" style={{ backgroundImage: "url(/assets/images/footer/bg.png)" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="footer-middle-item-wrapper">
                                    <div className="footer-middle-item mb-lg-0">
                                        <div className="fm-item-title">
                                            <h4>{abouttitle}</h4>
                                        </div>
                                        <div className="fm-item-content">
                                            <p className="mb-4">{aboutpara}</p>
                                            <img src="assets/images/footer/about.jpg" alt="about-image" className="footer-abt-img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="footer-middle-item-wrapper">
                                    <div className="footer-middle-item mb-lg-0">
                                        <div className="fm-item-title">
                                            <h4>{posttitle}</h4>
                                        </div>
                                        <div className="fm-item-content">
                                            {RecentPostList.map((val, i) => (
                                                <div className="fm-item-widget lab-item" key={i}>
                                                    <div className="lab-inner">
                                                        <div className="lab-thumb">
                                                            <Link to="/blog-single"> 
                                                                <img 
                                                                    src={`${val.imgUrl}`} 
                                                                    alt={`${val.imgAlt}`}
                                                                />
                                                            </Link>
                                                        </div>
                                                        <div className="lab-content">
                                                            <h6><Link to="/blog-single">{val.postTitle}</Link></h6>
                                                            <p>{val.postDate}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="footer-middle-item-wrapper">
                                    <div className="footer-middle-item-3 mb-lg-0">
                                        <div className="fm-item-title">
                                            <h4>{newstitle}</h4>
                                        </div>
                                        <div className="fm-item-content">
                                            <p>{newspara}</p>
                                            <form>
                                                <div className="form-group">
                                                    <input 
                                                        type="text"
                                                        name="email"
                                                        id="item01"
                                                        className="form-control"
                                                        value={this.state.newsEmail}
                                                        onChange={(e)=>{this.setState({newsEmail: e.target.value});}}
                                                        placeholder="Enter Your email *" 
                                                    />      
                                                </div>
                                                <button type="submit" className="lab-btn">Send Massage <i  className="icofont-paper-plane"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="footer-bottom-content text-center">
                                    <p>&copy; 2022 <Link to="/">TuruLav</Link> -Best For Dating React Template.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default FooterSection;