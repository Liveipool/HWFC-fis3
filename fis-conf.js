// default settings. fis3 release

// Global start

// sass的编译
fis.match('client/styles/**.scss', {
  parser: fis.plugin('node-sass', {
      //fis-parser-sass option
  }),
  rExt: '.css',
  useHash: true,
  optimizer: fis.plugin('clean-css')
});

// 编译除了index.jade之外的所有jade文件
fis.match('client/templates/**/*.jade', {
  parser: fis.plugin('jade', {
    pretty: true
  }),
  rExt: 'html'
});

// 单独编译index.jade
fis.match('client/templates/(*.jade)', {
  parser: fis.plugin('jade', {
    pretty: true
  }),
  rExt: 'html',
  release: '/$1'
});

// 开发者自己写的客户端的js 压缩
fis.match('client/scripts/**.js', {
  optimizer: fis.plugin('uglify-js'),
  useHash: true
});

// 开发者自己写的服务端的js 压缩
fis.match('server/**.js', {
  optimizer: fis.plugin('uglify-js'),
  useHash: true
});

// 开发者自己写的客户端的js 压缩
fis.match('server/(*.js)', {
  optimizer: fis.plugin('uglify-js'),
  useHash: true,
  release: '$1'
});

// // png 图片压缩
fis.match('client/images/**.png', {
  optimizer: fis.plugin('png-compressor'),
  useHash: true
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
