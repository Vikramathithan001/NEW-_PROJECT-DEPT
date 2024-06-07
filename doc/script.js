function loadContent(url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('content').innerHTML = data
    })
    .catch((error) => console.error('Error loading content:', error))
}

document.addEventListener('DOMContentLoaded', () => {
  document
    .getElementById('python-link')
    .addEventListener('click', function (event) {
      event.preventDefault()
      loadContent('./python/python.html')
    })

  document
    .getElementById('java-link')
    .addEventListener('click', function (event) {
      event.preventDefault()
      loadContent('./java/java.html')
    })
})


// document
//   .getElementById('fileInput')
//   .addEventListener('change', function (event) {
//     const files = event.target.files
//     if (files.length > 0) {
//       // Extract the full path of the first file
//       const fullPath = files[0].webkitRelativePath || files[0].name

//       // Get the folder name by splitting the path and taking the first part
//       const folderName = fullPath.split('/')[0]

//       // Display the folder name
//       document.getElementById('folderName').textContent =
//         'Folder Name: ' + folderName
//     }
//   })
