// server/routes/routes.js

import express from 'express';
import upload from '../utils/uploads.js';
import { uploadImage, getImage, getFiles } from '../controller/image-controller.js'; // Update this import

const router = express.Router();

router.post('/upload', upload.single('file'), uploadImage);
router.get('/file/:fileId', getImage);
router.get('/files', getFiles); // Add this route to fetch the list of uploaded files

export default router;
