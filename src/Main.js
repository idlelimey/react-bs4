/*

TODO:
1. Store the theme state in local storage.
2. Restyle navbar.
3. Use email.js for email send?

*/

import React, { Component } from "react";
import {
    Route,
    HashRouter
} from 'react-router-dom';

import Menu     from './Menu';
import Home     from './Home';
import Page     from './Page';
import Contact  from './Contact';
import Cards    from './Cards';
import Footer   from './Footer';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            theme       : 'light',
            loading     : true,
            isHomePage  : false
        };
        this.themeChange = this.themeChange.bind(this);
    }

    themeChange(e){
        e.preventDefault();
        console.log('1: ' + e.target.getAttribute('data-theme'));
        this.setState({
            theme: e.target.getAttribute('data-theme')
        });
        console.log('2: ' + e.target.getAttribute('data-theme'));
    }

    componentDidMount() {
        // Remove the loading screen
        const loader = document.getElementById('page-loading');
        if(loader){
            setTimeout(() => {
                loader.outerHTML = '';
            }, 1000);
        }
    }
    render() {
        return (
            <HashRouter>
                <div className={this.state.theme}>
                <div id="page-loading"></div>
                    <Menu doThemeSwitch={this.themeChange} currentTheme={this.state.theme} />
                    <section id="content">
                        <Route exact path="/" component={Home} />
                        <Route path="/page" component={Page} />
                        <Route path="/contact/" component={Contact} />
                        <Route path="/cards" component={Cards} />
                    </section>
                    <Footer />
                </div>
            </HashRouter>
        );
    }
}

export default Main;