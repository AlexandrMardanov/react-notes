module.exports = {
    'extends': ['standard', 'standard-react'],
    'parser': 'babel-eslint',
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'module',
        'allowImportExportEverywhere': true,
        'ecmaFeatures': {
            'jsx': true,
            'modules': true
        }
    },
    'env': {
        'browser': true,
        'jquery': true
    },
    'rules': {
        'indent': ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'space-before-function-paren': ["error", "never"]
    }
}
