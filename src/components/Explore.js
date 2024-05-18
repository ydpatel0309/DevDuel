import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CssFiles/Explore.css";

function Explore() {

  const navigate = useNavigate();

  const handleClickScroll = () => {
    const element = document.getElementById("top");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <>
      <div className="explore-outer">
        <div id="top"></div>

        <div className="explore-header">

        <div>
        <h1 className="explore-h1" align="center">
          About this Quiz-Game
        </h1>
        </div>

        <div className="back-to-landingpage-button-outer">
          <button className="back-to-landingpage-button" onClick={()=>navigate("/")}>
            <svg className="svgIcon" viewBox="0 0 384 512">
              <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
            </svg>
          </button>
        </div>

        </div>

        <h3 id="explore-h3">
          <ul className="explore-ul">
            <li>
              DevDuel: The ultimate coding quiz game! Diverse questions,
              adaptive difficulty, real-time duels with friends, and vibrant
              graphics. Achieve coding milestones, level up, and conquer
              challenges. Your path to programming mastery begins now!
            </li>
            <li>
              Key Features : Quizzes based on coding and concepts of programming
              languages can be effective in addressing various challenges and
              goals in the field of programming education and skill development.
              Here are some common problems that these quizzes can help solve:
            </li>
            <li>
              1) Skill Assessment: Quizzes provide a structured way to assess
              the coding skills and knowledge of individuals. They help identify
              areas of strength and weakness in programming languages, syntax,
              and concepts.
            </li>
            <li>
              2) Learning Reinforcement: Quizzes reinforce learning by requiring
              participants to recall and apply programming concepts. They
              contribute to memory retention and help solidify understanding.
            </li>
            <li>
              3) Concept Clarification: Coding quizzes often include questions
              that test conceptual understanding rather than just syntax. They
              help clarify misconceptions and ensure a deeper understanding of
              programming principles.
            </li>
            <li>
              4) Programming Language Familiarity: Quizzes specific to a
              programming language help individuals become more proficient in
              that language. They can cover language-specific features, best
              practices, and common pitfalls.
            </li>
            <li>
              5) Problem-Solving Skills: Coding quizzes usually involve
              problem-solving, helping individuals develop analytical and
              algorithmic thinking. They encourage participants to devise
              efficient solutions to given challenges.
            </li>
            <li>
              6) Preparation for Interviews: Many technical interviews involve
              coding assessments. Quizzes simulate this environment and help
              candidates practice under pressure. Participants can get
              accustomed to common interview-style coding problems.
            </li>
            <li>
              7) Continuous Learning: Regular quizzes promote continuous
              learning and improvement. They encourage programmers to stay
              updated on language features, industry trends, and best practices.
            </li>
            <li>
              8) Adaptive Learning: Some quiz platforms offer adaptive learning,
              tailoring questions based on the participant's skill level. This
              ensures that individuals are challenged at an appropriate
              difficulty level.
            </li>
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
