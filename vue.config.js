process.env.VUE_APP_VERSION=require("child_process").execSync('git rev-list HEAD --count').toString();

module.exports = {
    publicPath:"./",
    build_time:new Date().toISOString()
}