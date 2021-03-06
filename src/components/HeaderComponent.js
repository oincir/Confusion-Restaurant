import React,{Component} from "react";
import {Navbar, NavbarBrand, Nav, NavbarToggler, Jumbotron, NavItem, Collapse} from "reactstrap";
import {NavLink} from "react-router-dom";

class Header extends Component{
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this)
        this.state={
            isNavOpen: false
        };
    }
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" height="30" width="41"
                            alt="Ristorante Con Fusion"/>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen}  navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"/>Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg"/>About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list fa-lg"/>Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg"/>Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className={"row row-header"}>
                            <div className={"col-12 col-sm-6"}>
                                <h1> Ristorante Con Fusion</h1>
                                <p>We take inpiration from the World's best cuisines, and create a unque fusion experience. Our lipsmacking creations will tickle your senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

            </div>
        );
    }
}
export default Header;
