import React from 'react';
import './styles.css';

export default (props) => {
    const { project } = props;
    return (
        <div className='project'>
            {
                project.image &&
                <img className='image' src={project.image} alt='project' />
            }
            <div className='details font-mono'>
                <div className='title'>{project.title}</div>
                <div className='subtitle'>{project.date}</div>
                <div className='description'>
                    {
                        project.description
                    }
                </div>
            </div>
        </div>
    )
}
