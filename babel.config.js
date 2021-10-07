module.exports = function (api) {
  api.cache(true);

  return {
    presets: ["@babel/preset-env"],
    plugins: [
      "transform-node-env-inline",
      [
        "module-resolver",
        {
          extensions: [".js", ".ts"],
          root: ["./src"],
        },
      ],
    ],
  };
};
