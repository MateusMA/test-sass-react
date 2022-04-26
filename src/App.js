// import logo from './logo.svg';
import './style.sass';
import './index.css'

function App() {
  return (
    <div className="App">
      <header id="App-header">
        <div id="App-header-logo"></div>
        <nav id="App-header-navbar">
          <ul>
            <li><a href="">Lua</a></li>
            <li><a href="">Lua</a></li>
            <li><a href="">Lua</a></li>
            <li><a href="">Lua</a></li>
          </ul>
        </nav>
      </header>
      <main className="App-main">
        <div id="black-line"></div>
        <img id="sunset-img" src="rio-sunset.jpg" alt="por do Sol"></img>
        <div id="heaven">
          <img id="heaven-img" src="enviroment.jpg" alt="céu"></img>
          <p id="heaven-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris porta vehicula dolor, sollicitudin mattis leo ultrices vel.
            Donec ullamcorper nibh eget dolor blandit consequat. Sed nec luctus sapien.
            Cras pellentesque nisi lectus, in tincidunt massa auctor vel. Ut sed lacus ut magna porttitor
            egestas at eget dui. Nunc sed suscipit orci. Nam malesuada elementum purus, eu consectetur
            dui ornare vitae. Vivamus egestas congue turpis vel venenatis.</p>
        </div>
        <div className="header-social-media">
          <ul>
            <li>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </main>
      <footer className="App-footer">
        <p><span>M.Alves</span> &copy; 2022</p>
      </footer>
    </div>
  );
}

export default App;
