import { useEffect } from "react";
// import Button from "@components/toggleBtn/Button";
import * as FcIcons from "react-icons/fc";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import './modal.css'
import { useState } from "react";
import { useTranslation } from "react-i18next";

const SignUpModal = ({ visible, onClose, login }) => {
  const [state, setState] = useState(false);

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
      {/* {Object.keys(formValues).length === 0 && isSubmit ? null : (<div className="h-fit w-24 p-3"><h1>Account Created!</h1></div>) } */}
      <form
        className="form"
      // onSubmit={handleSubmit}
      >
        <span
          className="close"
          onClick={onClose}
        >
          <FaIcons.FaTimes />
        </span>
        <h1>
          {t('signup_to_nfting')}
        </h1>
        <div
          className="form-container"
        >
          <input
            className="form-input"
            type="text"
            name="firstName"
            placeholder={t('first_name')}
            value={formValues.firstName}
            onChange={handleChange}
          />
        </div>

        {formErrors.firstName && (
          <p className="font-nunito text-sm text-red-600 mt-2">
            {formErrors.firstName}
          </p>
        )}
        <div
          className="form-container justify-content-between"
        >
          <input
            className="form-input"
            type="text"
            name="lastName"
            placeholder={t('last_name')}
            value={formValues.lastName}
            onChange={handleChange}
          />
        </div>
        {formErrors.lastName && (
          <p className="font-nunito text-sm text-red-600 mt-2">
            {formErrors.lastName}
          </p>
        )}
        <div
          className="form-container"
        >
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder={t('email_address')}
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        {formErrors.email && (
          <p className="font-nunito text-sm text-red-600 mt-2">
            {formErrors.email}
          </p>
        )}
        <div
          className="form-container justify-content-between"
        >
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
        {formErrors.password && (
          <p className="font-nunito text-sm text-red-600 mt-2">
            {formErrors.password}
          </p>
        )}
        <div className="">
          <h2>
            By continuing, you agree to NFTing's{" "}
            <a href="" className="underline text-blue-500">
              Terms of Service
            </a>
            ,{" "}
            <a href="" className="underline text-blue-500">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="" className="underline text-blue-500">
              Cookies Use
            </a>
            .
          </h2>
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
          ) : ""} */}
        </button>
        <div className="option-link">
          <h2>
            {t('already_have_an_account')}
            <span
              className="link"
              onClick={login}
            >
              {t('login')}
            </span>
          </h2>
        </div>
        <div
          className="divider"
        >
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
              {t('signup_with_google')}
            </h1>
          </button>
          <button
            className="btn-social"
          >
            <FaIcons.FaFacebook className="text-3xl" />
            <h1 className="text-xl mx-3 font-nunito font-semibold">
              {t('signup_with_facebook')}
            </h1>
          </button>
          <button
            className="btn-social"
          >
            <BsIcons.BsTwitter className="text-3xl" />
            <h1 className="text-xl mx-3 font-nunito font-semibold">
              {t('signup_with_twitter')}
            </h1>
          </button>
        </div>
      </form>
      {/* <div className="bg-white h-fit w-1/2 rounded-3xl relative p-5 top-52 hidden">
        <h1>Account created successfully</h1>
      </div> */}
    </div>
  );
};

export default SignUpModal;
