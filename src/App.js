import logo from './logo.svg';
import './App.css';
import Editor from './Editor/Editor';
import Preview from './Preview/Preview';

function App() {
  return (
    <div className="App">
      <Editor></Editor>
      <Preview></Preview>
    </div>
  );
}

export default App;
