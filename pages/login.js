import React, { useState } from 'react'
import styles from '../styles/Login.module.css'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm()

  const submitHandler = async (formData) => {
    formData['csrfmiddlewaretoken'] = '3k7Jn3GeHSxQg50yxjILiesrWwRprZno'
    const params = new URLSearchParams()

    for (let key in formData) 
      params.append(key, formData[key])
    

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
    <div className={styles.wrapper}>
      <img className={styles.logo} src='logo (1).png' />
      <ul>
        <li>
          <Link className={styles.a} href='/about'>
            ABOUT US
          </Link>
        </li>
        <li>
          <Link className={styles.a} href='/products'>
            PRODUCTS
          </Link>
        </li>
        <li>
          <Link className={styles.a} href='/blog'>
            BLOG
          </Link>
        </li>
        <li>
          <Link href='/register'>
          <button className={styles.btnji}>
            <strong>REGISTER</strong>
          </button></Link>
        </li>
        <li>
          <Link className={styles.a} href='/login'>
            LOGIN
          </Link>
        </li>
      </ul>
      <p className={styles.god}> LOGIN </p>
      <p1 className={styles.godx}>
        <b>Understand</b>
        <br />
        &#160;&#160;&#160;&#160; <b>Your Workforce</b>
      </p1>
      <br />
      <div className={styles.login}>
        <form className={styles.login} method='get' action='login.php'>
          <label className={styles.label}>
            <b>User Name</b>
          </label>
          <input
            type='text'
            name='Uname'
            className={styles.Uname}
            {...register('username', { required: true })}
          />
          {errors.username && <p>please enter a username</p>}
          <br />
          <br />
          <label className={styles.label}>
            <b>Password</b>
          </label>
          <input
            type='Password'
            name='Pass'
            className={styles.Pass}
            {...register('password', { required: true })}
          />
          {errors.password && <p>Please enter a valid password</p>}
          <br />
          <br />
          <input
            type='button'
            name='log'
            className={styles.log}
            value='LOGIN'
            onClick={handleSubmit(submitHandler)}
          />
          <br />
          <br />

          <br />
          <br />
          <p className={styles.forgot}>
            {' '}
            <a className={`${styles.a} ${styles.forgot}`}  href='#'>
              <strong>Forgot Password?</strong>{' '}
            </a>
          </p>
        </form>
      </div>
      <br />{' '}
      <a className={`${styles.a} ${styles.link}`}  href='#'>
        <p className={styles.dont}>Don&apos;t have an account yet? Create one!</p>
      </a>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <p className={styles.copy}>Copyright © Pradjna Intellisys</p>
      <img className={styles.motta} src='motta1.png' />
      <img className={styles.motta1} src='motta1.png' />
      <img className={styles.motta2} src='motta1.png' />
    </div>
  )
}

export default Login
