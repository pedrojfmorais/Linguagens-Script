
// let LinguagensScript = () =>  {
//      return <h1>Linguagens Script!</h1>
// }

// const divStyle = {
//      margin: '40px',
//      border: '5px solid red'
// };

// const pStyle ={
//      textAlign: 'center'
// };

// const Exemplo4 = () => (
// <div style ={divStyle}>
//      <p style={pStyle}> Aplicação de CSS Inline LS</p>
// </div>
// );

// function LinguagensScript() {
//      return <h1>Linguagens Script!</h1>
// }

// function BemVindo(props) {
//      return <h1 style={styleH1} >Bem vindo '{props.nome}' à UC de Linguagens Script!</h1>
// }

// const styleH1 = {
//      fontFamily: 'sans-serif',
//      textDecoration: 'underline',
//      color: 'brown'
// };

function InfoComponent(props) {
     // let src = "images/"+props.src;
     return <div class="container"> 
          <div class="wrapper"> 
               <div class="logo"> 
                    <img src={"images/"+props.src} alt="React" /> 
               </div> 
               <div class="text"> 
                    <h2>{props.name}</h2> 
                    <p>{props.children}</p> 
                    <a href={props.url} target="_blank">Ler mais</a> 
               </div> 
          </div> 
     </div>
}

const containerRoot = document.getElementById("root");
ReactDOM.render(
     <React.StrictMode>

          <InfoComponent title="React" src="react.png" url="https://reactjs.org/"> 
          React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”. We use components to tell React what we want to see on the screen. When our data changes, React will efficiently update and re-render our components. A component takes in parameters, called props (short for “properties”), and returns a hierarchy of views to display via the render method. 
          </InfoComponent> 

          <InfoComponent title="Javascript" src="javascript.png" url="https://developer.mozilla.org/en-US/docs/Web/JavaScript"> 
          JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. Read more about JavaScript. 
          </InfoComponent>
          
          <InfoComponent title="Ember" src="ember.png" url="https://emberjs.com/"> 
          Ember.js is a productive, battle-tested JavaScript framework forbuilding modern web applications. It includes everything you need to build rich UIs that work on any device.
          </InfoComponent> 

          <InfoComponent title="Vue" src="vue.png" url="https://vuejs.org/"> 
          Vue is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS and JavaScript, and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be it simple or complex.
          </InfoComponent>

     </React.StrictMode >,
     containerRoot
);





