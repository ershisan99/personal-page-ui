const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const image = require('@rollup/plugin-image');
const svgr = require('@svgr/rollup');
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
    config.plugins = [
      image({ include: ['**/*.png', '**/*.jpg', '**/*.svg'] }),
      ...config.plugins,
    ];
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
