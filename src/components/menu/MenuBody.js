import React from "react";

function MenuBody(props) {
  // console.log(props.menu)
  // Check if the list of filters is empty.
  const Menus =
    props.getState.filtered.length === 0
      ? props.getState.menus.map((item) => {
          return (
            <div className="menu-section" key={item.id}>
              <article className="menu-item">
                <div>
                  <img src={item.img} className="photo" alt="menu" />
                </div>
                <div className="item-info">
                  <div className="header">
                    <h4>{item.title}</h4>
                    <h4 className="price">${item.price}</h4>
                  </div>
                  <p className="item-text">{item.desc}</p>
                  <h5>{item.category} </h5>
                </div>
              </article>
            </div>
          );
        })
      : props.getState.filtered.map((item) => {
          return (
            <div className="menu-section" key={item.id}>
              <article className="menu-item">
                <div>
                  <img src={item.img} className="photo" alt="menu" />
                </div>
                <div className="item-info">
                  <div className="header">
                    <h4>{item.title}</h4>
                    <h4 className="price">${item.price}</h4>
                  </div>
                  <p className="item-text">{item.desc}</p>
                  <h5>{item.category} </h5>
                </div>
              </article>
            </div>
          );
        });
  return Menus;
}

export default MenuBody;
