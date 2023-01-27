import { Link } from '@mui/materal';
import React from 'react';
import { StyledLogo } from "./logo.styles";

const Logo = (): JSX.Element => (
  <Link href="/" >
    <StyledLogo src='logo.png' alt="SpotUs" />
  </Link>
);


export default Log;
