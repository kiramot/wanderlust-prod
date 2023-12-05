

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__form", {
  ...scrollRevealOption,
  delay: 500,
});

// trending container
ScrollReveal().reveal(".trending__card", {
  ...scrollRevealOption,
  interval: 500,
});

// destination container
ScrollReveal().reveal(".destination__card", {
  duration: 1000,
  interval: 500,
});

// seller container
ScrollReveal().reveal(".seller__card", {
  ...scrollRevealOption,
  interval: 500,
});

// guide container
ScrollReveal().reveal(".guide__card", {
  ...scrollRevealOption,
  interval: 500,
});

//  client container
ScrollReveal().reveal(".client__card", {
  ...scrollRevealOption,
  interval: 500,
});

function submitForm() {
  // Get the current date and time
  var currentDate = new Date();

  // Format the date and time as YYYY-MM-DD HH:mm:ss
  var formattedDateTime = currentDate.toISOString().replace("T", " ").slice(0, 19);

  // Append the formatted date and time to the hidden input field
  document.forms["book-form"]["DateTime"].value = formattedDateTime;

  // You can also add other form data manipulation or validation here if needed

  // Now, return true to allow the form submission
  return true;
}

