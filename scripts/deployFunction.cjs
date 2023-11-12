const fs = require('fs');
const yaml = require('js-yaml');
const { execSync } = require('child_process');

const moduleName = process.argv[2]; // Nome do módulo passado como argumento

if (!moduleName) {
  console.error('Por favor, forneça o nome do módulo como argumento.');
  process.exit(1);
}

// Carregue o arquivo serverless.yml principal
const mainConfig = yaml.load(fs.readFileSync('serverless.yml', 'utf8'));

// Carregue o arquivo serverless.yml do módulo específico
const moduleConfig = yaml.load(fs.readFileSync(`src/functions/${moduleName}/config.yml`, 'utf8'));

// Mesclar as configurações
const mergedConfig = { ...mainConfig, ...moduleConfig };

// Escreva a configuração mesclada em um novo arquivo serverless.yml
fs.writeFileSync('merged-serverless.yml', yaml.dump(mergedConfig));

// Execute o deploy com o arquivo mesclado
execSync('sls deploy -c merged-serverless.yml', { stdio: 'inherit' });

// Limpeza do arquivo temporário (opcional)
fs.unlinkSync('merged-serverless.yml');
