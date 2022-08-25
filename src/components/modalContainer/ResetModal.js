// import Button from "@components/toggleBtn/Button";
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import './modal.css'
import { Modal, ModalHeader, ModalBody, Form, Label, Input, InputGroup, InputGroupText, Button, FormGroup } from 'reactstrap'

const ResetModal = ({ visible, onClose, modal, toggle, args, login }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  // if (!visible) return null;

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} {...args} contentClassName='p-3'>
        <ModalHeader className="border-0" toggle={toggle}>
          <div className="title">
            <span className="title-icon"><BiIcons.BiArrowBack /></span>
            Back to Login
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="content-title mt-3 mb-3">
            Forget Password
          </div>
          <p className="content-body">
            It seems that you forgot the password for your NFTing account.
            Enter your email and we’ll send you instructions on how to reset your password.
          </p>
          <Form>
            <FormGroup>
              <Input
                bsSize="lg"
                type="email"
                placeholder="Email Address" />
            </FormGroup>
            <div>
              <button type="submit" className="btn-continue">continue</button>
            </div>
          </Form>
        </ModalBody>

      </Modal>
    </div>
  );
};

export default ResetModal;
