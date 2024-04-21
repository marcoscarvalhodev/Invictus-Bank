import React, { MutableRefObject } from 'react';
import { StyledCareersFormFields } from '../../../../Styles/SubPages/Careers/CareersForm/CareersFormFields.styled';
import Input from '../../../Reusable/Input';
import useForm from '../../../../Hooks/useForm';
import Button from '../../../Reusable/Button';
import { NavLink, useNavigate } from 'react-router-dom';

const CareersFormFields = () => {
  const [appliedState, setAppliedState] = React.useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const emailRef = React.useRef<null | HTMLInputElement>(null);
  const confirmEmailRef = React.useRef<null | HTMLInputElement>(null);

  const firstName = useForm({ type: 'name' });
  const lastName = useForm({ type: 'last_name' });
  const email = useForm({
    type: 'email',
    emailRef: emailRef,
    confirmEmailRef: confirmEmailRef,
  });
  const emailConfirmation = useForm({
    type: 'email_confirmation',
    confirmEmailRef: confirmEmailRef,
    emailRef: emailRef,
  });
  const placeResidence = useForm({ type: 'residence' });
  const phoneNumber = useForm({ type: 'number' });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    firstName.validate();
    email.validate();
    lastName.validate();
    placeResidence.validate();
    emailConfirmation.emailConfirmation();
    if (
      emailConfirmation.emailConfirmation() &&
      email.validate() &&
      firstName.validate() &&
      lastName.validate() &&
      placeResidence.validate()
    ) {
      setAppliedState(true);
      setLoading(true);
    } else {
      setLoading(false);
      setAppliedState(false);
    }
  };

  React.useEffect(() => {
    if (appliedState) {
      setTimeout(() => {
        navigate('/');
      }, 1500);
    }
  });

  return (
    <StyledCareersFormFields>
      <form className='form' onSubmit={handleSubmit}>
        <div className='input-wrapper-fields'>
          <Input
            name='first-name-careers'
            label='First name'
            type='text'
            {...firstName}
            requiredField
          />

          <Input
            name='last-name-careers'
            label={`Last name`}
            type='text'
            {...lastName}
            requiredField
          />
        </div>

        <div className='input-wrapper-fields'>
          <Input
            name='email-careers'
            label='Email'
            type='text'
            {...email}
            requiredField
            reference={emailRef}
          />

          <Input
            name='email-confirmation-careers'
            label='Confirm your email'
            type='text'
            {...emailConfirmation}
            requiredField
            reference={confirmEmailRef}
          />
        </div>

        <div className='input-wrapper-fields'>
          <Input
            name='residence-careers'
            label='Place of residence'
            type='text'
            {...placeResidence}
            requiredField
          />

          <Input
            name='phone-number-careers'
            label='Phone number'
            type='text'
            {...phoneNumber}
          />
        </div>

        <Button classed='submit-button' loading={loading}>
          Apply
        </Button>
      </form>
    </StyledCareersFormFields>
  );
};

export default CareersFormFields;
