import React from 'react'
import classes from '../../assets/css/checkout/FormInfo.module.css'
const FormInfo = () => {
    const submitHandler = (e) => {
        e.preventDefault()
        alert('Function awaiting development')
    }
    return (
        <React.Fragment>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.inputGroup}>
                    <label htmlFor="fullname" className={`text-uppercase ${classes.lable}`}>Full Name:</label>
                    <input id='fullname' type="text" className={`form-control ${classes.input}`} name='fullname' placeholder='Enter Your Full Name Here!' />
                </div>
                <div className={classes.inputGroup}>
                    <label htmlFor="email" className={`text-uppercase ${classes.lable}`}>Email:</label>
                    <input id='email' type="email" className={`form-control ${classes.input}`} name='email' placeholder='Enter Your Email Here!' />
                </div>
                <div className={classes.inputGroup}>
                    <label htmlFor="phone" className={`text-uppercase ${classes.lable}`}>Phone:</label>
                    <input id='phone' type="text" className={`form-control ${classes.input}`} name='phone' placeholder='Enter Your Phone Here!' />
                </div>
                <div className={classes.inputGroup}>
                    <label htmlFor="address" className={`text-uppercase ${classes.lable}`}>Address:</label>
                    <input id='address' type="text" className={`form-control ${classes.input}`} name='address' placeholder='Enter Your Address Here!' />
                </div>
                <button className={classes.btnSubmit}>Place order</button>
            </form>
        </React.Fragment>
    )
}

export default FormInfo
