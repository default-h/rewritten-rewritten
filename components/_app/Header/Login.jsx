import React, { useEffect, useState } from 'react';

import styles from './Login.module.scss';
import exit from '../../../public/assets/icons/xmark-solid.svg';
import Image from 'next/image';

const Login = ({
  showLogin,
  loginToggled,
  showRegister,
  registerToggled,
  showModal,
  modalToggled,
}) => {
  const [recoveryToggled, setRecoveryToggled] = useState(false);

  const showRecovery = () => {
    setRecoveryToggled(!recoveryToggled);
  };

  const [usernameToggled, setUsernameToggled] = useState(false);

  const showUsername = () => {
    setUsernameToggled(!usernameToggled);
  };

  const [passwordToggled, setPasswordToggled] = useState(false);

  const showPassword = () => {
    setPasswordToggled(!passwordToggled);
  };

  const [resendToggled, setResendToggled] = useState(false);

  const showResend = () => {
    setResendToggled(!resendToggled);
  };

  const resetModal = () => {
    setResendToggled((resendToggled = false));
    setPasswordToggled((passwordToggled = false));
    setUsernameToggled((usernameToggled = false));
    setRecoveryToggled((recoveryToggled = false));
  };

  return (
    <dialog className={`${loginToggled ? styles['container'] : styles.hide}`}>
      <div className={styles.box}>
        <button
          onClick={() => {
            showLogin();
            resetModal();
          }}
          className={styles.close}
        >
          <Image
            className={styles.closebtn}
            src={exit}
            width={30}
            height={30}
            alt='Close login menu'
          />
        </button>

        <div
          className={`${modalToggled ? styles['login-modal'] : styles.hide}`}
        >
          <h2>Login</h2>
          <form className={styles.loginform}>
            <div className={styles.inputfield}>
              <label htmlFor='username'>username</label>
              <input type='text' className={styles.username} />
            </div>
            <div className={styles.inputfield}>
              <label htmlFor='password'>password</label>
              <input type='password' className={styles.password} />
              <button
                type='button'
                className={styles.forgot}
                onClick={() => {
                  showModal();
                  showRecovery();
                }}
              >
                Having Trouble?
              </button>
            </div>
          </form>
          <section className={styles.buttons}>
            <button type='button' className={styles['yellow-btn']}>
              Sign In
            </button>
            <button
              className={styles['red-btn']}
              type='button'
              onClick={() => {
                showModal();
                showRegister();
              }}
            >
              Register For Free
            </button>
          </section>
        </div>

        <div
          className={`${
            registerToggled ? styles['register-modal'] : styles.hide
          }`}
        >
          <h2>Register</h2>
          <form className={styles.loginform}>
            <div className={styles.inputfield}>
              <label htmlFor='username'>username</label>
              <input type='text' className={styles.username} />
            </div>
            <div className={styles.inputfield}>
              <label htmlFor='username'>e-mail</label>
              <input type='text' className={styles.email} />
            </div>
            <div className={styles.inputfield}>
              <label htmlFor='password'>password</label>
              <input type='password' className={styles.password} />
            </div>
            <div className={styles.inputfield}>
              <label htmlFor='password'>repeat password</label>
              <input type='password' className={styles.password} />
              <span className={styles.forgot}>Privacy Policy</span>
            </div>
            <section className={styles.buttons}>
              <button className={styles['yellow-btn']} type='button'>
                Sign Up
              </button>
              <button
                className={styles['red-btn']}
                type='button'
                onClick={() => {
                  showModal();
                  showRegister();
                }}
              >
                Go Back
              </button>
            </section>
          </form>
        </div>
        <div
          className={`${
            recoveryToggled ? styles['recovery-modal'] : styles.hide
          }`}
        >
          <h2>Account Recovery</h2>
          <section className={styles.buttons}>
            <button
              className={styles['yellow-btn']}
              type='button'
              onClick={() => {
                showRecovery();
                showUsername();
              }}
            >
              Forgot Username
            </button>
            <button
              className={styles['yellow-btn']}
              type='button'
              onClick={() => {
                showRecovery();
                showPassword();
              }}
            >
              Forgot Password
            </button>
            <button
              className={styles['yellow-btn']}
              type='button'
              onClick={() => {
                showRecovery();
                showResend();
              }}
            >
              Resend Email
            </button>
            <button
              className={`${styles['red-btn']} ${styles['topmargin']}`}
              type='button'
              onClick={() => {
                showModal();
                showRecovery();
              }}
            >
              Go Back
            </button>
          </section>
        </div>

        <div
          className={`${
            passwordToggled ? styles['recovery-password-modal'] : styles.hide
          }`}
        >
          <h2>Forgot Password</h2>
          <p>
            Don&#39;t sweat it. We&#39;d rather have you forget a complex
            password than remember an easy one!
          </p>{' '}
          <form className={styles.loginform}>
            <div className={styles.inputfield}>
              <label className={styles.topmargin} htmlFor='email'>
                Email
              </label>
              <input type='text' className={styles.email} />
            </div>
          </form>
          <section className={styles.buttons}>
            <button
              className={`${styles['yellow-btn']} ${styles['topmargin']}`}
              type='button'
            >
              Submit
            </button>
            <button
              className={styles['red-btn']}
              type='button'
              onClick={() => {
                showPassword();
                showRecovery();
              }}
            >
              Go Back
            </button>
          </section>
        </div>

        <div
          className={`${
            usernameToggled ? styles['recovery-username-modal'] : styles.hide
          }`}
        >
          <h2>Forgot Username</h2>
          <p>
            Don&#39;t worry, it happens to the best of us! As long as you
            remember your email, we&#39;ll do the searching.
          </p>{' '}
          <form className={styles.loginform}>
            <div className={styles.inputfield}>
              <label className={styles.topmargin} htmlFor='email'>
                Email
              </label>
              <input type='text' className={styles.email} />
            </div>
          </form>
          <section className={styles.buttons}>
            <button
              className={`${styles['yellow-btn']} ${styles['topmargin']}`}
              type='button'
            >
              Submit
            </button>
            <button
              className={styles['red-btn']}
              type='button'
              onClick={() => {
                showUsername();
                showRecovery();
              }}
            >
              Go Back
            </button>
          </section>
        </div>
        <div
          className={`${
            resendToggled ? styles['recovery-resend-modal'] : styles.hide
          }`}
        >
          <h2>Resend Email</h2>
          <p>
            Signed up but didn&#39;t get your verification email? Give us an
            address and we&#39;ll send another.
          </p>{' '}
          <form className={styles.loginform}>
            <div className={styles.inputfield}>
              <label className={styles.topmargin} htmlFor='email'>
                Email
              </label>
              <input type='text' className={styles.email} />
            </div>
            <div className={styles.inputfield}>
              <label className={styles.topmargin} htmlFor='username'>
                Username
              </label>
              <input type='text' className={styles.email} />
            </div>
            <section className={styles.buttons}>
              <button
                className={`${styles['yellow-btn']} ${styles['topmargin']}`}
                type='button'
              >
                Submit
              </button>
              <button
                className={styles['red-btn']}
                type='button'
                onClick={() => {
                  showResend();
                  showRecovery();
                }}
              >
                Go Back
              </button>
            </section>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Login;
