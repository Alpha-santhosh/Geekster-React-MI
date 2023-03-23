import React, { useContext } from 'react'
import { GLOBAL_DATA } from '../App';
import './login.css'

function Login() {
    const { setloginState } = useContext(GLOBAL_DATA);
    return (
        <div className="login">
            <div className="form">
                <span class="material-symbols-outlined location_icon">
                    share_location
                </span>
                <input type="email" autoFocus className='input' placeholder='Email *' />
                <input type="password" className='input' placeholder='Password *' />
                <button type='button' onClick={() => { setloginState(true) }} className='login_btn'>Login</button>
                <div className="user">New User?</div>
            </div>
        </div>
    )
}

export default Login;