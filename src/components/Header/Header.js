import React, { Component } from 'react';
import './Header.css';
import logo from './../../logo.svg';
import SearchBox from './../../components/SearchBox/SearchBox';



class Header extends Component {
    render() { 
        return (
            <header className="header">
                <img className="logo" src={logo}/>

                <div className="main-page__search-box">
                            <SearchBox />
                        </div>
                
            </header>
        );
    }
}
 
export default Header;