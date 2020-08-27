document.querySelector(".animated-icon").onclick = function() {
  this.classList.toggle("open")
}

let buttonMobileHeader = document.querySelector(".header__mobile-menu--js");
let mobileHeader = document.querySelector(".mobile-header");

buttonMobileHeader.onclick = () => mobileHeader.classList.toggle("mobile-header--open");
window.addEventListener("keydown", function (event) {
	if (mobileHeader.classList.contains("mobile-header--open") && event.code === "Escape") {
		mobileHeader.classList.remove("mobile-header--open");
		buttonMobileHeader.focus();
	}
});

let inputs = document.querySelectorAll(".form__input");
for(let i = 0; i < inputs.length; i++) {
  let input = inputs[i];
  input.onfocus = () => input.classList.add("form__input--focus");
  input.onblur = () => {
    if (input.value === '') {
      input.classList.remove("form__input--focus");
    } 
  }
}

function getValuesForm(form) {
  let body = {};
  const inputs = form.querySelectorAll("input"); 
  const textareas = form.querySelectorAll("textarea");
  let l = inputs.length;
  for (let i = 0; i < l; i++) {
    const input = inputs[i];
    body[input.name] = input.value;     
  }
  l = textareas.length;
  for (let i = 0; i < l; i++) {  
    const textarea = textareas[i];
    body[textarea.name] = textarea.value; 
  }
  return body;
}

function setFormErrors(form, errors) {
  const inputs = form.querySelectorAll("input");
  const textareas = form.querySelectorAll("textarea");
  let l = inputs.length;
  for (let i = 0; i < l; i++) {
    const input = inputs[i];
      setInvalidInput(input);
      errorMessageInputCreate(input, errors[input.name]);
  }
  l = textareas.length;
  for (let i = 0; i < l; i++) {  
    const textarea = textareas[i];
    if(errors[textarea.name]) {
      setInvalidInput(textarea);
      errorMessageInputCreate(textarea, errors[textarea.name]);
    }
  }
}

function errorMessageInputCreate(input, text) {
  let message = document.createElement("div");
  message.classList.add("invalid-feedback");
  message.innerText = text;

  let nextMessage = input.nextElementSibling.nextElementSibling;
  if(nextMessage != null) {
    return
  }

  input.insertAdjacentElement("afterend", message);
  input.addEventListener("input", function handlerInput(event){
    message.remove();
    input.removeEventListener("input", handlerInput);
  })
}


function setInvalidInput(input) {
  input.classList.add("form__input--bad");
  input.addEventListener("input", function handlerInput(event) {
    input.classList.remove("form__input--bad");
    input.removeEventListener("input", handlerInput);
  })
}

function mailCheck(email) {
  return email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
}

(function() {
  let formRequest = document.forms["form-request"];
  formRequest.addEventListener("submit", function(event) {
    event.preventDefault();
    const form = event.target;
    const values = getValuesForm(form);
    const name = form.querySelector(".name-js");
    const email = form.querySelector(".email-js");
    const message = form.querySelector(".message-js");
    let errors = {};

    console.log(values)

    if(values.email === null || values.email === "") {
      errors.email = 'This field is required';
    }
    else if(!mailCheck(values.email)) {
      errors.email = 'Please enter valid phone or E-mail';
    }
    else {
      return;
    }
    
    if(values.name === null || values.name === "") {
      errors.name = 'This field is required';
    }
    else if(parseInt(name.value)) {
      errors.name = 'This name is not valid';
    }
    else if(values.name.length < 3 || values.name.length >= 20) {
      errors.name = 'Your name is too short or too long';
    }
    else {
      return;
    }

    if(values.message === null || values.message === "") { 
      errors.message = ' ';
    }
    else {
      return;
    }

    setFormErrors(form, errors);
  });
})();

