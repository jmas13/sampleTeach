var pokedex = module.require('./pokedex.js');
var tools = module.require('./tools.js')

var pokedexSamp = pokedex.slice(0, 10);


for (var i = 0; i < pokedex.length; i++){
  tools.simpleLog(pokedex[i].name);
}

pokedexSamp.map(tools.getName).forEach(tools.simpleLog)
