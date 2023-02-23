import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import { IconButton, Toolbar, Typography } from '@mui/material';


export const WrapperHeader = styled('div')(() => (`
  width: 100%;
	margin-bottom: 30px;
`));

export const AppBarHeader = styled(AppBar)(({theme}) => (`
	background-color: #fff;
	color: #969696;
	border-bottom: 3px solid ${theme.palette.primary.main};
`));

export const WrapperFlexGrow = styled('div')(`
  flex-grow: 1
`);

export const ToolbarHeader = styled(Toolbar)({
	paddingLeft: 0,
	paddingRight: 10,
});
  
export const TitleApp = styled(Typography)(({ theme }) => ({
	fontWeight: 800,
	lineHight: 1.0,
	fontSize: '1.2rem',
	letterSpacing: '0.09rem',
	padding: '5px 0',
	color: theme.palette.text.primary,
}));

export const IconButtonStyle =  styled(IconButton)(({ theme }) => ({
	transition: theme.transitions.create(['transform'], {
		duration: theme.transitions.duration.short,
	}),
	'&:hover': {
		color: theme.palette.text.secondary,
	},
}));
