import React, { Component } from 'react';
import Header from '../component/layout/header';
import PageHeader from '../component/layout/pageheader';
import FooterSection from '../component/layout/footer';
import GoogleMap from '../component/section/googlemap';

const titel = "Don't Be A Stranger Just Say Hello.";
const desc = "We do fast phone repair. In most to repair your device in just minutes, li we’ll normally get con nection inutes, we’ll normally ge.";
const btnText = "Send Our Message";
const infotitle = "Get Information";
const infodesc = "Our Contact information Details and Follow us on social media";


let ContactInfoList = [
    {
        imgUrl: 'assets/images/contact/01.png',
        imgAlt: 'contact info thumb',
        infoTitle: 'Office Address',
        infoDesc: '1201 park street, Fifth Avenue',
    },
    {
        imgUrl: 'assets/images/contact/02.png',
        imgAlt: 'contact info thumb',
        infoTitle: 'Phone Number',
        infoDesc: '+22698 745 632, 02 982 745',
    },
    {
        imgUrl: 'assets/images/contact/03.png',
        imgAlt: 'contact info thumb',
        infoTitle: 'Send Mail',
        infoDesc: 'info@yourmail.com',
    },
    {
        imgUrl: 'assets/images/contact/04.png',
        imgAlt: 'contact info thumb',
        infoTitle: 'Our Website',
        infoDesc: 'www.yoursitename.com',
    },
]

class ContactPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            contactName: '',
            contactEmail: '',
            contactSubject: '',
            contactNumber: '',
            contactMassage: '',
        };
    }

    render() {
        return (
            <div>
                <Header />
                <PageHeader title={'Contact Us'} />
                <div className="contact-section">
                    <div className="contact-top padding-tb aside-bg padding-b">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <article className="contact-form-wrapper">
                                        <div className="contact-form">
                                            <h4>{titel}</h4>
                                            <p className="mb-5">{desc}</p>
                                            <form action="#" method="POST" id="commentform" className="comment-form">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="item01"
                                                    value={this.state.contactName}
                                                    onChange={(e)=>{this.setState({contactName: e.target.value});}}
                                                    placeholder="Your Name *"
                                                />
                                                <input
                                                    type="text"
                                                    name="email"
                                                    id="item02"
                                                    value={this.state.contactEmail}
                                                    onChange={(e)=>{this.setState({contactEmail: e.target.value});}}
                                                    placeholder="Your Email *"
                                                />
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    id="item03"
                                                    value={this.state.contactSubject}
                                                    onChange={(e)=>{this.setState({contactSubject: e.target.value});}}
                                                    placeholder="Your Subject *"
                                                />
                                                <input
                                                    type="text"
                                                    name="number"
                                                    id="item04"
                                                    value={this.state.contactNumber}
                                                    onChange={(e)=>{this.setState({contactNumber: e.target.value});}}
                                                    placeholder="Mobile Number *"
                                                />
                                                <textarea 
                                                    rows="8" 
                                                    type="text"
                                                    id="item05"
                                                    name="message"
                                                    value={this.state.respondMassage}
                                                    onChange={(e)=>{this.setState({respondMassage: e.target.value});}}
                                                    placeholder="Your Message"
                                                ></textarea>
                                                <button type="submit" className="lab-btn"><span>{btnText}</span></button>
                                            </form>
                                        </div>
                                    </article>
                                </div>
                                <div className="col-lg-4">
                                    <div className="contact-info-wrapper">
                                        <div className="contact-info-title">
                                            <h5>{infotitle}</h5>
                                            <p>{infodesc}</p>
                                        </div>
                                        <div className="contact-info-content">
                                            {ContactInfoList.map((val, i) => (
                                                <div className="contact-info-item" key={i}>
                                                    <div className="contact-info-inner">
                                                        <div className="contact-info-thumb">
                                                            <img 
                                                                src={`${val.imgUrl}`} 
                                                                alt={`${val.imgAlt}`}
                                                            />
                                                        </div>
                                                        <div className="contact-info-details">
                                                            <span className="fw-bold">{val.infoTitle}</span>
                                                            <p>{val.infoDesc}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <GoogleMap />
                </div>
                <FooterSection />
            </div>
        );
    }
}

export default ContactPage;