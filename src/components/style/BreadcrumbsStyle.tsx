import { emphasize, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';

export const WrapperBreadCrumbs = styled('div')(`
  width: 100%;
  padding: 10px 0px;
`);

export const BreadcrumbHover = styled(Chip)(({ theme }) => {
	const backgroundColor = theme.palette.mode === 'light'
		? theme.palette.grey[100]
		: theme.palette.grey[800];
  
	return {
		backgroundColor,
		height: theme.spacing(3),
		color: theme.palette.text.primary,
		fontWeight: 500,
		'& .MuiChip-icon': {
			color: theme.palette.text.primary,
		},
		'&:hover, &:focus': {
			color: theme.palette.text.secondary,
			backgroundColor: emphasize(backgroundColor, 0.06),
			'& .MuiChip-icon': {
				color: theme.palette.text.secondary,
			},
		},
		'&:active': {
			boxShadow: theme.shadows[1],
			backgroundColor: emphasize(backgroundColor, 0.12),
		},
	};
});
  