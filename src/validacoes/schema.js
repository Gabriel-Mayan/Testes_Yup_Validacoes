yup = require('./config');

const validarConteiner = yup.object().shape({
    cliente_id: yup
        .number()
        .positive(),

    numero_conteiner: yup
        .string()
        .strict()
        .min(11)
        .max(11)
        .test('equal', 'O numero do conteiner deve ter quatro letras maiusculas e sete numeros', val => {
            const letrasENumerosConteiner = val.split('');

            const letras = letrasENumerosConteiner.slice(0,4);
            const numeros = letrasENumerosConteiner.slice(4, 11);

            const testeLetras = letras.every(letra => letra != Number(letra) && letra === letra.toUpperCase());
            const testeNumeros = numeros.every(numero => numero === Number(numero));

            if(testeLetras && testeNumeros)
                return true;
            return false;
        }),

    status_conteiner: yup
        .string()
        .strict()
        .min(5)
        .max(5)
        .test('equal', 'Status invalido, status só pode ser "Cheio" ou "Vazio"', val => {
            if(val === 'cheio' || val === 'vazio')
                return true;
            return false;
        }),
    
    tipo_conteiner: yup
        .string()
        .strict()
        .min(2)
        .max(2)
        .test('equal', 'Tipo de conteiner invalido, só recebemos 20 ou 40', val => {
            if(val === '20' || val === '40')
                return true;
            return false;
        }),

    categoria_conteiner: yup
        .string()
        .strict()
        .max(10)
        .test('equal', 'Status invalido', val => {
            const movimentacoes = ['scanner','pesagem', 'gate in', 'gate out', 'embarque', 'descarga', 'posicionamento pilha']

            if(movimentacoes.includes(val))
                return true;
            return false;
        }),
    })

    const validarMovimentacao = yup.object().shape({
        conteiner_id: yup
            .number()
            .positive(),
    
        tipo_movimentacao: yup
            .string()
            .strict()
            .max(10)
            .test('equal', 'Status invalido', val => {
                const movimentacoes = ['scanner','pesagem', 'gate in', 'gate out', 'embarque', 'descarga', 'posicionamento pilha']
    
                if(movimentacoes.includes(val))
                    return true;
                return false;
            }),

        data_inicio: yup
            .date()
            .strict(),
        
        data_fim: yup
            .date()
            .strict()
    });

module.exports = {
    validarConteiner,
    validarMovimentacao
}