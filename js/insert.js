  const form = document.querySelector('form');

  form.addEventListener('submit', (e) => {

    e.preventDefault();

    const formData = new FormData(form);

    function isNumeric(str) {
      if (typeof str != "string") return false // we only process strings!  
      return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
             !isNaN(parseInt(str)) // ...and ensure strings of whitespace fail
    }
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var object = {};
    formData.forEach(function(value, key){
        isNumeric(object);
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

    document.getElementById('form').reset();
  })







