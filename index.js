const express = require('express');
const path = require('path');
const runBuild = require('./server/runBuild');
const app = express();

function start() {
  // Serve your API and React frontend here
  app.get('/api', (req, res) => {
    res.send('Hello World!');
  });

  app.use(express.static(path.join(__dirname, 'client/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
  });

  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
  });
}



// Function to run the build command and start the server
async function runBuildCommand() {
  try {
    await runBuild();
    start();
  } catch (error) {
    console.error('Error running build command:', error);
  }
}

// Call the runBuildCommand function to start the process
runBuildCommand();