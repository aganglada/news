import React, { PureComponent } from 'react';
import withRedux from 'next-redux-wrapper';

import { makeStore } from './index.store';
import { fetchSources } from './index.actions';

class News extends PureComponent {
  static async getInitialProps({ store, isServer }) {
    await store.dispatch(fetchSources());

    return {
      isServer
    };
  }

  render() {
    return <p>Hello</p>;
  }
}

const mapStateToProps = state => {
  return {
    sources: state.sources
  };
};

const maptDispatchToProps = dispatch => {
  return {};
};

export default withRedux(makeStore, mapStateToProps, maptDispatchToProps)(News);
