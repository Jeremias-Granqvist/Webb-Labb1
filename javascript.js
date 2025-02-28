function hamburger() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

const servicesData = {
  household: [
    { name: "General House Cleaning", description: "A thorough cleaning for your entire home, including floors, windows, and more." },
    { name: "Carpet & Upholstery Cleaning", description: "We provide deep cleaning for carpets and upholstery, removing stains and dirt." },
    { name: "Window Cleaning", description: "Get sparkling clean windows inside and out." },
    { name: "Deep Cleaning", description: "A more thorough cleaning service to remove dirt and grime from hidden areas." },
    { name: "Move-in/Move-out Cleaning", description: "We clean before or after moving into a new home, making it spotless." }
  ],
  business: [
    { name: "Office Cleaning", description: "Keep your office space clean and organized with regular cleaning." },
    { name: "Commercial Carpet Cleaning", description: "We clean carpets in commercial spaces, ensuring they're fresh and presentable." },
    { name: "Post-Construction Cleaning", description: "We clean up after construction or renovation, removing dust and debris." },
    { name: "Window Washing", description: "We provide thorough washing for windows in commercial buildings." },
    { name: "Restroom Sanitization", description: "We sanitize restrooms in businesses to ensure a clean and safe environment." }
  ],
  industrial: [
    { name: "Factory Cleaning", description: "We clean factory floors, machinery, and other industrial spaces." },
    { name: "Machinery Cleaning", description: "We clean machinery to maintain smooth operations and prevent breakdowns." },
    { name: "Floor Scrubbing & Polishing", description: "We provide floor scrubbing and polishing for industrial floors." },
    { name: "Pressure Washing", description: "We use high-pressure washing to clean factory exteriors and equipment." },
    { name: "Waste Disposal", description: "We provide safe and efficient waste disposal services for industrial locations." }
  ]
};

function createAccordion() {
const accordionContainer = document.getElementById('accordionServices');

const householdAccordion = createAccordionItem('Household Cleaning Services', servicesData.household, 'Household');
accordionContainer.appendChild(householdAccordion);

const businessAccordion = createAccordionItem('Business Cleaning Services', servicesData.business, 'Business');
accordionContainer.appendChild(businessAccordion);

const industrialAccordion = createAccordionItem('Industrial Cleaning Services', servicesData.industrial, 'Industrial');
accordionContainer.appendChild(industrialAccordion);
}

