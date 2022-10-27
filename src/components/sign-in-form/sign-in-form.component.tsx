import { useState , FormEvent, ChangeEvent} from "react";
import { useDispatch } from "react-redux";
import { googleSignInStart , emailSignInStart} from "../../store/user/user.action";
import { AuthError, AuthErrorCodes } from "firebase/auth";
import FormInput from "../form-input/form-input.component";
import Button,{BUTTON_TYPE_CLASSES} from "../button/button.component";
import {ButtonsContainer,SignUpContainer} from "./sign-in-form.styles";


const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const dispatch = useDispatch();


  const logGoogleUser = async () => {
    dispatch(googleSignInStart());
  };
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      if((error as AuthError).code === AuthErrorCodes.CREDENTIAL_MISMATCH)
      alert('incorrect password for email');
      if((error as AuthError).code === AuthErrorCodes.APP_NOT_AUTHORIZED)
      alert('User is not authorized')
    }
  };

  const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
   
  };

  return (
    <SignUpContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button type="submit" children="Sign In"></Button>
          <Button type='button' children="Google Sign In" buttonType={BUTTON_TYPE_CLASSES.google} onClick={logGoogleUser} ></Button>
        </ButtonsContainer>
      </form>
    </SignUpContainer>
  );
};

export default SignInForm;
