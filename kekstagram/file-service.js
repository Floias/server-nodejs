import * as uuid from 'uuid';
import * as path from 'path';

class FileService {
  saveFile(file) {
    try {
      const format = file.mimetype.split('/')[1];
      const fileName = `${uuid.v4()}.${format}`;
      const filePath = path.resolve('kekstagram/static', fileName);
      file.mv(filePath);
      return fileName;
    } catch (error) {
      console.log(error)
    }
  }
};

export default new FileService();
