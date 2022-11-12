import React, { Component } from "react";

export class Clas extends Component {
    render() {
        return <h2> i `am  {this.props.co}  Devllopar</h2>
    }
};

//   class ma props pass karvu...Clas.

export class ClassName extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return(
           <h2>i `am  {this.props.modal} Devllopar</h2>
        )
    }
} ;


// class ma state pass karvu.. 

     class Name extends Component {
        constructor() {
            super()
            this.state={
                Color:"red",
                Modal:"vzx46",
                year: 2022
            };
        }

    //    static getDerivedStateFromProps(props,state){
    //         return {Color:props.Favc}
    //     }

        componentDidMount(){
            setTimeout ( () => {
                this.setState({Color: "dark "})
            }, 2000)
        }

        getSnapshotBeforeUpdate(prevProps, prevState) {
           document.getElementById("div1").innerHTML =
            "Before the update, the favorite was " + prevState.Color;
          }

          componentDidUpdate(){
            document.getElementById('div2').innerHTML =
            "The updated favorite is " + this.state.Color;
          }



        // shouldComponentUpdate() {
        //     return true;
        // }

        Cenjcolor = () => {
            this.setState({Color:"black"});
        }

        render(){
            return(
                <>
                <h1>my cra is {this.state.Color}</h1>
                 <p>
                    modal in {this.state.Modal} and
                    brand is {this.state.brand}
                    year {this.state.year};
                 </p>
                 <div id="div1"></div>
                 <div id="div2"></div>

                 <button type="button" onClick= {this.Cenjcolor}>Cenjcolor</button>

                <hr/>
                 <Clas co="React"/>
                 <ClassName modal='Full stack'/> 
                 
                </>
            )
        }
     }


           
 

export default Name ;   