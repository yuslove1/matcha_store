//the ritual section card details
const theRitual = [
    {
        number: 1,
        photo: "/assets/photos/measure.jpg",
        title: "Measure",
        description: "2 bamboo scoops of premium matcha powder",
       
    },
    {
        number: 2,
        photo: "/assets/photos/sift.jpg",
        title: "Sift",
        description: "Gentle sifting for the smoothest texture",
    },
    {
        number: 3,
        photo: "/assets/photos/whisk.jpg",
        title: "Whisk",
        description: "Traditional M-pattern whisking technique",
    },
    {
        number: 4,
        photo: "/assets/photos/savor.jpg",
        title: "Savor",
        description: "Mindful sipping in peaceful moments",
    },
]

//The our blends section cards details
const ourBlends = [
    {
        number: 1,
        photo: "/assets/photos/ourBlend1.jpg",
        price: "$42",
        stars: 5,
        title: "Original Blend",
        description: "Pure traditional matcha for daily rituals",
    },
    {
        number: 2,
        photo: "/assets/photos/ourBlend2.avif",
        price: "$68",
        stars: 5,
        title: "Ceremonial Grade",
        description: "Premium stone-ground for special moments",
    },
    {
        number: 3,
        photo: "/assets/photos/ourBlend3.jpg",
        price: "$38",
        stars: 5,
        title: "Latte Blend",
        description: "Smooth and creamy for mondern tastes",
    },
];

//The our customer ritual  section cards details
const customerRituals = [
    {
        photo: "/assets/photos/drinking1.jpg",
        comment: "My morning ritual has never felt so peaceful",
        name: "Sarah Chan",
    },
    {
        photo: "/assets/photos/drinking2.jpg",
        comment: "The enegy boost without the crash is incredible",
        name: "Marcus Rivera",
    },
    {
        photo: "/assets/photos/drinking3.jpg",
        comment: "Authentic tasts that transports me to Kyoto",
        name: "Yuki Tanaka",
    },
]

