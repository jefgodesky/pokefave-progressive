import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const pwd = dirname(fileURLToPath(import.meta.url))

export default {
  entry: './client/src/index.ts',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [{
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.json'
          }
        }]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: resolve(pwd, 'server/build/public/js')
  }
}
