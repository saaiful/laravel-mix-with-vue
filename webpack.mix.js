let mix = require('laravel-mix');
mix.setPublicPath("./");
mix.options({
    cleanCss: {level: {1: {specialComments: 'none'}}},
    postCss: [require('postcss-discard-comments')({ removeAll: true })],
    purifyCss: false,
});

mix.sass('src/sass/app.scss', 'dist/css')
 .js('src/js/app.js', 'dist/js')
 .sourceMaps();

mix.copy('src/index.html', 'dist/index.html');
mix.copy('src/favicon.png', 'dist/favicon.png');
