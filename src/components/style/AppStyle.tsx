import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';

export const WrapperRoot = styled('div')(`
  height: 100%;
  width: 100%;
`);

export const ContainerWithHeader = styled(Container)(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  boxSizing: 'border-box',
  overflow: 'hidden',
  padding: '60px 24px 90px 24px',
}));