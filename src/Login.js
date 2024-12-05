import './App.css';
import React, { useContext, useState } from "react";
import { RegisterContext } from './Context/RegistrationProvider';
import { useNavigate } from 'react-router-dom';
const LoginFile = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [formError, setFormError] = useState('');
    const [logInError, setLogInError] = useState('');
    const { validUsers, setLoginStatus } = useContext(RegisterContext)
    const navigate = useNavigate()

    const handleUsername = (event) => {
        const value = event.target.value;
        if (value.length >= 8) {
            if (value.includes(' ')) {
                setUsernameError('Username must not contain spaces.');
            } else {
                setUsername(value);
                setUsernameError('');
            }
        } else {
            setUsername(value);
            setUsernameError('Username must be 8 characters long.');
        }
    };

    const handlePassword = (e) => {
        const value = e.target.value;
        if (/[!@$&*]/.test(value) && value.length >= 8 && /\d/.test(value)) {
            setPassword(value);
            setPasswordError('');
        } else {
            setPassword(value);
            setPasswordError('Password must contain alteast 1 number, atleast one of the following characters: @, $, &, * and greater than 8');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (usernameError.length >= 1 || passwordError.length >= 1) {
            setFormError('Please correct the errors before submitting.');
            return;
        } else {
            for (let i = 0; i < validUsers.length || []; i++) {
                if (username === validUsers[i].email && password === validUsers[i].password) {
                    alert('You are logged in')
                    setUsername('')
                    setPassword('')
                    setLoginStatus(true)
                    navigate(-1)
                    sessionStorage.setItem('loginName', validUsers[i].fName + ' ' + validUsers[i].lName);
                    sessionStorage.setItem('userId', validUsers[i].id);
                    sessionStorage.setItem('useremail', validUsers[i].email);
                    break
                } else {
                    setLogInError('Loggin Error please check Email and password again')
                }
            }
        }


    };

    return (<>
        <button onClick={() => navigate('/adminLogin')} className='float-right border-2 text-blue-gray-800 border-color'>AdminLogin</button>
        <div className="mt-20 m-auto w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6" onSubmit={handleSubmit}>
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
                <div>
                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Email address
                    </label>
                    <input
                        type="email"
                        id="username"
                        value={username}
                        onChange={handleUsername}
                        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white ${usernameError && 'border-red-500'}`}
                        placeholder="Ahmed sheikh / email.com"
                        required
                    />
                    {usernameError && <div className="text-red-500 text-sm">{usernameError}</div>}
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={handlePassword}
                        placeholder="••••••••"
                        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white ${passwordError && 'border-red-500'}`}
                        required
                    />
                    {passwordError && <div className="text-red-500 text-sm">{passwordError}</div>}
                </div>
                {formError && <div className="text-red-500 text-sm mb-2">{formError}</div>}
                {logInError && <div className="text-red-500 text-sm">{logInError}</div>}
                <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Sign in to your account
                </button>
            </form>
        </div>
    </>
    );
};

export default LoginFile;
