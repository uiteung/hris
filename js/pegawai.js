var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch("https://hris_backend.ulbi.ac.id/peg/sim", requestOptions)
    // .then(response => response.json())
    .then((result)=>{
        return result.json();
    })
    .then((objectData)=>{
        console.log(objectData)
        console.log(objectData[0].nama);
        let tableData="";
        objectData.map((values)=>{
            tableData=`<h1>${values.nama}</h1>`;
        });
        document.getElementById("tablebody").innerHTML=tableData
    })
    .catch(error => console.log('error', error));
