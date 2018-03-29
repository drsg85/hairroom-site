const gulp = require("gulp");
const webpack = require("webpack-stream");
const webpack2 = require('webpack');
const notify = require("gulp-notify");

const config = {
    entry: {
        scripts: "./src/js/scripts.js",
        map: "./src/js/map.js",
        instagram: "./src/js/instagram.js"
    },
    output: {
        filename: "[name].js"
    },
    module: {
        loaders: [{
            loader: "babel-loader",
            query: {
                presets: ["es2015"]
            },
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    plugins: [
        new webpack2.DefinePlugin({
          'process.env': { 'NODE_ENV': "'production'" }
        }),
        new webpack2.optimize.UglifyJsPlugin()
      ]
};

gulp.task("scripts", function() {
    return gulp.src("./src/js/**/*.js")
        .pipe(webpack(config))
        .on("error", notify.onError(function(error) {
            return {
                title: "Scripts",
                message: error.message
            };
        }))
        .on("error", function(error) {
            console.log(error.toString());
            this.emit("end");
        })
        .pipe(gulp.dest("./dist/"));
});