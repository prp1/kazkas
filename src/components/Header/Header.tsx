import * as React from 'react';
import './Header.css';

export class Header extends React.Component {
    public render() {
        return (
            <nav className="nav">
                <h1 className="navTitle">Visma ML-service</h1>
            </nav>
        );
    }
}
