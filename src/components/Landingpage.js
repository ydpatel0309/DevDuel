  import React from "react";
  import "../CssFiles/Landingpage.css";
  import { useNavigate } from "react-router-dom";
  import videoBg from "../images/valorent fight.mp4";
  import githublogo from "../images/github-mark.svg";
  import linkdinlogo from "../images/linkdin.png";

  function LandingPg() {
    const navigate = useNavigate();

    return (
      <>
        <div className="bgvideo">
          <div className="content-outer"></div>
          <div className="content">
            <h1 className="dev">DevDuel</h1>
            <h3 className="landingpage-h3">Programming quizz</h3>
            <p> _____________________________</p>

            <div className="btns">
              <div>
                  <button className="btn" onClick={()=>navigate("./Form")} >Start now</button>
                
                <div className="logos">
                  <a href="https://github.com/ydpatel0309">
                  <img src={githublogo} alt="github logo" />
                  </a>
                </div>
              </div>
              <div>
                <button className="btn" onClick={()=>navigate("./Explore")}>Explore now</button>
                <div className="logos">
                  <a href="https://www.linkedin.com/in/yash-patel-986787222/">
                  <img src={linkdinlogo} alt="linkidin logo"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bgvideo-outer">
            <video src={videoBg} autoPlay loop muted />
          </div>
        </div>
      </>
    );
  }

  export default LandingPg;
