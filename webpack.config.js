import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  entry: './src/index.ts',
  output: {
    path: resolve(__dirname, 'public')
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.(ts|tsx)$/i,
      loader: 'swc-loader',
      exclude: ['/node_modules/'],
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  }
}