process.env.VUE_APP_COMMIT_COUNT=require("child_process").execSync('git rev-list HEAD --count').toString();
process.env.VUE_APP_VERSION=require("./package.json").version;
process.env.VUE_APP_BUILD_DATE=require("./timestamp")();

module.exports = {
    publicPath:"./",
    configureWebpack: {
        devtool: 'eval-source-map'
    }
}