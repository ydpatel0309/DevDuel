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
    language: 'javascript', 
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
            className='container'
          >
              <h1 align="center"><i>Game Form</i></h1>
              
              <label htmlFor="name"><b><i>Name</i></b></label>
              <input
                type="text"
                placeholder="Enter Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="email"><b><i>Email</i></b></label>
              <input
                type="text"
                placeholder="Enter Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />


              <label htmlFor="language"><b><i>Select Language</i></b></label>
              <select
                name="language"
                value={formData.language}
                onChange={handleChange}
                required
                className='select'
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
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
