import React from 'react';

const About = () => {
    return (
        <div>
            <h2>About</h2>
            <span class="emailImg">
                <img width="48" height="48" src="https://github.com/minzez/portfolio/blob/master/1164530-5122.png?raw=true"></img>
                <a href="mailto: mino13@nate.com"><img width="48" height="48" src="https://github.com/minzez/portfolio/blob/master/1164530-512.png?raw=true"></img></a>
            </span>

            <span class="gitImg" width="24" height="24">
                <img width="48" height="48" src="https://github.com/minzez/portfolio/blob/master/1390302-5122.png?raw=true"></img>
                <a href="https://github.com/minzez"><img width="48" height="48" src="https://github.com/minzez/portfolio/blob/master/1390302-512.png?raw=true"></img></a>
            </span>
        </div>
    );
};

export default About;