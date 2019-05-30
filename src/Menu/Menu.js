import React from 'react'

const Menu = () => {
  return (
    <section id="menu">
      <div className="specials">
        <h2 className="l-heading is-subhead is-center m-2 pt-1">Menu</h2>
        <h3 className="m-heading is-left mx-3 mb-1">Specials</h3>
        <div className="grid">
          <figure className="item-1"><img className="special" src="https://static.wixstatic.com/media/874cb2_92384431279d471fb18fa123cc1503e4~mv2.png/v1/fill/w_443,h_673,al_c,q_80,usm_0.66_1.00_0.01/Bufadora_Mon.webp" title="3 Potato Tacos" alt="3 Potato Tacos" /></figure>
          <figure className="item-2"><img className="special" src="https://static.wixstatic.com/media/874cb2_a493cad6034147a9aa4677cc97fd03da~mv2.png/v1/fill/w_444,h_673,al_c,q_80,usm_0.66_1.00_0.01/Bufadora_Tue.webp" title="3 Street Tacos" alt="3 Street Tacos" /></figure>
          <figure className="item-3"><img className="special" src="https://static.wixstatic.com/media/874cb2_9d94db6ab865451491f23226a26ec456~mv2.png/v1/fill/w_442,h_668,al_c,q_80,usm_0.66_1.00_0.01/Bufadora_Wed.webp" title="3 Fish Tacos" alt="3 Fish Tacos" /></figure>
          <figure className="item-4"><img className="special" src="https://static.wixstatic.com/media/874cb2_a005d2e72f8f4d23a1b46437f2368e6e~mv2.png/v1/fill/w_442,h_671,al_c,q_80,usm_0.66_1.00_0.01/Bufadora_Thur.webp" tile="2 Sopes" alt="2 Sopes" /></figure>
          <figure className="item-5"><img className="special" src="https://static.wixstatic.com/media/874cb2_1298a91d53aa45f2bac0194367ac6a3a~mv2.png/v1/fill/w_450,h_673,al_c,q_80,usm_0.66_1.00_0.01/Bufadora_Fri.webp" title="3 Rolled Taquitos" alt="3 Rolled Taquitos" /></figure>
        </div>
      </div>
      <div className="menu">
        <h3 className="m-heading is-left mx-3 pt-1">Meals</h3>
        <div className="grid">
          <div className="item-1">
            <h3 className="is-center">1. The Classic</h3>
            <p className="is-center s-lead"><em>190-750 cal</em></p>
            <h4 className="is-center">Choose Your Favorite</h4>
            <div className="food-items">
              <ul className="food-names">
                <li>Street Taco</li>
                <li>Burrito</li>
                <li>Torta</li>
                <li>Sope</li>
                <li>Quesadilla <span className="detail">[w/meat]</span></li>
                <li>Asada Fries</li>
                <li>Baja Nachos</li>
              </ul>
              <ul className="food-prices">
                <li>2.45</li>
                <li>6.99</li>
                <li>7.89</li>
                <li>3.49</li>
                <li>5.99</li>
                <li>7.59</li>
                <li>8.99</li>
              </ul>
            </div>
          </div>
          <div className="item-2">
            <h3 className="is-center">2. Meats</h3>
            <h4 className="is-center">Choose Your Meat</h4>
            <div className="food-items">
              <ul className="food-names is-center">
                <li>Asada</li>
                <li>Al Pastor</li>
                <li>Fish</li>
                <li>Chicken</li>
                <li>Carnitas</li>
              </ul>
            </div>
          </div>
          <div className="item-3">
            <h3 className="is-center">3. Extras</h3>
            <div className="food-items">
              <ul className="food-names">
                <li>Sour Cream</li>
                <li>Avocado</li>
                <li>Guacamole</li>
                <li>House Cream</li>
                <li>Cheese</li>
              </ul>
              <ul className="food-prices">
                <li>0.75</li>
                <li>1.00</li>
                <li>1.00</li>
                <li>0.75</li>
                <li>0.75</li>
              </ul>
            </div>
          </div>
          <div className="item-4">
            <h3 className="is-center">4. Sides</h3>
            <div className="food-items">
              <ul className="food-names">
                <li>Rice or Beans</li>
                <li>Guacamole</li>
                <li>Fries</li>
                <li>Tortilla Chips</li>
              </ul>
              <ul className="food-prices">
                <li>3.45</li>
                <li>4.99</li>
                <li>3.99</li>
                <li>1.99</li>
              </ul>
            </div>
          </div>
          <div className="item-5">
          <h3 className="is-center">5. Drinks</h3>
            <div className="food-items">
              <ul className="food-names">
                <li>Fountain Drinks</li>
                <br/>
                <li>Agua Fresca</li>
                <br/>
                <li>Bottled Soda</li>
              </ul>
              <ul className="food-prices">
                <li>Medium 1.89</li>
                <li className="pb">Large 2.35</li>
                <li>Medium 2.39</li>
                <li className="pb">Large 2.99</li>
                <li>1.99</li>
              </ul>
            </div>
            <p><em>*Beer and Michelada available in certain locations.</em></p>
          </div>
        </div>
      </div>    
    </section>
  )
}

export default Menu
