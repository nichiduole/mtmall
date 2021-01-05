module.exports = {
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    px2rem({
                        remUnit: 37.5
                    })
                ]
            }
        }
    }
}