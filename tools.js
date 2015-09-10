module.exports = {
  simpleLog: function(toBeLogged){
    console.log(toBeLogged);
  },

  getName: function(objWithNameAttr){
    return objWithNameAttr.name
  },

  doTimes: function(callback, argument, times){
    console.time("test timer")
    while(times--){
      callback(argument);
    }
    console.timeEnd("test timer")
  },

}
