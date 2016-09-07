// default settings. fis3 release

// Global start

// 对js,css,png三种文件添加文件指纹
fis.match('*.{js,css,png}', {
  useHash: true
});

// js 压缩
fis.match('**/*.js', {
  optimizer: fis.plugin('uglify-js')
});

// css 压缩
fis.match('**/*.css', {
  optimizer: fis.plugin('clean-css')
});

// png 图片压缩
fis.match('**/*.png', {
  optimizer: fis.plugin('png-compressor')
});

fis.match('client/templates/(*.html)', {
  release: '/$1',
  useHash: false
});

// Global end

// default media is `dev`
fis.media('dev')
  .match('*', {
    useHash: false,
    optimizer: null
  });

// extends GLOBAL config
fis.media('production');
