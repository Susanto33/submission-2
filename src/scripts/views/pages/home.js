import RestaurantSource from '../../data/farest-source';
import cardFarest from '../templates/get-farest';

const Home = {
  async render() {
    return `
      <div class="container">
        <div id="loading"></div>

        <div id="main-container">
          <h1 tabindex="0" class="main-content__title">Explore Restaurant</h1>

          <section id="explore-restaurant"></section>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const listContainer = document.querySelector('#explore-restaurant');

    const data = await RestaurantSource.getRestaurantList();
    data.restaurants.forEach((restaurant) => {
      listContainer.innerHTML += cardFarest(restaurant);
    });
  },
};

export default Home;
