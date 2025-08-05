const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

app.post('/verify', (req, res) => {
  const { operation, app_id, files } = req.body;

  if (operation === 'verify' && app_id === 'cyrus') {
    const { original, converted } = files;

    // Basic mock validation logic
    if (
      original.file_name === 'test_original.pdf' &&
      converted.file_name === 'test_converted.csv' &&
      converted.format === 'csv'
    ) {
      return res.json({
        valid: true,
        message: 'Conversion verified successfully.'
      });
    } else {
      return res.json({
        valid: false,
        message: 'Invalid conversion: metadata mismatch.'
      });
    }
  }

  return res.status(400).json({ message: 'Bad request' });
});

app.listen(PORT, () => {
  console.log(`Microservice running at http://localhost:${PORT}`);
});
