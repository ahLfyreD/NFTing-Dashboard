

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Suspense } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
// import * as GiIcons from "react-icons/gi";

// import Menu from '@components/home/menu/Menu'
// import img2 from '@asset/images/picture.jpg'
// import { Link } from 'react-router-dom'
// import MyNFT from "@components/layout/sections/my-nft/MyNFT";
import NewsFeed from "@components/layout/sections/news-feed/NewsFeed";
import Explore from "@components/layout/sections/explore/Explore";
import Terms from "@components/layout/sections/terms/Terms";
import Privacy from "@components/layout/sections/terms/Privacy";
import Footer from '@components/layout/footer/Footer'
import HomePage from "@components/layout/sections/home/homepage/HomePage";
import SideBar from "@components/layout/sidebar/SideBar";
import Header from "@components/layout/head/Header";
import LoginModal from "@components/modalContainer/LoginModal";
import ResetModal from "@components/modalContainer/ResetModal";
import SignUpModal from "@components/modalContainer/SignUpModal";

import { useState } from "react";

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const LoginhandleOnClose = () => setShowLoginModal(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const SignUphandleOnClose = () => setShowSignUpModal(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const ResethandleOnClose = () => setShowResetModal(false);



  return (
    // <Suspense>
    <Router>
      <>
        <div className="h-100 w-100">
          <div className="app-container">
            <div className="d-flex">
              <div className="">
                <SideBar />
              </div>
              <div
                className="p-0 container-fluid"
              >
                <div className="sticky-top"
                style={{zIndex: 2,}}>
                  <Header
                    loginClick={() => setShowLoginModal(true)}
                    signUpClick={() => setShowSignUpModal(true)} />
                </div>

                <div className="app-content">
                  <Routes>
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/terms-of-services" element={<Terms />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/newsfeed" element={<NewsFeed />} />
                    <Route path="/" element={<HomePage />} />
                  </Routes>
                </div>
              </div>
            </div>
            <div>
              <Footer />
            </div>
          </div>



        </div>
        <div>
          <LoginModal
            toggle={LoginhandleOnClose}
            modal={showLoginModal}
            onClick={() => {
              setShowResetModal(true);
              setShowLoginModal(false);
            }}
            SignUp={() => {
              setShowSignUpModal(true);
              setShowLoginModal(false);
            }}
          />
        </div>
        <div>
          <SignUpModal
            toggle={SignUphandleOnClose}
            modal={showSignUpModal}
            login={() => {
              setShowSignUpModal(false);
              setShowLoginModal(true)
            }}
            onClose={() => {
              setShowSignUpModal(false)
            }}
          />
        </div>
        <div>
          <ResetModal modal={showResetModal} toggle={ResethandleOnClose}
            login={() => {
              setShowResetModal(false);
              setShowLoginModal(true)
            }} />
        </div>
      </>
    </Router>
    // </Suspense>
  );
}

export default App;

