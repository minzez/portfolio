import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Projects, About } from 'pages';
import { Menu } from 'components';

class App extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <Route exact path="/portfolio" component={Projects}/>
                <Route path="/portfolio/about" component={About}/>
            </div>
        );
    }
}

export default App;