import React from "react";
import './TopBar.scss';

export default function TopBar(props){
    return (
        <div className="TopBar">
            <div className="logo"></div>
            <div className="header-box">
                <h1>Blotter</h1>
                <h2>Markdown Previewer</h2>
            </div>
        </div>
    )
}