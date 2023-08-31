import React , { useState , useEffect } from 'react'
// import Input from './Input'
import Validations from './Validations'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toastify from './toastify';
import styles from './SignUp.module.css'
import { Link } from 'react-router-dom';

const Login = () => {

    const [data , setData] = useState({
       
        email : "",
        password : "",
        
        
    })

    const [errors , setErrors] = useState({})
    const [touch , setTouch] = useState({})

    useEffect(() => {
        setErrors(Validations(data , "login"))
    } , [data])


    const changeHandler = (event) => {
        
       
        setData({...data, [event.target.name] : event.target.value})
        

        // console.log(data)
    }

    const focusHandler = (event) => {
        setTouch({...touch , [event.target.name] : true })
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if (!Object.keys(errors).length){
            toastify("success" , "OK")
            console.log(data);
        }else {
            toastify("error" , "Invalid Data!!!")
            setTouch({
                
                email : true,
                password : true,
                
            })
        }
    }
  return (
    <div className={styles.container}>
        <form onSubmit={submitHandler}>
        <h2 className={styles.header}>LogIn</h2>
        <div className={styles.formfield}>
            <label>Email:</label>
            <input className={(errors.email && touch.email) && styles.errorshow} type="text" name="email" value={data.email} onChange={changeHandler} onFocus={focusHandler} />
            {errors.email && touch.email && <span>{errors.email}</span>}
        </div>

        <div className={styles.formfield}>
            <label>Password:</label>
            <input className={(errors.password && touch.password) && styles.errorshow} type="text" name="password" value={data.password} onChange={changeHandler} onFocus={focusHandler} />
            {errors.password && touch.password && <span>{errors.password}</span>}
        </div>

        <div className={styles.btnsign}>
            <Link to="/signup">SignUp</Link>
            <button>Login</button>
        </div>

        </form>
        <ToastContainer />
    </div>
  )
}


export default Login;