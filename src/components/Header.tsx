import React, { FC } from 'react';
import { AppBarHeader, IconButtonStyle, TitleApp, ToolbarHeader, WrapperFlexGrow, WrapperHeader } from './style/HeaderStyle';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { useNavigate } from 'react-router';

export const Header:FC = () => {
	const navigate = useNavigate();

	const handleOnClick = () => {
		navigate('/help');
	};

	return (
		<WrapperHeader>
			<AppBarHeader>
				<ToolbarHeader>
  
					<WrapperFlexGrow>
						<TitleApp variant="h1">Test Dorna</TitleApp>
					</WrapperFlexGrow>
  
					<IconButtonStyle onClick={handleOnClick}>
						<QuestionMarkIcon/>
					</IconButtonStyle>
  
				</ToolbarHeader>
			</AppBarHeader>
		</WrapperHeader>
	);
};

export default Header;