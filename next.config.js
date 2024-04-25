module.exports = {
    webpack: (config, options) => {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
  
      // Exclude the Excalidraw library from server-side rendering
      config.module.rules.push({
        test: /\.js$/,
        include: /node_modules[\\/]@excalidraw/,
        use: {
          loader: 'null-loader',
        },
      });
  
      return config;
    },
  };