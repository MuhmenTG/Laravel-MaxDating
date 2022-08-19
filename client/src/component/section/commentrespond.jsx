import React, { Component } from 'react';

const title = "Leave a Comment";


class CommentRespond extends Component {
    constructor(props){
        super(props);
        this.state = {
            respondMassage: '',
        };
    }
    render() {
        return (
            <div id="respond" className="comment-respond">
                <div className="add-comment">
                     
                    <form action="#" method="post" id="commentform" className="comment-form">
                        <textarea 
                            rows="5" 
                            type="text"
                            id="item04"
                            name="message"
                            value={this.state.respondMassage}
                            onChange={(e)=>{this.setState({respondMassage: e.target.value});}}
                            placeholder="Your Message"
                        ></textarea>
                        <button className="lab-btn" type="submit"><span>Send Comment</span></button>
                    </form>
                </div>
            </div>
        );
    }
}

export default CommentRespond;