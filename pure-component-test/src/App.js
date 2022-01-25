import React,{ useState, useEffect, } from 'react';
import RegularComponent from './RegularComponent';
import PureComponent from './PureComponent';
import Counter from './Counter';


// function App() {

//     const [name, setName] = useState("App component");
    
//     console.log("***************APP COMPONENT**********************")

//     useEffect(()=>{
//         setInterval(()=>{
//             setName({name:"App component"});
           
//         },1000)
//     },[]);
  
//     return <div className="app">
//         {name.name} <h1> App component </h1>
//     </div>;
// }

// export default (App);



class App extends React.Component {

    state = {name:"App",age:23};

    componentDidMount(){
        setInterval(()=>{
            console.log(this.state)
            this.setState({
                name:"App"
            })
        },1000)
    }

    render(){

        console.log("****************App component render*****************");
        return <div className="app">
       {/* here you are passing object to name props of Counter , and since name props is asigned to object, on every rerender new object reference is returned which cause the Counter component which is memo Component to renrender */}
            <Counter name={{name:this.state.name}} />  

        </div>
    }
}


export default App;