import { Button } from '../UI/Button';
import GoogleAuthButton from '../UI/Button/googleBtn';
import { Input } from '../UI/Input';
import { Heading, Paragraph } from '../UI/Typography';
import { StyledLoginForm } from './styledLoginForm';

const LoginForm = () => {
  return (
    <StyledLoginForm className="form">
      <Heading center color="#eb1461">
        Login
      </Heading>
      <div className="form_data">
        <label htmlFor="email" className="form_label">
          Email Address
        </label>
        <section className="form_input">
          <img src="/Images/email_icon.svg" alt="email icon" />
          <Input
            id="email"
            type="email"
            placeholder="Type your email address"
            width="100%"
          />
        </section>
      </div>
      <div className="form_data">
        <label htmlFor="password" className="form_label">
          Password
        </label>
        <section className="form_input form_input2 ">
          <img src="/Images/pass_icon.svg" alt="email icon" />
          <Input
            id="password"
            type="password"
            placeholder="Type your password"
            width="100%"
          />
        </section>
      </div>
      <Button type="submit" width="100%" margin="20px 0 0 0 ">
        Login
      </Button>
      <Paragraph center size="14px" color="rgba(0, 0, 0, 0.56)" margin="20px 0">
        or singin using social accounts
      </Paragraph>
      <GoogleAuthButton />
    </StyledLoginForm>
  );
};

export default LoginForm;
