"use strict";(self.webpackChunkpokedex=self.webpackChunkpokedex||[]).push([[255],{80255:function(e,n,t){t.r(n),t.d(n,{default:function(){return N}});var a=t(67294),r=t(41749),o=t(98309),l=t(45697),m=t.n(l),c=function(e){var n=e.name,t=o.P9.find((function(e){return e.name===n})),r=t.color,l=t.imagen;return a.createElement("div",{className:"container-type",style:{backgroundColor:r}},a.createElement("img",{src:l,width:33,alt:"Type pokemon"}),a.createElement("div",{className:"text"},n.toUpperCase()))};c.propTypes={name:m().string};var s,i,u,p=c,d=t(58804).ZP.div(s||(i=["\n  progress[value] {\n    width: 400px;\n    appearance: none;\n\n    ::-webkit-progress-bar {\n      height: 20px;\n      border-radius: 20px;\n      background-color: #eee;\n    }\n\n    ::-webkit-progress-value {\n      height: 20px;\n      border-radius: 20px;\n      background-color: ",";\n    }\n  }\n"],u||(u=i.slice(0)),s=Object.freeze(Object.defineProperties(i,{raw:{value:Object.freeze(u)}}))),(function(e){return e.color})),v=function(e){var n=e.name,t=e.value,r=e.max,o=e.color;return a.createElement(d,{color:o,className:"container-base-stat"},n.toUpperCase(),a.createElement("progress",{value:t,max:r}))};v.propTypes={value:m().number.isRequired,max:m().number,color:m().string},v.defaultProps={max:250};var k=v,f=function(e){var n,t,l,m,c=e.pokemon,s=e.pokedexNumber,i=(c&&o.P9.find((function(e){return e.name===c.types[0].type.name}))).color;return a.createElement(a.Fragment,null,a.createElement(r.Z,{item:!0,xs:12,md:6,style:{backgroundColor:i},className:"grid-item-pokemon"},a.createElement("div",{className:"container-left-pokemon"},a.createElement("div",{className:"text"},a.createElement("div",null,"#",s),a.createElement("div",{className:"pokemon-name"},null===(n=c.name)||void 0===n?void 0:n.toUpperCase())),a.createElement("img",{src:null===(t=c.sprites)||void 0===t?void 0:t.other["official-artwork"].front_default,className:"imagen",alt:"Pokemon"}))),a.createElement(r.Z,{item:!0,xs:12,md:6},a.createElement("div",{className:"container-right-pokemon"},a.createElement("div",{className:"pokemon-types"},null===(l=c.types)||void 0===l?void 0:l.map((function(e){return a.createElement(p,{key:e.slot,name:e.type.name})}))),a.createElement("div",{className:"base-stats"},"Base stats"),null===(m=c.stats)||void 0===m?void 0:m.map((function(e){return a.createElement(k,{key:e.stat.name,name:e.stat.name,value:e.base_stat,color:i})})))))},E=t(64436),g=t(25399),b=t(30585),x=function(e){var n=e.pokemonVarienties,t=e.seleccionaPokemon;return a.createElement("div",{className:"content-pokemon-varienties"},a.createElement(E.Z,{className:"form-control"},a.createElement(g.Z,{className:"select-empty",onChange:function(e){t(e.target.value)}},n&&(null==n?void 0:n.map((function(e,n){return a.createElement("option",{key:e.id,value:n},e.name)})))),a.createElement(b.Z,null,"Varieties")))},y=t(17106),N=function(){var e=(0,a.useContext)(y.S),n=e.pokemonSpecies,t=e.pokemonVarienties,o=e.pokemonVariant,l=e.selectVariant;return a.createElement(a.Fragment,null,t.length>1&&a.createElement(x,{pokemonVarienties:t,seleccionaPokemon:l,pokemonVariant:o}),a.createElement(r.Z,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",spacing:3},a.createElement(f,{pokemon:o,pokedexNumber:n.id})))}}}]);
//# sourceMappingURL=255.bundle.js.map