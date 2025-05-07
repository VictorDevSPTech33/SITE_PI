-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database xadrez;
use xadrez;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(50),
sobreNome varchar(60),
email varchar(70),
senha varchar(60))
;

create table quiz(
idQuiz int primary key,
fkUsuario int,
foreign key (fkUsuario) references usuario(idUsuario)
);

create table resposta(
idResposta int primary key auto_increment,
fkQuiz int,
foreign key (fkQuiz) references quiz(idQuiz)
);
