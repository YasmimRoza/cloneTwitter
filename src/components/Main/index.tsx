import React from 'react'

import { Container, Header, BackIcon, ProfileInfo, BottomMenu, HomeIcon, SeachIcon, BellIcon, EmailIcon } from './styles'

import ProfilePage from '../ProfilePage'

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
         <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Yasmim Roza</strong>
          <span>2 Tweets</span>
        </ProfileInfo>
      </Header>

    <ProfilePage/>

    <BottomMenu>
      <HomeIcon className= "active"/>
      <SeachIcon />
      <BellIcon />
      <EmailIcon />
    </BottomMenu>

    </Container>
  )
}

export default Main;