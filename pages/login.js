import React, { useState } from 'react'
import styles from '../styles/Login.module.css'
import Link from 'next/link'
import Menu from '../components/menu'
import Footer from '../components/footer'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm()

  const submitHandler = async formData => {
    formData['csrfmiddlewaretoken'] = '3k7Jn3GeHSxQg50yxjILiesrWwRprZno'
    const params = new URLSearchParams()

    for (let key in formData) params.append(key, formData[key])

    axios
      .post('http://pradjna.com/login/', params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': params.toString().length,
        },
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })

    //   const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //     body: JSON.stringify(formData)
    // }
    // let res = await fetch('https://pradjna.com/login', requestOptions)
    //     .then(response => response).catch(e=>console.error("error:   ", e))
    // console.log(JSON.parse(res))
  }

  return (
    <div className={styles.login}>
      <Menu />
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <h4> LOGIN </h4>
          <p>Understand Your Workforce</p>
        </div>
        <div className={styles.formContent}>
          <form className={styles.loginForm} method="POST" action="login.php">
            <label className={styles.label}>User Name</label>
            <input
              type="text"
              name="Uname"
              className={styles.Uname}
              {...register('username', { required: true })}
            />
            {errors.username && <p>Please enter a username</p>}

            <label className={styles.label}>Password</label>
            <input
              type="Password"
              name="Pass"
              className={styles.Pass}
              {...register('password', { required: true })}
            />
            {errors.password && <p>Please enter a valid password</p>}
            <div className={styles.buttonContainer}>
              <input
                type="button"
                name="log"
                className={styles.loginBtn}
                value="LOGIN"
                onClick={handleSubmit(submitHandler)}
              />
              <Link href="#">
                <a className={styles.forgot}>Forgot Password?</a>
              </Link>
            </div>
          </form>
          <Link href="/register">
            <a className={styles.register}>
              Don&apos;t have an account yet? Create one!
            </a>
          </Link>
        </div>
      </div>
      <p className={styles.copyright}>Copyright © Pradjna Intellisys</p>
      <img className={styles.motta} src="motta1.png" />
      <img className={styles.motta1} src="motta1.png" />
      <img className={styles.motta2} src="motta1.png" />
    </div>
  )
}

export default Login
