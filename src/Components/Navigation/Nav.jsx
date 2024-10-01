import React from 'react';

function Nav() {
    return (
        <div style={{ display: "flex", gap: "20px" }}>
            <a href='/'>Home</a>
            <a href='/register'>Register</a>
            <a href='/login'>Login</a>
        </div>
    );
}

export default Nav;