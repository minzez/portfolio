import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'reactstrap';

const Menu = () => {
    return (
        <div>
            <Link to="/"><Button color="outline-success" variant="outline-success">Projects</Button></Link>
            <Link to="/about"><Button color="outline-warning" variant="outline-warning">About</Button></Link>
            <hr/>
        </div>
    );
};

export default Menu;