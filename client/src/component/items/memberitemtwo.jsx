import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

let AllMemberListContent = [

    {
        imgUrl: 'assets/images/member/14.jpg',
        imgAlt: 'member thumb',
        memName: 'Sajahan Sagor',
        memActive: 'Active 2 Day',
    },
    {
        imgUrl: 'assets/images/member/15.jpg',
        imgAlt: 'member thumb',
        memName: 'Sajahan Sagor',
        memActive: 'Active 2 Day',
    },
    {
        imgUrl: 'assets/images/member/16.jpg',
        imgAlt: 'member thumb',
        memName: 'Sajahan Sagor',
        memActive: 'Active 2 Day',
    },
    {
        imgUrl: 'assets/images/member/17.jpg',
        imgAlt: 'member thumb',
        memName: 'Sajahan Sagor',
        memActive: 'Active 2 Day',
    },
    {
        imgUrl: 'assets/images/member/18.jpg',
        imgAlt: 'member thumb',
        memName: 'Sajahan Sagor',
        memActive: 'Active 2 Day',
    },
    {
        imgUrl: 'assets/images/member/19.jpg',
        imgAlt: 'member thumb',
        memName: 'Sajahan Sagor',
        memActive: 'Active 2 Day',
    },
 
]


class MemberItemTwo extends Component {
    render() { 
        const MemberCountItem = AllMemberListContent.slice(0 , this.props.itemNumber);
        return (
            <Fragment>
                {MemberCountItem.map((val, i) => (
                    <div className="col" key={i}>
                        <div className="lab-item member-item style-1 style-2">
                            <div className="lab-inner">
                                <div className="lab-thumb">
                                <img 
                                    src={`${val.imgUrl}`} 
                                    alt={`${val.imgAlt}`}
                                />
                                </div>
                                <div className="lab-content">
                                    <h6><Link to="/profile">{val.memName}</Link> </h6>
                                    <p>{val.memActive}</p>
                                    <span className="blog-heart"><i className="icofont-heart-alt"></i></span>
                                    <br />
                                    <span className="blog-heart"><i className="icofont-plus"></i> Add Friend</span>

                                </div>
                                
                            </div>
                        </div>
                    </div>
                ))}
            </Fragment>
        );
    }
}
 
export default MemberItemTwo;