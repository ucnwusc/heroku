import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Replace __dirname with the equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "dist" directory
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

// Handle all other routes by serving the main HTML file
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
