function error(message = 'something is wrong in server',status = 500){
    const error = new Error(message);
    error.status = status;
    return error;
}

module.exports = error;