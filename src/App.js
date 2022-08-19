

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
// import * as GiIcons from "react-icons/gi";

// import Menu from '@components/home/menu/Menu'
// import img2 from '@asset/images/picture.jpg'
// import { Link } from 'react-router-dom'
// import MyNFT from "@components/layout/sections/my-nft/MyNFT";
import NewsFeed from "@components/layout/sections/news-feed/NewsFeed";
import Explore from "@components/layout/sections/explore/Explore";
import MarketStat from "@components/layout/sections/market-stat/MarketStat";
// import Footer from '@components/layout/footer/Footer'
import HomePage from "@components/layout/sections/home/homepage/HomePage";
import SideBar from "@components/layout/sidebar/SideBar";
import Header from "@components/layout/head/Header";
import LoginModal from "@components/modalContainer/LoginModal";
// import ResetModal from "@components/modalContainer/ResetModal";
import SignUpModal from "@components/modalContainer/SignUpModal";

import { useState } from "react";

function App() {
  const [bar, setBar] = useState(true);
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
        <div className="main-container">
          <div className="d-flex">
            <div>
              <SideBar />
            </div>
            <div
              className="container-fluid p-0"
            >
              <div className="">
                <Header
                  loginClick={() => setShowLoginModal(true)}
                  signUpClick={() => setShowSignUpModal(true)} />
              </div>

              {/* <div>
                <Routes>
                  <Route path="/explore" element={<Explore />} />
                  <Route path="/marketstatistics" element={<MarketStat />} />
                  <Route path="/newsfeed" element={<NewsFeed />} />
                  <Route path="/" element={<HomePage />} />
                </Routes>
              </div> */}
            </div>
          </div>



        </div>
         <div>
            <LoginModal
              onClose={LoginhandleOnClose}
              visible={showLoginModal}
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
              onClose={SignUphandleOnClose}
              visible={showSignUpModal}
              login={() => {
                setShowSignUpModal(false);
                setShowLoginModal(true)
              }}
            />
          </div>
         { /* <div>
            <ResetModal visible={showResetModal} onClose={ResethandleOnClose}
              login={() => {
                setShowResetModal(false);
                setShowLoginModal(true)
              }} />
          </div>  */}
      </>
    </Router>
    // </Suspense>
  );
}

export default App;

