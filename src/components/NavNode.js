import React from "react";
import '../css/NavNode.css';

const NavNode = (props) => {
    function getDisplayLinks(link) {
        if (link.navNodes) {
            let value = 1;
            const navNodes = link.navNodes.map((child) => {
                return (
                    <NavNode node={child} key={value++}/>
                )
            });
            return (
                <li className="dropdown" key={link.key}>
                    <a href={link.href} className="dropdown-toggle" data-toggle="dropdown" role="button"
                       aria-haspopup="true" aria-expanded="false">{link.text}<span className="caret"></span></a>
                    <ul className="dropdown-menu multi-column" key={value++}>
                        {navNodes}
                    </ul>
                </li>
            )
        }
        else {
            return <li key={link.key}><a href={link.href}>{link.text}</a></li>
        }
    }

    if (props.node.map) {
        const displayLinks = props.node.map((link) => {
            return (
                getDisplayLinks(link)
            )
        });

        return (
            <ul className="nav navbar-nav">
                {displayLinks}
            </ul>
        )
    } else {
        return getDisplayLinks(props.node);
    }
};

export default NavNode;