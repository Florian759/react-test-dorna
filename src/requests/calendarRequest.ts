import axios from 'axios';

const URL = `/calendar.json`;

export const calendarRequest = () => axios({
    method: 'get',
    url: URL,
  });