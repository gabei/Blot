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

  handleChange(e){
    this.setState({
      editorText: e.target.value
    })

    console.log(this.state.editorText);
  }


  render(){
    return (
      <div className="App">
        <textarea onChange={this.handleChange}></textarea>
        {/* <Editor></Editor>
        <Preview></Preview> */}
      </div>
    );
  }
}

export default App;
