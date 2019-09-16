import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 my-auto">
                            <a href="/" className="logo">PhotoStream</a>
                        </div>
                        <div className="col-lg-4 my-auto text-center">
                            <div className="mainmenu">
                                <nav>
                                    <ul>
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/about">About</a></li>
                                        <li><a href="/">Disclaimer</a></li>
                                        <li><a href="/">Credit</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-lg-4 my-auto text-right">
                            <form action="/">
                                <input type="text" placeholder="search keyword"/>
                                <input type="submit" value="search"/>
                            </form>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}


