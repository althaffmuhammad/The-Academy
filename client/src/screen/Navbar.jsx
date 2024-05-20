import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { user_is_signin, signOutUser } from "../config/FirebaseMethods";

// style
import "../style/navbar.scss";

export default function Navbar() {
  let [flag, setFlag] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    user_is_signin()
      .then((_) => {
        setFlag(true);
      })
      .catch((_) => console.log(_));
  }, [0]);

  const logoutUser = () => {
    signOutUser()
      .then((_) => alert(_))
      .catch((_) => console.log(_));
    setFlag(false);
  };

  const showMobileNav = () => {
    let show = document.querySelector(".hamburgerNavbar");
    let body = document.querySelector("body");

    if (show.style.transform === "translateX(-700px)") {
      show.style.transform = "translateX(0px)";
      body.style.overflow = "hidden";
    } else {
      show.style.transform = "translateX(-700px)";
      body.style.overflow = "auto";
    }
  };

  return (
    <section
      className="navbar"
      style={{
        display: window.location.pathname.slice(0, 10) === "/dashboard" ? "none" : "block",
      }}
    >
   

      <div className="bottomPart">
        <div className="bottom1">
          <div className="logo">
            <h1 onClick={() => navigate("/")}>LMS</h1>
            <p>The Professional Academy</p>
          </div>

          <div className="nav">
           
          </div>

          <div className="hamburger" onClick={showMobileNav}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>

       
      </div>
    </section>
  );
}
