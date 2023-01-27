import React, { useState } from "react";
import {
  googleSignInPopUp,
  createUserWithDocument,
  signInUserWithEmailAndPassword,
  createUserAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase-utils";

const formFieldsObj = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUp() {
  const [formFields, setFormFields] = useState(formFieldsObj);

  const { displayName, email, password, confirmPassword } = formFields;

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) return;

    try {
      const { user } = await createUserAuthWithEmailAndPassword(
        email,
        password
      );
      await createUserWithDocument(user, { displayName });
    } catch (err) {
      console.log(`error: ${err}`);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="bg-white shadow-md text-gray-500 font-mono p-4  w-[40%]">
      <h2 className="text-center">Dont have an account ?</h2>
      <strong className="text-center block m-2">Create and Account</strong>
      <form onSubmit={handleSignUp}>
        <div className="mt-5 flex flex-col justify-center ml-5">
          <label>UserName:</label>
          <input
            className="border-2 border-gray-600 w-10/12"
            type="text"
            required
            value={displayName}
            onChange={handleChange}
            name="displayName"
          />
        </div>
        <div className="mt-5 flex flex-col justify-center ml-5">
          <label>Email:</label>
          <input
            className="border-2 border-gray-600 w-10/12"
            type="email"
            required
            value={email}
            onChange={handleChange}
            name="email"
          />
        </div>
        <div className="mt-5 flex flex-col justify-between ml-5">
          <label>Password:</label>
          <input
            className="border-2 border-gray-600 focus:outline-double w-10/12"
            type="password"
            required
            value={password}
            onChange={handleChange}
            name="password"
          />
        </div>
        <div className="mt-5 flex flex-col justify-between ml-5">
          <label>Confirm Password:</label>
          <input
            className="border-2 border-gray-600 focus:outline-double w-10/12"
            type="password"
            required
            value={confirmPassword}
            onChange={handleChange}
            name="confirmPassword"
          />
        </div>
        <div className="flex justify-between item-center">
          <button
            className="p-2 w-[60%] mx-auto bg-blue-600 text-white rounded-sm text-center mt-5  hover:bg-blue-500 focus:scale-[1.05] focus:outline-none"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
