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
      "General House Cleaning",
      "Carpet & Upholstery Cleaning",
      "Window Cleaning",
      "Deep Cleaning",
      "Move-in/Move-out Cleaning"
    ],
    business: [
      "Office Cleaning",
      "Commercial Carpet Cleaning",
      "Post-Construction Cleaning",
      "Window Washing",
      "Restroom Sanitization"
    ],
    industrial: [
      "Factory Cleaning",
      "Machinery Cleaning",
      "Floor Scrubbing & Polishing",
      "Pressure Washing",
      "Waste Disposal"
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

    if (service === "General House Cleaning") {
      serviceIcon.classList.add('fa-broom'); 
    } else if (service === "Carpet & Upholstery Cleaning") {
      serviceIcon.classList.add('fa-couch'); 
    } else if (service === "Window Cleaning") {
      serviceIcon.classList.add('fa-window-maximize'); 
    } else if (service === "Deep Cleaning") {
      serviceIcon.classList.add('fa-hand-sparkles'); 
    }else if (service === "Move-in/Move-out Cleaning") {
      serviceIcon.classList.add('fa-house'); 
    }

    if (service === "Office Cleaning") {
      serviceIcon.classList.add('fa-broom'); 
    } else if (service === "Commercial Carpet Cleaning") {
      serviceIcon.classList.add('fa-building'); 
    } else if (service === "Window Washing") {
      serviceIcon.classList.add('fa-window-maximize'); 
    } else if (service === "Post-Construction Cleaning") {
      serviceIcon.classList.add('fa-industry'); 
    }else if (service === "Restroom Sanitization") {
      serviceIcon.classList.add('fa-restroom'); 
    }

    if (service === "Pressure Washing") {
      serviceIcon.classList.add('fa-spray-can-sparkles'); 
    } else if (service === "Floor Scrubbing & Polishing") {
      serviceIcon.classList.add('fa-broom'); 
    } else if (service === "Machinery Cleaning") {
      serviceIcon.classList.add('fa-gears'); 
    } else if (service === "Factory Cleaning") {
      serviceIcon.classList.add('fa-industry');
    }else if (service === "Waste Disposal") {
      serviceIcon.classList.add('fa-recycle'); 
    }

    const serviceText = document.createElement('span');
    serviceText.textContent = service;

    const addToOrderButton = document.createElement('button');
    addToOrderButton.classList.add('btn', 'btn-primary', 'btn-sm', 'ml-auto');
    addToOrderButton.textContent = 'Add to Order';
    addToOrderButton.onclick = function() {
      addToOrder(service);
    };

    const itemWrapper = document.createElement('div');
    itemWrapper.classList.add('d-flex', 'justify-content-between', 'align-items-center');
    itemWrapper.appendChild(serviceIcon); 
    itemWrapper.appendChild(serviceText);  
    itemWrapper.appendChild(addToOrderButton); 

    listItem.appendChild(itemWrapper);
    serviceList.appendChild(listItem);
  });
  
  cardBody.appendChild(serviceList);
  collapseDiv.appendChild(cardBody);
  card.appendChild(collapseDiv);

  return card;
}

let orderedItemsList = JSON.parse(localStorage.getItem('orderedItemsList')) || [];

function addToOrder(service) {
  // Create a new <li> element to display the service in the list
  const orderItem = document.createElement('li');
  orderItem.textContent = service;

  // Add the new item to the list displayed on the page
  const orderedItemsListElement = document.getElementById('orderedItemsList');
  orderedItemsListElement.appendChild(orderItem);

  // Add the service to the orderedItemsList array
  orderedItemsList.push(service);

  // Save the updated orderedItemsList array to localStorage
  localStorage.setItem('orderedItemsList', JSON.stringify(orderedItemsList));

  // Optionally: Display the ordered items again (to update the list view)
  displayOrderedItems();
}
function displayOrderedItems() {
  // Get the element where the ordered items will be displayed
  const orderedItemsListElement = document.getElementById('orderedItemsList');

  // Clear the list before displaying the updated items
  orderedItemsListElement.innerHTML = '';

  // Loop through the orderedItemsList array and display each item
  orderedItemsList.forEach(function(item) {
      const orderItem = document.createElement('li');
      orderItem.textContent = item;
      orderedItemsListElement.appendChild(orderItem);
  });
}

    function addToOrder(service) {
      const orderedItemsListElement = document.getElementById('orderedItemsList');
      
      const orderItem = document.createElement('li');
      orderItem.textContent = service;
      
      orderedItemsListElement.appendChild(orderItem);
  
      orderedItemsList.push(service);
  
      localStorage.setItem('orderedItemsList', JSON.stringify(orderedItemsList));
  
  }


  document.addEventListener('DOMContentLoaded', function () {
    const orderedItemsList = JSON.parse(localStorage.getItem('orderedItemsList')) || [];

    const orderedItemsListElement = document.getElementById('orderedItemsList');

    orderedItemsListElement.innerHTML = '';

    orderedItemsList.forEach(function (item) {
        const orderItem = document.createElement('li');
        orderItem.textContent = item;
        orderedItemsListElement.appendChild(orderItem);
    });
});

  window.onload = createAccordion;
  