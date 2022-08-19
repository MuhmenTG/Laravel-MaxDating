import React, { Component } from 'react';
import Header from '../component/layout/header';
import PageHeader from '../component/layout/pageheader';
import AppsSection from '../component/section/apps';
import Footer from '../component/layout/footer';
import MemberItemTwo from '../component/items/memberitemtwo';
import PaginaTion from '../component/section/pagination';


class MembersPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <PageHeader title={'Members'} />
                <section className="member-page-section">
                    <div className="container">
                        <div className="member-filter">
                            <div className="member-filter-inner">
                                <form action="/" className="filter-form">

                                    <div className="gender">
                                        <div className="custom-select right w-100">
                                            <select name="gender" id="gender" className="">
                                                <option disabled selected >Select your gender</option>
                                                <option value="0">I am a</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Others">Others</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="person">
                                        <div className="custom-select right w-100">
                                            <select name="userPreferenceGender" id="userPreferenceGender" className="">
                                                <option disabled selected >Select perference gender</option>
                                                <option value="0">Looking for</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Others">Others</option>
                                            </select>
                                        </div>
                                    </div>
                                   
                                    <div className="age">
                                        <div className="">
                                            <div className="custom-select">
                                                <select name="minAge" id="minAge">
                                                    <option disabled selected>Select min age</option>
                                                    <option value="1">18</option>
                                                    <option value="2">19</option>
                                                    <option value="3">20</option>
                                                    <option value="4">21</option>
                                                    <option value="5">22</option>
                                                    <option value="6">23</option>
                                                    <option value="7">24</option>
                                                    <option value="8">25</option>
                                                    <option value="9">26</option>
                                                    <option value="10">27</option>
                                                    <option value="11">28</option>
                                                    <option value="13">29</option>
                                                    <option value="14">30</option>
                                                </select>
                                            </div>
                                            <div className="custom-select">
                                                <select name="maxAge" id="maxAge">
                                                    <option disabled selected>Select max age</option>
                                                    <option value="1">36</option>
                                                    <option value="2">19</option>
                                                    <option value="3">20</option>
                                                    <option value="4">21</option>
                                                    <option value="5">22</option>
                                                    <option value="6">23</option>
                                                    <option value="7">24</option>
                                                    <option value="8">25</option>
                                                    <option value="9">26</option>
                                                    <option value="10">27</option>
                                                    <option value="11">28</option>
                                                    <option value="13">29</option>
                                                    <option value="14">30</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                   
                                    <div className="height">
                                        <div className="">
                                            <div className="custom-select">
                                                <select name="minHeight" id="minHeight">
                                                    <option disabled selected>Select min height</option>
                                                    <option value="1">18</option>
                                                    <option value="2">19</option>
                                                    <option value="3">20</option>
                                                    <option value="4">21</option>
                                                    <option value="5">22</option>
                                                    <option value="6">23</option>
                                                    <option value="7">24</option>
                                                    <option value="8">25</option>
                                                    <option value="9">26</option>
                                                    <option value="10">27</option>
                                                    <option value="11">28</option>
                                                    <option value="13">29</option>
                                                    <option value="14">30</option>
                                                </select>
                                            </div>

                                            <div className="custom-select">
                                                <select name="maxHeight" id="maxHeight">
                                                    <option disabled selected>Select max height</option>
                                                    <option value="1">36</option>
                                                    <option value="2">19</option>
                                                    <option value="3">20</option>
                                                    <option value="4">21</option>
                                                    <option value="5">22</option>
                                                    <option value="6">23</option>
                                                    <option value="7">24</option>
                                                    <option value="8">25</option>
                                                    <option value="9">26</option>
                                                    <option value="10">27</option>
                                                    <option value="11">28</option>
                                                    <option value="13">29</option>
                                                    <option value="14">30</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="weight">
                                        <div className="">
                                            <div className="custom-select">
                                                <select name="minWeight" id="minWeight">
                                                    <option disabled selected>Select min weight</option>
                                                    <option value="1">18</option>
                                                    <option value="2">19</option>
                                                    <option value="3">20</option>
                                                    <option value="4">21</option>
                                                    <option value="5">22</option>
                                                    <option value="6">23</option>
                                                    <option value="7">24</option>
                                                    <option value="8">25</option>
                                                    <option value="9">26</option>
                                                    <option value="10">27</option>
                                                    <option value="11">28</option>
                                                    <option value="13">29</option>
                                                    <option value="14">30</option>
                                                </select>
                                            </div>

                                            <div className="custom-select">
                                                <select name="maxWeight" id="maxWeight">
                                                    <option disabled selected>Select max weight</option>
                                                    <option value="1">36</option>
                                                    <option value="2">19</option>
                                                    <option value="3">20</option>
                                                    <option value="4">21</option>
                                                    <option value="5">22</option>
                                                    <option value="6">23</option>
                                                    <option value="7">24</option>
                                                    <option value="8">25</option>
                                                    <option value="9">26</option>
                                                    <option value="10">27</option>
                                                    <option value="11">28</option>
                                                    <option value="13">29</option>
                                                    <option value="14">30</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                
                                    <div className="userMaximumEducation">
                                        <div className="custom-select w-100">
                                            <select name="userMaximumEducation" id="userMaximumEducation" className="">
                                                <option disabled selected>Select education</option>
                                                <option value="High-school education">High-school education</option>
                                                <option value="University education">University education</option>
                                                <option value="Technical education">Technical education</option>
                                                <option value="Academic education">Academic education</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="userReligion">
                                        <div className="custom-select right w-100">
                                            <select name="userReligion" id="userReligion" className="">
                                                <option disabled selected>Select religion</option>
                                                <option value="Muslim">Muslim/Islam</option>
                                                <option value="Christianity">Christianity</option>
                                                <option value="Hinduism">Hinduism</option>
                                                <option value="Judaism">Judaism</option>
                                                <option value="Sikhism">Sikhism</option>
                                                <option value="Jainism">Jainism</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="userMaritalStatus">
                                        <div className="custom-select right w-100">
                                            <select name="userMaritalStatus" id="userMaritalStatus" className="">
                                                <option disabled selected>Select marital status</option>
                                                <option value="Single">Single</option>
                                                <option value="Divoced">Divoced</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="userSmokingStaus">
                                        <div className="custom-select right w-100">
                                            <select name="userSmokingStaus" id="userSmokingStaus" className="">
                                                <option disabled selected>Select smoking status</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                                <option value="Sometimes">Sometimes</option>
                                                <option value="At parties">At parties</option>
                                                <option value="Trying to quit">Trying to quit</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="userDrinkingStatus">
                                        <div className="custom-select right w-100">
                                            <select name="userDrinkingStatus" id="userDrinkingStatus" className="">
                                                <option disabled selected>Select drinking status</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                                <option value="Sometimes">Sometimes</option>
                                                <option value="At parties">At parties</option>
                                                <option value="Trying to quit">Trying to quit</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="userParentStatus">
                                        <div className="custom-select right w-100">
                                            <select name="userParentStatus" id="userParentStatus" className="">
                                                <option disabled selected>Select parent status</option>
                                                <option value="I want to have kids">I want to have kids</option>
                                                <option value="I have kids">I have kids</option>
                                                <option value="Maybe">Maybe</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="userEyeColor">
                                        <div className="custom-select right w-100">
                                            <select name="userEyeColor" id="userEyeColor" className="">
                                                <option disabled selected>Select eye color</option>
                                                <option value="Amber">Amber</option>
                                                <option value="Blue">Blue</option>
                                                <option value="Brown">Brown</option>
                                                <option value="Black">Black</option>
                                                <option value="Gray">Gray</option>
                                                <option value="Green">Green</option>
                                                <option value="Hazel">Hazel</option>
                                                <option value="Red">Red</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="userHairColor">
                                        <div className="custom-select right w-100">
                                            <select name="userHairColor" id="userHairColor" className="">
                                                <option disabled selected>Select hair color</option>
                                                <option value="Amber">Amber</option>
                                                <option value="Blue">Blue</option>
                                                <option value="Brown">Brown</option>
                                                <option value="Gray">Gray</option>
                                                <option value="Black">Black</option>
                                                <option value="Green">Green</option>
                                                <option value="Hazel">Hazel</option>
                                                <option value="Red">Red</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="userClothingStyle">
                                        <div className="custom-select right w-100">
                                            <select name="userClothingStyle" id="userClothingStyle" className="">
                                                <option disabled selected>Select clothing style</option>
                                                <option value="Vintage fashion style">Vintage fashion style.</option>
                                                <option value="Artsy fashion style">Artsy fashion style</option>
                                                <option value="Casual fashion style">Casual fashion style</option>
                                                <option value="Grunge style clothing">Grunge style clothing</option>
                                                <option value="Chic fashion style">Chic fashion style</option>
                                                <option value="Bohemian fashion style">Bohemian fashion style</option>
                                                <option value="Exotic fashion style">Exotic fashion style</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="livingStyle">
                                        <div className="custom-select right w-100">
                                            <select name="livingStyle" id="livingStyle" className="">
                                                <option value="" disabled  selected>Choose current living style</option>
                                                <option value="Dorm">Dorm</option>
                                                <option value="House">Hourse</option>
                                                <option value="Condominium">Condominium</option>
                                                <option value="Apartment">Apartment</option>
                                            </select>
                                        </div>
                                    </div>

                                    <button className="lab-btn" type="submit">Search now <i className="icofont-search-2"></i></button>
                                </form>
                            </div>
                        </div>
                        <div className="member-wrapper">
                            <ul className="member-info mb-4">
                                <li className="all-member">
                                    <p>All Members </p>
                                    <p>20 365 587</p>
                                </li>
                                <li className="member-cat">
                                    <div className="custom-select right w-100">
                                        <select name="member" id="member-cat" className="">
                                            <option value="0">Newest Registerd</option>
                                            <option value="1">Oldest</option>
                                            <option value="2">Popular</option>
                                            <option value="3">Most Active</option>
                                        </select>
                                    </div>
                                </li>
                            </ul>
                            <div className="row g-3 row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 justify-content-center">
                                <MemberItemTwo />
                            </div>
                            <PaginaTion />
                        </div>
                    </div>
                </section>
                <AppsSection />
                <Footer />
            </div>
        );
    }
}

export default MembersPage;