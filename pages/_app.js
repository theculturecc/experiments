import React from 'react';
import App, { Container } from 'next/app';
import Head from '../components/Head';
import AssetPrefetch from '../components/AssetPrefetch';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head />
        <AssetPrefetch src="static/cursor-pointer-clicked.png" />
        <Component {...pageProps} />
      </Container>
    );
  }
}
