import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

let AllMemberListContent = [
    {
        imgUrl: 'assets/images/member/01.jpg',
        imgAlt: 'member thumb',
        memName: 'Andrea Guido',
        memActive: 'Active 1 Day',
    },
    {
        imgUrl: 'assets/images/member/02.jpg',
        imgAlt: 'member thumb',
        memName: 'Rassel Hossain',
        memActive: 'Active 2 Day',
    },
    {
        imgUrl: 'assets/images/member/03.jpg',
        imgAlt: 'member thumb',
        memName: 'Angel Zaara',
        memActive: 'Active 9 Day',
    },
    {
        imgUrl: 'assets/images/member/04.jpg',
        imgAlt: 'member thumb',
        memName: 'Rajib Raj',
        memActive: 'Active 15 Day',
    },
    {
        imgUrl: 'assets/images/member/05.jpg',
        imgAlt: 'member thumb',
        memName: 'Ummi Nishat',
        memActive: 'Active 10 Day',
    },
    {
        imgUrl: 'assets/images/member/06.jpg',
        imgAlt: 'member thumb',
        memName: 'Sajahan Sagor',
        memActive: 'Active 2 Day',
    },
]


class MemberItem extends Component {
   
    render() { 
        const MemberCountItem = AllMemberListContent.slice(0 , this.props.itemNumber);
        return (
            <Fragment>
                {MemberCountItem.map((val, i) => (
                    <div className="col-xl-2 col-lg-3 col-md-4 col-6" key={i}>
                        <div className="lab-item member-item style-1">
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
                                    <button className="blog-heart"><i className="icofont-heart-alt"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Fragment>
        );
    }
}
 
export default MemberItem;