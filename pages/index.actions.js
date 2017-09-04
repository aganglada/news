import fetch from 'isomorphic-fetch';

export const FETCH_SOURCES = 'FETCH_SOURCES';
export const RECEIVE_SOURCES = 'RECEIVE_SOURCES';

export const fetchSources = () => {
  return dispatch => {
    return fetch(
      'https://newsapi.org/v1/sources?apiKey=c9114e5f96974685adc37dbb93256de5'
    )
      .then(response => response.json())
      .then(({ sources }) => {
        dispatch({ type: RECEIVE_SOURCES, payload: { sources } });
      });
  };
};
