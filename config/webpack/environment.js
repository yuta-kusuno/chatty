const { environment } = require('@rails/webpacker');
const webpack = require('webpack');

// Provideの意味がわからん
environment.plugins.append('Provide',
  new webpack.ProvidePlugin({
    $: 'jquery/src/jquery',
    jQuery: 'jquery/src/jquery'
  })
);
module.exports = environment;
