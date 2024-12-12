import '../../styles/login.css'
import { useState } from 'react'

const Login = () => {
    const [name] = useState('Financial Control')

    function toSignUp(): void {
        const signIn = document.querySelector('#section-signIn') as HTMLElement | null
        const signUp = document.querySelector('#section-signUp') as HTMLElement | null
        signIn?.classList.add('hidden')
        signIn?.classList.remove('visible')
        signUp?.classList.add('visible')
        signUp?.classList.remove('hidden')
    }

    function toSignIn(): void {
        const signUp = document.querySelector('#section-signUp') as HTMLElement | null
        signUp?.style.display === 'none'
        const signIn = document.querySelector('#section-signIn') as HTMLElement | null
        signUp?.classList.add('hidden');
        signUp?.classList.remove('visible');
        signIn?.classList.add('visible');
        signIn?.classList.remove('hidden');
    }

    return(
        <div className='container-login'>
            <div className="container-style-login">
                <div id="rectangle-login"></div>
                <div className="section-login" id="section-signIn">
                    <h2>We are <b>{name}</b></h2>
                    <p>Welcome back! Log in your account to view today´s incomes and expenses</p>
                    <div className="container-input-login">
                        <input type="email" placeholder='Your email' name="" id="" />
                        <input type="password" placeholder='Your password' name="" id="" />
                    </div>
                    <div className="container-btn-login">
                        <button type="submit" id="btn-login">sign in</button>
                        <div className="container-btn-register-account"><button id="btn-register-account" onClick={toSignUp}>Do not have account? Sign up!</button></div>
                    </div>                </div>


                    {/* register */}
                    <div className="section-login hidden" id='section-signUp'>
                    <h2>We are <b>{name}</b></h2>
                    <p>Hello, user! Welcome to our system!</p>
                    <div className="container-input-login">
                        <input type="email" placeholder='Your email' name="" id="" />
                        <input type="password" placeholder='Your password' name="" id="" />
                    </div>
                    <div className="container-btn-login">
                        <button type="submit" id="btn-login">sign up</button>
                        <div className="container-btn-register-account"><button id="btn-register-account" onClick={toSignIn}>Do you have account? Sign In!</button></div>
                    </div>                </div>

            </div>
        </div>
    )
}

export default Login