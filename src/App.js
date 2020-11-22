import "./style.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/header/Header";
import Subtitle from "./components/FancySubtitle/FancySubtitle";
import ItemsCard from "./components/Items/ItemsCard";

class App extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <NavBar />
          <Header />
          <Subtitle name="ITEMS WE OFFER" />
          <div className="container">
            <div className="row">
              {/* Item 1 */}
              <div className="col-md p-2">
                <ItemsCard
                  img={`${process.env.PUBLIC_URL} /images/item1.jpg`}
                  alt="card-item-1"
                  title="Burger"
                  text="It is a long established fact that a reader will be distracted by the readable content of a page  'Content here, content here',"
                  btnName="Book Now"
                  btnColor="success"
                  btnSize="md"
                />
              </div>
              {/* Item 2 */}
              <div className="col-md p-2">
                <ItemsCard
                  img={`${process.env.PUBLIC_URL} /images/item2.jpg`}
                  alt="card-item-2"
                  title="Coffee"
                  text="It is a long established fact that a reader will be distracted by the readable content of a page 'Content here, content here',"
                  btnName="Book Now"
                  btnColor="success"
                  btnSize="md"
                />
              </div>
              {/* Item 3 */}
              <div className="col-md p-2">
                <ItemsCard
                  img={`${process.env.PUBLIC_URL} /images/item3.jpg`}
                  alt="card-item-3"
                  title="Fast Food"
                  text="It is a long established fact that a reader will be distracted by the readable content of a page 'Content here, content here',"
                  btnName="Book Now"
                  btnColor="success"
                  btnSize="md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
