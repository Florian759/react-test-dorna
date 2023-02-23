import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const WrapperAbsolute = styled('div')(() => `
  z-index: 999;
  position: absolute;
  left: 15px;
  top: 15px;
`);

export const WrapperTitleEvent = styled('div')(() => `
  width: 100%;
  height: 44px;
  padding: 0 10px;
  border-radius: 10px;  
  display: flex;
  align-items: center;
`);

export const CodeEvent = styled(Typography)(() => ({
	flexGrow: 1,
	fontWeight: 600,
	fontSize: '1em',
	textTransform: 'uppercase'
}));
  
export const WrapperImage = styled('div')(() => `
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  // background-color: red;
`);

export const CircuitImage = styled('img')(() => `
  width: 100%;
  height: 188px;
  aspect-ratio: 1 / 1;
  object-fit: contain;
`);
