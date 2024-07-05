import { useState} from "react"
import { createUserWithEmailAndPassword} from "firebase/auth"
import FormInput from "../../componenets/form-input/form-input"
import './sign-up.styles.scss'
import Button from "../../componenets/button/button.component"
import { createAuthUserWithEmailAndPassword ,createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils"
const defaultFormFields ={
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''

}
const SignUpform=()=>{
    const [formFields, setFormFields]= useState(defaultFormFields)
    const {displayName, email, password ,confirmPassword}= formFields;
    const resetForm =()=>{
        setFormFields(defaultFormFields)
    }
    
    const handleSubmit=async (event) =>{
        event.preventDefault();
        if (password !== confirmPassword){
            alert("The password not match")
            return
        }
        try{
            const {user} =await(createAuthUserWithEmailAndPassword(email,password))
            await createUserDocumentFromAuth (user , {displayName})
            resetForm();
        }
        catch(error){
            console.log('error',error)
            if (error.code === 'auth/email-already-in-use'){
                alert ('Cannot create user , email already in use ')
            }else{
                console.log()
            }

        }
    }
    const handleChange =(event)=>{
        const{name,value}=event.target;
        setFormFields({...formFields,[name]:value})
    }
    return(
        <div className='sign-up-container'>
            <h1>Dont Have an Account?</h1>
            <form onSubmit={handleSubmit}>
                <FormInput label='Display Name' 
                type='text' 
                required
                 onChange={handleChange}
                  name='displayName' 
                  value={displayName}/>
                <FormInput  label='Email' type='email'required onChange={handleChange} name='email' value={email}/>
                <FormInput  label='Password' type='password' required onChange={handleChange} name='password' value={password}/>
                <FormInput  label='Confirm Password' type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>
                <Button type='submit'>Sign UP</Button>
            </form>

        </div>

    )

}
export default SignUpform