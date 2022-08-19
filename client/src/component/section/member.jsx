import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MemberItem from '../items/memberitem';


const title = "New Members in London";
const subtitle = "Meet New People Today!";


class MemberSection extends Component {
    render() { 
        return (
            <section className="member-section padding-tb">
                <div className="container">
                    <div className="section-header">
                        <h4 className="theme-color">{subtitle}</h4>
                        <h2> {title}</h2>
                    </div>
                    <div className="section-wrapper">
                        <div className="row justify-content-center g-3 g-md-4">
                            <MemberItem />
                        </div>
                        <div className="member-button-group d-flex flex-wrap justify-content-center">
                            <Link to="/signup" className="lab-btn"><i className="icofont-users"></i> <span>Join Us for Free</span></Link>
                            <Link to="/login" className="lab-btn"><i className="icofont-play-alt-1"></i> <span>Our tv commercial</span></Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default MemberSection;