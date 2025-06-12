'use client';
import { useEffect, useState } from 'react';
import './style.css';


export default function RecruiterPage() {
  const [requests, setRequests] = useState([]);

  const fetchRequests = async () => {
    const res = await fetch('http://localhost:5000/api/interview-requests');
    const data = await res.json();
    setRequests(data);
  };

  const acceptRequest = async (id) => {
    await fetch(`http://localhost:5000/api/interview-requests/${id}/accept`, {
      method: 'PUT',
    });
    fetchRequests(); // Refresh data
  };

  useEffect(() => {
    fetchRequests();
    const interval = setInterval(fetchRequests, 5000); // Poll every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
  <h1 className="heading">Recruiter Dashboard</h1>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Job Title</th>
        <th>Time</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {requests.map((req) => (
        <tr key={req._id}>
          <td>{req.name}</td>
          <td>{req.email}</td>
          <td>{req.jobTitle}</td>
          <td>{new Date(req.createdAt).toLocaleString()}</td>
          <td>
            <button onClick={() => acceptRequest(req._id)}>Accept</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
}
