import React from "react"
import './App.css';
import Special from './components/special'
import Colors from './components/color'
import Title from './components/title'
import KeyBoardButtons from './components/keyboardButtons'
import Size from './components/size'
import Language from './components/language'
import Text from './components/text'

class App extends React.Component {
  constructor() {
    super();

    this.numbers = ['0','1','2','3','4','5','6','7','8','9']

    this.languages = {
      עברית: [['פ', 'ם', 'ן', 'ו', 'ט','א','ר','ק','ף','ך','ל','ח','י','ע','כ','ג','ד','ש','ץ','ת','צ','מ','נ','ה','ב','ס','ז','space','enter'],
       ['פ', 'ם', 'ן', 'ו', 'ט','א','ר','ק','ף','ך','ל','ח','י','ע','כ','ג','ד','ש','ץ','ת','צ','מ','נ','ה','ב','ס','ז','space','enter']],
      English: [['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m','space','enter'], 
      ['Q', 'w', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M','space','enter']], 
      Russe: [['й', 'ц', 'у', 'к','е', 'н', 'г','ш','щ','з','х','ъ','ф','ы','в','а','п','р','о','л','д','ж','э','я','ч','с','м','и','т','ь','б','ю','enter','space']],
      Emoji: [['😀', '😁', '😂', '🤣','😃', '😄', '😅','😆','😉','😊','😋','😎','😍','😘','🥰','😗','😙','😚','🙂','🤗','🤩','🤔','🤨','😐','😑','😶','🙄','😏','😣','😥','space','enter']],
    }
    this.sizes = [12, 18, 24, 30];
    this.colors = ["black","red", "green", "blue", "white"]
    this.state = {
      text: [],
      currentLanguage: "English",
      currentSize: 30,
      currentColor: "white",
      currentSizeFont: 0,
      temp:{
        actoin:null,
        key:null
      }
    }
  }

  onKeyBoardClick = (k) => {
    let currentText = this.state.text;
    this.changeState("temp", {actoin:"text", key:[...currentText]});
    currentText.push({k:((k==="space")?' ':(k==="enter")?<br />:k), size:this.state.currentSize, color:this.state.currentColor})
    this.setState({text:currentText});
  }

  clear = () => {
    const t = this.state.text;
    const tempOfClear = {actoin:"text", key:[...t]};
    this.changeState("temp", tempOfClear);
    t.pop();
    this.setState({text:t});
  }

  undoLast = () =>{
    this.changeState(this.state.temp.actoin,this.state.temp.key);
  }
  changeState = (obj, k)=>{
    const state = {...this.state};
    state["temp"] = {actoin:obj, key:state[obj]}
    state[obj] = k;
    this.setState(state);
  }

  render() {
    return (
      <div className="App">
        <Title />
        <Text text={this.state.text} />

        <KeyBoardButtons keys={(this.languages[this.state.currentLanguage])[this.state.currentSizeFont]}
          numbers={this.numbers}
          onKeyBoardClick={this.onKeyBoardClick}
          clear={this.clear} undoLast={this.undoLast}/>

        <Language Languages={Object.keys(this.languages).filter(k => k !== this.state.currentLanguage)}
          changeLanguge={this.changeState} />

        <Size sizes={this.sizes.filter(k => k !== this.state.currentSize)}
          changeSize={this.changeState} />

        <Colors colors={this.colors.filter((k) => k !== this.state.currentColor)}
          onColorClick={this.changeState} />
          
        <Special changeState={this.changeState}
          />
      </div>
    );
  }
}


export default App;
