import { useState } from 'react'
import { useForm } from 'react-hook-form'
function Register() {
  //to handle register, submission respectively
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const [submit, setSubmit] = useState(false)
  const [formData, setData] = useState({})

  //to handle the submission
  const doSubmit = (data) => {
    setSubmit(true)
    setData(formData)
    alert("Redirecting back to the home page")
    setTimeout(() => {
      setSubmit(false)
      location.href = '/'
    },1000)
  }
  return (
    <div>
      <h1 className='text-center md:text-5xl font-bold uppercase md:mt-10 mt-20 text-xl'>REGISTER NOW!</h1>
      <form onSubmit={handleSubmit(doSubmit)} className='flex flex-col items-center w-3/4 md:w-fit m-auto px-6 py-8 bg-slate-600 my-10 rounded-lg border'>
        {submit ? <div className='text-center text-2xl text-green-400 font-bold uppercase mb-5 '>Registration Done!</div> : null}
        <input type="text"
          placeholder='Enter Name'
          className='input-form'
          {...register("name", {
            required: "Please enter the name",
            minLength: { value: 3, message: "Name should be of minimum 3 characters." },
            maxLength: { value: 30, message: "Name should be not more than 30 characters long" }
          })}
        />
        <div className='text-red-500'>{errors.name?.message}</div>
        <input type="email"
          placeholder='Enter Your Mail'
          className='input-form mt-6'
          {...register("mail", { required: "Please enter the mail", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })}

        />
        <div className='text-red-500'>{errors.mail?.message}</div>

        <input type="password"
          placeholder='Enter the Password'
          className='input-form mt-6'
          {...register("pass", {
            required: "Please enter the password",
            minLength: {
              value: 10,
              message: "The password should be at least 10 characters long",
            },
            pattern: {
              value: /^(?=.*[!@#$%^&*])/,
              message: "Password should contain atleast one special character"
            }
          })}

        />
        <div className='text-red-500'>{errors.pass?.message}</div>

        <input type="password"
          placeholder='Re-Enter the Password'
          className='input-form mt-6'
          {...register("passre", {
            required: "Please re-enter the password",
            validate: (value) => value === watch("pass") || "Passwords do not match"

          })}

        />
        <div className='text-red-500'>{errors.passre?.message}</div>

        <div className='flex items-center mt-6'>
          <input type="checkbox" id="check" className='ml-4' required />
          <label htmlFor="check" className='text-white ml-2 text-xs '>I've read and understood all the <span className='underline cursor-pointer' onClick={() => alert("It was a joke! LOL")}>terms and conditions</span></label>
        </div>

        <button type='submit'
          className='block m-3.5 md:mt-6 bg-red-600 md:w-[340px] md:h-10 h-6 rounded md:p-2 p-0.5 text-white md:font-base md:text-base text-[12px]'
        >Register Now!
        </button>
      </form>
    </div>
  )
}

export default Register
