import path from 'path';
import { Configuration } from 'webpack';
import merge from 'webpack-merge';
import webpackConfig, { EnvOptions } from '@/webpack.config';

const ROOT = path.resolve(__dirname, '..');

export default (env: EnvOptions) => {
  const config: Configuration = {
    mode: 'development',

    entry: {
      index: path.resolve(ROOT, 'src/index.ts'),
    },

    output: {
      path: path.resolve(ROOT, 'dist'),
      filename: '[name].js',
      chunkFilename: 'chunk.[name].js',
    },
  };

  return merge(webpackConfig(env), config);
};
