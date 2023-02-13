import { styled } from '@mui/material/styles';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Typography from '@mui/material/Typography';

export const WrapperToolbarSection = styled('div')(() => ({
    width:'100%',
    height: 60,
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
}));

export const EventIcon = styled(CalendarMonthIcon)(({ theme }) => ({
    fill: theme.palette.primary.main,
    marginRight: 15,
    fontSize: '2.1875rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.6875em',
    },
}));

export const Title = styled(Typography)(({ theme }) => ({
    margin: 'auto',
    flexGrow: 1,
    fontWeight: 500,
    fontSize: '1.5em',
    color: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.0em',
    },
    textTransform: 'lowercase',
    '&:first-letter': {
      textTransform: 'uppercase',
    },
  }));

  export const BottonsWrapper = styled('div')(() => ({
    width: '100%',
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'flex-end',
  }));
  
  export const WrapperList = styled('div')(`
    height: 100%;
    width: 100%;
    overflow-y: auto;
    padding-right: 5px;
    flex-grow: 1;
`);