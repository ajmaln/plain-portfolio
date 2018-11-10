import React from 'react';
import { Section } from '..';
import './styles.css'

export default (props) =>
    <Section>
        <h1 className='font-cursive center'>Skills</h1>
        <div className='skills-container center-middle'>
            {
                props.skills.languages.map(skill =>
                    <div className='skill'>
                        {
                            skill
                        }
                    </div>
                )
            }
        </div>
        <div className='skills-container center-middle'>
            {
                props.skills.fandls.map(skill =>
                    <div className='skill'>
                        {
                            skill
                        }
                    </div>
                )
            }
        </div>
        <div className='skills-container center-middle'>
            {
                props.skills.deployment.map(skill =>
                    <div className='skill'>
                        {
                            skill
                        }
                    </div>
                )
            }
        </div>
    </Section>