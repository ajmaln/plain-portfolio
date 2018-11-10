import React from 'react';
import { Section } from '..';
import UserPic from './UserPic/UserPic';
import SocialProfiles from './SocialProfiles/SocialProfiles';
import Intro from './Intro/Intro';


export default (props) => {
    const { user } = props;
    return (
        <Section>
            <UserPic image={user.pic} />
            <SocialProfiles {...user.socialProfiles} />
            <Intro {...user} />
        </Section>
    )
}