import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <h2>Lorem ipsum dolor sit amet</h2>
                            <h3>+88065656565</h3>
                            <div className="footermenu">
                                <ul>
                                    <li><a href="/" target="_blank">Facebook</a></li>
                                    <li><a href="/" target="_blank">Twitter</a></li>
                                    <li><a href="/" target="_blank">Youtube</a></li>
                                </ul>
                                <div className="copyright-text">Lorem ipsum dolor sit</div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}