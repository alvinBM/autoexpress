const serverResponse = (statusCode, message, dataToSend, res) => {
  return res
    .status(statusCode)
    .json({ message, data: dataToSend, timestamp: new Date() });
};

export default serverResponse;
