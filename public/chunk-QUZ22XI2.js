import{C,D as a,E as y,F as f,G as l,H as r,I as o,J as M,K as g,L as u,M as s,O as c,P as w,Q as h,U as I,ba as z,ca as k,ea as _,ia as S,ma as V,q as x,u as b,v,wa as P,x as m,y as p}from"./chunk-VFHANZLO.js";function L(n,t){if(n&1){let e=g();r(0,"button",11),u("click",function(){let d=m(e).$implicit,j=s();return p(j.seleccionarLetra(d))}),c(1),o()}if(n&2){let e=t.$implicit,i=s();l("disabled",i.letrasSeleccionadas.includes(e)),a(),w(e)}}function J(n,t){if(n&1){let e=g();r(0,"button",11),u("click",function(){let d=m(e).$implicit,j=s();return p(j.seleccionarLetra(d))}),c(1),o()}if(n&2){let e=t.$implicit,i=s();l("disabled",i.letrasSeleccionadas.includes(e)),a(),w(e)}}function G(n,t){if(n&1&&M(0,"img",12),n&2){let e=s();l("src","./ahorcado"+(7-e.intentos)+".png",C)}}function $(n,t){if(n&1&&(r(0,"h4"),c(1),o()),n&2){let e=s(2);a(),h("\xA1Perdiste! La palabra era ",e.palabra,".")}}function q(n,t){n&1&&(r(0,"h4"),c(1,"\xA1Ganaste!"),o())}function U(n,t){if(n&1){let e=g();r(0,"div",13)(1,"div",14),f(2,$,2,1,"h4",15)(3,q,2,0,"h4",15),r(4,"button",16),u("click",function(){m(e);let d=s();return p(d.volverAJugar())}),c(5,"Volver a jugar"),o(),r(6,"button",16),u("click",function(){m(e);let d=s();return p(d.volverAlInicio())}),c(7,"Volver al inicio"),o()()()}if(n&2){let e=s();a(2),l("ngIf",e.intentos<=0),a(),l("ngIf",e.isPalabraCompletada())}}var E=class n{constructor(t){this.router=t}palabra="angular";palabras=["carpeta","manzana","ratones","dibujo","florero","mariposa","computar","cangrejo","calidad","maravilla","elefante","guitarra","tortuga","plomero","cuchillo","chocolate","piscina","camarero","salmon","brillante","corredor","fideos","abogado","hermosa","sorpresa","transito","camiseta","acuerdo","caminos","vacaciones","estudiante","bailando","fantasma","acelga","misterio","activista","aviones","cocinado","cazador","eleccion","disfraz","escuela","floresta","pintura","tranquilo","universo","hermanos","festival","carnaval","estrellas","cercanas","planchas","escenarios","tendencia","hormiga","temporada","cercanas","informes","sustento","carretas","vibrante","cosechas","asuntos","bailarin","activismo","proyectos","dinamica","inversion","desarrollo","tropical","cercania","calendario","reflejo","caminante","diversidad","creador","maraton","explorar","tendencias","caminos","sociedad","propuesta","nutricion","planificar","salidas","visiones","diferente","naturales","reciclaje","luzcita","cocina","historias","tolerancia","tareas","actitud","alimentar","estrategia","diferencia","refrescos","desempeno","motivado","sociedades","justicia","poderoso","terreno","revelar","colegio","patente","trabajo","poblaciones","vegetales","actualidad","construccion","recursos","poderes","iniciativas","negocio","confirmar","coincidencia","destino","razonamiento","protagonista","percepcion","alternativa","desempenando","acercar","reforma","participantes","jardin","educador","cuidadores","caminos","universidades","revolucion","estimulo","cambio","analisis","fabulista","desarrollo","organizacion","conflicto","paseos","satisfaccion","pensamiento","caminando","caracter","superar","practicante","celebracion","solidaridad","marcadores","pueblo","fortalezas","revisar","adaptaciones","ejercicio","educacion","entidades","dondequiera","fundamentales","preparar","fabrica","tradiciones","relaciones","producido","frustracion","educativas","beneficios","evolucion","cohesion","responsabilidad","preocupaciones","ciberespacio","observaciones","emprendedores","valoraciones","comunicados","asociaciones","creacion","evaluacion"];letrasAlfabeto="abcdefghijklmnopqrstuvwxyz".split("");letrasSeleccionadas=[];intentos=6;ngOnInit(){let t=Math.floor(Math.random()*this.palabras.length);this.palabra=this.palabras[t]}get letras(){return this.palabra.split("").map(t=>this.letrasSeleccionadas.includes(t)?t:"_").join(" ")}seleccionarLetra(t){this.letrasSeleccionadas.includes(t)||(this.letrasSeleccionadas.push(t),this.palabra.includes(t)||this.intentos--)}isJuegoTerminado(){return this.intentos<=0||this.palabra.split("").every(t=>this.letrasSeleccionadas.includes(t))}isPalabraCompletada(){return this.palabra.split("").every(t=>this.letrasSeleccionadas.includes(t))}iniciarJuego(){this.intentos=6,this.letrasSeleccionadas=[],this.palabra=this.palabras[Math.floor(Math.random()*this.palabras.length)]}volverAJugar(){this.iniciarJuego()}volverAlInicio(){this.router.navigate(["/home"])}static \u0275fac=function(e){return new(e||n)(y(S))};static \u0275cmp=b({type:n,selectors:[["app-ahorcado"]],standalone:!0,features:[I],decls:19,vars:6,consts:[[1,"wrapper"],[1,"container"],[1,"letras"],[1,"teclado"],[1,"fila"],[3,"disabled","click",4,"ngFor","ngForOf"],[1,"pantalla"],[1,"intentos"],[1,"game-container"],[3,"src",4,"ngIf"],["class","modal",4,"ngIf"],[3,"click","disabled"],[3,"src"],[1,"modal"],[1,"modal-content"],[4,"ngIf"],[1,"modal-button",3,"click"]],template:function(e,i){e&1&&(r(0,"div",0)(1,"div",1)(2,"h2"),c(3,"Ahorcado"),o(),r(4,"h3",2),c(5),o(),r(6,"div",3)(7,"h3"),c(8,"Selecciona una letra:"),o(),r(9,"div",4),f(10,L,2,2,"button",5),o(),r(11,"div",4),f(12,J,2,2,"button",5),o()(),r(13,"div",6)(14,"h4",7),c(15),o()(),r(16,"div",8),f(17,G,1,1,"img",9),o(),f(18,U,8,2,"div",10),o()()),e&2&&(a(5),w(i.letras),a(5),l("ngForOf",i.letrasAlfabeto.slice(0,13)),a(2),l("ngForOf",i.letrasAlfabeto.slice(13)),a(3),h("Intentos restantes: ",i.intentos,""),a(2),l("ngIf",i.intentos<=6),a(),l("ngIf",i.isJuegoTerminado()))},dependencies:[_,z,k,P],styles:['.wrapper[_ngcontent-%COMP%]{background-image:url("./media/fondo4-VYWSDTRN.jpg");height:90vh;display:flex;justify-content:center;align-items:center}.container[_ngcontent-%COMP%]{text-align:center;font-family:Arial,sans-serif;height:73vh;width:150vh;border:10px solid rgb(137,142,148);background-color:#fff;box-shadow:0 0 15px #0000004d;overflow:auto}h2[_ngcontent-%COMP%]{color:#4caf50}h3[_ngcontent-%COMP%]{font-size:24px;margin:10px 0}.resultado[_ngcontent-%COMP%]{margin-top:20px;font-size:20px;color:#d9534f}.letras[_ngcontent-%COMP%]{font-size:30px;letter-spacing:5px}.teclado[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin-top:20px}.fila[_ngcontent-%COMP%]{display:flex;justify-content:center;margin:5px 0}button[_ngcontent-%COMP%]{margin:0 5px;padding:10px;font-size:16px;cursor:pointer}.intentos[_ngcontent-%COMP%]{font-size:20px;color:#333}img[_ngcontent-%COMP%]{width:300px;height:300px}.pantalla[_ngcontent-%COMP%]{text-align:center}.game-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;margin:20px 0}.modal[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#000000b3;display:flex;justify-content:center;align-items:center;z-index:1000}.modal-content[_ngcontent-%COMP%]{background-color:#fff;padding:20px;border-radius:8px;text-align:center}.modal-button[_ngcontent-%COMP%]{margin:10px}.video-container[_ngcontent-%COMP%]{position:relative;width:300px;height:300px;overflow:hidden;margin-right:20px}.response-video[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;width:auto;height:auto;max-width:100%;max-height:100%;transform:translate(-50%,-50%);display:none}']})};function W(n,t){if(n&1){let e=g();r(0,"div",6)(1,"button",7),u("click",function(){m(e);let d=s();return p(d.guess("mayor"))}),c(2,"Mayor"),o(),r(3,"button",7),u("click",function(){m(e);let d=s();return p(d.guess("menor"))}),c(4,"Menor"),o()()}}function Y(n,t){if(n&1&&(r(0,"h4"),c(1),o()),n&2){let e=s();a(),h("Puntaje: ",e.score,"")}}function B(n,t){if(n&1&&(r(0,"h4"),c(1),o()),n&2){let e=s();a(),h("Intentos: ",e.attemptsLeft,"")}}function H(n,t){if(n&1){let e=g();r(0,"button",11),u("click",function(){m(e);let d=s(2);return p(d.resetGame())}),c(1,"Jugar de nuevo"),o()}}function K(n,t){if(n&1){let e=g();r(0,"div",8)(1,"div",9)(2,"h4"),c(3,"Agotaste tus intentos"),o(),r(4,"h4"),c(5),o(),f(6,H,2,0,"button",10),r(7,"button",11),u("click",function(){m(e);let d=s();return p(d.volverAlInicio())}),c(8,"Volver al inicio"),o()()()}if(n&2){let e=s();a(5),h("Puntaje: ",e.score,""),a(),l("ngIf",e.gameEnded)}}var O=class n{constructor(t){this.router=t;this.resetGame()}deck=[];currentCard=null;nextCard=null;score=0;attemptsLeft=5;gameEnded=!1;suits=["oro","espada","basto","copa"];resetGame(){this.deck=this.generateDeck(),this.currentCard=this.deck.pop()||null,this.score=0,this.attemptsLeft=5,this.gameEnded=!1}generateDeck(){let t=[];for(let e of this.suits)for(let i=1;i<=12;i++)t.push({number:i,suit:e});return this.shuffleDeck(t)}shuffleDeck(t){for(let e=t.length-1;e>0;e--){let i=Math.floor(Math.random()*(e+1));[t[e],t[i]]=[t[i],t[e]]}return t}guess(t){if(!this.currentCard||this.attemptsLeft<=0||this.deck.length===0){this.gameEnded=!0;return}this.nextCard=this.deck.pop()||null,this.nextCard&&(t==="mayor"&&this.nextCard.number>=this.currentCard.number||t==="menor"&&this.nextCard.number<this.currentCard.number?this.score++:this.attemptsLeft--),this.currentCard=this.nextCard,(this.attemptsLeft<=0||this.deck.length===0)&&(this.gameEnded=!0)}volverAlInicio(){this.router.navigate(["/home"])}static \u0275fac=function(e){return new(e||n)(y(S))};static \u0275cmp=b({type:n,selectors:[["app-mayormenor"]],standalone:!0,features:[I],decls:9,vars:5,consts:[[1,"wrapper"],[1,"game-container"],[3,"src"],["class","buttons",4,"ngIf"],[4,"ngIf"],["class","modal",4,"ngIf"],[1,"buttons"],[3,"click"],[1,"modal"],[1,"modal-content"],["class","modal-button",3,"click",4,"ngIf"],[1,"modal-button",3,"click"]],template:function(e,i){e&1&&(r(0,"div",0)(1,"div",1)(2,"h2"),c(3,"Mayor o Menor"),o(),M(4,"img",2),f(5,W,5,0,"div",3)(6,Y,2,1,"h4",4)(7,B,2,1,"h4",4)(8,K,9,2,"div",5),o()()),e&2&&(a(4),l("src","./"+(i.currentCard==null?null:i.currentCard.number)+"-"+(i.currentCard==null?null:i.currentCard.suit)+".png",C),a(),l("ngIf",!i.gameEnded),a(),l("ngIf",!i.gameEnded),a(),l("ngIf",!i.gameEnded),a(),l("ngIf",i.gameEnded))},dependencies:[_,k],styles:['.game-container[_ngcontent-%COMP%]{text-align:center;font-family:Arial,sans-serif;height:73vh;width:150vh;border:10px solid rgb(137,142,148);background-color:#fff;box-shadow:0 0 15px #0000004d;overflow:auto}.buttons[_ngcontent-%COMP%]{margin:20px}h4[_ngcontent-%COMP%]{font-size:20px;color:#333}h2[_ngcontent-%COMP%]{color:#4caf50}button[_ngcontent-%COMP%]{padding:10px 20px;font-size:16px;margin:0 10px;cursor:pointer}.wrapper[_ngcontent-%COMP%]{background-image:url("./media/fondo4-VYWSDTRN.jpg");height:90vh;display:flex;justify-content:center;align-items:center}.modal[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#000000b3;display:flex;justify-content:center;align-items:center;z-index:1000}.modal-content[_ngcontent-%COMP%]{background-color:#fff;padding:20px;border-radius:8px;text-align:center}.modal-button[_ngcontent-%COMP%]{margin:10px}']})};var Q=[{path:"ahorcado",component:E},{path:"mayormenor",component:O}],A=class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=v({type:n});static \u0275inj=x({imports:[V.forChild(Q),V]})};var F=class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=v({type:n});static \u0275inj=x({imports:[_,P,A]})};export{F as JuegosModule};
