import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [folders, setFolders] = useState([])

  useEffect(() => {
    axios
      .get('/api/folders')
      .then((response) => {
        setFolders(response.data)
      })
      .catch((error) => {
        console.error('Error fetching the folders:', error)
      })
  }, [])

  return (
    <div className='App'>
      <h1>Folder Names</h1>
      <ul>
        {folders.map((folder, index) => (
          <li key={index}>{folder}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
