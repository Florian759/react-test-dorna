import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const WrapperEventItem = styled('div')(({ theme }) => `
  display: flex;
  flex-direction: column;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.1);
  background-color: rgba(255,255,255,.8);
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    border-radius: 10px;
    background: #E5F3FF;
    color: ${theme.palette.text.secondary};

    & #item-icon, #item-to {
      display: block;
      color: ${theme.palette.text.secondary};
    }
  };
`);

export const WrapperHeaderEvent = styled('div')(({ theme }) => `
  display: flex;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
`);

export const WrapperTitleEvent = styled('div')(({ theme }) => `
  width: 100%;
  height: 44px;
  padding: 0 10px;
  border-radius: 10px;  
  display: flex;
  align-items: center;
`);

export const CodeEvent = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  fontWeight: 600,
  fontSize: '1em',
  textTransform: 'uppercase'
}));

export const SubTitleEvent = styled('span')(`
  padding: 10px;
  font-weight: 600;
  text-transform: capitalize;
  text-align: center;
`);

export const DateEvent = styled(Typography)(({ theme }) => ({
  fontSize: '0.85em',
}));

export const WrapperImage = styled('div')(({ theme }) => `
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  // background-color: red;
`);

export const WrapperAbsolute = styled('div')(({ theme }) => `
  z-index: 999;
  position: absolute;
  left: 15px;
  top: 15px;
`);

export const CircuitImage = styled('img')(({ theme }) => `
  width: 100%;
  height: 188px;
  aspect-ratio: 1 / 1;
  object-fit: contain;
`);

