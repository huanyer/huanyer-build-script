const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const uglifyjsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const webpack = {
  plugins: [
    new AntdDayjsWebpackPlugin(),
    new uglifyjsPlugin({
      // 加快编译速度
      cache: true, //启用缓存
      parallel: true, //启用多进程并行运行
      uglifyOptions: {
        warnings: false,
        compress: {
          drop_debugger: true,
          drop_console: true,
        },
      },
    }),
    // gzip压缩
    new CompressionPlugin({
      test: /\.(js|mjs|jsx|ts|tsx)$/,
      algorithm: 'gzip',
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
};
// 开启 打包报告
if (process.env.REACT_APP_REPORT) {
  webpack.plugins.push(new BundleAnalyzerPlugin());
}
if (process.env.REACT_APP_BASENAME) {
  // 如果 basename存在，需要设置资源的请求路径
  webpack.output = { publicPath: `/${process.env.REACT_APP_BASENAME}/` };
}
module.exports = webpack;
