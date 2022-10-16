const fs = require('fs-extra');

// Create first folder

const firstFolder = './folder-1';

if (!fs.existsSync(firstFolder)) {
  fs.mkdirSync(firstFolder);
}

// Create file-1

const firstFile = `${firstFolder}/file-1.txt`;
fs.appendFile(firstFile, 'Hello content!', err => {
  if (err) throw err;
  console.log('Saved!');
});

// Create second folder

const secondFolder = './folder-2';

if (!fs.existsSync(secondFolder)) {
  fs.mkdirSync(secondFolder);
}

// Move file from folder-1 to folder-2

const src = './folder-1';
const dest = './folder-2';

// With a callback:
fs.move(src, dest, { overwrite: true }, err => {
  if (err) return console.error(err);
  console.log('success!');
});

// Create third folder

const thirdFolder = './folder-3';

if (!fs.existsSync(thirdFolder)) {
  fs.mkdirSync(thirdFolder);
}

// Copy file-1 from folder-2 to folder-3

fs.copySync('./folder-1', './folder-3');

// Delete files

fs.emptyDirSync('./folder-1');
fs.emptyDirSync('./folder-3');

// Delete folders

//fs.removeSync('./file-1.txt');
fs.removeSync('./folder-3', () => {
  fs.removeSync('./folder-2', () => {});
});
