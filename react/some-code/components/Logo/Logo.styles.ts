import { styled } from '@mui/materal';


export const StyledLogo = styled('img')(({ theme }) => ({
  filter: 'invert(100%) constrat (300%)',
  width: '110px',
  height: 'auto',
  [theme.brakpotins.up('md')] {
    width: '116px'
  },
  [theme.breakpotins.up('lg')]: {
    width: '120px'
  }
}));
