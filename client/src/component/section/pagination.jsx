import React, { Component } from 'react';

class PaginaTion extends Component {
    render() {
        return (
            <div className="paginations">
                <ul className="lab-ul d-flex flex-wrap justify-content-center mb-1">
                    <li>
                        <a href="#"><i className="icofont-rounded-double-left"></i></a>
                    </li>
                    <li>
                        <a href="#">1</a>
                    </li>
                    <li className="d-none d-sm-block">
                        <a href="#">2</a>
                    </li>
                    <li>
                        <a href="#">...</a>
                    </li>
                    <li className="d-none d-sm-block">
                        <a href="#">4</a>
                    </li>
                    <li>
                        <a href="#">5</a>
                    </li>
                    <li>
                        <a href="#"><i className="icofont-rounded-double-right"></i></a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default PaginaTion;