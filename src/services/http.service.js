import axios from "axios";

export async function fetchCalendar(offset){
  const { data } = await axios.get('https://footballista.ru/api/seasons/5099/calendar_paginated', {
    params: {
      offset:offset,
      limit: 10,
    },
  });
  return data;
}
