import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import FilterButtons from "./FilterButtons";
import MenuBody from "./MenuBody";
import image1 from "../../images/item-1.jpeg";
import image2 from "../../images/item-2.jpeg";
import image3 from "../../images/item-3.jpeg";
import image4 from "../../images/item-4.jpeg";
import image5 from "../../images/item-5.jpeg";
import image6 from "../../images/item-6.jpeg";
import image7 from "../../images/item-7.jpeg";
import image8 from "../../images/item-8.jpeg";
import image9 from "../../images/item-9.jpeg";

class MenuItem extends Component {
  state = {
    menus: [
      {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: image1,
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
      },
      {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: image2,
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
      },
      {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: image3,
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
      },
      {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: image4,
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
      },
      {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: image5,
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
      },
      {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: image6,
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
      },
      {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: image7,
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
      },
      {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: image8,
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
      },
      {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: image9,
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      },
    ],
    filtered: [],
  };

  // Use the button to filter the value of the state
  // in accordance with button dataset
  handleClick = (e) => {
    let id = e.currentTarget.dataset.id;
    let getMenus = [...this.state.menus];
    let myMenus = getMenus.filter((item) => {
      return item.category === id;
    });
    if (id === "all") {
      return this.setState({ filtered: getMenus });
    } else {
      return this.setState({ filtered: myMenus });
    }
  };

  render() {
    return (
      <section className="menu">
        <div className="shopping-cart">
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
        <div className="menu-title">
          <h2>Our Menu</h2>
          <div className="menu-underline"></div>
        </div>

        {/*div housing the filter buttons*/}
        <FilterButtons click={this.handleClick} />
        {/* menu body */}
        <MenuBody getState={this.state} />
      </section>
    );
  }
}

export default MenuItem;
