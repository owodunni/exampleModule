function logFunc(message){
  console.log(message)
}

function logAndCallbackFunc(message, callback){
  console.log(message)
  callback()
}

class Logger {
  constructor(name) {
    this.name = name;
  }

  log(message){
    logFunc(this.name + ": " + message)
  }

  logAndCallback(message, callback){
    logAndCallbackFunc(this.name + ": " + message, callback)
  }
}

exports = {
  logFunc,
  logAndCallbackFunc,
  Logger};