const BodyDom = document.querySelector('body');
const CountDom = document.createElement('div');
const ButtonDom = document.createElement('button');
const BombDom = document.querySelector('#Bomb');

class System  {
  constructor() {
  }
  init () {
    const html = document.querySelector('html');
    html.style.height = '100%';
    BodyDom.style.position = 'relative';
    BodyDom.style.display = 'flex';
    BodyDom.style.alignItems = 'center';
    BodyDom.style.height = '100%'
    BodyDom.style.flexDirection = 'column'
  }
}

class Bomb {
  #BombTime;
  #currentCount = 0;
  constructor(BombTime) {
    this.#BombTime = BombTime;
    console.log(BombTime);
  }

  initRender() {
    BombDom.style.width = '350px';
    BombDom.style.height = '350px';
    BombDom.style.backgroundImage = `url("./asset/normal.png")`;
    BombDom.style.backgroundRepeat = 'no-repeat';
    BombDom.style.backgroundPosition = 'center';
    BombDom.style.backgroundSize = 'contain';
    BodyDom.style.position = 'relative';
  
    CountDom.style.position = 'absolute';
    CountDom.style.top = '50%'
    CountDom.style.left = '50%'
    CountDom.style.transform = 'translateX(-80%)'
    CountDom.style.wdth = '200px';
    CountDom.style.height = '100px';
    CountDom.style.fontSize = '46px';
    CountDom.style.color = 'red';
    CountDom.textContent = this.#currentCount;
  
    ButtonDom.style.width = '100%';
    ButtonDom.style.height = '100px';
    ButtonDom.textContent = 'Click Me!';
    ButtonDom.style.position = 'relative';
    ButtonDom.style.top = '100px';
    ButtonDom.style.border = '2px solid black'
    ButtonDom.style.borderRadius = '24px'
    ButtonDom.style.display = 'flex';
    ButtonDom.style.justifyContent = 'center';
    ButtonDom.style.alignItems = 'center';
    ButtonDom.style.fontSize = '36px'
    ButtonDom.style.fontWeight = 'bold';
    ButtonDom.style.color = 'white'
    ButtonDom.style.backgroundColor = 'black'
  
    BodyDom.appendChild(BombDom);
    BombDom.appendChild(CountDom)
    BodyDom.appendChild(ButtonDom);

    ButtonDom.addEventListener('click', this.clickBtn.bind(this))
  }


  clickBtn() {
    this.#currentCount = this.#currentCount + 1;
    if (this.#currentCount >= this.#BombTime) {
      CountDom.textContent = '경축';
      BombDom.style.backgroundImage = `url("./asset/bomb.png")`;

    } else  {
      CountDom.textContent = this.#currentCount;
    }
  }
}

const system = new System();
system.init();

const bomb = new Bomb(Math.floor(Math.random() * 21) + 1);
bomb.initRender();
