var database = require("../database/config");

function salvarResultado(fkUsuario, nivel, acertos) {
    var instrucaoSql = `
        INSERT INTO resultado_quiz (fk_usuario, nivel, acertos) 
        VALUES (${Number(fkUsuario)}, '${nivel}', ${acertos});
    `;
    return database.executar(instrucaoSql);
}

function buscarEstatisticas(nivel) {
    var instrucaoSql = `
        SELECT 
            COUNT(DISTINCT fk_usuario) AS total_usuarios,
            AVG(acertos) AS media_acertos
        FROM resultado_quiz
        WHERE nivel = '${nivel}';
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    salvarResultado,
    buscarEstatisticas
};