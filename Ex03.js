const fs = require('fs');

fs.readFile('dados.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }

    const faturamentos = JSON.parse(data);
    const diasComFaturamento = faturamentos.filter(dia => dia.valor > 0);
    const menorFaturamento = Math.min(...diasComFaturamento.map(dia => dia.valor));
    const maiorFaturamento = Math.max(...diasComFaturamento.map(dia => dia.valor));
    const totalFaturamento = diasComFaturamento.reduce((acc, dia) => acc + dia.valor, 0);

    const mediaFaturamento = totalFaturamento / diasComFaturamento.length;

    const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaFaturamento).length;

    console.log(`Menor valor de faturamento: ${menorFaturamento}`);
    console.log(`Maior valor de faturamento: ${maiorFaturamento}`);
    console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
});
