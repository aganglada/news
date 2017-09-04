import React, { PureComponent } from 'react';
import withRedux from 'next-redux-wrapper';

import store from './index.store';
import { fetchSources } from './index.actions';

class News extends PureComponent {
  static async getInitialProps({ store }) {
    await store.dispatch(fetchSources());
  }

  render() {
    return <p>Hello</p>;
  }
}

const maptDispatchToProps = dispatch => {
  return {};
};

const mapStateToProps = state => {
  return {
    sources: state.sources
  };
};

export default withRedux(store, mapStateToProps, maptDispatchToProps)(News);
