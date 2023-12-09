import { Component } from 'react';
import './App.css';
import Editor from './Editor/Editor';
import Preview from './Preview/Preview';

class App extends Component {
  constructor(props){
    super(props);

    this.state= {
      editorText: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(text){
    this.setState({
      editorText: text
    })
  }

  render(){
    return (
      <div className="App">
        <Editor
          update={this.handleChange}></Editor>
        <Preview></Preview> */
      </div>
    );
  }
}

export default App;
