import express from 'express';
import bodyParser from 'body-parser';
import { marked } from 'marked';
import cors from 'cors';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(cors());

app.use(
  express.static(
    path.join(__dirname, 'frontend/dist')
  )
);

app.get('*', (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      'frontend/dist',
      'index.html'
    )
  );
});

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
