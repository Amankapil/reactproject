
import './App.css';
import contact from './componats/contact';
import Navbar from './componats/navbar';

function App() {
  return (
    <div className="App">
   <div>
  <Navbar/>
  <contact/>
  <div className="scan">
  <div className="col-12">
    <button type="button" id="btn" className="btn btn-info shadow-lg p-3 " data-toggle="collapse" data-target="#demo">DONATE US</button>
  </div>
  <div id="demo" className="collapse">
    <img src="/qr.jpg" className="img-fluid" id="img" alt="..." />
  </div>
</div>

    <section className="section" id="section">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card">
            <img src="/got.jpeg" className="card-img-top.img" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="/Doom_Blog.jpeg" className="card-img-top.img" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="/co.jpg" className="card-img-top.img" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional
                content.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="/l1.png" className="card-img-top.img" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div></div>

  );
  
}

export default App;
