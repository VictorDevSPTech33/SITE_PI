var quizModel = require("../models/quizModel");

function salvarResultado(req, res) {
    const fkUsuario = req.body.fkUsuario;
    var nivel = req.body.nivel;
    var acertos = req.body.acertos;

    if (!fkUsuario) {
        return res.status(400).send("fkUsuario está indefinido!");
    } else if (!nivel) {
        return res.status(400).send("Nível está indefinido!");
    } else if (acertos === undefined) {
        return res.status(400).send("Acertos está indefinido!");
    }

    quizModel.salvarResultado(Number(fkUsuario), nivel, acertos)
        .then(() => {
            res.status(200).json({ message: "Resultado salvo com sucesso!" });
        })
        .catch(erro => {
            console.error("Erro ao salvar resultado:", erro);
            res.status(500).json({ error: erro.sqlMessage });
        });
}

function buscarEstatisticas(req, res) {
    var nivel = req.query.nivel;

    if (!nivel) {
        return res.status(400).send("Nível é obrigatório!");
    }

    quizModel.buscarEstatisticas(nivel)
        .then(resultado => {
            // Garante que sempre retorna um "numero" válido
            const estatisticas = resultado[0] || {
                total_usuarios: 0,
                media_acertos: 0
            };
            
            // Converte para número
            estatisticas.total_usuarios = parseInt(estatisticas.total_usuarios) || 0;
            estatisticas.media_acertos = parseFloat(estatisticas.media_acertos) || 0;
            
            res.json(estatisticas);
        })
        .catch(erro => {
            console.error("Erro ao buscar estatísticas:", erro);
            res.status(500).json({
                total_usuarios: 0,
                media_acertos: 0,
                error: erro.sqlMessage
            });
        });
}

module.exports = {
    salvarResultado,
    buscarEstatisticas
};