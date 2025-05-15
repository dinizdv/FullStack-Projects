import express from 'express';
import db from '../config/db.js';
import multer from "multer";
import path from "path";

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

// save on disk => public folder
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, path.resolve("../client/public/assets/posts_images")); // absolute path
  },
  filename: (req, file, cb) => {
      const uniqueName = `${Date.now()}-${file.originalname}`;
      cb(null, uniqueName); // callback => error or no ? + 
  }
});

const upload = multer({ storage });

router.post("/", upload.single("image"), (req, res) => {
  const { content } = req.body;

  if (!content) {
      return res.status(400).json({ erro: "O conteúdo do post é obrigatório" });
  }

  const imagePath = req.file ? `../client/public/assets/posts_images/${req.file.filename}` : null;


  db.query(
      "INSERT INTO posts (content, image_path, created_at) VALUES (?, ?, NOW())",
      [content, imagePath],
      (err, result) => {
          if (err) {
              console.error("Erro ao criar post:", err.sqlMessage || err);
              return res.status(500).json({ erro: "Erro interno do servidor" });
          }
          res.status(201).json({ message: "Post criado com sucesso!", postId: result.insertId, imagePath });
      }
  );
});

export { router };