   const inputPath = 'path/to/file.js';
   if (isValidPath(inputPath)) {
     const basename = path.basename(inputPath);
     console.log(basename); // 'file.js'
   } else {
     console.error('Invalid path');
   }
   