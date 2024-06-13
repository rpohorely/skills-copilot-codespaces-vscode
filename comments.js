// Create web server
const express = require('express')
const app = express()
const port = 3000

// Create a route for the homepage
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!')
})

// Create a route for /comments
app.get('/comments', (req, res) => {
  res.send('This is the comments page!')
})

// Start the server on port 3000
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
// Run the server with node comments.js and visit http://localhost:3000/comments in your browser. You should see the message "This is the comments page!".