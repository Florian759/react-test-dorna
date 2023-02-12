import { styled } from '@mui/material/styles';

export const WrapperCard = styled('div')(({ theme }) => `
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px 15px;
  border-radius: 10px;
  border-top: 2px solid ${theme.palette.primary.main};
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.1);
  background-color: rgba(255,255,255,.8);
  box-sizing: border-box;
`);