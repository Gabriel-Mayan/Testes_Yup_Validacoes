const knex = require('knex')(
    {
        client: 'pg',
        connection:
        {
            host: 'localhost',
            user: 'postgres',
            database: 'conteiner',
            passwords: '123456'
        }
    }
)

module.exports = knex;