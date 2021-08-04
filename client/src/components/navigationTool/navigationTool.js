import React from 'react';
import './navigationTool.css';
import { Link } from 'react-router-dom'

function NavigationTool({ currentPage, pagesArrey = ['home'], center = false }) {

    return (
        <div className={center ? "navigationTool --center" : "navigationTool"}>
            {pagesArrey.map(tab => {
                return ([
                    <Link className="navigationTool__linkStyleRemove" to={`/${tab}`}>{`${tab}`}</Link>,
                    <div>&nbsp;&nbsp;>&nbsp;&nbsp;</div>
                ])
            })}
            <div>{`${currentPage}`}</div>
        </div>
    )
}

export default NavigationTool
