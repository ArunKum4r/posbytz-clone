const customers = [
  "https://posbytz.com/wp-content/uploads/2023/09/maaza.png",
  "https://posbytz.com/wp-content/uploads/2023/09/Kebab-time.png",
  "https://posbytz.com/wp-content/uploads/2023/02/shero-01.png",
  "https://posbytz.com/wp-content/uploads/2023/07/msfood.png",
  "https://posbytz.com/wp-content/uploads/2023/09/Al-karakand-e1695319053772.png",
  "https://posbytz.com/wp-content/uploads/2023/09/Jazz-cafe.jpg",
  "https://posbytz.com/wp-content/uploads/2023/09/HOT-POT.png",
  "https://posbytz.com/wp-content/uploads/2023/09/Diamond-Restaurant.png",
];

const testimonials = [
  {
    img: "https://posbytz.com/wp-content/uploads/2023/09/maaza-85x90.png",
    name: "MazaArabia, KSA",
    review:
      "We are providing broast chicken food across KSA with about 25 outlets and growing. With posbytz we have automated the entire operations from purchases, inventory, sales and also enabled our own online ordering system with ease. We will definetly recomended PosBytz to all restaurant ERP Software to F&B brands expanding as franchise business",
  },
  {
    img: "https://posbytz.com/wp-content/uploads/2021/09/posbytz_review_farmarika.webp",
    name: "Farmarika",
    review:
      "This ERP platform is simple and excellent . It is has the omnichannel model to sell the products. I have been using this product for more than 1 year. It is very good to manage the catalogue, items, pricing, taxing , customers, employees etc",
  },
  {
    img: "https://posbytz.com/wp-content/uploads/2021/09/tehran_taste_persia-85x90.png",
    name: "Tehran - The Taste of Persia",
    review:
      "I have been using PosBytz for more than two years, would definetly recommend to all my dellow restaurant owners given the fact it gives complete control over your business. Best would be the branded apps and online ordering platform integrated with POS and inventory.",
  },
  {
    img: "https://posbytz.com/wp-content/uploads/2023/09/Al-karakand-e1695319023203-83x71.png",
    name: "Alkarkand Abha KSA",
    review:
      "We have rceently migrated our software to PosBytz so far have been always improvising the features based on request an d strongly recommend for F&B groups managing complex restaurant operations with multiple brands from purchases, inventory, transfers, Accounting to P&L reports. Integrated QR code ordering system with POS works seamlessly and gives a great customer experience.",
  },
  {
    img: "https://posbytz.com/wp-content/uploads/2023/09/Sams-Pizza-85x90.png",
    name: "Sam's Pasta Pizza, Qatar",
    review:
      "We are an traditional Italian cuisine based brand. Have been using PosBytz for our Restaurant Management operations and so far there has been no issues with respect to the software and as a owner can able see my business online from anywhere. PosBytz is very easy to use for setting up menu , ingredients/recipes , POS , inventory etc..,",
  },
];

