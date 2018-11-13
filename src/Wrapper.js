import React, { Component } from 'react';

export default class Wrapper extends Component {
    render() {
        const classes = this.props.className ? 'wrapper ' + this.props.className : 'wrapper';

        // This is the default wrapper for page components.
        // Use this as I may extend it in the future to take 
        // custom page props.
        // As components must be within a single element,
        // this wrapper also helps with structure.
        return (
            <div className={classes}>
                {this.props.children}
            </div>
        );
    }
}