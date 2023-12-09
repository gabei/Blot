import { Component } from 'react';
import './Editor.scss';

class Editor extends Component {
    constructor(props){
        super(props);
    }

    handleChange(text){
        this.props.update(text);
    }

    render(){
        return (
        <div className="Editor">
            <textarea onChange={this.handleUpdate}></textarea>
        </div>
        )
    }
}

export default Editor;