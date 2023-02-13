import { Configuration } from 'webpack';
import WebpackBar from 'webpackbar';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

export interface EnvOptions {
  mode: 'development' | 'production';
}

export default (env: EnvOptions): Configuration => {
  const isDev = env.mode === 'development';

  return {
    resolve: {
      extensions: ['...', '.ts'],
    },

    module: {
      rules: [
        {
          test: /\.(js|ts)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: isDev,
                rootMode: 'upward',
              },
            },
          ],
        },
      ],
    },

    plugins: [
      new WebpackBar(),
      new CleanWebpackPlugin(),
    ],

    optimization: {
      minimize: !isDev,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            format: {
              comments: false,
            },
          },
          extractComments: false,
        }),
      ],
    },

    devtool: isDev ? 'eval-source-map' : false,
  };
};
