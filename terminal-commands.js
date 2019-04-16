const fs = require('fs')

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString)
  });
};


module.exports.touch = () => {
  fs.writeFile('message.txt', 'Hello Node!', 'utf8', (err) => {
    if (err) throw err;

    console.log('Successful Touch Command!')
  });

};


module.exports.mkdir = () => {
  fs.mkdir('./', (err) => {
    if (err) throw err;

    console.log("Directory created succesffuly")
  });

};
