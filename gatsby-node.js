exports.modifyWebpackConfig = ({ config, stage }) => {
    switch (stage) {
        case 'develop':
            // Remove PostCSS from Gatsby's dev process
            config.removeLoader(`css`)
            config.loader(`css`, {
                test: /\.css$/,
                loaders: [`style`, `css`]
            })

            break

        case 'build-css':
            // Remove PostCSS from Gatsby's build process
            config.removeLoader(`css`)
            config.loader(`css`, {
                test: /\.css$/,
                loaders: ["style", "css"]
            })

            break
    }
    return config
}
