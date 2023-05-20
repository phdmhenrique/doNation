import React from 'react';
import { 
  Container,
  Home,
} from './styles';
import Comunitys from '../Comunitys';
import AboutComunity from '../AboutComunity';
import ProfileAndServices from '../ProfileAndServices';

const Layout: React.FC = () => {
  return (
    <Container>
        <Comunitys />
        <Home>
          <AboutComunity />
          <ProfileAndServices />
        </Home>
    </Container>

  );
}

export default Layout;