const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()
const PORT = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.get('/folders', (req, res) => {
  const directoryPath = path.join(__dirname, 'public') // Adjust this path as needed

  fs.readdir(directoryPath, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.error('Unable to scan directory:', err)
      res.status(500).send('Unable to scan directory')
      return
    }

    const folders = files
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name)

    res.json({ folders })
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
