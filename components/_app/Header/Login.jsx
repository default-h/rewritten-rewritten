import { useRef, useState, useEffect } from 'react';

import styles from './Login.module.scss';
import exit from '../../../public/assets/icons/xmark-solid.svg';
import Image from 'next/image';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,31}$/;
const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{10,255}$/;
const EMAIL_REGEX =
  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

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

  const userRef = useRef(null);
  const emailRef = useRef(null);
  const errRef = useRef(null);

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pass, setPass] = useState('');
  const [validPass, setValidPass] = useState(false);
  const [passFocus, setPassFocus] = useState(false);

  const [matchPass, setMatchPass] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (userRef.current != null) {
      userRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    if (emailRef.current != null) {
      emailRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPass(PASS_REGEX.test(pass));
    setValidMatch(pass === matchPass);
  }, [pass, matchPass]);

  useEffect(() => {
    setErrMsg('');
  }, [user, email, pass, matchPass]);

  const handleSubmit = async e => {
    e.preventDefault();

    const checkUser = USER_REGEX.test(user);
    const checkPass = PASS_REGEX.test(pass);
    const checkEmail = EMAIL_REGEX.test(email);
    if (!checkUser || !checkPass || !checkEmail) {
      setErrMsg('Inputted entries are not valid. Try again.');
      return;
    }
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
          aria-label='Close'
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
          </form>
        </div>

        <div
          className={`${
            registerToggled ? styles['register-modal'] : styles.hide
          }`}
        >
          <h2>Register</h2>
          <form className={styles.loginform} autoComplete='off'>
            <div className={styles.inputfield}>
              <label htmlFor='username'>username</label>
              <input
                type='text'
                id='username'
                ref={userRef}
                onChange={e => setUser(e.target.value)}
                aria-invalid={validName ? 'false' : 'true'}
                aria-describedby='uidnote'
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                required
                className={styles.username}
              />
              <p
                id='uidnote'
                className={`${
                  userFocus && user && !validName
                    ? styles['instructions']
                    : styles['offscreen']
                }`}
              >
                4 to 32 characters. Must begin with a letter.
                <br />
                Letters, numbers, underscores, and hyphens are allowed.
              </p>
            </div>
            <div className={styles.inputfield}>
              <label htmlFor='username'>e-mail</label>
              <input
                type='text'
                id='email'
                ref={emailRef}
                onChange={e => setEmail(e.target.value)}
                aria-invalid={validEmail ? 'false' : 'true'}
                aria-describedby='uidnote'
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
                required
                className={styles.email}
              />
              <p
                id='uidnote'
                className={`${
                  emailFocus && email && !validEmail
                    ? styles['instructions']
                    : styles['offscreen']
                }`}
              >
                Enter a valid email address.
                <br />
              </p>
            </div>
            <div className={styles.inputfield}>
              <label htmlFor='password'>password</label>
              <input
                type='password'
                id='password'
                autoComplete='new-password'
                onChange={e => setPass(e.target.value)}
                value={pass}
                aria-invalid={validPass ? 'false' : 'true'}
                aria-describedby='passnote'
                onFocus={() => setPassFocus(true)}
                onBlur={() => setPassFocus(false)}
                required
                className={styles.password}
              />

              <p
                id='passnote'
                className={`${
                  passFocus && !validPass
                    ? styles['instructions']
                    : styles['offscreen']
                }`}
              >
                Password must be at least 10 characters. Include uppercase and
                lowercase letters, a number, and a special character.
                <br />
                Valid special characters:{' '}
                <span aria-label='exclamation mark'>!</span>{' '}
                <span aria-label='at symbol'>@</span>{' '}
                <span aria-label='hashtag'>#</span>{' '}
                <span aria-label='dollar sign'>$</span>{' '}
                <span aria-label='percent'>%</span>
              </p>
            </div>
            <div className={styles.inputfield}>
              <label htmlFor='password'>repeat password</label>
              <input
                id='confirm_pass'
                type='password'
                onChange={e => setMatchPass(e.target.value)}
                aria-invalid={validMatch ? 'false' : 'true'}
                aria-describedby='confirmnote'
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
                required
                className={styles.password}
              />
              <p
                id='confirmnote'
                className={`${
                  matchFocus && !validMatch
                    ? styles['instructions']
                    : styles['offscreen']
                }`}
              >
                Passwords must match.
              </p>
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
          <p className={styles.paragraph}>
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
          <p className={styles.paragraph}>
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
          <p className={styles.paragraph}>
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
