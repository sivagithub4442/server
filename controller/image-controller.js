// server/controller/image-controller.js

import File from '../models/file.js';

export const uploadImage = async (request, response) => {
  const fileObj = {
    path: request.file.path,
    name: request.file.originalname,
  };

  try {
    if (!fileObj.path || !fileObj.name) {
      return response.status(400).json({ error: 'Invalid file object received' });
    }

    const file = await File.create(fileObj);
    response.status(200).json({ path: `http://localhost:8000/file/${file._id}` });
  } catch (error) {
    console.error('Error in uploadImage:', error.message);
    response.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getImage = async (request, response) => {
  try {
    const file = await File.findById(request.params.fileId);

    if (!file) {
      return response.status(404).json({ msg: 'File not found' });
    }

    file.downloadCount++;
    await file.save();

    response.download(file.path, file.name);
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ msg: 'Internal Server Error' });
  }
};

export const getFiles = async (request, response) => {
  try {
    const files = await File.find();
    response.status(200).json(files);
  } catch (error) {
    console.error('Error fetching files:', error.message);
    response.status(500).json({ error: 'Internal Server Error' });
  }
};
