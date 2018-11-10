import React from 'react';
import './styles.css';


export default (props) =>
    (
        <React.Fragment>
            <div class='center-middle flex-column'>
                <h1 class="font-cursive main-heading big">Hello, I'm {props.name}</h1>
                <h3 class="font-mono sub">
                    {
                        props.titles.map((title, index) =>
                            props.titles.length - 1 === index ? title : title + ' | '
                        )
                    }
                </h3>
            </div>
            <div class="center-middle btn-container">
                <a class="btn-link" href={props.resumeLink}
                    target="_blank" rel="noopener noreferrer">
                    <button class="download-button font-mono">Download Resume</button>
                </a>
            </div>
        </React.Fragment>
    )