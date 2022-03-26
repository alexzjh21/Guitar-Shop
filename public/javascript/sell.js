async function sellFormHandler (event) {
    event.preventDefault();

    const type = document.querySelector('#guitar-type');
    const brand = document.querySelector('#guitar-brand');
    const description = document.querySelector('#description');
    const price = document.querySelector('#price');

    if (type && brand && description && price) {
        const response = await fetch('/api/sell', {
          method: 'POST',
          body: JSON.stringify({
            type,
            brand,
            description,
            price
          }),
          headers: { 'Content-Type': 'application/json' }
        });
    }
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
}

document.querySelector('#sell-button').addEventListener('submit', sellFormHandler);