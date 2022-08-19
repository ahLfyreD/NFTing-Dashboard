// import Button from "@components/toggleBtn/Button";
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import './modal.css'

const ResetModal = ({ visible, onClose, login }) => {
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
      <div className="modal-container">
        <div className="flex w-full h-12 justify-between items-center">
          <div className="flex items-center w-fit h-fit cursor-pointer font-nunito font-semibold" onClick={login}>
            <span className="font-semibold text-2xl mr" onClick={login}><BiIcons.BiArrowBack/></span>
            Back to Login
          </div>
          <span
            className="flex justify-center items-center cursor-pointer h-6 w-6"
            onClick={onClose}
          >
            <FaIcons.FaTimes />
          </span>
        </div>
        <div>
          <h1 className="my-4 text-4xl font-nunito text-blue-900 font-semibold">Forget Password</h1>
          <p className="text-lg font-nunito font-medium">
            It seems that you forgot the password for your NFTing account. You
            can change your password by clicking the button below.
          </p>
        </div>
        <Button
          className="w-full h-16 text-white bg-blue-600 rounded-2xl mt-5 
          font-nunito font-large text-xl"
        >
          Reset Password
        </Button>
      </div>
    </div>
  );
};

export default ResetModal;
