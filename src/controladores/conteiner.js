const knex = require('../bancodedados/conexao');
const {validarConteiner} = require('../validacoes/schema')

const cadastrarConteiner = async (req, res) => {
    const {cliente_id, numero_conteiner, tipo_conteiner, status_coneiner, categoria_conteiner } = req.body
    try {
        await validarConteiner.validate(req.body);

        const existeConteiner = await knex('conteiner').where({ numero_conteiner }).first();

        if(existeConteiner)
            return res.status(400).json('Numero do conteiner já existe');
        
        const novoConteiner = {
            cliente_id, 
            numero_conteiner, 
            tipo_conteiner, 
            status_coneiner, 
            categoria_conteiner
        }

        const conteinerCadastrado = await knex('conteiner').insert(novoConteiner).returning('*');

        if(conteinerCadastrado.length === 0)
            return res.status(400).json('Não foi possivel cadastrar o conteiner');

        return res.status(200).json('Conteiner cadastrado com sucesso!!!');
    } catch (error) {
        return res.status(400).json(error.message)
    }
}
const editarConteiner = async (req, res) => {
    
}
const consultarConteiner = async (req, res) => {
    
}
const deletarConteiner = async (req, res) => {
    
}

module.exports = 
{
    cadastrarConteiner,
    editarConteiner,
    consultarConteiner,
    deletarConteiner
}