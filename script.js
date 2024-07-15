const path = require('path')
const fs = require('fs')

function getAllFilesInFolder(folderPath, fileList) {
    const files = fs.readdirSync(folderPath);

    files.forEach(file => {
        const filePath = path.join(folderPath, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            getAllFilesInFolder(filePath, fileList);
        } else {
            fileList.push(filePath);
        }
    });

    return fileList;
}

const folderPath = './';
const fileList = [];
const allFiles = getAllFilesInFolder(folderPath, fileList);
console.log(allFiles);