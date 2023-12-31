import express from "express";
import "./config/dotenv.js";
import galleryRouter from './routes/gallery.js';
const app = express();

app.use('/public', express.static('./public'));
app.use('/scripts', express.static('./public/scripts'));
app.use('/gallery', galleryRouter);

app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">ArtPulse API</h1>')
});

const PORT = process.env.PORT || 3001
    
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
});
