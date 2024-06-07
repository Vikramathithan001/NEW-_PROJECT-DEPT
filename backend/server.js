const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, 'client/build')))

app.get('/api/folders', (req, res) => {
  const directoryPath = path.join(__dirname, '../')
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return res.status(500).send('Unable to scan directory')
    }
    const folders = files.filter((file) =>
      fs.statSync(path.join(directoryPath, file)).isDirectory()
    )
    res.json(folders)
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
