import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';

export const WrapperApp = styled('div')(`
  height: 100%;
  width: 100%;
  background-color: #f2f2f2;
`);

export const WrapperRoot = styled('div')(`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`);

export const ContainerWithHeader = styled(Container)(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  boxSizing: 'border-box',
  overflow: 'hidden',
  padding: '60px 24px',
}));

export const WrapperFlexRow = styled('div')(`
  display: flex;
  flex-direction: row;
`);

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

export const WrapperHelpCard = styled(WrapperCard)(({ theme }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  font-size: 1.2em;
`);