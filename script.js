document.getElementById('restaurant-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Get user input values
    var cuisine = document.getElementById('cuisine').value;
    var budget = document.getElementById('budget').value;
    var rating = parseInt(document.getElementById('rating').value);
  
    var resultMessage = '';
  
    // Predefined list of restaurants
    var restaurants = [
      { name: 'Luigi’s Italian Bistro', cuisine: 'italian', budget: 'medium', rating: 4 },
      { name: 'Golden Dragon Chinese', cuisine: 'chinese', budget: 'low', rating: 3 },
      { name: 'Spice of Pakistan', cuisine: 'pakistani', budget: 'high', rating: 5 },
      { name: 'El Toro Mexican Grill', cuisine: 'mexican', budget: 'medium', rating: 4 },
      { name: 'Sakura Sushi', cuisine: 'japanese', budget: 'high', rating: 5 },
      { name: 'Dragon Palace', cuisine: 'chinese', budget: 'medium', rating: 4 },
      { name: 'Little Italy', cuisine: 'italian', budget: 'low', rating: 3 }
    ];
  
    // Find the first restaurant that matches the user's preferences
    var recommendedRestaurant = restaurants.find(function(restaurant) {
      return restaurant.cuisine === cuisine && restaurant.budget === budget && restaurant.rating >= rating;
    });
  
    if (recommendedRestaurant) {
      resultMessage = "We recommend: " + recommendedRestaurant.name + " with a rating of " + recommendedRestaurant.rating + " stars!";
    } else {
      resultMessage = "Sorry, no restaurants found matching your preferences.";
    }
  
    displayResult(resultMessage);
  });
  
  // Display result in the UI
  function displayResult(message) {
    document.getElementById('result-message').innerText = message;
    document.getElementById('result-message').classList.add('font-weight-bold');
  }
  