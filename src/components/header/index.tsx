import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderBlock, Navbar, Logo, Ul, Li } from './styles';

const Header: React.FC = () => {
    return (
        <HeaderBlock>
            <Navbar>
                <Logo to="/" />
                <Ul>
                    <Li>
                        <NavLink to="/shop">Shop</NavLink>
                    </Li>
                    <Li>
                        <NavLink to="/contact">Contact</NavLink>
                    </Li>
                    <Li>
                        <NavLink to="/signin">Sign in</NavLink>
                    </Li>
                    <Li>
                        <NavLink to="/checkout">
                            <svg
                                enableBackground="new 0 0 50 50"
                                height="25px"
                                id="shopping_bag"
                                version="1.1"
                                viewBox="0 0 50 50"
                                width="25px"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8,14L4,49h42l-4-35H8z"
                                    fill="none"
                                    stroke="#000000"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                />
                                <rect fill="none" height="50" width="50" />
                                <path
                                    d="M34,19c0-1.241,0-6.759,0-8  c0-4.971-4.029-9-9-9s-9,4.029-9,9c0,1.241,0,6.759,0,8"
                                    fill="none"
                                    stroke="#000000"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                />
                                <circle cx="34" cy="19" r="2" />
                                <circle cx="16" cy="19" r="2" />
                            </svg>
                        </NavLink>
                    </Li>
                </Ul>
            </Navbar>
        </HeaderBlock>
    );
};

export default Header;
