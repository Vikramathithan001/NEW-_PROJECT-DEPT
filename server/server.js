// Get the parent directory element where you want to list the folders
var parentDirectory = document.getElementById('parent-directory')

// Function to list folders
function listFolders() {
  // Make sure the parent directory element is not null
  if (parentDirectory) {
    // Clear existing content
    parentDirectory.innerHTML = ''

    // Array of folder names (you can fetch this from a server or define it manually)
    var folderNames = ['folder1', 'folder2', 'folder3']

    // Loop through folder names
    folderNames.forEach(function (folderName) {
      // Create a list item element for each folder
      var listItem = document.createElement('li')
      // Set the text content to the folder name
      listItem.textContent = folderName
      // Append the list item to the parent directory element
      parentDirectory.appendChild(listItem)
    })
  } else {
    console.error('Parent directory element not found.')
  }
}

// Call the function to list folders when the page loads or when needed
listFolders()
