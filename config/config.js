export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: {
        immer: true
      },
      dynamicImport: false,
      title: 'UMI-JS',
      dll: false,
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
};
