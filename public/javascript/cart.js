async function addToCart(event) {
    event.preventDefault();
  
  
    if (type && brand && description && price) {
      const response = await fetch('/api/guitars', {
        method: 'POST',
        body: JSON.stringify({
          type,
          brand,
          description,
          price
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
}

document.querySelector('.add-cart').addEventListener('click', addToCart)