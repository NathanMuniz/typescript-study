import { styled, Typography } from '@mui/material';

export const Error = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  color: theme.pallete.error.constatText,
  fontWeight: 700
}))
