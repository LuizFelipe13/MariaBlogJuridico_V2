import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <header>
                <Navbar className="navbar-expand-md navbar-toggleable-md border-bottom box-shadow mb-3 custom-nav" dark>
                    <div className="container position-relative">

                        <NavbarBrand tag={Link} to="/" className="text-white font-weight-bold">
                            Rodrigues Graça
                        </NavbarBrand>

                        {/* SOLUÇÃO DEFINITIVA: 
                           1. Troquei NavbarToggler por um <button> comum.
                           2. Usei a classe 'd-md-none' do Bootstrap (Esconde no Desktop, Mostra no Mobile).
                           3. Coloquei o estilo DIRETO aqui (style={{...}}) para ignorar o cache da HostGator.
                        */}
                        <button
                            className="d-md-none" // Bootstrap: Só aparece em telas pequenas
                            onClick={this.toggleNavbar}
                            type="button"
                            style={{
                                position: 'absolute',
                                right: '15px',
                                top: '22px',
                                background: 'transparent',
                                border: '2px solid rgba(255,255,255,0.7)',
                                borderRadius: '5px',
                                color: 'white',
                                padding: '5px 10px',
                                fontWeight: 'bold',
                                fontSize: '14px',
                                zIndex: 9999, // Garante que fique por cima de tudo
                                cursor: 'pointer'
                            }}
                        >
                            MENU ☰
                        </button>

                        <Collapse className="d-md-inline-flex flex-md-row-reverse" isOpen={!this.state.collapsed} navbar>
                            <ul className="navbar-nav flex-grow align-items-center">
                                <NavItem>
                                    <NavLink tag={Link} className="text-light" to="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-light" to="/sobre">Sobre o Escritório</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-light" to="/contato">Contato</NavLink>
                                </NavItem>
                                <NavItem className="ml-md-3">
                                    <NavLink tag={Link} to="/login" className="btn btn-warning text-dark font-weight-bold px-3" style={{ borderRadius: '20px', backgroundColor: '#f59e0b', border: 'none' }}>
                                        Login Advogado
                                    </NavLink>
                                </NavItem>
                            </ul>
                        </Collapse>
                    </div>
                </Navbar>
            </header>
        );
    }
}