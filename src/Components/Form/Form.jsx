import React from 'react'
import { useForm } from "react-hook-form";
import "./form.css"


const Form = () => {
    const { register, getValues, handleSubmit, formState: { errors } } = useForm();
    const Submit = (data) => {
        console.log(data);
    }
  return (
    <div className=' main d-flex flex-column align-items-center mt-0'>
        <div className='text-white'> <h1>sign up</h1></div>
        <form onSubmit={handleSubmit(Submit)} className='mainForm col-7 col-md-5 col-lg-4 mt-3  mb-auto p-5'> 
        <div>
            <label className='labels  '>First name</label>
            <input className='' {...register('FirstName', { required: { value: true, message: 'first name is requried' }, minLength: { value: 2, message: "first name must be at least 2 characters" } })} />
            {errors.FirstName && errors.FirstName.type == 'required' && <small className='d-flex  col-12  mt-12 text-danger'>{errors?.FirstName?.message}</small>}
            {errors.FirstName && errors.FirstName.type == 'minLength' && <small className='d-flex  col-12  mt-12 text-danger '>{errors?.FirstName?.message}</small>}
        </div>
        <div>
            <label className='labels'>Last name</label>
            <input className='' {...register('LastName', { required: { value: true, message: 'Last name is requried' }, minLength: { value: 2, message: "first name must be at least 2 characters" } })} />
            {errors.LastName && errors.LastName.type == 'required' && <small className='d-flex  col-12  mt-12 text-danger'>{errors?.LastName?.message}</small>}
            {errors.LastName && errors.LastName.type == 'minLength' && <small className='d-flex  col-12  mt-12 text-danger'>{errors?.LastName?.message}</small>}
        </div>
        <div>
            <label className='labels'>Email</label>
            <input className='' {...register('Email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} />
            {errors.Email && <small className='d-flex  col-12  mt-12 text-danger'>Invalid Email</small>}
        </div>
        <div>
            <label className='labels'>Phone</label>
            <input className='' {...register('Phone', { required: { value: true, message: 'Phone is requried' } })} />
            {errors.Phone && errors.Phone.type == 'required' && <small className='d-flex  col-12  mt-12 text-danger'>{errors?.Phone?.message}</small>}
        </div>
        <div>
            <label className='labels'>Address</label>
            <input className='' {...register('Address', { required: { value: true, message: 'Address requried' } })} />
            {errors.Address && errors.Address.type == 'required' && <small className='d-flex  col-12  mt-12 text-danger'>{errors?.Address?.message}</small>}
        </div>
        <div>
            <label className='labels'>Password</label>
            <input type={"password"} className='' {...register('Password', { required: { value: true, message: 'Password is requried' }, minLength: { value: 8, message: "Password must be at least 8 characters" } })} />
            {errors.Password && errors.Password.type == 'required' && <small className='d-flex  col-12  mt-12 text-danger'>{errors?.Password?.message}</small>}
            {errors.Password && errors.Password.type == 'minLength' && <small className='d-flex  col-12  mt-12 text-danger'>{errors?.Password?.message}</small>}
        </div>
        <div>
            <label className='labels'>Confirm Password</label>
            <input type={"password"} {...register('confirmPassword', { required:true  ,validate: value =>value === getValues("Password") || "The passwords do not match"} )}/>
            {errors.confirmPassword && <small className='d-flex  col-12  mt-12 text-danger'>{ errors.confirmPassword.message}</small>}
        

        </div>

        <button className=' Submit btn btn-outline-success badge text-dark p-2 mt-3'>Submit</button>

        </form>

    </div>
  )
}

export default Form