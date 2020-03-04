import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    label: 'rólunk',
                    url: '/rolunk'
                },
                {
                    label: 'munkáink',
                    url: '/munkaink'
                }
            ]
        }
    }

    getMenuItems() {
        return this.state.items.map(item => {
            const itemClassName = this.props.page === item.url ? 'nav-item ml-3 active' : 'nav-item ml-3';
            const activeItemMarker = this.props.page === item.url ? <span className="sr-only">(current)</span> : '';
            const itemLabel = item.label;

            return (
                <li className={itemClassName} key={item.url}>
                    <Link className="nav-link" to={item.url}>{itemLabel}{activeItemMarker}</Link>
                </li>
            );
        });
    }

    render() {
        return (
            <div className="container pl-0 pr-0" id="menu">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link className="navbar-brand mr-4" to="/">
                        <img src="/img/logo.png" width="40" height="40" className="d-inline-block align-center mb-1 mr-3" alt="" /> Autor
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            {this.getMenuItems()}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        page: state.router.location.pathname
    }
}

export default connect(mapStateToProps, {})(Menu);