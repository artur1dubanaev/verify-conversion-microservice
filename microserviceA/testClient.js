// testClient.js
const axios = require('axios');

const payload = {
  operation: "verify",
  app_id: "cyrus",
  files: {
    original: {
      file_name: "test_original.pdf",
      source: "uploads/folder1"
    },
    converted: {
      file_name: "test_converted.csv",
      destination: "uploads/folder1/converted",
      format: "csv",
      conversion_time: "2025-08-01T10:30:00Z"
    }
  }
};

axios.post('http://localhost:3001/verify', payload)
  .then(response => {
    console.log(" Response from microservice:", response.data);
  })
  .catch(error => {
    console.error(" Error from microservice:", error.response?.data || error.message);
  });
