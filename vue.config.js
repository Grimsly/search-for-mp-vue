module.exports = {
    devServer: {
        proxy: "https://represent.opennorth.ca/" 
    },
    css: {
        loaderOptions: {
          sass: {
            prependData: `@import "@/scss/_flexbox.scss";`
          }
        }
    }
};