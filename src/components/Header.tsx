import React, { MouseEvent } from 'react';
import { AppBarHeader, IconButtonStyle, TitleApp, ToolbarHeader, WrapperFlexGrow, WrapperHeader } from "./style/HeaderStyle";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { useNavigate } from 'react-router';

export function Header() {
  const navigate = useNavigate();

  const handleOnClick = (event: MouseEvent<HTMLElement>) => {
    navigate(`/help`)
  }

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
  )
}

export default Header;