function createAccordionItem(title, services, category) {
  const card = document.createElement('div');
  card.classList.add('card');

  const cardHeader = document.createElement('div');
  cardHeader.classList.add('card-header');
  cardHeader.id = `heading${category}`;

  const headerButton = document.createElement('button');
  headerButton.classList.add('btn', 'btn-link', 'd-flex', 'justify-content-between', 'w-100');
  headerButton.setAttribute('type', 'button');
  headerButton.setAttribute('data-toggle', 'collapse');
  headerButton.setAttribute('data-target', `#collapse${category}`);
  headerButton.setAttribute('aria-expanded', 'false');
  headerButton.setAttribute('aria-controls', `collapse${category}`);
  headerButton.style.color = 'black';

  const buttonText = document.createElement('span');
  buttonText.textContent = title;

  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-chevron-down'); 

  headerButton.appendChild(buttonText);
  headerButton.appendChild(icon);

  headerButton.onclick = function() {
    if (headerButton.getAttribute('aria-expanded') === 'false') {
      icon.classList.remove('fa-chevron-down');
      icon.classList.add('fa-chevron-up');
      headerButton.setAttribute('aria-expanded', 'true');
    } else {
      icon.classList.remove('fa-chevron-up');
      icon.classList.add('fa-chevron-down');
      headerButton.setAttribute('aria-expanded', 'false');
    }
  };

  const headerH2 = document.createElement('h2');
  headerH2.classList.add('mb-0');
  headerH2.appendChild(headerButton);
  cardHeader.appendChild(headerH2);
  card.appendChild(cardHeader);

  const collapseDiv = document.createElement('div');
  collapseDiv.id = `collapse${category}`;
  collapseDiv.classList.add('collapse');
  collapseDiv.setAttribute('aria-labelledby', `heading${category}`);
  collapseDiv.setAttribute('data-parent', '#accordionServices');

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  
  const serviceList = document.createElement('ul');
  services.forEach(service => {
    const listItem = document.createElement('li');

    const serviceIcon = document.createElement('i');
    serviceIcon.classList.add('fas', 'fa-cleaning', 'service-icon'); 

    assignServiceIcon(service.name, serviceIcon);

    const serviceText = document.createElement('span');
    serviceText.textContent = service.name;

    const moreInfoButton = document.createElement('button');
    moreInfoButton.classList.add('btn', 'btn-info', 'btn-sm', 'ml-2');
    moreInfoButton.textContent = 'More Info';
    moreInfoButton.onclick = function() {
      openModal(service.name, service.description); 
    };

    const addToOrderButton = document.createElement('button');
    addToOrderButton.classList.add('btn', 'btn-primary', 'btn-sm', 'ml-2');
    addToOrderButton.textContent = 'Add to Order';
    addToOrderButton.onclick = function() {
      addToOrder(service.name);  
    };

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('d-flex', 'justify-content-end', 'w-100');

    buttonContainer.appendChild(moreInfoButton);
    buttonContainer.appendChild(addToOrderButton);

    const itemWrapper = document.createElement('div');
    itemWrapper.classList.add('d-flex', 'justify-content-between', 'align-items-center');
    itemWrapper.appendChild(serviceIcon); 
    itemWrapper.appendChild(serviceText);  
    itemWrapper.appendChild(buttonContainer); 

    listItem.appendChild(itemWrapper);
    serviceList.appendChild(listItem);
  });
  
  cardBody.appendChild(serviceList);
  collapseDiv.appendChild(cardBody);
  card.appendChild(collapseDiv);

  return card;
}

function assignServiceIcon(serviceName, serviceIcon) {
const iconMapping = {
  "General House Cleaning": 'fa-broom',
  "Carpet & Upholstery Cleaning": 'fa-couch',
  "Window Cleaning": 'fa-window-maximize',
  "Deep Cleaning": 'fa-hand-sparkles',
  "Move-in/Move-out Cleaning": 'fa-house',
  "Office Cleaning": 'fa-broom',
  "Commercial Carpet Cleaning": 'fa-building',
  "Window Washing": 'fa-window-maximize',
  "Post-Construction Cleaning": 'fa-industry',
  "Restroom Sanitization": 'fa-restroom',
  "Pressure Washing": 'fa-spray-can-sparkles',
  "Floor Scrubbing & Polishing": 'fa-broom',
  "Machinery Cleaning": 'fa-gears',
  "Factory Cleaning": 'fa-industry',
  "Waste Disposal": 'fa-recycle'
};

serviceIcon.classList.add('fas', iconMapping[serviceName] || 'fa-cleaning', 'service-icon');
}

function addToOrder(service) {
let cart = JSON.parse(localStorage.getItem('cart')) || [];

const existingService = cart.find(item => item === service);

if (!existingService) {
  cart.push(service);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${service} has been added to your cart.`);
} else {
  alert(`${service} is already in your cart.`);
}
}

function displayCart() {
let cart = JSON.parse(localStorage.getItem('cart')) || [];
console.log('Cart data:', cart);

const cartContainer = document.getElementById('cartItems');
cartContainer.innerHTML = ''; 
if (cart.length === 0) {
  cartContainer.innerHTML = 'Your cart is empty.';
  return;
}

cart.forEach(service => {
  const listItem = document.createElement('li');
  listItem.textContent = service;
  cartContainer.appendChild(listItem);   
});
}

function clearCart() {
localStorage.removeItem('cart');
alert('Your cart has been cleared.');
displayCart();
}

const modal = document.getElementById("serviceModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const closeModalButton = document.getElementsByClassName("close")[0];

function openModal(title, description) {
modalTitle.textContent = title;
modalDescription.textContent = description;
modal.style.display = "block";
}

closeModalButton.onclick = function() {
modal.style.display = "none";
}

window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
}
}

window.onload = function() {
createAccordion();
displayCart(); 
}