window.addEventListener("load", () => {
  // Features
  const featuresText = document.querySelector(".features-container");
  const pos = document.querySelector("#pos");
  const order = document.querySelector("#order");
  const purchase = document.querySelector("#purchase");
  const ecom = document.querySelector("#ecom");
  const acc = document.querySelector("#acc");
  const crm = document.querySelector("#crm");
  const hr = document.querySelector("#hr");
  const questions = document.querySelectorAll(".question-wrapper");
  const nav1 = document.querySelectorAll(".nav--links__items");
  const nav2 = document.querySelectorAll(".nav--links2__items");
  const reviews = document.querySelector(".reviews--wrapper");
  const swipe = document.querySelector(".swipe");
  const swipeLeft = document.querySelector(".swipeLeft");
  const swipeRight = document.querySelector(".swipeRight");
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav--links");

  burger.addEventListener("click", () => {
    burger.classList.toggle("fa-x");
    nav.classList.toggle("navbar--links__open");
  });

  // Customer Swipe
  let custSwiper = [0, 1, 2];

  swipeLeft.addEventListener("click", () => {
    let temp;
    custSwiper[2] >= customers.length ? (temp = 0) : (temp = custSwiper[2] + 1);
    custSwiper = [custSwiper[1], custSwiper[2], temp];
    createSwiper();
  });

  swipeRight.addEventListener("click", () => {
    let temp;
    custSwiper[0] === 0
      ? (temp = customers.length - 1)
      : (temp = custSwiper[0] - 1);
    custSwiper = [temp, custSwiper[0], custSwiper[1]];
    createSwiper();
  });

  const createSwiper = () => {
    swipe.innerHTML = `<img src="${customers[custSwiper[0]]}"></img>
                       <img src="${customers[custSwiper[1]]}"></img>
                       <img src="${customers[custSwiper[2]]}"></img>`;
  };

  createSwiper();

  // Reviews Start
  let l = 0;
  let r = 1;
  const left = document.querySelector(".left");
  const right = document.querySelector(".right");

  left.addEventListener("click", () => {
    if (l === 0) {
      l = testimonials.length - 1;
    }
    l -= 1;
    if (r === 0) {
      r = testimonials.length - 1;
    }
    r -= 1;
    reviewl.innerHTML = `<div class="reviews--header">
                          <div class="detail">
                            <img src="${testimonials[l].img}" alt="logo">
                            <h4>${testimonials[l].name}</h4>
                          </div>
                        <div class="ratings">
                          <i class="fa-regular fa-star"></i>
                          <i class="fa-regular fa-star"></i>
                          <i class="fa-regular fa-star"></i>
                          <i class="fa-regular fa-star"></i>
                          <i class="fa-regular fa-star"></i>
                        </div>
                      </div>
                      <p>${testimonials[l].review}</p>`;

    reviewr.innerHTML = `<div class="reviews--header">
                          <div class="detail">
                            <img src="${testimonials[r].img}" alt="logo">
                            <h4>${testimonials[r].name}</h4>
                          </div>
                        <div class="ratings">
                          <i class="fa-regular fa-star"></i>
                          <i class="fa-regular fa-star"></i>
                          <i class="fa-regular fa-star"></i>
                          <i class="fa-regular fa-star"></i>
                          <i class="fa-regular fa-star"></i>
                        </div>
                        </div>
                        <p>${testimonials[r].review}</p>`;
  });

  right.addEventListener("click", () => {
    if (r === testimonials.length - 1) {
      r = 0;
    }
    r += 1;
    if (l === testimonials.length - 1) {
      l = 0;
    }
    l++;

    reviewl.innerHTML = `  <div class="reviews--header">
  <div class="detail">
      <img src="${testimonials[l].img}" alt="logo">
      <h4>${testimonials[l].name}</h4>
  </div>
  <div class="ratings">
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
  </div>
</div>
<p>${testimonials[l].review}</p>`;

    reviewr.innerHTML = `<div class="reviews--header">
<div class="detail">
    <img src="${testimonials[r].img}" alt="logo">
    <h4>${testimonials[r].name}</h4>
</div>
<div class="ratings">
    <i class="fa-regular fa-star"></i>
    <i class="fa-regular fa-star"></i>
    <i class="fa-regular fa-star"></i>
    <i class="fa-regular fa-star"></i>
    <i class="fa-regular fa-star"></i>
</div>
</div>
<p>${testimonials[r].review}</p>`;
  });

  const reviewl = document.createElement("div");
  reviewl.classList.add("reviews");
  reviewl.innerHTML = `  <div class="reviews--header">
  <div class="detail">
      <img src="${testimonials[l].img}" alt="logo">
      <h4>${testimonials[l].name}</h4>
  </div>
  <div class="ratings">
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
  </div>
</div>
<p>${testimonials[l].review}</p>`;

  const reviewr = document.createElement("div");
  reviewr.classList.add("reviews");
  reviewr.innerHTML = `<div class="reviews--header">
<div class="detail">
    <img src="${testimonials[r].img}" alt="logo">
    <h4>${testimonials[r].name}</h4>
</div>
<div class="ratings">
    <i class="fa-regular fa-star"></i>
    <i class="fa-regular fa-star"></i>
    <i class="fa-regular fa-star"></i>
    <i class="fa-regular fa-star"></i>
    <i class="fa-regular fa-star"></i>
</div>
</div>
<p>${testimonials[r].review}</p>`;
  reviews.appendChild(reviewl);
  console.log(screen.width);
  if (screen.width > 640) {
    reviews.appendChild(reviewr);
  }
  // Reviews End

  // Drop Down
  nav1.forEach((nav) => {
    nav.addEventListener("mouseover", () => {
      if (nav.children.length > 1) {
        if (screen.width > 720) {
          nav.children[1].classList.add("navbar--links__open1");
        }
        nav.children[1].classList.add("navbar--links__open");
      }
    });

    nav.addEventListener("mouseout", () => {
      if (screen.width > 720) {
        nav.children[1].classList.remove("navbar--links__open1");
      }
      nav.children[1].classList.remove("navbar--links__open");
    });
  });

  nav2.forEach((nav) => {
    nav.addEventListener("mouseover", () => {
      if (nav.children.length > 1) {
        if (screen.width > 720) {
          nav.children[1].classList.add("navbar--links__open1");
        }
        nav.children[1].classList.add("navbar--links__open");
      }
    });

    nav.addEventListener("mouseout", () => {
      if (screen.width > 720) {
        nav.children[1].classList.remove("navbar--links__open1");
      }
      nav.children[1].classList.remove("navbar--links__open");
    });
  });

  // DropDown end

  // Features Start
  featuresText.innerHTML = `<div class="features-container__text">
  <h3>Our POS software offers a wide range of powerful features designed to enhance your retail and restaurant operations. Here are some key highlights:</h3>
  <p><i class="fa-solid fa-check"></i>Easy-to-Use Interface</p>
  <p><i class="fa-solid fa-check"></i>Device Agnotic can be installed in Windows, Android and IOS</p>
  <p><i class="fa-solid fa-check"></i>Works well for both Restaurant and Retail business</p>
  <p><i class="fa-solid fa-check"></i>Multiple channel Sales management</p>
  <p><i class="fa-solid fa-check"></i>Integrations with printers, scanner ,weighing scales and label printers</p>
  </div>
  <img src="https://posbytz.com/wp-content/uploads/2023/07/Untitled-87.png" alt="">`;

  pos.addEventListener("click", () => {
    const active = document.querySelector(".active");
    if (active) {
      active.classList.remove("active");
    }
    pos.classList.add("active");
    featuresText.replaceChildren = "";
    featuresText.innerHTML = `<div class="features-container__text">
    <h3>Our POS software offers a wide range of powerful features designed to enhance your retail and restaurant operations. Here are some key highlights:</h3>
    <p><i class="fa-solid fa-check"></i>Easy-to-Use Interface</p>
    <p><i class="fa-solid fa-check"></i>Device Agnotic can be installed in Windows, Android and IOS</p>
    <p><i class="fa-solid fa-check"></i>Works well for both Restaurant and Retail business</p>
    <p><i class="fa-solid fa-check"></i>Multiple channel Sales management</p>
    <p><i class="fa-solid fa-check"></i>Integrations with printers, scanner ,weighing scales and label printers</p>
    </div>
    <img src="https://posbytz.com/wp-content/uploads/2023/07/Untitled-87.png" alt="">`;
  });

  order.addEventListener("click", () => {
    const active = document.querySelector(".active");
    if (active) {
      active.classList.remove("active");
    }
    order.classList.add("active");
    featuresText.replaceChildren = "";
    featuresText.innerHTML = `<div class="features-container__text">
    <h3>Our order management system is designed to streamline and optimize the orders from multiple channels outlets or online channels. Here are some key features of our order management system:</h3>
    <p><i class="fa-solid fa-check"></i>Manage Sales orders from multiple channels</p>
    <p><i class="fa-solid fa-check"></i>Customise multi pricing for same items different channels</p>
    <p><i class="fa-solid fa-check"></i>Manage inventory of SKUs for different channels</p>
    <p><i class="fa-solid fa-check"></i>Get consolidates reports based on orders from all channels</p>
    <p><i class="fa-solid fa-check"></i>Manage Delivery for online orders through our Delivery options</p>
    </div>
    <img src="https://posbytz.com/wp-content/uploads/2023/07/Untitled-6-1.png" alt="">`;
  });

  purchase.addEventListener("click", () => {
    const active = document.querySelector(".active");
    if (active) {
      active.classList.remove("active");
    }
    purchase.classList.add("active");
    featuresText.replaceChildren = "";
    featuresText.innerHTML = `<div class="features-container__text">
      <h3>Our POS software offers a wide range of powerful features designed to enhance your retail and restaurant operations. Here are some key highlights:</h3>
      <p><i class="fa-solid fa-check"></i>Easy-to-Use Interface</p>
      <p><i class="fa-solid fa-check"></i>Device Agnotic can be installed in Windows, Android and IOS</p>
      <p><i class="fa-solid fa-check"></i>Works well for both Restaurant and Retail business</p>
      <p><i class="fa-solid fa-check"></i>Multiple channel Sales management</p>
      <p><i class="fa-solid fa-check"></i>Integrations with printers, scanner ,weighing scales and label printers</p>
      </div>
      <img src="https://posbytz.com/wp-content/uploads/2023/07/Untitled-87.png" alt="">`;
  });

  ecom.addEventListener("click", () => {
    const active = document.querySelector(".active");
    if (active) {
      active.classList.remove("active");
    }
    ecom.classList.add("active");
  });

  acc.addEventListener("click", () => {
    const active = document.querySelector(".active");
    if (active) {
      active.classList.remove("active");
    }
    acc.classList.add("active");
  });

  crm.addEventListener("click", () => {
    const active = document.querySelector(".active");
    if (active) {
      active.classList.remove("active");
    }
    crm.classList.add("active");
  });

  hr.addEventListener("click", () => {
    const active = document.querySelector(".active");
    if (active) {
      active.classList.remove("active");
    }
    hr.classList.add("active");
  });
  // Features End

  // Faq
  questions.forEach((question) => {
    const q = question;
    q.addEventListener("click", () => {
      q.children[1].classList.toggle("show-answer");
      q.children[0].classList.toggle("question-open");
      q.children[0].children[0].classList.toggle("caret-open");
    });
  });
});