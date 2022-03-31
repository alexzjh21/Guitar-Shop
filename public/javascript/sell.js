async function sellFormHandler(event) {
  event.preventDefault();

  const type = document.querySelector('#guitar-type').value;
  const brand = document.querySelector('#guitar-brand').value;
  const description = document.querySelector('#description').value;
  const price = document.querySelector('#price').value;

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

document.querySelector('.sell-form').addEventListener('submit', sellFormHandler);