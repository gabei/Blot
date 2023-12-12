import React, { Component } from 'react';
import './Preview.scss';
import DOMPurify from 'dompurify';
import { marked } from 'marked';
import ToolBar from '../ToolBar/ToolBar';
import ReactToPrint from 'react-to-print';
import {MarkDown} from './MarkDown';

marked.use({ 
    gfm: true,
    breaks: true
 });

class Preview extends Component {
    constructor(props){
        super(props);
        //this.toPrint = React.createRef();
        this.purifyHTML = this.purifyHTML.bind(this);
    }

    purifyHTML(){
        return {__html: DOMPurify.sanitize(this.props.preview)};
    }

    render(){
        return (
            <div className="Preview">
                <ToolBar header="Preview"></ToolBar>
                <ReactToPrint 
                    content={ () => this.toPrint}
                    trigger={ () => {return <a href="#">Print</a>}}></ReactToPrint>
                <MarkDown
                    ref={el => (this.toPrint = el)}
                    className="markdown-body" 
                    html={this.purifyHTML()}></MarkDown>
            </div>
        
        )
    }
}

export default Preview;