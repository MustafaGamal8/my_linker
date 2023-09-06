const { exec } = require('child_process');

function runBuild() {
  return new Promise((resolve, reject) => {
    const command = 'npm run build';

    const child = exec(command);

    child.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    child.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });

    child.on('close', (code) => {
      console.log(`Command exited with code ${code}`);
      resolve(); // Resolve the promise when the build is complete
    });

    child.on('error', (err) => {
      console.error(`Error executing command: ${err.message}`);
      reject(err); // Reject the promise on error
    });
  });
}


module.exports = runBuild