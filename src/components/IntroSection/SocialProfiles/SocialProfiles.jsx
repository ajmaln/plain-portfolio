import React from 'react';
import './styles.css'


export default (props) =>
    <div class="center-middle">
        {
            props.github && 
            <a class="icon" target="_blank" rel="noopener noreferrer" href={props.github}>
                <i class="fab fa-github"></i>
            </a>
        }
        {
            props.stackoverflow &&
            <a class="icon" target="_blank" rel="noopener noreferrer" href={props.stackoverflow}>
                <i class="fab fa-stack-overflow"></i>
            </a>
        }
        {
            props.linkedin &&
            <a class="icon" target="_blank" rel="noopener noreferrer" href={props.linkedin}>
                <i class="fab fa-linkedin"></i>
            </a>
        }
    </div>

