import express from 'express';
import mysql from 'mysql2';

// Configuração do servidor
const app = express();
const port = 5000;

// Configuração do banco de dados
const db = mysql.createConnection({
  host: 'srv1076.hstgr.io', // ou use o IP: 193.203.175.236
  user: 'u963742772_bruno_diniz',
  password: 'Brunodiniz2410@',
  database: 'u963742772_blog'
});

// Conectar ao banco
db.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco:', err);
    return;
  }
  console.log('Conectado ao banco de dados!');
});

app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Erro ao buscar dados:', err.sqlMessage || err);
      return res.status(500).json({ erro: 'Erro interno do servidor' });
    }
    res.json(results);
  });
});


// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});