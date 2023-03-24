import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './login.css'

function Login() {
    const navigateto = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onsubmit = (data) => {
        console.log(data);
        navigateto("/data")
    }
    return (
        <div className="login">
            <form className="form" onSubmit={handleSubmit(onsubmit)}>
                <span class="material-symbols-outlined location_icon">
                    share_location
                </span>
                <input type="email" autoFocus className='input' placeholder='Email *' {...register("email", { required: "Email is required.", pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: "Email is not valid." } })} />
                {errors.email && <p className='error_msg'>{errors.email.message}</p>}

                <input type="password" className='input' placeholder='Password *'{...register("password", { required: "Password is requied.", minLength: { value: 6, message: "Password should be at-least 6 characters." }, pattern: { value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/, message: "Password should contain at least one uppercase letter, lowercase letter, digit, and special symbol." } })} />

                {errors.password && <p className='error_msg'>{errors.password.message}</p>}
                <button type='submit' className='login_btn'>Login</button>
                <div className="user">New User?</div>
            </form >
        </div>
    )
}

export default Login;