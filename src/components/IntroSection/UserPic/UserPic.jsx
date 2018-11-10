import React from 'react';
import './styles.css';


const UserPic = (props) => {
    return (
        <div class="pic-container center-middle">
            <img src={props.image} alt='pro-pic' class="profile-pic" />
        </div>
    )
}

export default UserPic;