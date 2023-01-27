import React, { useState } from "react";
import {
  googleSignInPopUp,
  createUserWithDocument,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase-utils";

const formFieldsObj = {
  email: "",
  password: "",
};

function Signin() {
  const [formFields, setFormFields] = useState(formFieldsObj);

  const { email, password } = formFields;

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInUserWithEmailAndPassword(email, password);
      console.log(user);
    } catch (err) {
      switch (err.code) {
        case "auth/user-not-found":
          alert(`user does not exist plz sign up first`);
          break;
        case "auth/wrong-password":
          alert("wrong password");
          break;
        default:
          console.log(err);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSignInWithPopup = async () => {
    const { user } = await googleSignInPopUp();
    await createUserWithDocument(user);
    console.log(user);
  };

  return (
    <div className="bg-white shadow-md text-gray-500 font-mono p-4  w-[40%]">
      <h2 className="text-center">Already have an account ?</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mt-5 flex flex-col justify-between">
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
        <div className="mt-5 flex flex-col justify-between">
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
        <div className="flex justify-between item-center">
          <button
            className="p-2 w-[40%] bg-blue-600 text-white rounded-sm text-center mt-5  hover:bg-blue-500 focus:scale-[1.05] focus:outline-none"
            type="submit"
          >
            Sign In
          </button>
          <button
            className="p-2 bg-red-600 hover:bg-red-500 rounded-sm text-center mt-5 focus:outline-none focus:scale-[1.05] text-white"
            type="button"
            onClick={handleSignInWithPopup}
          >
            SignInWithGoogle
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signin;
