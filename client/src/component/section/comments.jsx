import React, { Component } from 'react';

const title = "02 Comments";

let CommentList = [
    {
        imgUrl: 'assets/images/member/02.jpg',
        imgAlt: 'comments thumb',
        comName: 'Rajib Raj',
        comDate: 'May 10, 2022 at 12:41 pm',
        comDesc: 'The inner sanctuary, I throw myself down among the tall grass bye the trckli stream and, as I lie close to the earth',
        comBtnText: 'Reply',
    },
    {
        imgUrl: 'assets/images/member/03.jpg',
        imgAlt: 'comments thumb',
        comName: 'Ummi Nishat',
        comDate: 'May 14, 2022 at 12:41 pm',
        comDesc: 'The inner sanctuary, I throw myself down among the tall grass bye the trckli stream and, as I lie close to the earth',
        comBtnText: 'Reply',
    },
]

class CommentSection extends Component {
    render() {
        return (
            <div id="comments" className="comments">
                <div className="widget-title">
                    <h3>{title}</h3>
                </div>
                <ul className="comment-list">
                    {CommentList.map((val, i) => (
                        <li className="comment" id="li-comment-2" key={i}>
                            <div className="com-image">
                                <img 
                                    src={`${val.imgUrl}`} 
                                    alt={`${val.imgAlt}`}
                                />
                            </div>
                            <div className="com-content">
                                <div className="com-title">
                                    <div className="com-title-meta">
                                        <h4><a href="#" rel="external nofollow" className="url">{val.comName}</a></h4>
                                        <span> {val.comDate} </span>
                                    </div>
                            
                                    <span className="reply">
                                        <a className="comment-reply-link" href="#"><i className="icofont-reply-all"></i>{val.comBtnText}</a>
                                    </span>

                                    
                                  
                                </div>
                                <p>{val.comDesc}</p>
                                <div>
                                    <a href="#" className="blog-heart"><i className="icofont-heart-alt"></i>0 <span
                                    className="d-none d-sm-inline-block">Like</span> </a>
                               </div>
                                 
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default CommentSection;