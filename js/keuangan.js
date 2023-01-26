var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://hris_backend.ulbi.ac.id/gaji/peg", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));