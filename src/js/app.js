import productsList from "../mock-api/product.json";
import addititionalProducts from "../mock-api/addititional-products.json";

const popup = document.querySelector(".popup");
const products = document.querySelector(".products");
const popupClose = document.querySelector(".popup__close");
const popupContent = document.querySelector(".popup__content");

function renderCards(productsArray) {
  productsArray.forEach((item) => {
    let card = document.createElement("div");

    const productCard = `
    <div id="${item.id}" class="products-card">
    <div class="products-img"><img src="${item.imageUrl}"></div>
    <h2>${item.title}</h2>
    <div>${item.price} ₽</div>
    <button class="enter__btn">Купить</button>
    </div>
  `;

    card.innerHTML = productCard;
    products.appendChild(card);
  });
}
renderCards(productsList);

const buyBtns = document.querySelectorAll(".enter__btn");

buyBtns.forEach((item) => {
  item.addEventListener("click", (e) => {
    const id = parseInt(e.target.parentNode.id, 10);
    renderPopup(id);
    popup.style.display = "block";
  });
});

popupClose.addEventListener("click", () => {
  popup.style.display = "none";
});

let totalCount = 0;

function renderPopup(id) {
  const product = productsList.find((element) => element.id === id);
  const souses = addititionalProducts.map(
    (item, index) =>
      `<div class="ingredients__row">
                    <div class="ingredients__title-wrap">
                      <div class="ingredients__title">${item.name} &nbsp;</div>
                      <div class="ingredients__price">+ ${item.price} ₽</div>
                    </div>
                    <div class="ingredients__counter" data-counter>
                      <button class="counter__btn counter__btn-prev" data-id=${index}>
                        -
                      </button>
                      <input class="counter__input" type="number" value="0"  />
                      <button class="counter__btn counter__btn-next" data-id=${index}>
                        +
                      </button>
                    </div>
                  </div>`
  );

  const popupLeft = `
  <div class="popup__left">
              <img class="popup__img" src="${product.imageUrl}" alt="${product.title}" />
              <div class="popup__properties properties">
                <div class="properties__title">КБЖУ (на порцию 300 г):</div>
                <div class="properties__rows">
                  <div class="properties__row">
                    <div class="properties__label">Белки</div>
                    <div class="properties__value">${product.kbzhu.belki} г</div>
                  </div>
                  <div class="properties__row">
                    <div class="properties__label">Жиры</div>
                    <div class="properties__value">${product.kbzhu.fat} г</div>
                  </div>
                  <div class="properties__row">
                    <div class="properties__label">Углеводы</div>
                    <div class="properties__value">${product.kbzhu.uglevody} г</div>
                  </div>
                  <div class="properties__row">
                    <div class="properties__label">Каллории</div>
                    <div class="properties__value">${product.kbzhu.kallorii} ккал</div>
                  </div>
                </div>
              </div>
            </div>
  `;

  const popupRight = `
  <div class="popup__right">
              <div class="popup__title-wrap">
                <div class="popup__title">${product.title}</div>
                <div class="popup__subtitle">${product.weight.value} ${
    product.weight.unit
  }</div>
              </div>
              <div class="popup__score">
                <div class="score__title">Соус на выбор</div>
                <div class="score__total"><span>0</span>/10 </div>
              </div>
              <div class="popup__ingredients ingredients">
                <div class="ingridients__rows">
                ${souses.join("")}
                  <div class="total">
                    <div class="total__title">${product.price} ₽</div>
                    <button class="total__btn">Добавить</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
  `;

  popupContent.innerHTML = popupLeft + popupRight;

  let totalSum = 0;

  function updateTotalPrice() {
    const scoreTotal = document.querySelector(".score__total");
    const ingredientsCounter = document.querySelectorAll(
      ".ingredients__counter"
    );
    ingredientsCounter.forEach((item) => {
      const souseId = item.dataset.id;
      console.log(souseId);
      souseId.addEventListener("click", () => {
        dataset.id === 0
          ? (totalSum -= souses.prise)
          : (totalSum += souses.prise);
      });
    });
    const sousesPrice = totalSum + " ₽";
    scoreTotal.insertAdjacentHTML("beforeend", sousesPrice);
  }

  updateTotalPrice();

  // function addSousePrice(souseId) {
  //   const selectedSouce = souses.find((souse) => souse.id === souseId);
  //   if (selectedSouce) {
  //     totalSum += selectedSouce.price;
  //     updateTotalPrice();
  //   }
  // }
  // addSousePrice(souseId);

  // addititionalProducts.forEach((item) => {
  //   if (prevBtn) totalPrice -= item.price;
  // });

  const ingridients = document.querySelectorAll(".ingredients__counter");
  const totalIngridients = document.querySelector(".score__total");
  ingridients.forEach((item) => {
    let count = 0;
    const prevBtn = item.children[0];
    const nextBtn = item.children[2];
    const input = item.children[1];
    // prevBtn.style.cursor = "not-allowed";
    // prevBtn.style.border = "1px #c4c4c4";
    prevBtn.style.color = "#c4c4c4";
    prevBtn.addEventListener("click", () => {
      if (totalCount <= 0 || count <= 0) {
        prevBtn.style.color = "#c4c4c4";
        // const sauceId = parseInt(prevBtn.dataset.id);
        // addSousePrice(sauceId);
        // nextBtn.style.cursor = "default";
        return;
      }
      totalCount -= 1;
      count -= 1;
      input.value = count;
      totalIngridients.firstElementChild.textContent = totalCount;
      nextBtn.style.cursor = "pointer";
      nextBtn.style.color = "black";
    });
    nextBtn.addEventListener("click", () => {
      if (totalCount >= 10 || count >= 10) {
        // sauceId = parseInt(nextBtn.dataset.id);
        // addSousePrice(sauceId);
        nextBtn.style.color = "#c4c4c4";
        nextBtn.style.cursor = "default";
        return;
      }
      totalCount += 1;
      count += 1;
      input.value = count;
      totalIngridients.firstElementChild.textContent = totalCount;
      prevBtn.style.cursor = "pointer";
      prevBtn.style.color = "black";
    });
  });

  // const counters = document.querySelectorAll("[data-counter]");
  // if (counters) {
  //   counters.forEach((counter) => {
  //     counter.addEventListener("click", (e) => {
  //       const target = e.target;

  //       if (target.closest(".counter__btn")) {
  //         let value = parseInt(
  //           target.closest(".ingredients__counter").querySelector("input").value
  //         );
  //         // let value = parseInt(
  //         //   (target.closest(".ingredients__counter")
  //         // ).querySelector("input").value;
  //         if (target.classList.contains(".counter__btn-prev")) {
  //           value--;
  //         } else {
  //           value++;
  //         }

  //         if (value <= 0) {
  //           value = 0;
  //           target
  //             .closest(".ingredients__counter")
  //             .querySelector(".counter__btn-prev")
  //             .classList.add("disabled");
  //           // } else if (value <= 10) {
  //           //   value = 10;
  //           // }
  //           target
  //             .closest(".ingredients__counter")
  //             .querySelector(".counter__input").value = value;
  //         }
  //       }
  //     });
  //   });
  // }
}
