import styles from './App.css';
import urls from "./data"

function App() {
  const state=urls;
 const layout=state.map((url)=>{

  return (
    <div key={Math.random()} className="layout">
      <img src={`https://neoos.s3.eu-west-1.amazonaws.com/img/birds/${url}.JPG`} alt="" />
      <h5>_{url}.jpg</h5>
    </div>
  )
 })
  return (
  <section id='layout'>
{layout}
  </section>
  );
}

export default App;
