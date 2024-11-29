import express from 'express';
import bodyParser from 'body-parser';
import { marked } from 'marked';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(cors());

app.post('/convert', (req, res) => {
  const { markdown } = req.body;
  if (!markdown) {
    return res.status(400).json({
      error: 'Markdown text is required',
    });
  }
  const html = marked(markdown);
  res.json({ html });
});

app.listen(PORT, () =>
  console.log(
    `Server is running on port: ${PORT}`
  )
);
