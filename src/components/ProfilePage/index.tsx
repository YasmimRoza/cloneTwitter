import React from 'react';

import Feed from '../Feed';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles'

const ProfilePage: React.FC = () => {
  return (
    <Container>
      
      <Banner>
        <Avatar/>
      </Banner>
      
      <ProfileData>
        <EditButton outlined> Editar Perfil</EditButton>

        <h1>Yasmim Roza</h1>
        <h2>@Yasmim_Roza_</h2>

        <p>
          Developer at Cits
        </p>

        <ul>
          <li>
            <LocationIcon />
            Manaus, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 04 de Dezembro de 1998
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>109</strong>
          </span>
          <span>
          <strong>110 </strong> seguidores
          </span>
        </Followage>
       <Feed/>
      </ProfileData>
    </Container>
  )
}

export default ProfilePage;