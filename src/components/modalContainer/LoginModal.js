// import Button from "@components/toggleBtn/Button";
import "./modal.css"
import * as FcIcons from "react-icons/fc";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const LoginModal = ({ visible, onClose, onClick, SignUp }) => {
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

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  if (!visible) return null;
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="modal"
    >
      {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
      <form className="form">
        <span
          className="close"
          onClick={onClose}
        >
          <FaIcons.FaTimes />
        </span>
        <h1>
          {t('login_to_nfting')}
        </h1>
        <div className="form-container">
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder={t('email_address')}
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        <p className="">
          {formErrors.email}
        </p>
        <div className="form-container justify-content-between">
          <input
            className="form-input"
            type={state ? "text" : "password"}
            name="password"
            placeholder={t('password')}
            value={formValues.password}
            onChange={handleChange}
          />
          <button
            className="password-icon d-flex justify-content-center align-items-center"
            onClick={toggleBtn}
          >
            {state ? (
              <AiIcons.AiOutlineEye />
            ) : (
              <AiIcons.AiOutlineEyeInvisible />
            )}
          </button>
        </div>
        <p className="">
          {formErrors.password}
        </p>
        <div className="forget-link">
          <span
            className="link"
            onClick={onClick}
          >
            {t('forget_password')}
          </span>
        </div>
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="continue-btn"
        >
          {t('continue')}
          {/* {Object.keys(formValues).length === 0 && isSubmit ? (
          <div
            className="absolute right-24 shadow-xl top-14 bg-white
           text-black text-sm font-thin h-6 w-40 rounded-lg"
          >
            <p>Account Created!</p>
          </div>
        ) : (
          ""
        )} */}
        </button>
        <div className="option-link">
          <h2>
            {t('dont_have_an_account')}

            <span
              className="link"
              onClick={SignUp}
            >
              {t('sign_up')}
            </span>
          </h2>
        </div>
        <div className="divider">
          <span>
            {t('or')}
          </span>
        </div>

        <div className="social">
          <button
            className="btn-social"
          >
            <FcIcons.FcGoogle className="text-3xl" />
            <h1 className="text-xl mx-3 font-nunito font-semibold">
              {t('login_with_google')}
            </h1>
          </button>
          <button
            className="btn-social"
          >
            <FaIcons.FaFacebook className="text-3xl" />
            <h1 className="text-xl mx-3 font-nunito font-semibold">
              {t('login_with_facebook')}
            </h1>
          </button>
          <button
            className="btn-social"
          >
            <BsIcons.BsTwitter className="text-3xl" />
            <h1 className="text-xl mx-3 font-nunito font-semibold">
              {t('login_with_twitter')}
            </h1>
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginModal;
