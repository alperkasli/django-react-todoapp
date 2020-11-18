import React, { useState } from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
    NavbarText,
    Button
} from "reactstrap";
import { Link } from "react-router-dom";
import { AccountApis } from "../api/Account";
import { logoutAction } from "../store/User/action";
import { connect } from "react-redux";
import { push } from 'connected-react-router'

const TopNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    
    const logout = () => {
		AccountApis.logout().then(() => {
            const { logoutDispatch, historyPush } = props
            historyPush('/login')
            logoutDispatch()
        });
    };
	return (
		<div>
			<Navbar color="light" light expand="md">
				<NavbarBrand href="/">TODO APP</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="d-flex mr-auto" navbar>
						<NavItem className="ml-2">
							<Link className="nav-link text-primary" to="/">My Tasks</Link>
						</NavItem>
						<NavItem className="ml-2">
							<Link className="nav-link text-primary" to="/shared-tasks">Shared Tasks</Link>
						</NavItem>
					</Nav>
					<NavbarText>
                        Hi {props.user.username}
                        <Button color="link" onClick={logout}>Log Out</Button>
                    </NavbarText>
				</Collapse>
			</Navbar>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};

const mapDispatchToProps = (dispatch) => ({
    logoutDispatch: () => dispatch(logoutAction()),
    historyPush: (route) => dispatch(push(route))
});

export default connect(mapStateToProps, mapDispatchToProps)(TopNavbar);