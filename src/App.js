import { Component } from 'react';
import './App.scss';
import TopBar from './TopBar/TopBar';
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
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange(text){
    this.setState({
      editorText: text,
      preview: marked.parse(text)
    })
  }

  handleClear(){
    this.setState({
      editorText: '',
      preview: ''
    })
  }

  render(){
    return (
      <div className="App">
        <TopBar></TopBar>
        <Editor
          update={this.handleChange}
          clear={this.handleClear}
          currentText={this.state.editorText}></Editor>
        <Preview
          preview={this.state.preview}></Preview>
      </div>
    );
  }
}

export default App;
