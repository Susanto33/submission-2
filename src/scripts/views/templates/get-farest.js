import CONFIG from '../../globals/config';

const restoDetail = (resto) => `
  <div class="detail">
    <div class="img-container">
        <img class="detail-img" alt="${resto.name}" src="${
  CONFIG.BASE_IMAGE_URL + resto.pictureId
}"/>
    </div>

    <ul class="detail-info">
      <li>
        <i title="restaurant" class="fas fa-store-alt icon-primary"></i>
        <p class="detail-name-address-rating">${resto.name}</p>
        </li>

      <li>
        <i title="address" class="fas fa-map-marker-alt icon-primary"></i>
        <p class="detail-name-address-rating">${resto.address}, ${
  resto.city
}</p>
        </li>

      <li>
        <i title="ratings" class="fas fa-star icon-primary"></i>
        <p class="detail-name-address-rating">${resto.rating}</p>
      </li>

      <li><p class="detail-desc">${resto.description}</p></li>

      <li>${resto.categories
        .map(
          (category) => `
            <span class="category">${category.name}</span>
          `,
        )
        .join('')}
      </li>
    </ul>

    <h3>Menu</h3>

    <div class="detail-menu">
      <div class="detail-food">
        <h4>Food</h4>
        <ul>
          ${resto.menus.foods
            .map(
              (food, i) => `
                <li><p>${i + 1}) ${food.name}</p></li>
              `,
            )
            .join('')}
        <ul>
      </div>

      <div class="detail-drink">
        <h4>Drink</h4>
        <ul>
          ${resto.menus.drinks
            .map(
              (drink, i) => `
                <li><p>${i + 1}) ${drink.name}</p></li>
              `,
            )
            .join('')}
        <ul>
      </div>
    </div>

    <h3 class="title-review">Reviews</h3>

    <div class="detail-review">
    ${resto.customerReviews
      .map(
        (review) => `
          <div class="detail-review-item">
            <div class="review-header">
              <p class="review-name">${review.name}</p>

              <p class="review-date">${review.date}</p>
            </div>

            <div class="review-body">
              ${review.review}
            </div>
          </div>
        `,
      )
      .join('')}
    </div>
  </div>
`;

const cardFarest = (resto) => `
    <div tabindex="0" class="card">
      <a href="#/resto/${resto.id}" class="card-a-tag">
        <div class="img-container">
          <img tabindex="0" class="card-image" crossorigin="anonymous" alt="${
            resto.name
          }" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}"/>
          <span tabindex="0" class="card-rating">
            <i title="ratings" class="fa fa-star"></i>
            <span>${resto.rating}</span>
          </span>
        </div>

        <div tabindex="0" class="card-content">
          <h2 class="card-content-title">${resto.name} - ${resto.city}</h2>
          <p class="truncate">${resto.description}</p>
        </div>
      </a>
    </div>
  `;

export default {
    restoDetail,
    cardFarest,
};
