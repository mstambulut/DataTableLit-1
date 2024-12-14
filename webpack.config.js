// const path = require('path');
// const dotenv = require('dotenv');
// const webpack = require('webpack');

// dotenv.config();

// // module.exports = {
// //   entry: './src/app.js',
// //   output: {
// //     path: path.resolve(__dirname, 'dist'),
// //     filename: 'bundle.js',
// //   },
// //   resolve: {
// //     extensions: ['.js', '.mjs', '.json'], // Bu uzantılarla dosyaları çözümle
// //     alias: {
// //       // Tarayıcıda kullanılacak dosya alias'ları
// //       'some-module': path.resolve(__dirname, 'src/some-module'),
// //       // Tarayıcıya özel dosyalar, örneğin Node.js modüllerinin yerini tutacak tarayıcı modülleri
// //       fs: path.resolve(__dirname, 'src/mock/fs.js'), // fs modülü için mock dosyası
// //     },
// //   },
// //   module: {
// //     rules: [
// //       {
// //         test: /\.js$/,
// //         exclude: /node_modules/,
// //         use: {
// //           loader: 'babel-loader',
// //         },
// //       },
// //     ],
// //   },
// //   plugins: [
// //     new webpack.DefinePlugin({
// //       'process.env.NODE_ENV': JSON.stringify(
// //         process.env.NODE_ENV || 'development'
// //       ),
// //     }),
// //   ],
// //   mode: process.env.NODE_ENV || 'development',
// // };
// // const path = require('path');
// // var webpack = require('webpack');

// module.exports = {
//   entry: './src/app.js', // Giriş noktası (Ana dosya)
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js', // Çıktı dosyası adı
//   },
//   mode: process?.env?.NODE_ENV || 'development', // Geliştirme modu (Üretim için 'production' kullanın)
//   module: {
//     rules: [
//       {
//         test: /\.js$/, // .js dosyaları için
//         exclude: /node_modules/, // node_modules hariç
//         use: {
//           loader: 'babel-loader',
//           // options: {
//           //   presets: [
//           //     '@babel/preset-env',
//           //     {
//           //       modules: false, // ES modüllerini destekle
//           //     },
//           //   ], // ES6+ özelliklerini eski tarayıcılar için derler
//           // },
//         },
//       },
//     ],
//   },
//   plugins: [
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: JSON.stringify('production'),
//       },
//     }),
//   ],
//   devServer: {
//     static: {
//       directory: path.join(__dirname, 'dist'), // 'dist' klasörünü statik içerik olarak sunar
//     },
//     compress: true,
//     port: 9000,
//     hot: true, // Canlı yeniden yükleme
//   },
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, 'src'), // Kısa yol oluşturmak için
//     },
//   },
// };

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
