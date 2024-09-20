**Iniciar um projeto node**
npm init -y

**Instalar o TS**
npm install --save-dev typescript

**Iniciar projeto TS (gerar arquivo de configuração do TS)**
npx tsc --init

**Converter o arquivo ts para js**
tsc nodeDoArquivo.ts -w
 //Se não tiver instalado globalmente deve-se usar o npx
 //-w entre no modo watch

**Executar o TS diretamente no terminal, sem converter para JS**
npx ts-node index.ts

**Executar compilação automática**
tsc -w