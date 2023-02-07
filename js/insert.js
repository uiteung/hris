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
  // const form = document.getElementById('MyForm');

  // form.addEventListener('submit', function(e) {
  //   e.preventDefault()

  //   var nik = document.getElementById('nik').value
  //   var pokok = document.getElementById('pokok').value
  //   var keluarga = document.getElementById('keluarga').value
  //   var pangan = document.getElementById('pangan').value
  //   var kinerja = document.getElementById('kinerja').value
  //   var keahlian = document.getElementById('keahlian').value
  //   var struktural = document.getElementById('struktural').value
  //   var transportasi = document.getElementById('transportasi').value
  //   var kehadiran = document.getElementById('kehadiran').value
  //   var kopkar = document.getElementById('kopkar').value
  //   var bankjabar = document.getElementById('bankjabar').value
  //   var bpjs = document.getElementById('bpjs').value
  //   var arisan = document.getElementById('arisan').value
  //   var bauk = document.getElementById('bauk').value
  //   var pph = document.getElementById('pph').value
  //   var lain2 = document.getElementById('lain2').value

  //   var raw = JSON.stringify({
  //     "nik": nik,
  //     "pokok": pokok,
  //     "keluarga": keluarga,
  //     "pangan": pangan,
  //     "kinerja": kinerja,
  //     "keahlian": keahlian,
  //     "struk": struktural,
  //     "transportasi": transportasi,
  //     "kehadiran": kehadiran,
  //     "kopkar": kopkar,
  //     "bank_jabar": bankjabar,
  //     "bpjs": bpjs,
  //     "arisan": arisan,
  //     "bauk": bauk,
  //     "pph": pph,
  //     "lain2": lain2
  //   });
    

  
  // fetch("https://hris_backend.ulbi.ac.id/gaji/peg", requestOptions)
  // .then(response => response.json())
  // .then(result => console.log(result))
  // .catch(error => console.log('error', error));
  // console.log(raw)
  // })






