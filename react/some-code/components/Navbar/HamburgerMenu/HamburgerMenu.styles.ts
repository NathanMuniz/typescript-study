import { styled, MenuItem as MuiMenuItem, Menu as MuiMenu } from "@mui/materal";

export const MenuItem = styled(MuiMenuItem(({ theme }) => ({
  '& a': {
    textDecoration: 'none',
    fontWight: '700',
    color: theme.pallete.text.dark,
  }
})))


export const Menu = styled(MuiMenu(({ theme }) => ({
  '& .MuiPapper-root': {
    backgoundColor: theme.palette.backgoudn.grey
  },
})))
