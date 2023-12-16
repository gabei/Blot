import React from "react";
import './TopBar.scss';

export default function TopBar(props){
    return (
        <div className="TopBar">
            <div className="logo">
                <div className="logo--shaper-1"></div>
                <div className="logo--shaper-2"></div>
                <div className="logo--shaper-3"></div>
                <div className="logo--shaper-4"></div>
            </div>
            <div className="header-box">
                <h1>Blot</h1>
                <h2>Markdown Previewer</h2>
            </div>
        </div>
    )
}