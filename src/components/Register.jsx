import { useState } from 'react'
import { useForm } from 'react-hook-form'
function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [submit, setSubmit] = useState(false)
  const doSubmit = (data) => {
    console.log(data)
    setSubmit(true)
  }
  return (
    <div>
      <h1 className='text-center md:text-5xl font-bold uppercase md:mt-10 mt-20 text-xl'>REGISTER NOW!</h1>
      <form onSubmit={handleSubmit(doSubmit)} className='flex flex-col items-center w-3/4 md:w-fit m-auto px-6 py-8 bg-slate-600 my-10 rounded-lg border'>
        {submit ? <div className='text-center text-2xl text-green-400 font-bold uppercase mb-5 '>Registration Done!</div> : null}
        <input type="text"
          placeholder='Enter Name'
          className='block bg-slate-100 md:w-[340px] border md:h-8 h-2 rounded p-3.5 md:font-base md:text-base text-[12px]'
          {...register("name", { required: "Please enter the name" })}
        />
        <div className='text-red-500'>{errors.name?.message}</div>
        <input type="email"
          placeholder='Enter Your Mail'
          className='block  bg-slate-100 mt-6 md:w-[340px] border md:h-8 h-2 rounded p-3.5 md:font-base md:text-base text-[12px]'
          {...register("mail", { required: "Please enter the mail", pattern: { value: /^\S+@\S+$/i, message: "Invalid email"} })}

        />
        <div className='text-red-500'>{errors.mail?.message}</div>

        <input type="password"
          placeholder='Enter the Password'
          className='block  bg-slate-100 mt-6 md:w-[340px] border md:h-8 h-2 rounded p-3.5 md:font-base md:text-base text-[12px]'
          {...register("pass", { required: "Please enter the password" })}

        />
        <div className='text-red-500'>{errors.pass?.message}</div>

        <input type="password"
          placeholder='Re-Enter the Password'
          className='block bg-slate-100 mt-6 md:w-[340px] border md:h-8 h-2 rounded p-3.5 md:font-base md:text-base text-[12px]'
          {...register("passre", { required: "Please re-enter the password" })}

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
