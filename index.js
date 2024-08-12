const fs = require('node:fs');
const path = require('path')
const data = './data'
const replaceThis = 'johny'
const replaceWith = "sumit"
const preview = true
const folder = __dirname

try {
    fs.readdir(folder, (err, data) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }
        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            let oldFile = path.join(folder, item);
            let newFile = path.join(folder, item.replace(new RegExp(replaceThis, 'g'), replaceWith)); // use replace with RegExp

            if (oldFile !== newFile) {
                fs.rename(oldFile, newFile, (renameErr) => {
                    if (renameErr) {
                        console.error('Error renaming file:', renameErr);
                    } else {
                        console.log(`Successfully renamed ${oldFile} to ${newFile}`);
                    }
                });
            }
        }
    });
} catch (err) {
    console.error('Caught error:', err);
}
