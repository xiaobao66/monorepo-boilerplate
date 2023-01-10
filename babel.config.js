// print babel effective configs
// https://babeljs.io/docs/en/configuration#print-effective-configs
// 例如：BABEL_SHOW_CONFIG_FOR=./src/index.ts pnpm --filter="@demo/webpack-compile" build

module.exports = function (api) {
  const isWebpack = api.caller(caller => !!(caller && caller.name === 'babel-loader'));

  api.cache(true);

  return {
    babelrcRoots: [
      '.',
      'packages/*',
    ],

    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            browsers: [
              '> 0.5%',
              'last 2 versions',
              'Firefox ESR',
              'not dead',
            ],
          },
          modules: isWebpack ? false : 'auto',
        },
      ],
      '@babel/preset-typescript',
    ],

    plugins: [
      [
        '@babel/plugin-transform-runtime',
        {
          corejs: 3,
        },
      ],
    ],
  };
};
