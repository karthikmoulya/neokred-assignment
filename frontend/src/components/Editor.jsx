import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Editor = ({ markdown, onChange }) => {
  return (
    <textarea
      className='editor'
      value={markdown}
      onChange={(e) => onChange(e.target.value)}
      placeholder='Type Markdown here...'
    />
  );
};

export default Editor;
