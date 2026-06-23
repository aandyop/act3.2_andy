import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][hash][ext]'
        }
      },
    ],
  },
  optimization: {
    minimizer: [
      '...',
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'style.min.css' }),
    new HtmlWebpackPlugin({ template: './src/index.html', filename: 'index.html', minify: true }),
    new HtmlWebpackPlugin({ template: './src/libros.html', filename: 'libros.html', minify: true }),
    new HtmlWebpackPlugin({ template: './src/sobre-autor.html', filename: 'sobre-autor.html', minify: true }),
    new HtmlWebpackPlugin({ template: './src/contacto.html', filename: 'contacto.html', minify: true }),
  ],
};