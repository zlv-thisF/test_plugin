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
                "@babel/preset-env", "@babel/preset-typescript",
            ],
        },
        {
            //
            // what i expect to work:
            //
            test: ["./myPlugin/**/*"],
            presets: [
                "@babel/preset-env", "@babel/preset-typescript",
            ],
        },
    ],
};
