import React from 'react';
import KdpaGrid from './KdpaGrid';

const HeaderContainer = ({ children }) => {
  return (
    <KdpaGrid container>
      {children}
    </KdpaGrid>
  );
};

export default HeaderContainer;