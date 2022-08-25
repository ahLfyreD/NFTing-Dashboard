import { useEffect } from "react";
// import Button from "@components/toggleBtn/Button";
import * as FcIcons from "react-icons/fc";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import './modal.css'
import { Modal, ModalHeader, ModalBody, Form, Label, Input, InputGroup, InputGroupText, Button, FormGroup } from 'reactstrap'
import { useState } from "react";
import { useTranslation } from "react-i18next";

const SignUpModal = ({ visible, onClose, login, modal, args, toggle }) => {
  const [state, setState] = useState(true);

  const { t } = useTranslation(["modal"])

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  // const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    // setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formValues).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    // const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!values.firstName) {
      errors.firstName = "*Required";
    }
    if (!values.lastName) {
      errors.lastName = "*Required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
    ) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
      // } else if (!/^[A-Za-z]\w{7,14}$/.test(values.password)) {
      //   errors.password = "password is invalid, please input a valid password";
    }
    // else if (values.password.length < 4) {
    //   errors.password = "password must not be less than 4 characters";
    // } else if (values.password.length > 10) {
    //   errors.password = "password cannot exceed more than 10 characters";
    // }

    return errors;
  };

  const toggleBtn = () => {
    setState((prevState) => !prevState);
  };

  // const handleOnClose = (e) => {
  //   if (e.target.id === "container") onClose();
  // };

  // if (!visible) return null;
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} {...args} contentClassName="p-4">
        <ModalHeader className="border-0" toggle={toggle}>{t('signup_to_nfting')}</ModalHeader>
        <ModalBody>
          <Form>

            <FormGroup>
              <Input
                type="text"
                name="firstName"
                size='lg'
                placeholder={t('first_name')}
                value={formValues.firstName}
                onChange={handleChange}
              />
              <p className="text-danger">
                {formErrors.firstName}
              </p>
            </FormGroup>
            <FormGroup>
              <Input
                size='lg'
                type="text"
                name="lastName"
                placeholder={t('last_name')}
                value={formValues.lastName}
                onChange={handleChange}
              />
              <p className="text-danger">
                {formErrors.lastName}
              </p>
            </FormGroup>
            <FormGroup>
              <Input
                type="email"
                name="email"
                size='lg'
                placeholder={t('email_address')}
                value={formValues.email}
                onChange={handleChange}
              />
              <p className="text-danger">
                {formErrors.email}
              </p>
            </FormGroup>
            <FormGroup className="mt-4">
              <InputGroup size="lg">
                <Input
                  type={state ? 'text' : 'password'}
                  name='password'
                  onClick={toggleBtn}
                  className="border-end-0"
                  placeholder={t('password')}
                  value={formValues.password}
                  onChange={handleChange} />
                <InputGroupText className="bg-transparent pe-3">
                  <span className="icon-btn p-0 shadow-none"
                    onClick={toggleBtn}>
                    {state ? (
                      <AiIcons.AiOutlineEye />
                    ) : (
                      <AiIcons.AiOutlineEyeInvisible />
                    )}
                  </span>
                </InputGroupText>
              </InputGroup>
              <p className="text-danger">
                {formErrors.password}
              </p>
            </FormGroup>
            {/* <div>
              <span className="forget-password">{t('forget_password')}</span>
            </div> */}
            <div className="option-link">
              <h2>
                By continuing, you agree to NFTing's{" "}
                <a href="" className="forget-password">
                  Terms of Service
                </a>
                ,{" "}
                <a href="" className="forget-password">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="" className="forget-password">
                  Cookies Use
                </a>
                .
              </h2>
            </div>
            <div className="mt-5">
              <button type="submit" onClick={handleFormSubmit} className="btn-continue">{t('continue')}</button>
            </div>
          </Form>

          <div className="option-link">
            <h2>{t('already_have_an_account')} <span className="link">{t('login')}</span></h2>
          </div>
          <div
            className="divider"
          >
            <span>
              {t('or')}
            </span>
          </div>

          <div className="mt-5">
            <button
              className="btn-social"
            >
              <FcIcons.FcGoogle className="social-icon" />
              <h1 className="">
                {t('signup_with_google')}
              </h1>
            </button>
            <button
              className="btn-social"
            >
              <FaIcons.FaFacebook className="social-icon facebook" />
              <h1 className="">
                {t('signup_with_facebook')}
              </h1>
            </button>
            <button
              className="btn-social"
            >
              <BsIcons.BsTwitter className="social-icon twitter" />
              <h1 className="">
                {t('signup_with_twitter')}
              </h1>
            </button>
          </div>

        </ModalBody>
      </Modal>
    </div>
  );
};

export default SignUpModal;
