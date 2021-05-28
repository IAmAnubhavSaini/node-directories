const fs = require('fs');
const path = require('path');

const directories = (root = '/') => {
    try {
        const content = fs.readdirSync(root);
        const getPath = x => path.join(root, x);
        const isDirectory = x => fs.lstatSync(getPath(x)).isDirectory();
        return content.filter(isDirectory);
    } catch (e) {
        console.error('ERROR', e);
        return [];
    }
};

module.exports = directories;
