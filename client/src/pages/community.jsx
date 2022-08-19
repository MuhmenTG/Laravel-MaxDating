import React, { Component } from 'react';
import Header from '../component/layout/header';
import PageHeader from '../component/layout/pageheader';
import FooterSection from '../component/layout/footer';
import GroupItemThree from '../component/items/groupitemthree';
import Pagination from '../component/section/pagination';

class CommunityPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <PageHeader title={'Community'} />
                <section className="group-page-section padding-tb">
                    <div className="container">
                        <ul className="group-search">
                            <li className="group-count">
                                <p>All Groups</p>
                                <p>36</p>
                            </li>
                            <li className="group-search-btn">
                                <form action="/">
                                    <input type="text" placeholder="Search Group Name..." />
                                    <div className="input-button">
                                        <input type="submit" value="Search Now" />
                                    </div>
                                </form>

                            </li>
                        </ul>
                        <div className="groups-wrapper">
                            <div className="row g-4">
                                <GroupItemThree />
                            </div>
                            <Pagination />
                        </div>
                    </div>
                </section>
                <FooterSection />
            </div>
        );
    }
}

export default CommunityPage;