import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PageHeader extends Component {
    
    render() {
        const {title} = this.props;
        return (
            <section className="page-header-section style-1"  style={{ backgroundImage: "url(/assets/images/page-header.jpg)" }}>
                <div className="container">
                    <div className="page-header-content">
                        <div className="page-header-inner">
                            <div className="page-title">
                                <h2>TuruLav Dating {title}</h2>
                            </div>
                            <ol className="breadcrumb">
                                <li><Link to="/">Home</Link></li>
                                <li className="active">{title}</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default PageHeader;