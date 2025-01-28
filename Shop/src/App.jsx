import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items"


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: "Стул серый",
          img: "chair-grey.jpeg",
          desc: "Lorem ipsum dolor sit amet, consecterur adipisicing.",
          category: "chairs",
          price: "49.99"
        },
        {
          id: 2,
          title: "Стол",
          img: "table.jpeg",
          desc: "Lorem ipsum dolor sit amet, consecterur adipisicing.",
          category: "tables",
          price: "149.00"
        },
        {
          id: 3,
          title: "Диван",
          img: "sofa.jpeg",
          desc: "Lorem ipsum dolor sit amet, consecterur adipisicing.",
          category: "sofas",
          price: "79.99"
        }
      ]
    }
  }
  render(){
    return (
        <div className="wrapper">
          <Header/>
          <Items items={this.state.items}/>
          <Footer/>
        </div>  
    )
  }
}

export default App