'use client';
import { useState } from 'react';
import './style.css'; 

export default function ApplyPage() {
  const [form, setForm] = useState({ name: '', email: '', jobTitle: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('https://basal.onrender.com/api/interview-requests', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) setSubmitted(true);
  };

  if (submitted)
    return <div className="successMessage">Thank you for applying!</div>;

  return (
    <form onSubmit={handleSubmit} className="formContainer">
      <h1 className="heading">Apply for a Job</h1>
      <input
        name="name"
        onChange={handleChange}
        placeholder="Name"
        required
        className="input"
      />
      <input
        name="email"
        onChange={handleChange}
        placeholder="Email"
        required
        className="input"
      />
      <input
        name="jobTitle"
        onChange={handleChange}
        placeholder="Job Title"
        required
        className="input"
      />
      <button type="submit" className="button">
        Submit
      </button>
    </form>
  );
}
