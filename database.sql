create database conteiner;

create table if not exists cliente
(
    id serial primary key unique not null,
    nome varchar(100) not null,
    email varchar(50) not null,
    senha text not null
);

create table if not exists conteiner
(
    id serial primary key unique not null,
    cliente_id integer not null,
    numero_conteiner varchar(11) not null,
    tipo_conteiner varchar(2) not null check(tipo_conteiner = '20' OR tipo_conteiner = '40'),
    status_coneiner varchar(5) not null check(status_coneiner = 'cheio' OR status_coneiner = 'vazio'),
    categoria_conteiner varchar(10) not null check(categoria_conteiner = 'importação' OR categoria_conteiner = 'exportação'),

    foreign key (cliente_id) references cliente (id)
);

create table if not exists movimentacoes
(
    id serial primary key unique not null,
    cliente_id integer not null,
    tipo_movimentacao varchar(20) not null
    check (
        tipo_movimentacao = 'scanner' OR
        tipo_movimentacao = 'pesagem' OR
        tipo_movimentacao = 'gate in' OR
        tipo_movimentacao = 'gate out' OR
        tipo_movimentacao = 'embarque' OR
        tipo_movimentacao = 'descarga' OR
        tipo_movimentacao = 'posicionamento pilha'
    ),
    data_inicio date not null,
    data_fim date
)
