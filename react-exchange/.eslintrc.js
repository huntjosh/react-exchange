module.exports = {
    "extends": "airbnb",
    "env": {
        "browser": true,
        "node": true,
        "jest": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 7,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "react/jsx-filename-extension": 0
    },
};