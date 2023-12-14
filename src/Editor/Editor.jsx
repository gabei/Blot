import { Component } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import './Editor.scss';
import ToolBar from '../ToolBar/ToolBar';

class Editor extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        //this.handleClear = this.handleClear.bind(this);
    }

    handleChange(e){
        this.props.update(e.target.value);
    }

    render(){
        const clearButton = (
            <button onClick={this.props.clear}>Clear</button>
        )

        console.log(`Editor has access to ${this.props.currentText}`)

        return (
            <div class="Editor">
                <ToolBar header={'Editor'} children={clearButton}></ToolBar>
                <TextareaAutosize 
                    onChange={this.handleChange}
                    value={this.props.currentText}></TextareaAutosize>
            </div>
        )
    }
}

export default Editor;