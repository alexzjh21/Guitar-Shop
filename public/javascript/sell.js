async function sellFormHandler (event) {
    event.preventDefault();

    const type = document.querySelector('#guitar-type').value;
    const brand = document.querySelector('#guitar-brand').value.trim();
    const comment_text = document.querySelector('#comment_text').value;
    const price = document.querySelector('#price').value.trim();

    if (type && brand && description && price) {
        const response = await fetch('/api/guitars', {
          method: 'POST',
          body: JSON.stringify({
            type,
            brand,
            comment_text,
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