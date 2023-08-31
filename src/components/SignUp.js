import React , { useState , useEffect } from 'react'
// import Input from './Input'
import Validations from './Validations'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toastify from './toastify';
import styles from './SignUp.module.css'
import { Link } from 'react-router-dom';

const SignUp = () => {

    

    const [data , setData] = useState({
        name : "",
        email : "",
        password : "",
        confirmPassword : "",
        isAccepted : false
    })

    const [errors , setErrors] = useState({})
    const [touch , setTouch] = useState({})

    useEffect(() => {
        setErrors(Validations(data , "signup"))
    } , [data])


    const changeHandler = (event) => {
        if (event.target.name === "isAccepted"){
            setData({...data, [event.target.name] : event.target.checked })
        }else {
            setData({...data, [event.target.name] : event.target.value})
        }

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
                name : true,
                email : true,
                password : true,
                confirmPassword:true,
                isAccepted:true
            })
        }
    }

    // const notify = () => toast("Wow so easy!");

  return (
    <div className={styles.container}>
        <form onSubmit={submitHandler}>
        <h2 className={styles.header}>SignUp</h2>

        <div className={styles.formfield}>
            <label>Name:</label>
            <input className={(errors.name && touch.name) && styles.errorshow} type="text" name="name" value={data.name} onChange={changeHandler} onFocus={focusHandler} />
            {errors.name && touch.name && <span>{errors.name}</span>}

        </div>
        {/* <Input value={data.name} changeHandler={changeHandler} onFocus={focusHandler} /> */}
        

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

        <div className={styles.formfield}>
            <label>Confirm Password:</label>
            <input className={(errors.confirmPassword && touch.confirmPassword) && styles.errorshow} type="text" name="confirmPassword" value={data.confirmPassword} onChange={changeHandler} onFocus={focusHandler} />
            {errors.confirmPassword && touch.confirmPassword && <span>{errors.confirmPassword}</span>}
        </div>

        <div className={styles.formfield}>
            <div className={styles.accept}>
                <label>Accept Rule:</label>
                <input className={(errors.isAccepted && touch.isAccepted) && styles.errorshow} type="checkbox" name="isAccepted" value={data.isAccepted} onChange={changeHandler} onFocus={focusHandler} />
            
            </div>
            {errors.isAccepted && touch.isAccepted && <span>{errors.isAccepted}</span>}
            
        </div>


        <div className={styles.btnsign}>
            <Link to="/login">Login</Link>
            <button>SignUp</button>
        </div>
        

        </form>
        <ToastContainer />
    </div>
  )
}

export default SignUp;
