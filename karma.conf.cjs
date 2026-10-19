module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'webpack'],

    files: ['tests/**/*.spec.js', 'tests/**/*.spec.jsx'],
    preprocessors: {
      'tests/**/*.spec.js': ['webpack', 'sourcemap'],
      'tests/**/*.spec.jsx': ['webpack', 'sourcemap'],
    },

    webpack: {
      mode: 'development',
      devtool: 'inline-source-map',
      resolve: { extensions: ['.js', '.jsx'] },
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: { chrome: '100' } }],
                  ['@babel/preset-react', { runtime: 'automatic' }],
                ],
                // Instrumenta el código de src/ para el reporte de cobertura
                plugins: [['istanbul', { exclude: ['tests/**', '**/*.spec.*'] }]],
              },
            },
          },
          // Las imágenes se incrustan como data-URL (no hay servidor de archivos en Karma)
          { test: /\.(avif|jpe?g|png|webp|svg)$/i, type: 'asset/inline' },
        ],
      },
    },

    reporters: ['spec', 'coverage'],
    coverageReporter: {
      dir: 'coverage',
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'lcov', subdir: 'lcov' },
        { type: 'text-summary' },
      ],
    },

    browsers: ['ChromeHeadlessNoSandbox'],
    customLaunchers: {
      ChromeHeadlessNoSandbox: { base: 'ChromeHeadless', flags: ['--no-sandbox'] },
    },

    singleRun: false,
    restartOnFileChange: true,
  });
};
