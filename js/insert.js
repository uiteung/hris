var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "nik": 0,
  "pokok": 0,
  "keluarga": 0,
  "pangan": 0,
  "kinerja": 0,
  "keahlian": 0,
  "struk": 0,
  "transportasi": 0,
  "kehadiran": 0,
  "kopkar": 0,
  "bank_jabar": 0,
  "bpjs": 0,
  "arisan": 0,
  "bauk": 0,
  "pph": 0,
  "lain2": 0
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://hris_backend.ulbi.ac.id/gaji/peg", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));