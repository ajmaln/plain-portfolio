import React from 'react';
import { Section } from '..';
import Project from './Project/Project';


export default (props) => (
    <Section>
        <h1 className='font-cursive center'>Projects</h1>
        <div className='center-middle flex-column'>
            {
                props.projects.map(project =>
                    <Project project={project} />
                )
            }
        </div>
    </Section>
)