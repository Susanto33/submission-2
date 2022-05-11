import FavoriteFarestIdb from '../../data/favorite-farest-idb';
import cardFarest from '../templates/get-farest';

const Favorite = {
  async render() {
    return `
      <div class="container">
        <h2 class="title-container">Favorited Resto</h2>

        <section id="fav-resto"></section>
      </div>
    `;
  },

  async afterRender() {
    const data = await FavoriteFarestIdb.getAllResto();
    const favRestoContainer = document.querySelector('#fav-resto');
    if (data.length === 0) {
      favRestoContainer.innerHTML = `
        Empty favorite Resto.
      `;
    }

    data.forEach((resto) => {
      favRestoContainer.innerHTML += cardFarest(resto);
    });
  },
};

export default Favorite;
