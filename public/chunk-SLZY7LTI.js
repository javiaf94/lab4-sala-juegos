import{$ as m,Aa as M,Ba as O,E as u,F as f,Ga as T,M as C,N as o,O as _,S as g,U as a,W as i,X as r,Y as y,Z as x,_ as h,ba as p,da as c,ha as I,ia as w,o as v,u as P,x as k,xa as S,ya as E,z as b}from"./chunk-SXIJSA4M.js";var d=class e{constructor(n){this.http=n}loadPokemones(){return this.http.get("https://pokeapi.co/api/v2/pokemon?limit=150").pipe(v(n=>n.results.map((t,s)=>({id:s+1,name:t.name,image:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${s+1}.png`}))))}static \u0275fac=function(t){return new(t||e)(k(O))};static \u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"})};function F(e,n){if(e&1&&y(0,"img",6),e&2){let t=m();a("src",t.randomPokemon==null?null:t.randomPokemon.image,C)}}function R(e,n){if(e&1){let t=x();i(0,"button",9),h("click",function(){let l=u(t).$implicit,L=m(2);return f(L.handleGuess(l))}),p(1),r()}if(e&2){let t=n.$implicit;o(),c(" ",t," ")}}function z(e,n){if(e&1&&(i(0,"div",7),g(1,R,2,1,"button",8),r()),e&2){let t=m();o(),a("ngForOf",t.options)}}function H(e,n){if(e&1&&(i(0,"h4"),p(1),r()),e&2){let t=m();o(),c("Intentos restantes: ",t.attemptsLeft,"")}}function N(e,n){if(e&1&&(i(0,"h4"),p(1),r()),e&2){let t=m();o(),c("Aciertos: ",t.score,"")}}function D(e,n){e&1&&(i(0,"h4"),p(1,"Se han agotado tus intentos."),r())}function G(e,n){if(e&1&&(i(0,"h4"),p(1),r()),e&2){let t=m(2);o(),c("Puntaje final: ",t.score,"")}}function $(e,n){e&1&&(i(0,"h4"),p(1,"Acertaste los 151 pokemons. Muy bien! "),r())}function q(e,n){if(e&1&&(i(0,"h4"),p(1),r()),e&2){let t=m(2);o(),c("Te quedaron ",t.attemptsLeft," intentos")}}function J(e,n){if(e&1){let t=x();i(0,"div",10)(1,"div",11),g(2,D,2,0,"h4",4)(3,G,2,1,"h4",4)(4,$,2,0,"h4",4)(5,q,2,1,"h4",4),i(6,"button",12),h("click",function(){u(t);let l=m();return f(l.resetGame())}),p(7,"Jugar de nuevo"),r(),i(8,"button",12),h("click",function(){u(t);let l=m();return f(l.volverAlInicio())}),p(9,"Volver al inicio"),r()()()}if(e&2){let t=m();o(2),a("ngIf",t.attemptsLeft<=0),o(),a("ngIf",t.attemptsLeft<=0),o(),a("ngIf",t.attemptsLeft>0),o(),a("ngIf",t.attemptsLeft>0)}}var j=class e{constructor(n,t){this.preguntadosService=n;this.router=t}pokemones=[];usedPokemons=new Set;randomPokemon;options=[];attemptsLeft=3;score=0;gameEnded=!1;ngOnInit(){this.preguntadosService.loadPokemones().subscribe(n=>{this.pokemones=n,this.showRandomPokemon()})}showRandomPokemon(){if(this.usedPokemons.size>=this.pokemones.length||this.attemptsLeft<=0){this.gameEnded=!0;return}let n;do n=Math.floor(Math.random()*this.pokemones.length);while(this.usedPokemons.has(this.pokemones[n].id));this.randomPokemon=this.pokemones[n],this.usedPokemons.add(this.randomPokemon.id),this.generateOptions()}generateOptions(){for(this.options=[this.randomPokemon.name];this.options.length<4;){let n=Math.floor(Math.random()*this.pokemones.length),t=this.pokemones[n].name;this.options.includes(t)||this.options.push(t)}this.options=this.shuffleArray(this.options)}shuffleArray(n){return n.sort(()=>Math.random()-.5)}handleGuess(n){this.gameEnded||(n===this.randomPokemon.name?this.score++:this.attemptsLeft--,this.attemptsLeft>0?this.showRandomPokemon():this.gameEnded=!0)}resetGame(){this.usedPokemons.clear(),this.attemptsLeft=3,this.score=0,this.gameEnded=!1,this.showRandomPokemon()}volverAlInicio(){this.router.navigate(["/home"])}static \u0275fac=function(t){return new(t||e)(_(d),_(T))};static \u0275cmp=b({type:e,selectors:[["app-preguntados"]],standalone:!0,features:[I([d]),w],decls:9,vars:5,consts:[[1,"wrapper"],[1,"game-container"],["class","imagen-agrandada",3,"src",4,"ngIf"],["class","buttons",4,"ngIf"],[4,"ngIf"],["class","modal",4,"ngIf"],[1,"imagen-agrandada",3,"src"],[1,"buttons"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],[1,"modal"],[1,"modal-content"],[1,"modal-button",3,"click"]],template:function(t,s){t&1&&(i(0,"div",0)(1,"div",1)(2,"h2"),p(3,"Preguntados Pokemon"),r(),g(4,F,1,1,"img",2)(5,z,2,1,"div",3)(6,H,2,1,"h4",4)(7,N,2,1,"h4",4)(8,J,10,4,"div",5),r()()),t&2&&(o(4),a("ngIf",s.randomPokemon),o(),a("ngIf",s.options.length>0),o(),a("ngIf",!s.gameEnded),o(),a("ngIf",!s.gameEnded),o(),a("ngIf",s.gameEnded))},dependencies:[M,S,E],styles:['.game-container[_ngcontent-%COMP%]{text-align:center;font-family:Arial,sans-serif;height:73vh;width:150vh;border:10px solid rgb(137,142,148);background-color:#fff;box-shadow:0 0 15px #0000004d;overflow:auto}h4[_ngcontent-%COMP%]{font-size:20px;color:#333}h2[_ngcontent-%COMP%]{color:#4caf50}.wrapper[_ngcontent-%COMP%]{background-image:url("./media/fondo4-VYWSDTRN.jpg");height:90vh;display:flex;justify-content:center;align-items:center}.modal[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#000000b3;display:flex;justify-content:center;align-items:center;z-index:1000}.modal-content[_ngcontent-%COMP%]{background-color:#fff;padding:20px;border-radius:8px;text-align:center}.modal-button[_ngcontent-%COMP%]{margin:10px}.imagen-agrandada[_ngcontent-%COMP%]{width:350px;height:350px}.buttons[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:15px;margin-top:20px}button[_ngcontent-%COMP%]{background-color:#4caf50;color:#fff;border:none;border-radius:5px;padding:10px 15px;font-size:16px;cursor:pointer;transition:background-color .3s}button[_ngcontent-%COMP%]:hover{background-color:#45a049}']})};export{j as PreguntadosComponent};