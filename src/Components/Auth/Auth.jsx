import React from 'react'
import Signin from '../Signin/Signin'
import SignUp from '../SignUp/SignUp'



function Auth() {
  return (
    <div className='flex justify-between  mt-20 items-center w-10/12 mx-auto'>
        <Signin/>
        <SignUp/>
    </div>
  )
}

export default Auth