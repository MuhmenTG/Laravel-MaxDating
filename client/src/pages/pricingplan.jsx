import React, { Component } from 'react';
import Header from '../component/layout/header';
import PageHeader from '../component/layout/pageheader';
import FooterSection from '../component/layout/footer';

const title = "Choose Our Pricing Plan";
const subtitle = "Membership Levels";

let PricingListContent = [
    {
        title: 'Basic Package',
        price: '$29.00',
        desc: '$29.00 Now And Then $90.00 Per Month.',
        btnText: 'Purchase Now',
        banifitList: [
            {
                icon: 'icofont-check-circled',
                text: 'View members directory',
            },
            {
                icon: 'icofont-check-circled',
                text: 'View members profile',
            },
            {
                icon: 'icofont-check-circled',
                text: 'Access group directory',
            },
            {
                icon: 'icofont-check-circled',
                text: 'Access to groups',
            },
            {
                icon: 'icofont-close-circled',
                text: 'View site activity',
            },
            {
                icon: 'icofont-close-circled',
                text: 'Send Private messages',
            },
            {
                icon: 'icofont-close-circled',
                text: 'Add media to your profile',
            },
        ]
    },
    {
        title: 'Silver Package',
        price: '$290.00',
        desc: '$290.00 Now And Then $390.00 Per Month.',
        btnText: 'Purchase Now',
        banifitList: [
            {
                icon: 'icofont-check-circled',
                text: 'View members directory',
            },
            {
                icon: 'icofont-check-circled',
                text: 'View members profile',
            },
            {
                icon: 'icofont-check-circled',
                text: 'Access group directory',
            },
            {
                icon: 'icofont-check-circled',
                text: 'Access to groups',
            },
            {
                icon: 'icofont-close-circled',
                text: 'View site activity',
            },
            {
                icon: 'icofont-close-circled',
                text: 'Send Private messages',
            },
            {
                icon: 'icofont-close-circled',
                text: 'Add media to your profile',
            },
        ]
    },
    {
        title: 'Gold Package',
        price: '$390.00',
        desc: '$390.00 Now And Then $490.00 Per Month.',
        btnText: 'Purchase Now',
        banifitList: [
            {
                icon: 'icofont-check-circled',
                text: 'View members directory',
            },
            {
                icon: 'icofont-check-circled',
                text: 'View members profile',
            },
            {
                icon: 'icofont-check-circled',
                text: 'Access group directory',
            },
            {
                icon: 'icofont-check-circled',
                text: 'Access to groups',
            },
            {
                icon: 'icofont-close-circled',
                text: 'View site activity',
            },
            {
                icon: 'icofont-close-circled',
                text: 'Send Private messages',
            },
            {
                icon: 'icofont-close-circled',
                text: 'Add media to your profile',
            },
        ]
    },
]

class PricingPlanPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <PageHeader title={'Pricing Plan'} />
                <section className="pricing-section padding-tb">
                    <div className="container">
                        <div className="section-header">
                            <h4 className="theme-color">{subtitle}</h4>
                            <h2>{title}</h2>
                        </div>
                        <div className="section-wrapper mt-4">
                            <div className="pricing-plan-wrapper">
                                <div className="row gx-2 gy-3 justify-content-center">
                                    {PricingListContent.map((val, i) => (
                                        <div className="col-lg-4 col-sm-6" key={i}>
                                            <div className="price-item">
                                                <div className="price-item-inner">
                                                    <div className="price-top">
                                                        <h6>{val.title}</h6>
                                                        <h2>{val.price}</h2>
                                                        <p>{val.desc}</p>
                                                    </div>
                                                    <div className="price-bottom">
                                                        <ul>
                                                            {val.banifitList.map((val, i) => (
                                                                <li key={i}>
                                                                    <i className={`${val.icon}`}></i>
                                                                    <p>{val.text}</p>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        <a href="/login" className="purchase-btn">{val.btnText}</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
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

export default PricingPlanPage;