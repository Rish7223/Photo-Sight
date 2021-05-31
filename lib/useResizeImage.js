import Resizer from 'react-image-file-resizer';

const resizeFile = file =>
  new Promise(resolve => {
    Resizer.imageFileResizer(
      file,
      500,
      800,
      'JPEG',
      100,
      0,
      uri => {
        resolve(uri);
      },
      'file',
      200,
      500
    );
  });

export default resizeFile;
