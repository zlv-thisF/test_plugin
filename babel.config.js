module.exports = {
    presets: [
        ["@babel/preset-env", { modules: false }],
        ["@babel/preset-react"],
        ["@babel/preset-typescript"],
    ],
    overrides: [
        {
            test: "./webpack.config.babel.js",
            presets: [
                ["@babel/preset-env"],
            ],
        },
    ],
};
