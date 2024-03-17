/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/mock-api/addititional-products.json":
/*!*************************************************!*\
  !*** ./src/mock-api/addititional-products.json ***!
  \*************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('[{"id":0,"name":"Кетчуп","price":60},{"id":1,"name":"Сырный","price":60},{"id":2,"name":"Блю-чиз","price":60},{"id":3,"name":"Барбекю","price":60}]');

/***/ }),

/***/ "./src/mock-api/product.json":
/*!***********************************!*\
  !*** ./src/mock-api/product.json ***!
  \***********************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('[{"id":1,"imageUrl":"https://yellowchimney.com/wp-content/uploads/2017/01/DSC_4166-1-e1484743363420.jpg","title":"Батат фри","price":220,"weight":{"value":140,"unit":"г"},"kbzhu":{"belki":26.7,"fat":17.38,"uglevody":17.2,"kallorii":324.08}},{"id":2,"imageUrl":"https://media.istockphoto.com/id/157431311/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D1%8D%D0%BD%D0%B4%D0%B2%D0%B8%D1%87-%D1%81-%D0%B8%D0%BD%D0%B4%D0%B5%D0%B9%D0%BA%D0%BE%D0%B9.jpg?s=612x612&w=0&k=20&c=SDQNmQVG-YUc5zR3FM9OcOvnU5v0fZ-9MmusnQys_Bc=","title":"Бутерброд","price":500,"weight":{"value":220,"unit":"г"},"kbzhu":{"belki":56.7,"fat":57.38,"uglevody":57.2,"kallorii":524.08}}]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mock_api_product_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mock-api/product.json */ "./src/mock-api/product.json");
/* harmony import */ var _mock_api_addititional_products_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock-api/addititional-products.json */ "./src/mock-api/addititional-products.json");



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
renderCards(_mock_api_product_json__WEBPACK_IMPORTED_MODULE_0__);

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
  const product = _mock_api_product_json__WEBPACK_IMPORTED_MODULE_0__.find((element) => element.id === id);
  const souses = _mock_api_addititional_products_json__WEBPACK_IMPORTED_MODULE_1__.map(
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

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map