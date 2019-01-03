
const app = {
  title: "Visibiliy Toggle"
};

let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  render(); 
};

const render = () => {
const template = (
  <div>
    <h1>{app.title}</h1>
    <button onClick={toggleVisibility}>{visibility ? 'Hide details': 'Show details'}</button>
    { visibility && (
      <h3 >Here are details you can now see!</h3>)}
  </div>
);


ReactDOM.render(template, document.getElementById('app'));
};
render();