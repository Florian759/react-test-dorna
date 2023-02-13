import axios from 'axios';

const URL = `/calendar.json`;

export const calendarService = () => axios({
    method: 'get',
    url: URL,
  });