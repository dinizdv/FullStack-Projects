import express from 'express';
import db from '../config/db.js'; // Certifique-se de que este arquivo existe e contém a conexão com MySQL

const router = express.Router();

router.get('/', (req, res) => {
    db.query('SELECT * FROM posts', (err, results) => {
      if (err) {
        console.error('Erro ao buscar dados:', err.sqlMessage || err);
        return res.status(500).json({ erro: 'Erro interno do servidor' });
      }
      res.json(results);
    });
  });

export { router };