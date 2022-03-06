import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import axios from 'axios'

import styles from '../styles/Register.module.css'

const Register = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm()

  const submitHandler = (formData) => {
    formData['csrfmiddlewaretoken'] = '3k7Jn3GeHSxQg50yxjILiesrWwRprZno'
    const params = new URLSearchParams()

    console.log(formData)
    if (formData.password !== formData.password2) {
      setError('password2', {
        type: 'manual',
        message: 'Passwords do not match',
      })
    } else {
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
    }
  }

  return (
    <div className={styles.wrapper}>
      <img className={styles.logo} src='logo.png'></img>

      <ul>
        <li>
          <Link href='/about'>ABOUT US</Link>
        </li>
        <li>
          <Link href='/products'>PRODUCTS</Link>
        </li>
        <li>
          <Link href='/blog'>BLOG</Link>
        </li>
        <li>
          <button className={styles.btnji}>
            <strong>REGISTER</strong>
          </button>
        </li>
        <li>
          <Link href='/login'>LOGIN</Link>
        </li>
      </ul>
      <p className={styles.god}> REGISTER </p>
      <p1 className={styles.godx}>
        <b>Start your</b>
        <br />
        &#160;&#160;&#160;&#160; <b>transformational</b>
      </p1>
      <br />
      <p3 className={styles.godz}>
        <b>journey here</b>
      </p3>

      <div className={styles.container}>
        <form action='#' className={styles.form}>
          <div className={styles.userdetails}>
            <div className={styles.inputbox}>
              <span className={styles.details}>First Name</span>
              <input
                type='text'
                placeholder='First Name'
                {...register('first_name', { required: true })}
              />
              {errors.first_name && <p>Please Check your first name</p>}
            </div>
            <div className={styles.inputbox}>
              <span className={styles.details}>Last Name</span>
              <input
                type='text'
                placeholder='Last Name'
                {...register('last_name', { required: true })}
              />
              {errors.last_name && <p>Please Check your last name</p>}
            </div>
          </div>

          <div className={styles.userdetails}>
            <div className={styles.inputbox}>
              <span className={styles.details}>Username</span>
              <input
                type='text'
                placeholder='Username'
                {...register('username', { required: true })}
              />
              {errors.username && <p>Please Check your Username</p>}
            </div>
            <div className={styles.inputbox}>
              <span className={styles.details}>Email</span>
              <input
                type='text'
                placeholder='Email'
                {...register('email', {
                  required: true,
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
              {errors.email && <p>Please Check your email</p>}
            </div>
          </div>

          <div className={styles.userdetails}>
            <div className={styles.inputbox}>
              <span className={styles.details}>Password </span>

              <input
                type='Password'
                name='Pass'
                id='Pass'
                placeholder='Enter your password'
                {...register('password', {
                  required: true,
                  pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/,
                })}
              />
            </div>
            {errors.password && (
              <p>
                Please Check your Password, it should contain one Capital
                Letter, one Small Letter, and minimum 8 charcaters
              </p>
            )}
            <div className={styles.inputbox}>
              <label className={styles.details}>Confirm Password</label>
              <input
                type='password'
                placeholder='Confirm your password'
                {...register('password2', { required: true })}
              />
              {errors.password2 && <p>{errors.password2.message}</p>}
            </div>
          </div>

          <input
            className={styles.checkbod}
            type='checkbox'
            {...register('conditions', { required: true })}
          />
          {errors.conditions && <p>Please agree to the conditions</p>}
          <label className={styles.containers}>
            <strong>I read terms and condition.</strong>
          </label>
          <span className={styles.checkmark}></span>
          <h1>
            <br />
            <button
              className={styles.btnprimary}
              onClick={handleSubmit(submitHandler)}>
              REGISTER
            </button>
          </h1>
          <h2 className={styles.jemi}>
            <a className={styles.demo} href='#'>
              Need a demo? Book here!
            </a>
          </h2>

          <br />
          <h3 className={styles.indru}>
            <Link className={styles.acc} href='/login'>
              Have an account already? Login here!
            </Link>
          </h3>
        </form>
      </div>

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
      <br />
      <br />
      <br />
      <p className={styles.copy}>Copyright © Pradjna Intellisys</p>
      <img className={styles.motta} src='motta1.png' />
      <img className={styles.motta1} src='motta1.png' />
      <img className={styles.motta2} src='motta1.png'></img>
    </div>
  )
}

export default Register
