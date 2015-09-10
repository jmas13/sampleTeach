var pokedex = module.require('./pokedex.js');

var pokedexSamp = pokedex.slice(0, 10);

function simpleLog(toBeLogged){
  console.log(toBeLogged);
}

function getName(objWithNameAttr){
  return objWithNameAttr.name
}

function doTimes(callback, argument, times){
  console.time("test timer")
  while(times--){
    callback(argument);
  }
  console.timeEnd("test timer")
}



for (var i = 0; i < pokedex.length; i++){
  simpleLog(pokedex[i].name);
}

pokedexSamp.map(getName).forEach(simpleLog)
