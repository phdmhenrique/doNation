import React from 'react';

import { Container } from './styles';
import Profile from '../Profile';
import Services from '../Services';

const ProfileAndServices: React.FC = () => {
  return (
    <Container>
        <Profile />
        <Services />
    </Container>
  );
}

export default ProfileAndServices;