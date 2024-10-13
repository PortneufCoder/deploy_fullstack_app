import { useState, useEffect } from 'react'

export default function Home() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    // For local development
    const apiUrl = process.env.NODE_ENV === 'production' 
      ? 'https://your-backend-url.com/api/hello'  // Replace with your actual backend URL
      : 'http://localhost:5000/api/hello';

    fetch(apiUrl)
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error('Error fetching message:', err))
  }, [])

  return (
    <div>
      <h1>Next.js Frontend</h1>
      <p>Message from backend: {message}</p>
    </div>
  )
}