import { useRef, useState } from 'react';
import { FaXmark } from 'react-icons/fa6';
import { FocusTrap } from 'focus-trap-react';

import InputText from '../inputtext/InputText';
import Button from '../button/Button';
import modal_apple from '../../assets/images/modal_apple.jpg';
import './Modal.sass';

import type { ModalProps, InputsType, InputNamesType } from './Modal.types';

const Modal = ({ modalSwitch }: ModalProps) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState<Record<InputNamesType, boolean>>({
    name: false,
    phone: false,
    email: false,
  });

  const inputs: InputsType[] = [
    {
      id: 1,
      name: 'name',
      type: 'text',
      placeholder: 'Name',
      ref: nameRef,
      regex: /^[a-zA-Zа-яА-ЯёЁіІїЇєЄ'-]{2,}$/,
    },
    {
      id: 2,
      name: 'phone',
      type: 'tel',
      placeholder: 'Phone',
      ref: phoneRef,
      regex: /^\+?[0-9\s\-()]{10,20}$/,
      maxLength: 20,
    },
    {
      id: 3,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      ref: emailRef,
      regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    },
  ];

  const handleSendForm = () => {
    const errors = { ...error };
    let hasError = false;

    for (const input of inputs) {
      const value = input.ref.current?.value || '';
      const isValid = input.regex.test(value);

      errors[input.name] = !isValid;

      if (!isValid && !hasError) {
        input.ref.current?.focus();
        hasError = true;
      }
    }

    setError(errors);
    if (hasError) return;

    console.log(
      nameRef.current?.value,
      phoneRef.current?.value,
      emailRef.current?.value,
      'sent.'
    );

    inputs.forEach((item) => {
      if (item.ref.current) item.ref.current.value = '';
    });
  };

  const handleChange = (name: InputNamesType) => {
    setError((prev) => ({ ...prev, [name]: false }));
  };

  return (
    <FocusTrap>
      <div className="modal">
        <div className="modal__overlay" onClick={modalSwitch}></div>
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal__title"
          aria-describedby="modal__description"
          className="modal__content"
        >
          <button className="modal__close" onClick={modalSwitch}>
            <FaXmark />
          </button>
          <div className="modal__form">
            <h1 id="modal__title" className="modal__title">
              Let’s Work Together
            </h1>
            <p id="modal__description" className="modal__description">
              Leave your contact details —<br /> we’ll get back to you shortly.
            </p>
            {inputs.map((item) => (
              <InputText
                key={item.id}
                error={error[item.name]}
                inputName={`modal_${item.name}`}
                inputRef={item.ref}
                placeholder={item.placeholder}
                type={item.type}
                maxLength={item.maxLength}
                onChange={() => handleChange(item.name)}
              />
            ))}
            <Button
              buttonText="Send"
              className="modal__input-button"
              error={error.name || error.phone || error.email}
              onClick={handleSendForm}
              theme="dark"
            />
          </div>
          <img
            src={modal_apple}
            className="modal__image"
            alt="apples in crates"
          />
        </div>
      </div>
    </FocusTrap>
  );
};

export default Modal;
