/*Dropdown Menu*/
$('.dropdown').click(function () {
	$(this).attr('tabindex', 1).focus();
	$(this).toggleClass('active');
	$(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
	$(this).removeClass('active');
	$(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
	$(this).parents('.dropdown').find('span').text($(this).text());
	$(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/


$('.dropdown-menu li').click(function () {
var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
msg = '<span class="msg">Hidden input value: ';
$('.msg').html(msg + input + '</span>');
}); 


///////////////////////////////////////////////////


const SERVER_URL = "https://tarifnik.ru/rabota";
let cardsBox = document.querySelector(".rates__list");
cardsBox.innerHTML = createLoader();

function sendReq({url, method="GET", body={}, headers={}}) {
  const settings = {
    method,
    body,
    headers,
	};

	if(method === "GET") {
    settings.body = undefined;
  }

  return fetch(SERVER_URL + url, settings);
}

sendReq({
	url: "/api/data_controller", 
	method: "GET"
})

.then((res) => {
	return res.json();
})

.then((cards) => {
	cardsBox.innerHTML = '';
	for(let i=0; i < cards.length; i++) {
		cardsBox.innerHTML += createCard(cards[i]);
	}
})

.catch((err) => {
	cardsBox.innerHTML = searchMessage (err);
});

function createCard(card) {
	return `
	<li class="rates__item">
					<h3 class="rates__item-title">${card.name}</h3>
					<div class="rates__item-content">
						<div class="rates__item-description">
							<svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g clip-path="url(#clip0)">
								<path d="M25.5 50C39.3071 50 50.5 38.8071 50.5 25C50.5 11.1929 39.3071 0 25.5 0C11.6929 0 0.5 11.1929 0.5 25C0.5 38.8071 11.6929 50 25.5 50Z" fill="#F4F4F4"/>
								<path d="M25.5 37.5C32.4036 37.5 38 31.9036 38 25C38 18.0964 32.4036 12.5 25.5 12.5C18.5964 12.5 13 18.0964 13 25C13 31.9036 18.5964 37.5 25.5 37.5Z" fill="#ECECEC" stroke="#979797" stroke-miterlimit="10"/>
								<path d="M25.5 36.7V12.8C25.5 12.7 25.4 12.6 25.2 12.7C24 13.7 18.8 18.5 18.8 25.8C18.8 31.3 23.3 35.6 24.9 37C25.1 37.2 25.5 37 25.5 36.7Z" fill="#ECECEC" stroke="#979797" stroke-miterlimit="10"/>
								<path d="M25.5 12.5C25.5 12.5 32.2 17.5 32.2 25.8C32.2 34.1 25.5 37.5 25.5 37.5" stroke="#979797" stroke-miterlimit="10"/>
								<path d="M38.7 30.8H12.3C11.7 30.8 11.3 30.4 11.3 29.8V20.1C11.3 19.5 11.7 19.1 12.3 19.1H38.6C39.2 19.1 39.6 19.5 39.6 20.1V29.8C39.7 30.4 39.2 30.8 38.7 30.8Z" fill="#ECECEC" stroke="#979797" stroke-miterlimit="10"/>
								<path d="M18.3 14.8C18.3 14.8 20.5 15.8 25.5 15.8C30.5 15.8 32.7 14.8 32.7 14.8" stroke="#979797" stroke-miterlimit="10"/>
								<path d="M18.3 35.2C18.3 35.2 20.5 34.2 25.5 34.2C30.5 34.2 32.7 35.2 32.7 35.2" stroke="#979797" stroke-miterlimit="10"/>
								<path d="M18.7 27.4L17.6 23.5L16.6 27.4H15.6L14 22.6H15L16.1 26.6L17.1 22.6H18.1L19.1 26.6L20.3 22.6H21.2L19.7 27.4H18.7Z" fill="#979797" stroke="#979797" stroke-width="0.1" stroke-miterlimit="10"/>
								<path d="M26.5 27.4L25.4 23.5L24.4 27.4H23.3L21.8 22.6H22.7L23.9 26.6L24.9 22.6H25.9L26.9 26.6L28.1 22.6H29L27.5 27.4H26.5Z" fill="#979797" stroke="#979797" stroke-width="0.1" stroke-miterlimit="10"/>
								<path d="M34.2 27.4L33.2 23.5L32.1 27.4H31.1L29.6 22.6H30.5L31.6 26.6L32.7 22.6H33.7L34.7 26.6L35.9 22.6H36.8L35.2 27.4H34.2Z" fill="#979797" stroke="#979797" stroke-width="0.1" stroke-miterlimit="10"/>
								</g>
								<defs>
								<clipPath id="clip0">
								<rect width="50" height="50" fill="white" transform="translate(0.5)"/>
								</clipPath>
								</defs>
							</svg>                  
							<p class="rates__item-text">До ${card.speed} Мбит/с</p>
						</div>
						<div class="rates__item-description">
							<svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g clip-path="url(#clip0)">
								<path d="M25.5 50C39.3071 50 50.5 38.8071 50.5 25C50.5 11.1929 39.3071 0 25.5 0C11.6929 0 0.5 11.1929 0.5 25C0.5 38.8071 11.6929 50 25.5 50Z" fill="#F4F4F4"/>
								<path d="M36.8 32.4H14.2C13.5 32.4 13 31.9 13 31.2V16.2C13 15.5 13.5 15 14.2 15H36.8C37.5 15 38 15.5 38 16.2V31.2C38 31.9 37.5 32.4 36.8 32.4Z" stroke="#979797" stroke-miterlimit="10"/>
								<path d="M20.3 35H30.7" stroke="#979797" stroke-miterlimit="10"/>
								<path d="M21.8 27.6V21.4H19.5V20.6H25.1V21.4H22.8V27.6H21.8Z" fill="#979797"/>
								<path d="M28 27.6L25.3 20.6H26.3L28.1 25.7C28.2 26.1 28.4 26.5 28.5 26.8C28.6 26.4 28.7 26 28.9 25.7L30.8 20.6H31.7L29 27.6H28Z" fill="#979797"/>
								</g>
								<defs>
								<clipPath id="clip0">
								<rect width="50" height="50" fill="white" transform="translate(0.5)"/>
								</clipPath>
								</defs>
							</svg>                  
							<p class="rates__item-text">${card.channels_count} каналов ${card.hd_channels_count} HD</p>
						</div>
					</div>
					<div class="rates__item-connect">
						<div class="rates__item-cost">
							${card.price}
							<div class="rates__item-value">
								руб мес
							</div>
						</div>
						<button type="button" class="button rates__submit-button">
							Подключить
						</button>
					</div>
				</li>
	`
}

function createLoader () {
	return `
	<div class="loader">
		<div class="loader-line"></div>
		<div class="loader-line"></div>
		<div class="loader-line"></div>
	</div>
	`
}

function searchMessage () {
	return `
	<p class="search-message">Ошибка сервера</p>
	`
}

function getValuesForm(form) {
  let body = {};
  const inputs = form.querySelectorAll("input"); 
  let l = inputs.length;
  for (let i = 0; i < l; i++) {
    const input = inputs[i];
    switch (input.type) {
      case "radio":
        if (!(input.checked)) {
          body[input.name] = input.value; 
        }
        break;
        default:
          body[input.name] = input.value; 
          break;
    }  
  }
  return body;
}

(function() {
  let formRequest = document.forms["form-request"];
  formRequest.addEventListener("submit", function(event) {
    event.preventDefault();
    const form = event.target;
    const values = getValuesForm(form);
    const phone = form.querySelector(".phone-js");
    const name = form.querySelector(".name-js");
		const address = form.querySelector(".address-js");
		console.log(values);

    
    sendReq({
      url: "/api/order_controller", 
      method: "POST", 
      body: JSON.stringify(values),
		})
		
		.then((res) => {
			return res.json();
		})

    .then(function (json) {
      if(json.success) {
        alert('Запрос отправлен'); 
      } else {
        throw errors;
      }
    })

    .catch(function(errors) {       
			alert(errors); 
    });
  });
})();