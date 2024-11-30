import { useEffect, useState } from 'react';
import axios from 'axios';
import Editor from './components/Editor';
import Preview from './components/Preview';
import './App.css';

const App = () => {
  const [markdown, setMarkdown] = useState('');
  const [html, setHtml] = useState('');

  useEffect(() => {
    const convertMarkdownToHtml = async () => {
      if (markdown.trim() === '') {
        setHtml(''); // Clear the preview if the markdown is empty
        return;
      }

      try {
        const response = await axios.post(
          'https://neokred-assignment.onrender.com/convert',
          { markdown }
        );
        setHtml(response.data.html);
      } catch (error) {
        console.error(
          'Error converting markdown:',
          error
        );
      }
    };

    convertMarkdownToHtml();
  }, [markdown]); // Runs whenever `markdown` changes

  // Function to handle Markdown input changes
  const handleMarkdownChange = (text) => {
    setMarkdown(text);
  };

  return (
    <div className='app'>
      <div className='editor-pane'>
        <p>Markdown</p>
        <Editor
          markdown={markdown}
          onChange={handleMarkdownChange}
        />
      </div>
      <div className='preview-pane'>
        <p>Preview</p>
        <Preview html={html} />
      </div>
    </div>
  );
};

export default App;
