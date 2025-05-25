import { useRef, useState } from 'react';

import Button from '../button/Button';
import InputText from '../inputtext/InputText';
import './SectionSignUp.sass';

const SectionSignUp = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const [emailError, setEmailError] = useState<boolean>(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSignUp = () => {
    const emailValue = emailRef.current?.value || '';
    const isValid = emailRegex.test(emailValue);

    if (!isValid) {
      setEmailError(true);
      emailRef.current?.focus();
      console.log('ERROR');
      return;
    }

    console.log(emailRef.current?.value, 'sent.');

    setEmailError(false);
    if (emailRef.current) {
      emailRef.current.value = '';
    }
  };

  return (
    <section id="signup" className="signup">
      <div className="signup__content">
        <h1 className="signup__title">
          Get fresh updates, offers,
          <br /> and orchard news — right to your inbox.
        </h1>
      </div>
      <InputText
        error={emailError}
        inputRef={emailRef}
        onChange={() => setEmailError(false)}
        placeholder="Email address"
        type="email"
      >
        <Button
          buttonText="Sign Up"
          error={emailError}
          theme="dark"
          onClick={handleSignUp}
        />
      </InputText>
    </section>
  );
};

export default SectionSignUp;
