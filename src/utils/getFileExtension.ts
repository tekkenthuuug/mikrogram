const getFileExtension = (fileName: string) => {
  const fileNameSplit = fileName.split('.');

  if (fileNameSplit.length < 2) {
    throw Error('File has no extension');
  }

  return fileNameSplit[fileNameSplit.length - 1];
};

export default getFileExtension;
