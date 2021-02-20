function WelcomeFunc ({name,children}){
return <div>
    <h1>Bonjour {name}</h1>
    <p>{children}</p>
</div>
 }
 class Welcome extends React.Component{
  
     render(){
         console.log(this.props)
         return  <div>
         <h1>Bonjour {this.props.name}</h1>
         <p>{this.props.children}</p>
     </div>
     }
 }
 class Clock extends React.Component{
     constructor(props){
         super(props)
         this.state = {date : new Date()}
         this.timer=null
     }
     componentDidMount(){
         this.timer = window.setInterval(this.tick.bind(this),1000)
     }
     componentWillUnmount(){
         window.clearInterval(this.timer)
     }
     tick(){
         this.setState({date: new Date()})}
     render(){
         const date = new Date();
        return <div>
         Il est {this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}
        </div>
        }
 }
 class Incrementer extends React.Component{
constructor (props){
    super(props)
    this.state = {n: props.start, timer: null}
    this.timer = null 
}

componentDidMount(){
   this.play();
}

componentWillUnmount(){
    this.pause();
}

    increment(){
        this.setState(function (state, props) {return {n: state.n + 1}})
    }
    pause(){
        window.clearInterval(this.state.timer)
        this.setState({
            timer:null
        })
    }
    play(){
        window.clearInterval(this.state.timer)
       this.setState({
                timer: window.setInterval(this.increment.bind(this),1000)
            })
      
    }
    toggle(){
        return this.state.timer ? this.pause() : this.play()
    }

    label(){
        return this.state.timer ? 'Pause' : 'Lecture'
    }

render(){
    
    return <div>Valeur: {this.state.n}
    <button onClick={this.toggle.bind(this)}>{this.label()}</button>
    <button onClick={this.play.bind(this)}>Play</button>
    </div>
}
 }
 class ManualIncrementer extends React.Component{
     constructor(props){
super(props)
this.state = {n: 0}
     }
     increment(e) {
         e.preventDefault();
console.log(e)
this.setState((state, props) => ({n: state.n + 1 }))
     }
     render(){
         return <div>Valeur : {this.state.n} <a href="www.google.com" onClick={this.increment.bind(this)}> Incrementer </a></div>
     }
     
 }
 function Home(){
     return <div>
         <Welcome name="takwa" />
         <Welcome name="jahjah" />
       <Incrementer  start={10} />
     </div>
 }
ReactDOM.render(<Home />, document.querySelector('#app'))