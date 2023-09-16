import React, { useEffect, useState } from 'react'
import classes from '../../assets/css/login/FormLogin.module.css'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { addUser, checkEmailPassword, getUser } from '../../services/userServies'
import { setToken } from '../../utils/managerToken'
import { useDispatch } from 'react-redux'
import { authAction } from '../../store/reducers/authReducer'
import useInput from '../../hooks/use-input'
const FormLogin = () => {
    const [searchParams] = useSearchParams()
    const [error, setError] = useState('')
    const router = useNavigate()
    const dispatch = useDispatch()
    const mode = searchParams.get('mode') || 'login'
    useEffect(() => {
        setError('')
    }, [mode])
    const isValid = (value) => value !== ''
    const isEmail = (value) => value.includes('@')
    // Input Use Input
    const { value: inputValueFullname,
        isValid: isValidFullName,
        hasError: ErrorFullName,
        handlerChangeInput: handlerChangeInputFullName,
        handlerBlurInput: handlerBlurInputFullName } = useInput(isValid)
    const { value: inputValueEmail,
        isValid: isValidEmail,
        hasError: ErrorEmail,
        handlerChangeInput: handlerChangeInputEmail,
        handlerBlurInput: handlerBlurInputEmail } = useInput(isEmail)
    const { value: inputValuePassword,
        isValid: isValidPassword,
        hasError: ErrorPassword,
        handlerChangeInput: handlerChangeInputPassword,
        handlerBlurInput: handlerBlurInputPassword,
        reset: resetPassword } = useInput(isValid)
    const { value: inputValuePhone,
        isValid: isValidPhone,
        hasError: ErrorPhone,
        handlerChangeInput: handlerChangeInputPhone,
        handlerBlurInput: handlerBlurInputPhone } = useInput(isValid)


    // Xử lý Submit
    const submitHandler = (e) => {
        e.preventDefault()
        if (mode === 'login') {
            const data = {
                email: inputValueEmail,
                password: inputValuePassword,
            }

            if (isValidEmail && isValidPassword) {
                const checkAuth = checkEmailPassword(data)
                if (checkAuth) {
                    setToken(data.email)
                    dispatch(authAction.ON_LOGIN({ token: data.email }))
                    router('/')
                } else {
                    setError('Email & Password Incorrect')
                }
            }
            resetPassword()
        } else {
            const data = {
                fullname: inputValueFullname,
                email: inputValueEmail,
                password: inputValuePassword,
                phone: inputValuePhone
            }

            if (isValidEmail && isValidFullName && isValidPassword && isValidPhone) {
                const isCheckEmail = getUser(data.email)
                if (!isCheckEmail) {
                    addUser(data)
                    setToken(data.email)
                    dispatch(authAction.ON_LOGIN({ token: data.email }))
                    router('/')
                } else {
                    setError('Email already exists')
                }
            }
        }
    }
    // Render inputs
    const inputFullnameRender = mode === 'signup' && <div>
        <input type="text" name='fullname' className={classes.input} value={inputValueFullname} onChange={handlerChangeInputFullName} onBlur={handlerBlurInputFullName} placeholder='Full Name' />
        {ErrorFullName && <p className='error'>Full Name is Empty</p>}
    </div>
    const inputPhoneRender = mode === 'signup' && <div>
        <input type="text" name='phone' className={classes.input} value={inputValuePhone} onChange={handlerChangeInputPhone} onBlur={handlerBlurInputPhone} placeholder='Phone' />
        {ErrorPhone && <p className='error'>Phone is Empty</p>}
    </div>
    return (
        <React.Fragment>
            <div className={classes.background_form}>
                <form method='POST' className={classes.form} onSubmit={submitHandler} >
                    <h1 className={classes.title}>{mode === 'login' ? 'login' : 'Sign up'}</h1>
                    <div className={classes.inputs}>
                        {error && <p className='error'>{error}</p>}
                        {inputFullnameRender}
                        <input type="text" name='email' className={classes.input} value={inputValueEmail} onChange={handlerChangeInputEmail} onBlur={handlerBlurInputEmail} placeholder='Email' />
                        {ErrorEmail && <p className='error'>Email must have the @ character</p>}
                        <input type="password" name='password' className={classes.input} value={inputValuePassword} onChange={handlerChangeInputPassword} onBlur={handlerBlurInputPassword} placeholder='Password' />
                        {ErrorPassword && <p className='error'>Password is Empty</p>}
                        {inputPhoneRender}
                    </div>
                    <button type='submit' className={classes.btnSubmit} >{mode === 'login' ? 'login' : 'Sign up'}</button>
                    <p className={classes.routerText}>{mode === 'login' ? (<span>Create an account? <Link to={'/login/?mode=signup'}>Sign up</Link></span>) : (<span>Login? <Link to={'/login/?mode=login'}>Click</Link></span>)}</p>
                    <p className={classes.routerText}><Link to={'/'}>Back home</Link></p>
                </form>
            </div>

        </React.Fragment>
    )
}

export default FormLogin
