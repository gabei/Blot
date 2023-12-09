import { Component } from 'react';
import './App.css';
import Editor from './Editor/Editor';
import Preview from './Preview/Preview';
import { marked } from 'marked';

class App extends Component {
  constructor(props){
    super(props);

    this.state= {
      editorText: '',
      preview: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(text){
    this.setState({
      editorText: text,
      preview: marked.parse(text)
    })
  }

  render(){
    return (
      <div className="App">
        <Editor
          update={this.handleChange}></Editor>
        <Preview
          preview={this.state.preview}></Preview>
      </div>
    );
  }
}

export default App;