const whyMatcha = [
    {
        svg: `<svg fill="#1a811a" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#1a811a"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.605 2.022v0zM18.605 2.022l-2.256 11.856 8.174 0.027-11.127 16.072 2.257-13.043-8.174-0.029zM18.606 0.023c-0.054 0-0.108 0.002-0.161 0.006-0.353 0.028-0.587 0.147-0.864 0.333-0.154 0.102-0.295 0.228-0.419 0.373-0.037 0.043-0.071 0.088-0.103 0.134l-11.207 14.832c-0.442 0.607-0.508 1.407-0.168 2.076s1.026 1.093 1.779 1.099l5.773 0.042-1.815 10.694c-0.172 0.919 0.318 1.835 1.18 2.204 0.257 0.11 0.527 0.163 0.793 0.163 0.629 0 1.145-0.294 1.533-0.825l11.22-16.072c0.442-0.607 0.507-1.408 0.168-2.076-0.34-0.669-1.026-1.093-1.779-1.098l-5.773-0.010 1.796-9.402c0.038-0.151 0.057-0.308 0.057-0.47 0-1.082-0.861-1.964-1.939-1.999-0.024-0.001-0.047-0.001-0.071-0.001v0z"></path> </g></svg>`,
        title: "Sustained Energy",
        description: "Natural caffeine release withut the crash, keeping you energized for hours.",
    },
    {
        svg: `<svg viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#1a811a"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#1a811a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`,
        title: "Inner Calm",
        description: "L-theanine promotes relaxation and reduces stress while maintaining alertness",
    },
    {
        svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7086 1.53214C10.9786 1.05676 10.078 0.917375 9.27255 1.04467C8.46803 1.17183 7.62325 1.5904 7.12591 2.39445C6.9332 2.70601 6.81024 3.04646 6.7559 3.40767C5.97312 3.35525 5.18086 3.59264 4.58547 4.08919C3.98255 4.59201 3.59741 5.34432 3.59741 6.25684C3.59741 6.55614 3.63851 6.86315 3.72008 7.17654C3.42298 7.23942 3.13697 7.34918 2.86932 7.50027C1.98542 7.99927 1.36438 8.90663 1.11913 9.88841C0.869371 10.8882 0.989124 12.0467 1.70052 13.0391C2.0609 13.5419 2.54903 13.9691 3.1623 14.305C3.01053 14.5081 2.88229 14.7271 2.77811 14.9565C2.35249 15.8935 2.32044 17.0038 2.64559 17.98C2.97535 18.9701 3.69756 19.8871 4.83624 20.3254C5.57833 20.6111 6.42615 20.6665 7.35551 20.4749C7.39798 20.9494 7.52745 21.3806 7.74983 21.7577C8.22598 22.5651 9.0236 22.9458 9.80541 22.9947C10.5523 23.0414 11.3758 22.778 12 22.2458C12.6242 22.778 13.4477 23.0414 14.1946 22.9947C14.9764 22.9458 15.774 22.5651 16.2502 21.7577C16.4725 21.3806 16.602 20.9494 16.6445 20.4749C17.5738 20.6665 18.4217 20.6111 19.1638 20.3254C20.3024 19.8871 21.0246 18.9701 21.3544 17.98C21.6796 17.0038 21.6475 15.8935 21.2219 14.9565C21.1177 14.7271 20.9895 14.5081 20.8377 14.305C21.451 13.9691 21.9391 13.5419 22.2995 13.0391C23.0109 12.0467 23.1306 10.8882 22.8809 9.88841C22.6356 8.90663 22.0146 7.99927 21.1307 7.50027C20.863 7.34918 20.577 7.23942 20.2799 7.17654C20.3615 6.86315 20.4026 6.55614 20.4026 6.25684C20.4026 5.34432 20.0175 4.59201 19.4145 4.08919C18.8191 3.59264 18.0269 3.35525 17.2441 3.40767C17.1898 3.04646 17.0668 2.70601 16.8741 2.39445C16.3767 1.5904 15.532 1.17183 14.7274 1.04467C13.922 0.917375 13.0214 1.05676 12.2914 1.53214C11.9861 1.73097 12.0139 1.73097 11.7086 1.53214ZM13.0033 20.0518L13.0033 17.5288C13.0045 17.0494 13.1133 16.3457 13.3939 15.7998C13.6573 15.2872 13.9946 15.0268 14.5082 15.0268C15.0623 15.0268 15.5115 14.5773 15.5115 14.0227C15.5115 13.4682 15.0623 13.0186 14.5082 13.0186C13.9202 13.0186 13.4216 13.16 13.0033 13.3894V12.5084C13.0045 12.029 13.1133 11.3254 13.3939 10.7794C13.6573 10.2668 13.9946 10.0064 14.5082 10.0064C15.0623 10.0064 15.5115 9.55688 15.5115 9.00234C15.5115 8.4478 15.0623 7.99826 14.5082 7.99826C13.9202 7.99826 13.4216 8.13957 13.0033 8.36902L13.0033 3.97532C13.005 3.57853 13.1671 3.35779 13.3859 3.21528C13.6436 3.04746 14.0284 2.96723 14.4144 3.02824C14.8013 3.08939 15.0539 3.26704 15.1679 3.45142C15.2603 3.60078 15.3726 3.9329 15.091 4.59054C14.9015 5.03294 15.0524 5.54766 15.4507 5.8175C15.849 6.08734 16.3825 6.03639 16.7226 5.69604C17.0903 5.32811 17.7563 5.32032 18.1299 5.63189C18.2795 5.75662 18.396 5.94564 18.396 6.25684C18.396 6.59422 18.2548 7.14633 17.705 7.91672C17.4235 8.31116 17.4637 8.85055 17.8006 9.19878C18.1375 9.54701 18.6749 9.60465 19.0779 9.33577C19.5101 9.04741 19.8566 9.08664 20.1448 9.24934C20.4837 9.44063 20.8032 9.85112 20.9342 10.3755C21.0607 10.8818 20.9923 11.4176 20.669 11.8686C20.3466 12.3184 19.6765 12.8121 18.3565 13.0323C17.8683 13.1137 17.5124 13.5392 17.5182 14.0344C17.5239 14.5296 17.8896 14.9467 18.3795 15.0167C18.8812 15.0884 19.207 15.3732 19.3952 15.7874C19.5966 16.231 19.6273 16.8151 19.4508 17.345C19.2789 17.861 18.9351 18.2619 18.4434 18.4511C17.9498 18.6411 17.1399 18.6809 15.9267 18.129C15.5761 17.9695 15.1653 18.025 14.8694 18.2716C14.5735 18.5183 14.4448 18.9127 14.5382 19.2866C14.6621 19.7827 14.8668 20.9406 14.0694 20.9905C13.5184 21.0249 13.0062 20.6055 13.0033 20.0518ZM10.9967 3.97532C10.995 3.57853 10.8329 3.35779 10.6141 3.21528C10.3564 3.04746 9.97157 2.96723 9.58558 3.02824C9.19869 3.08939 8.94611 3.26704 8.83207 3.45142C8.73968 3.60078 8.62739 3.9329 8.90901 4.59054C9.09846 5.03294 8.94757 5.54766 8.54931 5.8175C8.15105 6.08734 7.61747 6.03639 7.27739 5.69604C6.90975 5.32811 6.24365 5.32032 5.87006 5.63189C5.72051 5.75662 5.604 5.94564 5.604 6.25684C5.604 6.59422 5.74515 7.14633 6.29501 7.91672C6.57653 8.31116 6.53629 8.85055 6.19937 9.19878C5.86246 9.54701 5.32505 9.60465 4.92206 9.33577C4.48987 9.04741 4.1434 9.08664 3.8552 9.24934C3.51634 9.44063 3.19679 9.85112 3.06581 10.3755C2.93933 10.8818 3.0077 11.4176 3.33095 11.8686C3.65342 12.3184 4.32349 12.8121 5.64353 13.0323C6.13166 13.1137 6.48757 13.5392 6.48182 14.0344C6.47607 14.5296 6.11037 14.9467 5.62048 15.0167C5.1188 15.0884 4.793 15.3732 4.60484 15.7874C4.40339 16.231 4.37273 16.8151 4.54922 17.345C4.7211 17.861 5.06489 18.2619 5.55656 18.4511C6.05021 18.6411 6.86015 18.6809 8.0733 18.129C8.42388 17.9695 8.83474 18.025 9.13063 18.2716C9.42652 18.5183 9.5552 18.9127 9.4618 19.2866C9.33788 19.7827 9.13324 20.9406 9.93058 20.9905C10.4816 21.0249 10.9938 20.6055 10.9967 20.0518L10.9967 20.0472V17.5292C10.9955 17.0498 10.8868 16.3459 10.6061 15.7998C10.3427 15.2872 10.0054 15.0268 9.49176 15.0268C8.93765 15.0268 8.48846 14.5773 8.48846 14.0227C8.48846 13.4682 8.93765 13.0186 9.49176 13.0186C10.0798 13.0186 10.5784 13.16 10.9967 13.3894V12.5088C10.9955 12.0294 10.8868 11.3255 10.6061 10.7794C10.3427 10.2668 10.0054 10.0064 9.49176 10.0064C8.93765 10.0064 8.48846 9.55688 8.48846 9.00234C8.48846 8.4478 8.93765 7.99826 9.49176 7.99826C10.0798 7.99826 10.5784 8.13957 10.9967 8.36902L10.9967 3.97532Z" fill="#1a811a"></path> </g></svg>`,
        title: "Mental Focus",
        description: "Enhanced concentration and cognnitive function without jitters.",
    },
]


