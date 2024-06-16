import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import '../CssFiles/Form.css';

const Form = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    sdate: '',
    language: 'javascript', // Default selected language
    remember: true,
  });

  const notify = () => {
    toast.success('Success', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://sheetdb.io/api/v1/gat8bnsz7s5m6', {
        method: 'POST',
        body: new FormData(e.target),
      });

      if (response.ok) {
        notify();
        navigate(`/quizz?language=${formData.language}`);
      } else {
        console.error('Booking failed:', response.statusText);
      }
    } catch (error) {
      console.error('An error occurred while submitting the form:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <>
      <ToastContainer />
      <div className="container-outer">
        <div className="form-outer">
          <form
            action="https://sheetdb.io/api/v1/gat8bnsz7s5m6"
            method="post"
            id="sheetdb-form"
            onSubmit={handleSubmit}
          >
            <div className="container">
              <h1 align="center">Game Form</h1>
              
              <label htmlFor="name"><b>Name</b></label>
              <input
                type="text"
                placeholder="Enter Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="email"><b>Email</b></label>
              <input
                type="text"
                placeholder="Enter Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <div className="dates">
                <label htmlFor="sdate"><b>Birthday Date :</b></label>
                <input
                  type="date"
                  placeholder="Enter Birthday Date"
                  name="sdate"
                  value={formData.sdate}
                  onChange={handleChange}
                  required
                />
              </div>

              <label htmlFor="language"><b>Select Language</b></label>
              <select
                name="language"
                value={formData.language}
                onChange={handleChange}
                required
              >
                <option value="javascript">JavaScript</option>
                <option value="java">Java</option>
                <option value="cpp">C++</option>
              </select>

              <br />

              <div className="clearfix">
                <button type="submit" className="btn-submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
