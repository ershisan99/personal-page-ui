const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  rollup(config, opts) {
    config.plugins.push(
      postcss({
        modules: true,
        autoModules: true,
        plugins: [autoprefixer()],
        inject: true,
      })
    );
    if (opts.format === 'esm') {
      config = { ...config, preserveModules: true };
      config.output = {
        ...config.output,
        dir: 'dist/',
        entryFileNames: '[name].esm.js',
      };
      delete config.output.file;
    }
    return config;
  },
};
