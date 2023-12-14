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
        this.purifyHTML = this.purifyHTML.bind(this);
    }

    purifyHTML(){
        return {__html: DOMPurify.sanitize(this.props.preview)};
    }

    render(){
        const printButton = (
            <ReactToPrint 
                content={ () => this.toPrint}
                trigger={ () => {
                    return <button className="print-button">Print</button>
                    }}>
            </ReactToPrint>
        )
        
        return (
            <div className="Preview">
                <ToolBar header="Preview" children={printButton}></ToolBar>
                <MarkDown
                    ref={el => (this.toPrint = el)}
                    className="markdown-body" 
                    html={this.purifyHTML()}></MarkDown>
            </div>
        
        )
    }
}

export default Preview;