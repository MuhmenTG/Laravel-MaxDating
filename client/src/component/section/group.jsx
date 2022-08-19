import React, { Component } from 'react';
import GroupItem from '../items/groupitems';

const subtitle = "Recently Active Groups";
const title = "Turulav 4 Best Active Group";

class GroupSection extends Component {
    render() { 
        return (
            <section className="group-section padding-tb bg-img">
                <div className="container">
                    <div className="section-header">
                        <h4>{subtitle}</h4>
                        <h2>{title}</h2>
                    </div>
                    <div className="section-wrapper">
                        <div className="row g-4">
                            <GroupItem  itemNumber={4}/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default GroupSection;