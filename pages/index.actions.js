import fetch from 'isomorphic-fetch';

const apiKey = process.env.NEWS_APIKEY;

export const FETCH_SOURCES = 'FETCH_SOURCES';
export const RECEIVE_SOURCES = 'RECEIVE_SOURCES';

export const fetchSources = () => {
  return dispatch => {
    return fetch(`https://newsapi.org/v1/sources?apiKey=${apiKey}`)
      .then(response => response.json())
      .then(({ sources }) => {
        dispatch({ type: RECEIVE_SOURCES, payload: { sources } });
      });
  };
};