//The ritual section cards
const sectionCard = document.querySelector("#the_ritual .section_card");

theRitual.map((cards) => {
    let cardContainer = document.createElement("div")
    let imageContainer = document.createElement("div")
    let textContainer = document.createElement("div")
    let description = document.createElement("p");
    let image = document.createElement("img");
    let title = document.createElement("h2");
    let number = document.createElement("h3");

    imageContainer.classList.add('image_container');
    cardContainer.classList.add('card_container');
    textContainer.classList.add('text_container')


    image.src = cards.photo;
    image.alt = `photo of ${cards.title} matcha`
    imageContainer.appendChild(image);

    // image.appendChild(imageContainer)

   
    cardContainer.appendChild(imageContainer)
   

    number.textContent = cards.number;
    textContainer.appendChild(number)

    title.textContent = cards.title;
    textContainer.appendChild(title)



    description.textContent = cards.description;
    textContainer.appendChild(description)

    // cardContainer.appendChild(sectionCard);
    cardContainer.appendChild(textContainer)
    sectionCard.appendChild(cardContainer)
    
})


//The our blend sention cards
const ourBlendCard = document.querySelector("#our_blends .section_card");

ourBlends.map((card) => {

    let blendCardContainer = document.createElement("div");
    let blendImageContainer = document.createElement("div");
    let blendTextContainer = document.createElement("div");
    let blendStarContainer = document.createElement("div");
    let blendPriceContainer = document.createElement("div");
    
    let blendDescription = document.createElement("p");
    let blendImage = document.createElement("img");
    let blendTitle = document.createElement("h2");
    let blendPrice = document.createElement("h3");
    let addToCart = document.createElement("button");

  

    blendImage.src = card.photo;
    blendImage.alt = card.photo
    blendImageContainer.appendChild(blendImage);

    for(i=0; i<card.stars; i++){  
        let star = document.createElement("span");
        star.classList.add('star');    
        star.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill=#E6A817 viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z"/></svg>';    
        star.id = "icon";

         blendStarContainer.appendChild(star)
    }

    blendTitle.textContent = card.title;
    blendDescription.textContent = card.description;
    blendPrice.textContent = card.price;
    addToCart.textContent = "Add to Cart";
    



    blendImageContainer.classList.add('image_container');
    blendCardContainer.classList.add('card_container');
    blendTextContainer.classList.add('text_container');
    blendStarContainer.classList.add('star_container');
    blendPriceContainer.classList.add('price_container');
    blendPrice.classList.add('price');
    addToCart.classList.add('add_to_cart');
   

    blendCardContainer.appendChild(blendImageContainer);
    blendTextContainer.appendChild(blendStarContainer);
    blendTextContainer.appendChild(blendTitle);
    blendTextContainer.appendChild(blendDescription);
    blendPriceContainer.appendChild(blendPrice);
    blendPriceContainer.appendChild(addToCart);
    blendTextContainer.appendChild(blendPriceContainer);
    blendCardContainer.appendChild(blendTextContainer);

    ourBlendCard.appendChild(blendCardContainer);
})


