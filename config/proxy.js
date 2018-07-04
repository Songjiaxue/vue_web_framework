
module.exports = {
  '/api': {
    target: 'http://192.168.1.190:8089/', // 本地
    changeOrigin: true,
    secure: false,
  },
};