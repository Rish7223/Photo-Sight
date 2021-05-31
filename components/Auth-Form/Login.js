import Image from 'next/image';
import { useState } from 'react';
import { useUserContext } from '../../context/UserContext';
import { Button } from '../UI/Button';
import GoogleAuthButton from '../UI/Button/googleBtn';
import { Input } from '../UI/Input';
import { Heading, Paragraph } from '../UI/Typography';
import { StyledLoginForm } from './styledLoginForm';
const LoginForm = () => {
  const {
    authState: { auth },
    dispatchLogin,
    dispatchSocialLogin
  } = useUserContext();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;
  const onChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onsubmit = event => {
    event.preventDefault();
    dispatchLogin(formData);
    setFormData({
      email: '',
      password: ''
    });
  };

  return (
    <StyledLoginForm className="form" onSubmit={onsubmit}>
      <Heading center color="#ea0068">
        Login
      </Heading>
      <div className="form_data">
        <label htmlFor="email" className="form_label">
          Email Address
        </label>
        <section className="form_input">
          <img
            src="/Images/email_icon.svg"
            alt="email icon"
            height={30}
            width={30}
          />
          <Input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={e => onChange(e)}
            placeholder="Type your email address"
            width="100%"
            required
          />
        </section>
      </div>
      <div className="form_data">
        <label htmlFor="password" className="form_label">
          Password
        </label>
        <section className="form_input form_input2 ">
          <img
            src="/Images/pass_icon.svg"
            alt="password icon"
            height={25}
            width={25}
          />
          <Input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
            placeholder="Type your password"
            width="100%"
            required
          />
        </section>
      </div>
      <Button type="submit" width="100%" margin="20px 0 0 0 ">
        {!auth.authLoading ? (
          'Login'
        ) : (
          <Image
            src="/Images/three-dots.svg"
            width="50px"
            height="10px"
            color="#fff"
            layout="fixed"
            alt="loading"
            className="svg"
          />
        )}
      </Button>
      <Paragraph center size="14px" color="rgba(0, 0, 0, 0.56)" margin="20px 0">
        or singin using social accounts
      </Paragraph>
      <GoogleAuthButton onclick={dispatchSocialLogin} />
    </StyledLoginForm>
  );
};

export default LoginForm;
