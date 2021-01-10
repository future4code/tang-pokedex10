import React from 'react';
import { HeaderWrapper } from './styles';

const Header = (props) => {
  return (
    <HeaderWrapper>
      <Header title={props.title} />
    </HeaderWrapper>
  )
}

export default Header;