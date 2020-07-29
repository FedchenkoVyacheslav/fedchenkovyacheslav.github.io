"use strict";$(".dropdown").click(function(){$(this).attr("tabindex",1).focus(),$(this).toggleClass("active"),$(this).find(".dropdown-menu").slideToggle(300)}),$(".dropdown").focusout(function(){$(this).removeClass("active"),$(this).find(".dropdown-menu").slideUp(300)}),$(".dropdown .dropdown-menu li").click(function(){$(this).parents(".dropdown").find("span").text($(this).text()),$(this).parents(".dropdown").find("input").attr("value",$(this).attr("id"))}),$(".dropdown-menu li").click(function(){var t="<strong>"+$(this).parents(".dropdown").find("input").val()+"</strong>";$(".msg").html('<span class="msg">Hidden input value: '+t+"</span>")});var t,e,n,i,r,s,a,o,l=document.querySelector(".rates__list");function d(t,e){for(var n=t.querySelectorAll("input"),i=t.querySelectorAll("textarea"),r=t.querySelector(".form__checkbox-indicator"),s=n.length,a=0;a<s;a++){var o=n[a];switch(o.type){case"checkbox":e[o.name]&&setInvalidCheck(r);break;default:e[o.name]&&(h(o),c(o,e[o.name]))}}s=i.length;for(var l=0;l<s;l++){var d=i[l];e[d.name]&&(h(d),c(d,e[d.name]))}}function c(n,t){var i=document.createElement("div");i.classList.add("invalid-feedback"),i.innerText=t,null==n.nextElementSibling&&(n.insertAdjacentElement("afterend",i),n.addEventListener("input",function t(e){i.remove(),n.removeEventListener("input",t)}))}function h(n){n.classList.add("form__input_bad"),n.addEventListener("input",function t(e){n.classList.remove("form__input_bad"),n.removeEventListener("input",t)})}l.innerHTML='\n\t<div class="loader">\n\t\t<div class="loader-line"></div>\n\t\t<div class="loader-line"></div>\n\t\t<div class="loader-line"></div>\n\t</div>\n\t',e=(t={url:"/api/data_controller",method:"GET"}).url,n=t.method,i=void 0===n?"GET":n,r=t.body,s=void 0===r?{}:r,a=t.headers,o={method:i,body:s,headers:void 0===a?{}:a},"GET"===i&&(o.body=void 0),fetch("https://tarifnik.ru/rabota"+e,o).then(function(t){return t.json()}).then(function(t){l.innerHTML="";for(var e=0;e<t.length;e++)l.innerHTML+=(n=t[e],'\n\t<li class="rates__item">\n\t\t\t\t\t<h3 class="rates__item-title">'.concat(n.name,'</h3>\n\t\t\t\t\t<div class="rates__item-content">\n\t\t\t\t\t\t<div class="rates__item-description">\n\t\t\t\t\t\t\t<svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t\t\t\t\t\t\t<g clip-path="url(#clip0)">\n\t\t\t\t\t\t\t\t<path d="M25.5 50C39.3071 50 50.5 38.8071 50.5 25C50.5 11.1929 39.3071 0 25.5 0C11.6929 0 0.5 11.1929 0.5 25C0.5 38.8071 11.6929 50 25.5 50Z" fill="#F4F4F4"/>\n\t\t\t\t\t\t\t\t<path d="M25.5 37.5C32.4036 37.5 38 31.9036 38 25C38 18.0964 32.4036 12.5 25.5 12.5C18.5964 12.5 13 18.0964 13 25C13 31.9036 18.5964 37.5 25.5 37.5Z" fill="#ECECEC" stroke="#979797" stroke-miterlimit="10"/>\n\t\t\t\t\t\t\t\t<path d="M25.5 36.7V12.8C25.5 12.7 25.4 12.6 25.2 12.7C24 13.7 18.8 18.5 18.8 25.8C18.8 31.3 23.3 35.6 24.9 37C25.1 37.2 25.5 37 25.5 36.7Z" fill="#ECECEC" stroke="#979797" stroke-miterlimit="10"/>\n\t\t\t\t\t\t\t\t<path d="M25.5 12.5C25.5 12.5 32.2 17.5 32.2 25.8C32.2 34.1 25.5 37.5 25.5 37.5" stroke="#979797" stroke-miterlimit="10"/>\n\t\t\t\t\t\t\t\t<path d="M38.7 30.8H12.3C11.7 30.8 11.3 30.4 11.3 29.8V20.1C11.3 19.5 11.7 19.1 12.3 19.1H38.6C39.2 19.1 39.6 19.5 39.6 20.1V29.8C39.7 30.4 39.2 30.8 38.7 30.8Z" fill="#ECECEC" stroke="#979797" stroke-miterlimit="10"/>\n\t\t\t\t\t\t\t\t<path d="M18.3 14.8C18.3 14.8 20.5 15.8 25.5 15.8C30.5 15.8 32.7 14.8 32.7 14.8" stroke="#979797" stroke-miterlimit="10"/>\n\t\t\t\t\t\t\t\t<path d="M18.3 35.2C18.3 35.2 20.5 34.2 25.5 34.2C30.5 34.2 32.7 35.2 32.7 35.2" stroke="#979797" stroke-miterlimit="10"/>\n\t\t\t\t\t\t\t\t<path d="M18.7 27.4L17.6 23.5L16.6 27.4H15.6L14 22.6H15L16.1 26.6L17.1 22.6H18.1L19.1 26.6L20.3 22.6H21.2L19.7 27.4H18.7Z" fill="#979797" stroke="#979797" stroke-width="0.1" stroke-miterlimit="10"/>\n\t\t\t\t\t\t\t\t<path d="M26.5 27.4L25.4 23.5L24.4 27.4H23.3L21.8 22.6H22.7L23.9 26.6L24.9 22.6H25.9L26.9 26.6L28.1 22.6H29L27.5 27.4H26.5Z" fill="#979797" stroke="#979797" stroke-width="0.1" stroke-miterlimit="10"/>\n\t\t\t\t\t\t\t\t<path d="M34.2 27.4L33.2 23.5L32.1 27.4H31.1L29.6 22.6H30.5L31.6 26.6L32.7 22.6H33.7L34.7 26.6L35.9 22.6H36.8L35.2 27.4H34.2Z" fill="#979797" stroke="#979797" stroke-width="0.1" stroke-miterlimit="10"/>\n\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t<defs>\n\t\t\t\t\t\t\t\t<clipPath id="clip0">\n\t\t\t\t\t\t\t\t<rect width="50" height="50" fill="white" transform="translate(0.5)"/>\n\t\t\t\t\t\t\t\t</clipPath>\n\t\t\t\t\t\t\t\t</defs>\n\t\t\t\t\t\t\t</svg>                  \n\t\t\t\t\t\t\t<p class="rates__item-text">До ').concat(n.speed,' Мбит/с</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="rates__item-description">\n\t\t\t\t\t\t\t<svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t\t\t\t\t\t\t<g clip-path="url(#clip0)">\n\t\t\t\t\t\t\t\t<path d="M25.5 50C39.3071 50 50.5 38.8071 50.5 25C50.5 11.1929 39.3071 0 25.5 0C11.6929 0 0.5 11.1929 0.5 25C0.5 38.8071 11.6929 50 25.5 50Z" fill="#F4F4F4"/>\n\t\t\t\t\t\t\t\t<path d="M36.8 32.4H14.2C13.5 32.4 13 31.9 13 31.2V16.2C13 15.5 13.5 15 14.2 15H36.8C37.5 15 38 15.5 38 16.2V31.2C38 31.9 37.5 32.4 36.8 32.4Z" stroke="#979797" stroke-miterlimit="10"/>\n\t\t\t\t\t\t\t\t<path d="M20.3 35H30.7" stroke="#979797" stroke-miterlimit="10"/>\n\t\t\t\t\t\t\t\t<path d="M21.8 27.6V21.4H19.5V20.6H25.1V21.4H22.8V27.6H21.8Z" fill="#979797"/>\n\t\t\t\t\t\t\t\t<path d="M28 27.6L25.3 20.6H26.3L28.1 25.7C28.2 26.1 28.4 26.5 28.5 26.8C28.6 26.4 28.7 26 28.9 25.7L30.8 20.6H31.7L29 27.6H28Z" fill="#979797"/>\n\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t<defs>\n\t\t\t\t\t\t\t\t<clipPath id="clip0">\n\t\t\t\t\t\t\t\t<rect width="50" height="50" fill="white" transform="translate(0.5)"/>\n\t\t\t\t\t\t\t\t</clipPath>\n\t\t\t\t\t\t\t\t</defs>\n\t\t\t\t\t\t\t</svg>                  \n\t\t\t\t\t\t\t<p class="rates__item-text">').concat(n.channels_count," каналов ").concat(n.hd_channels_count,' HD</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="rates__item-connect">\n\t\t\t\t\t\t<div class="rates__item-cost">\n\t\t\t\t\t\t\t').concat(n.price,'\n\t\t\t\t\t\t\t<div class="rates__item-value">\n\t\t\t\t\t\t\t\tруб мес\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<button type="button" class="button rates__submit-button">\n\t\t\t\t\t\t\tПодключить\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t'));var n}).catch(function(t){l.innerHTML='\n\t<p class="search-message">Ошибка сервера</p>\n\t'}),document.forms["form-request"].addEventListener("submit",function(t){t.preventDefault();var e=t.target,n=function(t){for(var e={},n=t.querySelectorAll("input"),i=n.length,r=0;r<i;r++){var s=n[r];switch(s.type){case"radio":s.checked||(e[s.name]=s.value);break;default:e[s.name]=s.value}}return e}(e);e.querySelector(".phone-js"),e.querySelector(".name-js"),e.querySelector(".address-js");console.log(n);var i={};return null===n.phone||""===n.phone?(i.phone="Это поле пустое",void d(e,i)):n.phone.length<11||11<n.phone.length?(i.phone="Номер телефона указан неверно",void d(e,i)):80<n.name.length?(i.name="Укажите Ваше настоящее имя",void d(e,i)):255<n.address.length?(i.address="Укажите Ваш настоящий адрес",void d(e,i)):void $.ajax({url:"https://tarifnik.ru/rabota/api/order_controller",dataType:"json",type:"POST",data:n,success:function(t){console.log(t)}})});