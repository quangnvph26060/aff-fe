 import vue from "@vitejs/plugin-vue";
// const cors = require('cors');
// const { createProxyMiddleware } = require('http-proxy-middleware');
// module.exports = {
//     css: {
//         loaderOptions: {
//             less: {
//                 lessOptions: {
//                     modifyVars: {
//                         "primary-color": "#1DA57A",
//                         "link-color": "#1DA57A",
//                         "border-radius-base": "2px",
//                     },
//                     javascriptEnabled: true,
//                 },
//             },
//         },
//     },
//     devServer: {
//         proxy: {
//           '/api': {
//             target: 'http://123.31.31.39:99/', // Thay đổi URL thành URL của Laravel API
//             changeOrigin: true,
//             pathRewrite: {
//               '^/api': '',
//             },
//           },
//         },
//       },
// };
module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://123.31.31.39:99', // Thay đổi URL thành URL của API Laravel của bạn
          changeOrigin: true,
          pathRewrite: {
            '^/api': '',
          },
        },
      },
    },
  };