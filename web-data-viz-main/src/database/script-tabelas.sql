use xadrez;
create database xadrez;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(50),
sobreNome varchar(60),
email varchar (254),
senha varchar(60)
);

create table Quiz(
idQuiz int primary key auto_increment,
nome VARCHAR(30) DEFAULT 'Xadrez'
);

create table resultado_quiz(
idResultado int primary key auto_increment,
fkUsuario int,
fkQuiz int,
nivel varchar(20),
acertos int,
data_hora datetime default CURRENT_TIMESTAMP,
foreign key (fkQuiz) references Quiz(idQuiz),
foreign key (fkUsuario) references usuario(idUsuario)
);

insert into Quiz values (1, 'Xadrez');


















