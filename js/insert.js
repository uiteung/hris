  const form = document.querySelector('form');

  form.addEventListener('submit', (e) => {

    e.preventDefault();

    const formData = new FormData(form);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var object = {};
    formData.forEach(function(value, key){
        object[key] = parseInt(value);
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(object),
      redirect: 'follow'
    };
    
    console.log(requestOptions);
  
    fetch("https://hris_backend.ulbi.ac.id/gaji/peg", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

  })







