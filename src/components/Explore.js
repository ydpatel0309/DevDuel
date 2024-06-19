import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CssFiles/Explore.css";
import infoData from "../data/infodata.json"; 

function Explore() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setData(infoData);  
  }, []);

  const handleClickScroll = () => {
    const element = document.getElementById("top");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!data) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <>
      <div className="explore-outer">
        <div id="top"></div>
        <div className="explore-header">
          <div>
            <h1 className="explore-h1" align="center">
              {data.title}
            </h1>
          </div>
          <div className="back-to-landingpage-button-outer">
            <button className="back-to-landingpage-button" onClick={() => navigate("/")}>
              <svg className="svgIcon" viewBox="0 0 384 512">
                <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
              </svg>
            </button>
          </div>
        </div>
        <h3 id="explore-h3">
          <ul className="explore-ul">
            {data.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </h3>
        <div className="back-to-top-button-outer">
          <button className="back-to-top-button" onClick={handleClickScroll}>
            <svg className="svgIcon" viewBox="0 0 384 512">
              <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
            </svg>
          </button>
        </div>
        <footer className="elplore-footer">
          <div className="footer-inner">
            <h5 align="center">This Application is in Beta mode</h5>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Explore;
