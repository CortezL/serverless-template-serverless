const archiver = require('archiver');
const fs = require('fs-extra');

async function packModules() {
  const output = fs.createWriteStream('node_modules.zip');
  const archive = archiver('zip', {
    zlib: { level: 9 } // Nível de compressão máximo
  });

  output.on('close', () => {
    console.log('Módulos empacotados com sucesso em node_modules.zip');
  });

  archive.on('error', (err) => {
    throw err;
  });

  archive.pipe(output);
  archive.directory('node_modules', 'node_modules'); // Empacota o conteúdo da pasta node_modules

  await archive.finalize();
}

packModules();
