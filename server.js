const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'www')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'www', 'index.html'));
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
