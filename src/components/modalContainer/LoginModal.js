// import Button from "@components/toggleBtn/Button";
import "./modal.css"
import * as FcIcons from "react-icons/fc";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { Modal, ModalHeader, ModalBody, Form, Label, Input, InputGroup, InputGroupText, Button, FormGroup } from 'reactstrap'
import { useState, useEffect } from "react";

const LoginModal = ({ modal, visible, onClose, toggle, args, onClick, SignUp }) => {
  const [state, setState] = useState(false);

  const { t } = useTranslation(["modal"])

  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formValues).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Email is required";
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
    ) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "password must not be less than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "password cannot exceed more than 10 characters";
    }

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
      <Modal isOpen={modal} toggle={toggle} {...args} contentClassName="modal-body p-4">
        <ModalHeader className="border-0" toggle={toggle}>
        </ModalHeader>
        <ModalBody>
          <h1 className="head-title" style={{ marginBottom: 30, }}>{t('login_to_nfting')}</h1>
          <Form>
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
            <div>
              <span className="forget-password" onClick={onClick}>{t('forget_password')}</span>
            </div>
            <div className="mt-5">
              <button type="submit" onClick={handleFormSubmit} className="btn-continue">{t('continue')}</button>
            </div>
          </Form>

          <div className="option-link">
            <h2>{t('dont_have_an_account')} <span className="link" onClick={SignUp}>{t('sign_up')}</span></h2>
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
                {t('login_with_google')}
              </h1>
            </button>
            <button
              className="btn-social"
            >
              <FaIcons.FaFacebook className="social-icon facebook" />
              <h1 className="">
                {t('login_with_facebook')}
              </h1>
            </button>
            <button
              className="btn-social"
            >
              <BsIcons.BsTwitter className="social-icon twitter" />
              <h1 className="">
                {t('login_with_twitter')}
              </h1>
            </button>
          </div>

        </ModalBody>
      </Modal>
    </div>
  );
};

export default LoginModal;
