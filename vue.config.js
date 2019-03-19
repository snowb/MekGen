process.env.VUE_APP_VERSION=require("child_process").execSync('git rev-list HEAD --count').toString();
process.env.VUE_APP_BUILD_DATE=require("./timestamp")();

module.exports = {
    publicPath:"./"
}