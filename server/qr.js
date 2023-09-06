const fs = require('fs');
const QRCode = require('qrcode');

// Data you want to encode in the QR code
const data = 'Hello, World!';

const options = {
  color: {
    dark: '#f59e0b',     // Color for dark modules
    light: '#fff',    // Color for light modules
  },
  // errorCorrectionLevel: 'L', // Error correction level (L, M, Q, H)
  version: 2,              // QR code version (1 to 40, or 'auto')
  margin: 2,                // Margin (number of modules around QR code)
};

// Generate QR code with custom style
QRCode.toFile('qrcode.png', data, options, (err) => {
  if (err) throw err;
  console.log('QR code generated as qrcode.png');
});


