const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    configureWebpack: {
        stats: {
            children: true
        }
    },
    transpileDependencies: true,
    chainWebpack: config => {
        config.module
            .rule('ts')
            .use('ts-loader')
            .loader('ts-loader')
            .tap(options => {
                // Modify options as needed
                return options;
            });
    }
})
