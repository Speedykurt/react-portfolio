import Navbar from "./components/navbar/navbar";
import "./App.css";
import logo from "./rabbitholelogo2.png";
import blog from "./blog2.jpg";
import hero from "./logonew.png";
import site1 from "./panzeca.PNG";
import site2 from "./huron.PNG";
import site3 from "./nelson.PNG";
import me from "./menobg.png";
import name from "./name.png";
import mywork from "./mywork.png";
import woodyou from "./woodyou.png";


function App() {
  return (
    <div className="App" class="app">
      <div class="bgcolor">
        <Navbar />
        <div class="screen">
          <div class="mainbg">
            <img src={me} class="mebg" />
            <div class="backerbox">
              <div class="textbox"></div>
            </div>
          </div>
        </div>
        <div class="bio container">
          <p>
            A Little About Me: I am a creative problem-solver. From concept to
            completion I creatively explore the possibilities of what could be
            and I have always had an interest in solving problems through
            technology. I try not to limit myself to any one field but rather
            seek out new opportunities where I can apply my skill set and
            experience to create something great for the world around me. I have
            in the past been more focused on the mechanical side of engineering
            working for Automotive race teams and GE Aviation. In more recent
            years I have found my true passion of web and software development.
            In my personal time i am an avid disc golfer/3d printer/hiker/car
            nut/painter/maker/welder/terrible guitar player
          </p>
        </div>
        <div class="container">
          <img class="boxheading" id="my-work" src={mywork} />
          <div class="row">
            <div class="card col">
              <img class="card-img-top" src={site1} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Meet The Panzeca's</h5>
                <p class="card-text">
                  Photography website i made for a really cool couple. Full
                  Admin Area using custom made php framework
                </p>
                <a
                  href="https://www.panzecaco.com/"
                  target="_blank"
                  class="btn btn-primary"
                >
                  Check it out
                </a>
              </div>
            </div>
            <div class="card col">
              <img class="card-img-top" src={site2} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Get Some beers at Huron Market</h5>
                <p class="card-text">
                  Full admin site with fun design. Simple but does everything
                  you need!
                </p>
                <a
                  href="https://www.huronmarket.com/"
                  target="_blank"
                  class="btn btn-primary"
                >
                  Check it out
                </a>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="card col">
              <img class="card-img-top" src={site3} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Wait Til I get my money right...</h5>
                <p class="card-text">
                  Nothing goes together like rap music and financial advising.
                </p>
                <a href="#" target="_blank" class="btn btn-primary">
                  Check it out
                </a>
              </div>
            </div>
            <div class="card col">
              <img class="card-img-top" src={woodyou} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Wood You Build It</h5>
                <p class="card-text">
                  Ecom site for a small wood worker. Modern design with full admin area for site and store. also has instagram feed embed showing the clients work.
                </p>
                <a href="http://woodyoubuildit.s402.sureserver.com/test/" target="_blank" class="btn btn-primary">
                  Check it out
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="addbox">
          <div class="container">
            <div
              class="embedsocial-hashtag"
              data-ref="352b1b504a2a5a02ab8b538879a2c55c0c510a88"
            ></div>
          </div>
        </div>
        <footer class="py-3 my-4">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="wiki">
                Wiki
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact">
                Contact
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about-me">
                About Me
              </a>
            </li>
          </ul>
          <p class="text-center text-muted">© 2021 Company, Inc</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
