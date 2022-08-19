import React, { Component } from 'react';
import Header from '../component/layout/header';
import FooterSection from '../component/layout/footer';
import BannerSection from '../component/section/banner'; 
import MemberSection from '../component/section/member';
import AboutSection from '../component/section/about';
import StorySection from '../component/section/storysection';
import WorkSection from '../component/section/work';
import MemberTwoSection from '../component/section/memberTwo';
import GroupSection from '../component/section/group';
import ClientSection from '../component/section/clints';
import AppsSection from '../component/section/apps';

class HomePages extends Component {
    render() {
        return (
            <div>
                <Header />
                <BannerSection />
                <MemberSection />
                <AboutSection />
                <WorkSection />
                <StorySection />
                <MemberTwoSection />
                <GroupSection />
                <ClientSection />
                <FooterSection />
            </div>
        );
    }
}

export default HomePages;