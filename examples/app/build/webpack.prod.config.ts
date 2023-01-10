import { resolve } from 'path';
import { Configuration } from 'webpack';
import merge from 'webpack-merge';
import webpackConfig, { EnvOptions } from '@/webpack.config';

const ROOT = resolve(__dirname, '..');

export default (env: EnvOptions): Configuration => {
  const config: Configuration = {
    mode: 'production',

    entry: {
      index: resolve(ROOT, 'src/index.ts'),
    },

    output: {
      path: resolve(ROOT, 'dist'),
      filename: '[name].js',
      chunkFilename: 'chunk.[name].js',
    },
  };

  return merge(webpackConfig(env), config);
};