//The customer ritual section cards

const customerRitualCard = document.querySelector("#customer_rituals .section_card");
customerRituals.map((card) => {
    let ritualCardContainer = document.createElement("div");
    let ritualImageContainer = document.createElement("div");
    let ritualTextContainer = document.createElement("div");
    let ritualComment = document.createElement("p");
    let ritualImage = document.createElement("img");
    let ritualName = document.createElement("h2");

    ritualImage.src = card.photo;
    ritualImage.alt = `photo of ${card.name} drinking matcha`
    ritualImageContainer.appendChild(ritualImage);

    ritualComment.textContent = `"${card.comment}"`;
    ritualName.textContent = card.name;

    ritualImageContainer.classList.add('image_container');
    ritualCardContainer.classList.add('card_container');
    ritualTextContainer.classList.add('text_container');

    ritualCardContainer.appendChild(ritualImageContainer);
    ritualTextContainer.appendChild(ritualComment);
    ritualTextContainer.appendChild(ritualName);
    ritualCardContainer.appendChild(ritualTextContainer);

    customerRitualCard.appendChild(ritualCardContainer);
})


//the why matcha section cards

const benefitCard = document.querySelector("#benefits .section_card");
whyMatcha.map((card) => {
    let benefitCardContainer = document.createElement("div");
    let benefitSvgContainer = document.createElement("div");
    let benefitTextContainer = document.createElement("div");
    let benefitTitle = document.createElement("h2");
    let benefitDescription = document.createElement("p");
    benefitSvgContainer.innerHTML = card.svg;
    benefitTitle.textContent = card.title;
    benefitDescription.textContent = card.description;

    benefitCardContainer.classList.add('card_container');
    benefitSvgContainer.classList.add('svg_container');
    benefitTextContainer.classList.add('text_container');

    benefitCardContainer.appendChild(benefitSvgContainer);
    benefitTextContainer.appendChild(benefitTitle);
    benefitTextContainer.appendChild(benefitDescription);
    benefitCardContainer.appendChild(benefitTextContainer);

    benefitCard.appendChild(benefitCardContainer);
})