import React, { Component } from 'react';
import Header from '../component/layout/header';
import PageHeader from '../component/layout/pageheader';
import FooterSection from '../component/layout/footer';
import GoogleMap from '../component/section/googlemap';

const titel = "Don't Be A Stranger Just Say Hello.";
const desc = "We do fast phone repair. In most to repair your device in just minutes, li we’ll normally get con nection inutes, we’ll normally ge.";
const btnText = "Mark as read";
const btnText1 = "Mark as read";
const btnTextDel = "X";
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

class NotificationsPage extends Component {
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
                <PageHeader title={'Notifications'} />
                <div className="contact-section">
                    <div className="contact-top padding-tb aside-bg padding-b">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                  
                                <article className="contact-form-wrapper">
                                        <p>All reads </p>
                                        <div className="contact-form">
                                            <p>1. notifications</p>
                                            <button type="submit" className="lab-btn"><span>{btnText1}</span></button>
                                            <button type="submit" className="lab-btn"><span>{btnTextDel}</span></button>

                                        </div>
                                        <div className="contact-form">
                                            <p>2. notifications</p>
                                            <button type="submit" className="lab-btn"><span>{btnText1}</span></button>
                                            <button type="submit" className="lab-btn"><span>{btnTextDel}</span></button>

                                        </div>
                                        <div className="contact-form">
                                            <p>3. notifications</p>
                                            <button type="submit" className="lab-btn"><span>{btnText1}</span></button>
                                            <button type="submit" className="lab-btn"><span>{btnTextDel}</span></button>

                                        </div>
                                        <div className="contact-form">
                                            <p>4. notifications</p>
                                            <button type="submit" className="lab-btn"><span>{btnText1}</span></button>
                                            <button type="submit" className="lab-btn"><span>{btnTextDel}</span></button>

                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                
                <FooterSection />
            </div>
        );
    }
}

export default NotificationsPage;