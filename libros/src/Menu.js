import React  from 'react';
import Search from './Search';
import './Menu.css';

function Menu (props) {

    return(
        <div className="container">
            <div className="subcontainer">
                <div className="logo">
                    {props.title}
                </div>

                <div className="search">
                    <Search />
                </div>

                <dic className="actions">
                    <button className="BUTTON BTN-BLUE">+ Añadir nuevo Libro</button>
                </dic>

            </div>
        </div>
    );
}

export default Menu;