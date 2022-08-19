import React, { Component } from 'react';

const subTitle= "Download App Our Turulav";
const Title = "Easy Connect to Everyone";
const desc = "You find us, finally, and you are already in love. More than 5.000.000 around the world already shared the same experience andng ares uses our system Joining us today just got easier!";

let AppListContent= [
    {
        imgUrl: 'assets/images/app/apple.png',
        imgAlt: 'App Thumb',
        title: 'App Store',
        desc: 'Available on the',
    },
    {
        imgUrl: 'assets/images/app/playstore.png',
        imgAlt: 'App Thumb',
        title: 'Google Play',
        desc: 'Available on the',
    },
]

class AppsSection extends Component {
    state = {  } 
    render() { 
        return (
            <section className="app-section bg-theme">
                <div className="container">
                    <div className="section-wrapper padding-tb">
                        <div className="app-content">
                            <h4>{subTitle}</h4>
                            <h2>{Title} </h2>
                            <p>{desc}</p>
                            <ul className="app-download d-flex flex-wrap">
                                {AppListContent.map((val, i) => (
                                    <li key={i}>
                                        <a href="#" className="d-flex flex-wrap align-items-center">
                                            <div className="app-thumb">
                                                <img 
                                                    src={`${val.imgUrl}`} 
                                                    alt={`${val.imgAlt}`} 
                                                />
                                            </div>
                                            <div className="app-content">
                                                <p>{val.desc}</p>
                                                <h4>{val.title}</h4>
                                            </div>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mobile-app">
                            <img src="assets/images/app/mobile-view.png" alt="mbl-view" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default AppsSection;