import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import Menu from '../components/menu'
import Footer from '../components/footer'
import axios from 'axios'

import styles from '../styles/Register.module.css'

const Register = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm()

  const submitHandler = formData => {
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
    <div className={styles.register}>
      <Menu />
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <h4> REGISTER </h4>
          <p>Start your transformational journey here</p>
        </div>

        <div className={styles.formContent}>
          <form action="#" className={styles.regForm}>
            <div className={styles.inputbox}>
              <label>First Name</label>
              <input
                type="text"
                {...register('first_name', { required: true })}
              />
              {errors.first_name && <p>Please Check your first name</p>}
            </div>
            <div className={styles.inputbox}>
              <label>Last Name</label>
              <input
                type="text"
                {...register('last_name', { required: true })}
              />
              {errors.last_name && <p>Please Check your last name</p>}
            </div>

            <div className={styles.inputbox}>
              <label>Username</label>
              <input
                type="text"
                {...register('username', { required: true })}
              />
              {errors.username && <p>Please Check your Username</p>}
            </div>
            <div className={styles.inputbox}>
              <label>Email</label>
              <input
                type="text"
                {...register('email', {
                  required: true,
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
              {errors.email && <p>Please Check your email</p>}
            </div>
            <p>
              Password should contain one Capital Letter, one Small Letter, and
              minimum 8 charcaters
            </p>
            <div className={styles.inputbox}>
              <label>Password </label>

              <input
                type="Password"
                name="Pass"
                id="Pass"
                {...register('password', {
                  required: true,
                  pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/,
                })}
              />

              {errors.password && <p>Please Check your Password</p>}
            </div>
            <div className={styles.inputbox}>
              <label>Confirm Password</label>
              <input
                type="password"
                {...register('password2', { required: true })}
              />
              {errors.password2 && <p>{errors.password2.message}</p>}
            </div>
            <div className={styles.terms}>
              <input
                className={styles.checkbod}
                type="checkbox"
                {...register('conditions', { required: true })}
              />
              {errors.conditions && <p>Please agree to the conditions</p>}
              <label>I read the terms and the conditions.</label>
            </div>
            <div className={styles.buttonContainer}>
              <button
                className={styles.regBtn}
                onClick={handleSubmit(submitHandler)}
              >
                REGISTER
              </button>

              <Link href="#">
                <a className={styles.demo}>Need a demo? Book here!</a>
              </Link>
            </div>
          </form>

          <Link href="/login">
            <a className={styles.login}>Have an account already? Login here!</a>
          </Link>
        </div>
      </div>
      <p className={styles.copyright}>Copyright © Pradjna Intellisys</p>
      <img className={styles.motta} src="motta1.png" />
      <img className={styles.motta1} src="motta1.png" />
      <img className={styles.motta2} src="motta1.png"></img>
    </div>
  )
}

export default Register
