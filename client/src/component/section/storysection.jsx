import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const subtitle= "Love in Faith Success Stories";
const title= "Sweet Stories From Our Lovers";

let StoryContentList = [
    {
        imgUrl: 'assets/images/story/01.jpg',
        imgAlt: 'Story Thumb',
        title: 'Image Post Formate',
        desc: "Seamlesly evolve unique web-readiness with Collabors atively fabricate best of breed and apcations through",
        btnText: "Read More",
    },
    {
        imgUrl: 'assets/images/story/02.jpg',
        imgAlt: 'Story Thumb',
        title: 'Couple Of Month',
        desc: "Seamlesly evolve unique web-readiness with Collabors atively fabricate best of breed and apcations through",
        btnText: "Read More",
    },
    {
        imgUrl: 'assets/images/story/03.jpg',
        imgAlt: 'Story Thumb',
        title: 'Media For Blog Article',
        desc: "Seamlesly evolve unique web-readiness with Collabors atively fabricate best of breed and apcations through",
        btnText: "Read More",
    },
]


class StorySection extends Component {
    state = {  } 
    render() { 
        return (
            <section className="story-section padding-tb bg-img">
                <div className=" container">
                    <div className="section-header">
                        <h4>{subtitle}</h4>
                        <h2>{title}</h2>
                    </div>
                    <div className="section-wrapper">
                        <div className="row justify-content-center g-4">
                            {StoryContentList.map((val, i) => (
                                <div className="col-lg-4 col-md-6 col-12" key={i}>
                                    <div className="story-item lab-item">
                                        <div className="lab-inner">
                                            <div className="lab-thumb">
                                                <img 
                                                    src={`${val.imgUrl}`} 
                                                    alt={`${val.imgAlt}`}
                                                />
                                            </div>
                                            <div className="lab-content">
                                                <h4><Link to="/blog-single">{val.title}</Link></h4>
                                                <p>{val.desc}</p>
                                                <Link to="/blog-single" className="lab-btn"><i className="icofont-circled-right"></i>{val.btnText}</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default StorySection;