(function(a){function b(a){return a.replace(/[&<>"'`=\/]/g,function(a){return e[a]})}var c={host:"https://www.instagram.com/",username:"",tag:"",container:"",display_profile:!0,display_biography:!0,display_gallery:!0,display_igtv:!1,callback:null,styling:!0,items:8,items_per_row:4,margin:.5,image_size:640,lazy_load:!1,on_error:console.error},d={150:0,240:1,320:2,480:3,640:4},e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};a.instagramFeed=function(e){var f=a.fn.extend({},c,e);if(""==f.username&&""==f.tag)return f.on_error("Instagram Feed: Error, no username nor tag defined.",1),!1;if("undefined"!=typeof f.get_data&&console.warn("Instagram Feed: options.get_data is deprecated, options.callback is always called if defined"),null==f.callback&&""==f.container)return f.on_error("Instagram Feed: Error, neither container found nor callback defined.",2),!1;var g=""==f.username,h=g?f.host+"explore/tags/"+f.tag+"/":f.host+f.username+"/";return a.get(h,function(c){try{c=c.split("window._sharedData = ")[1].split("</script>")[0]}catch(a){return void f.on_error("Instagram Feed: It looks like the profile you are trying to fetch is age restricted. See https://github.com/jsanahuja/InstagramFeed/issues/26",3)}if(c=JSON.parse(c.substr(0,c.length-1)),c=c.entry_data.ProfilePage||c.entry_data.TagPage,"undefined"==typeof c)return void f.on_error("Instagram Feed: It looks like YOUR network has been temporary banned because of too many requests. See https://github.com/jsanahuja/jquery.instagramFeed/issues/25",4);if(c=c[0].graphql.user||c[0].graphql.hashtag,""!=f.container){var e={profile_container:"",profile_image:"",profile_name:"",profile_biography:"",gallery_image:""};if(f.styling){e.profile_container=" style='text-align:center;'",e.profile_image=" style='border-radius:10em;width:15%;max-width:125px;min-width:50px;'",e.profile_name=" style='font-size:1.2em;'",e.profile_biography=" style='font-size:1em;'";var h=(100-2*f.margin*f.items_per_row)/f.items_per_row;e.gallery_image=" style='margin:"+f.margin+"% "+f.margin+"%;width:"+h+"%;float:left;'"}var j="";f.display_profile&&(j+="<div class='instagram_profile'"+e.profile_container+">",j+="<img class='instagram_profile_image' src='"+c.profile_pic_url+"' alt='"+(g?c.name+" tag pic":c.username+" profile pic")+"'"+e.profile_image+(f.lazy_load?" loading='lazy'":"")+" />",j+=g?"<p class='instagram_tag'"+e.profile_name+"><a href='https://www.instagram.com/explore/tags/"+f.tag+"' rel='noopener' target='_blank'>#"+f.tag+"</a></p>":"<p class='instagram_username'"+e.profile_name+">@"+c.full_name+" (<a href='https://www.instagram.com/"+f.username+"' rel='noopener' target='_blank'>@"+f.username+"</a>)</p>",!g&&f.display_biography&&(j+="<p class='instagram_biography'"+e.profile_biography+">"+c.biography+"</p>"),j+="</div>");var k="undefined"==typeof d[f.image_size]?d[640]:d[f.image_size];if(f.display_gallery)if("undefined"!=typeof c.is_private&&!0===c.is_private)j+="<p class='instagram_private'><strong>This profile is private</strong></p>";else{var l=(c.edge_owner_to_timeline_media||c.edge_hashtag_to_media).edges;s=l.length>f.items?f.items:l.length,j+="<div class='instagram_gallery'>";for(var m=0;m<s;m++){var n,o,p,q="https://www.instagram.com/p/"+l[m].node.shortcode;switch(l[m].node.__typename){case"GraphSidecar":o="sidecar",n=l[m].node.thumbnail_resources[k].src;break;case"GraphVideo":o="video",n=l[m].node.thumbnail_src;break;default:o="image",n=l[m].node.thumbnail_resources[k].src;}p="undefined"!=typeof l[m].node.edge_media_to_caption.edges[0]&&"undefined"!=typeof l[m].node.edge_media_to_caption.edges[0].node&&"undefined"!=typeof l[m].node.edge_media_to_caption.edges[0].node.text&&null!==l[m].node.edge_media_to_caption.edges[0].node.text?l[m].node.edge_media_to_caption.edges[0].node.text:"undefined"!=typeof l[m].node.accessibility_caption&&null!==l[m].node.accessibility_caption?l[m].node.accessibility_caption:(g?c.name:c.username)+" image "+m,j+="<a href='"+q+"' class='instagram-"+o+"' rel='noopener' target='_blank'>",j+="<img"+(f.lazy_load?" loading='lazy'":"")+" src='"+n+"' alt='"+b(p)+"'"+e.gallery_image+" />",j+="</a>"}j+="</div>"}if(f.display_igtv&&"undefined"!=typeof c.edge_felix_video_timeline){var r=c.edge_felix_video_timeline.edges,s=r.length>f.items?f.items:r.length;if(0<r.length){j+="<div class='instagram_igtv'>";for(var m=0;m<s;m++)j+="<a href='https://www.instagram.com/p/"+r[m].node.shortcode+"' rel='noopener' target='_blank'>",j+="<img"+(f.lazy_load?" loading='lazy'":"")+" src='"+r[m].node.thumbnail_src+"' alt='"+f.username+" instagram image "+m+"'"+e.gallery_image+" />",j+="</a>";j+="</div>"}}a(f.container).html(j)}null!=f.callback&&f.callback(c)}).fail(function(a){f.on_error("Instagram Feed: Unable to fetch the given user/tag. Instagram responded with the status code: "+a.status,5)}),!0}})(jQuery);

    (function ($) {
        $(window).on('load', function () {
            $.instagramFeed({
                'username': 'arylus_esthetics', //Имя пользователя
                'container': "#instafeed", //Контейнер для изображений
                'display_profile': false, //Отображение профиля
                'display_biography': false, //Отображение биографии
                'display_gallery': true, //Отображение галереи
                'styling': false, //Стандартные стили библиотеки
                'items': 6, //Количество изображений в галереи
                'items_per_row': 6, //Количество изображений в ряд
                'margin': 0 //Отступ между изображениями
            });
        });
    })(jQuery);