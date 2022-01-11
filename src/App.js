import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
function App() {
  return (
    <div className="App">
    <div className="group2">
        <div className="textGroup2">
            <h1>Our Chef</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. </p>

        </div>
        <div className="cardGroup2">
            <div className="card1">
                <img src='./Aiden.png' alt="" />
                <span>
                    <h2>Aiden Hunter</h2>
                    <p>Founder</p>
                </span>
            </div>
            <div className="card2Group2">
                <img src="./img/Ethel.png" alt=""/>
                <span>
                    <h2>Ethel Ramsey</h2>
                    <p>Co-founder</p>
                </span>
            </div>
            <div className="card3Group2">
                <img src="./img/Fannie.png" alt="" />
                <span>
                    <h2>Fannie stewart</h2>
                    <p>Co-founder</p>
                </span>
            </div>

        </div>
        <div className="designGroup2">
            <img class="designbugr" src="./img/Burger.png" alt=""/>
            <img class="designchim" src="./img/ChimlaMirch.png" alt=""/>
            <img class="designfri" src="./img/Fries.png" alt=""/>
            <img class="designgar" src="./img/Garlic.png" alt=""/>
            <img class="designlea" src="./img/Leaf.png" alt=""/>
            <img class="designmush" src="./img/Mushroom.png" alt=""/>
        </div>

    </div>
    </div>
  );
}

export default App;
