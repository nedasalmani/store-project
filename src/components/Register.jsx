import '../App.css';
import React , {useState} from 'react'

export const Register = () => {
    const [email , setEmail] = useState('');
    const [pass , setPass] =useState('')
    const [name , setName] = useState('');

    const handelSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
    }
  return (
    <div className='register'>
    <div className='container-register'> 
    
        <h2>Register</h2>

        <form className='register-form' onSubmit={handelSubmit}>
        <label htmlFor='name'>full Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder='enter your full name' id='name' name='name' />


            <label htmlFor='email'>email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='youremail@gmail.com' id='email' name='email' />

            <label htmlFor='password'>password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type='password' placeholder='********' id='pass' name='pass'/>

            <button className='button-register'>log out</button>
        </form>

    </div>
    </div>
  )
}
