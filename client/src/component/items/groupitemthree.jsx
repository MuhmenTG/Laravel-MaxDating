import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';


let GrouoListContent = [
    {
        imgUrl: 'assets/images/group/01.jpg',
        imgAlt: 'Group cover picture',
        groupName: 'Active Group A1',
        groupDesc: 'Colabors atively fabcate best breed and apcations through visionary value',
        groupBtn: 'View Group',
        moreCount: '12+',
        groupMember: [
            {
                imgUrl: 'assets/images/group/group-mem/01.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/02.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/03.png',
                imgAlt: 'Group Member',
            },
        ]
    },
    {
        imgUrl: 'assets/images/group/02.jpg',
        imgAlt: 'Group cover picture',
        groupName: 'Active Group A2',
        groupDesc: 'Colabors atively fabcate best breed and apcations through visionary value',
        groupBtn: 'View Group',
        moreCount: '5+',
        groupMember: [
            {
                imgUrl: 'assets/images/group/group-mem/01.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/02.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/03.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/04.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/05.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/06.png',
                imgAlt: 'Group Member',
            },
        ]
    },
    {
        imgUrl: 'assets/images/group/03.jpg',
        imgAlt: 'Group cover picture',
        groupName: 'Active Group A03',
        groupDesc: 'Colabors atively fabcate best breed and apcations through visionary value',
        groupBtn: 'View Group',
        moreCount: '5+',
        groupMember: [
            {
                imgUrl: 'assets/images/group/group-mem/01.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/02.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/03.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/04.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/05.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/06.png',
                imgAlt: 'Group Member',
            },
        ]
    },
    {
        imgUrl: 'assets/images/group/04.jpg',
        imgAlt: 'Group cover picture',
        groupName: 'Active Group A04',
        groupDesc: 'Colabors atively fabcate best breed and apcations through visionary value',
        groupBtn: 'View Group',
        moreCount: '5+',
        groupMember: [
            {
                imgUrl: 'assets/images/group/group-mem/01.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/02.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/03.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/04.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/05.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/06.png',
                imgAlt: 'Group Member',
            },
        ]
    },
    {
        imgUrl: 'assets/images/group/05.jpg',
        imgAlt: 'Group cover picture',
        groupName: 'Active Group A05',
        groupDesc: 'Colabors atively fabcate best breed and apcations through visionary value',
        groupBtn: 'View Group',
        moreCount: '5+',
        groupMember: [
            {
                imgUrl: 'assets/images/group/group-mem/01.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/02.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/03.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/04.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/05.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/06.png',
                imgAlt: 'Group Member',
            },
        ]
    },
    {
        imgUrl: 'assets/images/group/06.jpg',
        imgAlt: 'Group cover picture',
        groupName: 'Active Group A06',
        groupDesc: 'Colabors atively fabcate best breed and apcations through visionary value',
        groupBtn: 'View Group',
        moreCount: '5+',
        groupMember: [
            {
                imgUrl: 'assets/images/group/group-mem/01.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/02.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/03.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/04.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/05.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/06.png',
                imgAlt: 'Group Member',
            },
        ]
    },
    {
        imgUrl: 'assets/images/group/07.jpg',
        imgAlt: 'Group cover picture',
        groupName: 'Active Group A07',
        groupDesc: 'Colabors atively fabcate best breed and apcations through visionary value',
        groupBtn: 'View Group',
        moreCount: '5+',
        groupMember: [
            {
                imgUrl: 'assets/images/group/group-mem/01.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/02.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/03.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/04.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/05.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/06.png',
                imgAlt: 'Group Member',
            },
        ]
    },
    {
        imgUrl: 'assets/images/group/08.jpg',
        imgAlt: 'Group cover picture',
        groupName: 'Active Group A08',
        groupDesc: 'Colabors atively fabcate best breed and apcations through visionary value',
        groupBtn: 'View Group',
        moreCount: '5+',
        groupMember: [
            {
                imgUrl: 'assets/images/group/group-mem/01.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/02.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/03.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/04.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/05.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/06.png',
                imgAlt: 'Group Member',
            },
        ]
    },
    {
        imgUrl: 'assets/images/group/09.jpg',
        imgAlt: 'Group cover picture',
        groupName: 'Active Group A09',
        groupDesc: 'Colabors atively fabcate best breed and apcations through visionary value',
        groupBtn: 'View Group',
        moreCount: '5+',
        groupMember: [
            {
                imgUrl: 'assets/images/group/group-mem/01.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/02.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/03.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/04.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/05.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/06.png',
                imgAlt: 'Group Member',
            },
        ]
    },
    {
        imgUrl: 'assets/images/group/10.jpg',
        imgAlt: 'Group cover picture',
        groupName: 'Active Group A10',
        groupDesc: 'Colabors atively fabcate best breed and apcations through visionary value',
        groupBtn: 'View Group',
        moreCount: '5+',
        groupMember: [
            {
                imgUrl: 'assets/images/group/group-mem/01.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/02.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/03.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/04.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/05.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/06.png',
                imgAlt: 'Group Member',
            },
        ]
    },
    {
        imgUrl: 'assets/images/group/11.jpg',
        imgAlt: 'Group cover picture',
        groupName: 'Active Group A11',
        groupDesc: 'Colabors atively fabcate best breed and apcations through visionary value',
        groupBtn: 'View Group',
        moreCount: '5+',
        groupMember: [
            {
                imgUrl: 'assets/images/group/group-mem/01.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/02.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/03.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/04.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/05.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/06.png',
                imgAlt: 'Group Member',
            },
        ]
    },
    {
        imgUrl: 'assets/images/group/12.jpg',
        imgAlt: 'Group cover picture',
        groupName: 'Active Group A2',
        groupDesc: 'Colabors atively fabcate best breed and apcations through visionary value',
        groupBtn: 'View Group',
        moreCount: '5+',
        groupMember: [
            {
                imgUrl: 'assets/images/group/group-mem/01.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/02.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/03.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/04.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/05.png',
                imgAlt: 'Group Member',
            },
            {
                imgUrl: 'assets/images/group/group-mem/06.png',
                imgAlt: 'Group Member',
            },
        ]
    },
]
class GroupItemThree extends Component {
    render() { 
        const GroupList = GrouoListContent.slice(0 , this.props.itemNumber);
        return (
            <Fragment>
                {GroupList.map((val, i) => (
                    <div className="col-lg-6" key={i}>
                        <div className="group-item lab-item style-1">
                            <div className="lab-inner d-flex flex-wrap align-items-center p-4">
                                <div className="lab-thumb me-sm-4 mb-4 mb-sm-0">
                                    <img 
                                        src={`${val.imgUrl}`} 
                                        alt={`${val.imgAlt}`} 
                                    />
                                </div>
                                <div className="lab-content">
                                    <h4>{val.groupName}</h4>
                                    <p>{val.groupDesc} </p>
                                    <ul className="img-stack d-flex">
                                        {val.groupMember.map((val, i) => (
                                            <li key={i}>
                                                <img 
                                                    src={`${val.imgUrl}`} 
                                                    alt={`${val.imgAlt}`} 
                                                />
                                            </li>
                                        ))}
                                        <li className="bg-theme">{val.moreCount}</li>
                                    </ul>
                                    <div className="test"> <Link to="/profile" className="lab-btn"> <i className="icofont-users-alt-5"></i>{val.groupBtn}</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Fragment>
        );
    }
}
 
export default GroupItemThree;