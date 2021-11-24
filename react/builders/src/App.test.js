import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// {/* <div>
//   <header>
//     <nav className="navbar navbar-expand-sm bg-dark">
//       <div className="container-fluid">
//         <div className="navbar-header">
//           <img src="/css/43333.png" className="logo" alt="..." />
//           <a className="navbar-brand" href="#" />
//         </div>
//         {/* <a class="navbar-brand" href="#">WebSiteName</a> */}
//         <ul className="nav navbar-nav navbar-right" id="nav">
//           <li className="active"><a href="#">Home</a></li>
//           <li><a href="contact">contact us</a></li>
//           <li><a href="#">about us </a></li>
//           <li><a href="#">more</a></li>
//         </ul>
//       </div>
//     </nav>
//   </header>
//   <div className="scan">
//     <div className="col-12">
//       <button type="button" id="btn" className="btn btn-info shadow-lg p-3 " data-toggle="collapse" data-target="#demo">DONATE US</button>
//     </div>
//     <div id="demo" className="collapse">
//       <img src="../././public/css/43333.png" className="img-fluid" id="img" alt="..." />
//     </div>
//     <section className="section" id="section">
//       <div className="row row-cols-1 row-cols-md-2 g-4">
//         <div className="col">
//           <div className="card">
//             <img src="/css/got.jpeg" className="card-img-top.img" alt="..." />
//             <div className="card-body">
//               <h5 className="card-title">Card title</h5>
//               <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional
//                 content. This content is a little bit longer.</p>
//             </div>
//           </div>
//         </div>
//         <div className="col">
//           <div className="card">
//             <img src="/css/Doom_Blog.jpeg" className="card-img-top.img" alt="..." />
//             <div className="card-body">
//               <h5 className="card-title">Card title</h5>
//               <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional
//                 content. This content is a little bit longer.</p>
//             </div>
//           </div>
//         </div>
//         <div className="col">
//           <div className="card">
//             <img src="/css/co.jpg" className="card-img-top.img" alt="..." />
//             <div className="card-body">
//               <h5 className="card-title">Card title</h5>
//               <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional
//                 content.</p>
//             </div>
//           </div>
//         </div>
//         <div className="col">
//           <div className="card">
//             <img src="/css/l1.png" className="card-img-top.img" alt="..." />
//             <div className="card-body">
//               <h5 className="card-title">Card title</h5>
//               <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional
//                 content. This content is a little bit longer.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   </div></div> */}