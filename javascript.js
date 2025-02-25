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
  
  // Function to create the accordion dynamically
  function createAccordion() {
    const accordionContainer = document.getElementById('accordionServices');
  
    // Create Household Accordion
    const householdAccordion = createAccordionItem('Household Cleaning Services', servicesData.household, 'Household');
    accordionContainer.appendChild(householdAccordion);
  
    // Create Business Accordion
    const businessAccordion = createAccordionItem('Business Cleaning Services', servicesData.business, 'Business');
    accordionContainer.appendChild(businessAccordion);
  
    // Create Industrial Accordion
    const industrialAccordion = createAccordionItem('Industrial Cleaning Services', servicesData.industrial, 'Industrial');
    accordionContainer.appendChild(industrialAccordion);
  }
  
  // Helper function to create an accordion item
// Helper function to create an accordion item
// Helper function to create an accordion item
function createAccordionItem(title, services, category) {
  const card = document.createElement('div');
  card.classList.add('card');

  // Create card header
  const cardHeader = document.createElement('div');
  cardHeader.classList.add('card-header');
  cardHeader.id = `heading${category}`;

  // Create the button for collapsing and expanding
  const headerButton = document.createElement('button');
  headerButton.classList.add('btn', 'btn-link', 'd-flex', 'justify-content-between', 'w-100');
  headerButton.setAttribute('type', 'button');
  headerButton.setAttribute('data-toggle', 'collapse');
  headerButton.setAttribute('data-target', `#collapse${category}`);
  headerButton.setAttribute('aria-expanded', 'false');
  headerButton.setAttribute('aria-controls', `collapse${category}`);
  headerButton.style.color = 'black';
  // Add the text of the title
  const buttonText = document.createElement('span');
  buttonText.textContent = title;

  // Create the downwards arrow icon using Font Awesome
  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-chevron-down'); // Downwards arrow icon

  headerButton.appendChild(buttonText);
  headerButton.appendChild(icon);

  // Toggle icon on collapse/expand
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

  // Create card body with the list of services
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

    // Create a Font Awesome icon for the service
    const serviceIcon = document.createElement('i');
    serviceIcon.classList.add('fas', 'fa-cleaning', 'service-icon'); // Use appropriate Font Awesome class
    // Use a different class for each service if needed
    if (service === "General House Cleaning") {
      serviceIcon.classList.add('fa-broom'); // Example icon for house cleaning
    } else if (service === "Carpet & Upholstery Cleaning") {
      serviceIcon.classList.add('fa-couch'); // Example icon for carpet cleaning
    } else if (service === "Window Cleaning") {
      serviceIcon.classList.add('fa-window-maximize'); // Example icon for window cleaning
    } else if (service === "Deep Cleaning") {
      serviceIcon.classList.add('fa-hand-sparkles'); // Example icon for window cleaning
    }else if (service === "Move-in/Move-out Cleaning") {
      serviceIcon.classList.add('fa-house'); // Example icon for window cleaning
    }

    if (service === "Office Cleaning") {
      serviceIcon.classList.add('fa-broom'); // Example icon for house cleaning
    } else if (service === "Commercial Carpet Cleaning") {
      serviceIcon.classList.add('fa-building'); // Example icon for carpet cleaning
    } else if (service === "Window Washing") {
      serviceIcon.classList.add('fa-window-maximize'); // Example icon for window cleaning
    } else if (service === "Post-Construction Cleaning") {
      serviceIcon.classList.add('fa-industry'); // Example icon for window cleaning
    }else if (service === "Restroom Sanitization") {
      serviceIcon.classList.add('fa-restroom'); // Example icon for window cleaning
    }

    if (service === "Pressure Washing") {
      serviceIcon.classList.add('fa-spray-can-sparkles'); // Example icon for house cleaning
    } else if (service === "Floor Scrubbing & Polishing") {
      serviceIcon.classList.add('fa-broom'); // Example icon for carpet cleaning
    } else if (service === "Machinery Cleaning") {
      serviceIcon.classList.add('fa-gears'); // Example icon for window cleaning
    } else if (service === "Factory Cleaning") {
      serviceIcon.classList.add('fa-industry'); // Example icon for window cleaning
    }else if (service === "Waste Disposal") {
      serviceIcon.classList.add('fa-recycle'); // Example icon for window cleaning
    }
    // You can add more conditions for different services

    // Create the service text
    const serviceText = document.createElement('span');
    serviceText.textContent = service;

    // Create "Add to Order" button
    const addToOrderButton = document.createElement('button');
    addToOrderButton.classList.add('btn', 'btn-primary', 'btn-sm', 'ml-auto');
    addToOrderButton.textContent = 'Add to Order';
    addToOrderButton.onclick = function() {
      addToOrder(service);
    };

    // Create a div to hold the list item, icon, text, and button, and apply flex to align everything
    const itemWrapper = document.createElement('div');
    itemWrapper.classList.add('d-flex', 'justify-content-between', 'align-items-center');
    itemWrapper.appendChild(serviceIcon); // Add Font Awesome icon
    itemWrapper.appendChild(serviceText);  // Add text
    itemWrapper.appendChild(addToOrderButton); // Add button

    listItem.appendChild(itemWrapper);
    serviceList.appendChild(listItem);
  });
  
  cardBody.appendChild(serviceList);
  collapseDiv.appendChild(cardBody);
  card.appendChild(collapseDiv);

  return card;
}

  
  // Function to add an item to the order
  function addToOrder(service) {
    const orderedItemsList = document.getElementById('orderedItemsList');
    
    // Create a new list item for the ordered service
    const orderItem = document.createElement('li');
    orderItem.textContent = service;
    
    orderedItemsList.appendChild(orderItem);
  }
  
  window.onload = createAccordion;
  