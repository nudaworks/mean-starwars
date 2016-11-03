'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './client/app/index.ts',
    vendor: [
      '@angular/core',
      '@angular/compiler',
      '@angular/common',
      '@angular/http',
      '@angular/platform-browser',
      '@angular/platform-browser-dynamic',
      '@angular/router',
      'reflect-metadata',
      'zone.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].bundle.js.map'
  },
  module: {
    // preLoaders: [
    //   { test: /\.ts$/, loader: 'tslint' }
    // ],
    loaders: [
      { test: /\.ts$/, loader: 'ts', exclude: /node_modules/ },
      // { test: /\.html$/, loader: 'raw' },
      // { test: /\.css$/, loader: 'style!css?sourceMap' },
      // { test: /\.svg/, loader: 'url' },
      // { test: /\.eot/, loader: 'url' },
      // { test: /\.woff/, loader: 'url' },
      // { test: /\.woff2/, loader: 'url' },
      // { test: /\.ttf/, loader: 'url' }
    ]
  }
};
