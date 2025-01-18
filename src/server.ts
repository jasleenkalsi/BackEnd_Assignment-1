import app from './app';
import { Server } from "http";

const PORT = process.env.PORT || 3000;

const server: Server = app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});


