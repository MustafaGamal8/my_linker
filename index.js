const express = require('express');
const path = require('path');
const app = express();



app.get('/api', (req, res) => {
  res.send('Hello World!');
})




// Serve the React frontend
app.use(express.static(path.join(__dirname, 'client/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});
// -_____________________________-





const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
