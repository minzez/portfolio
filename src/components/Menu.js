import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'reactstrap';
import './Menu.css';

const Menu = () => {
    return (
        <div>
            <span class="linkBtn"><Link to="/portfolio"><Button color="outline-success" variant="outline-success">Projects</Button></Link></span>
            <span class="linkBtn"><Link to="/portfolio/about"><Button color="outline-warning" variant="outline-warning">About</Button></Link></span>
            <hr/>
        </div>
    );
};

export default Menu;