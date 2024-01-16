const express = require('express');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const cors = require('cors');

// Initialize the Express app
const app = express();

// Apply the middleware to parse JSON bodies
app.use(express.json());

// Enable CORS so that your React app can communicate with this server
app.use(cors({
  origin: 'http://localhost:3000', // Replace with the URL of your React app
  credentials: true // This allows the server to send cookies
}));

// Configure the session middleware
app.use(session({
  secret: 'your_secret_key', // Replace 'your_secret_key' with a real secret string
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Secure cookie in production
  }
}));

// Simulated user record as you would have in a database
const users = [
  {
    id: 1,
    email: 'user@example.com',
    // Passwords should be hashed - this is just an example using bcryptjs
    password: bcrypt.hashSync('yourPassword', 10)
  }
];

// Login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email);

  if (user && bcrypt.compareSync(password, user.password)) {
    req.session.userId = user.id; // Establish a session with the user ID
    res.status(200).json({ message: 'Login successful!' });
  } else {
    res.status(401).json({ message
: 'Invalid email or password' });
}
});

// Logout endpoint
app.post('/logout', (req, res) => {
req.session.destroy((err) => {
if (err) {
return res.status(500).json({ message: 'Could not log out, please try again' });
}
res.clearCookie('connect.sid'); // The name of the cookie used for the session (default name)
res.status(200).json({ message: 'Logout successful' });
});
});

// Set the port number
const PORT = process.env.PORT || 3001; //  environment variable PORT or 3001 if it's not set

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); // This will log to the console once the server starts
});
