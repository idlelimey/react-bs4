import React, { Component } from "react";
import {
    Route,
    HashRouter
} from 'react-router-dom';

import Menu     from './Menu';
import Home     from './Home';
import Contact  from './Contact';
import Cards    from './Cards';
import Footer   from './Footer';

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Menu />
                    <section id="content">
                        <Route exact path="/" component={Home} />
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