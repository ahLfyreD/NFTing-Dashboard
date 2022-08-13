const CracoAlias = require("craco-alias");

module.exports = {
 
  plugins: [
    {
      plugin: CracoAlias,
      options: {

        source: "options",
        baseUrl: "./",
        aliases: {
          "@components": "./src/components/",
          "@asset": "./src/asset/",
        //   "@dir": "./src/some/dir",
          // you can alias packages too
        //   "@material-ui": "./node_modules/@material-ui-ie10"
        }
      }
    }
  ]
};