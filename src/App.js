import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Bed Polden',
          img: 'polden-bed.jpg',
          desc: 'Metal. Accommodates box mattress, spring and springless mattresses',
          category: 'beds',
          price: '295.35'
        },
        {
          id: 2,
          title: 'Chair Katstrup',
          img: 'katstrup.jpg',
          desc: ' Molded seat with fixed fabric cushion, solid oak.',
          category: 'chairs',
          price: '54.21'
        },
        {
          id: 3,
          title: 'Table Roskidle',
          img: 'roskidle.jpg',
          desc: ' Surface: Oil for wood. Upper part: Solid oak',
          category: 'tables',
          price: '124.44'
        },
        {
          id: 4,
          title: 'Lamp Lumenis',
          img: 'lumenis.jpg',
          desc: 'Led bright lamp with balls. That produces using light-emitting diodes',
          category: 'lamps',
          price: '76.87'
        },
        {
          id: 5,
          title: 'Bed Asorti',
          img: 'asorti.jpg',
          desc: 'Suitable for box mattresses, spring and springless mattresses',
          category: 'bads',
          price: '458.91'
        }
      ],
      showFullItem:false,
      fullItem:{}
    }

    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
        {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} onAdd={this.addToOrder}  item={this.state.fullItem}/>}
        <Footer />
      </div>
    );
  }

onShowItem(item){ 
  this.setState({fullItem: item})
  this.setState({showFullItem: !this.state.showFullItem})
}

chooseCategory(category) {
  if(category === 'all'){
    this.setState({currentItems: this.state.items})
    return
  }
  this.setState({
    currentItems: this.state.items.filter(el => el.category === category)
  })
}

  deleteOrder(id){
  this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
    this.setState({ orders: [...this.state.orders, item] })

  }
}

export default App;
