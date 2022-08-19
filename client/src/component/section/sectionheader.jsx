import React, { Component } from 'react';

class SectionHeader extends Component {
    render() {
        return (
            <div className={ ( this.props.alignment ? this.props.alignment : "") }>
               { this.props.title }
                { this.props.subtitle }
            </div>
        )
    }
}

export default SectionHeader;