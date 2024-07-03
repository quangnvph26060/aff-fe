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
    server: {
      proxy: {
        '/api': {
          target: 'http://123.31.31.39:8080',
          changeOrigin: true,
          pathRewrite: {
            '^/api': '',
          },
        },
      },
    },
  };