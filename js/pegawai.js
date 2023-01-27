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
        // console.log(objectData)
        console.log(objectData.data[0].nip);
        let tableData="";
        objectData.data.map((values)=>{
            tableData +=`
            <div>
            <tr class="text-xs">
            <td class="flex items-center py-5 px-6 font-medium">
              <input class="mr-3" type="checkbox" name="" id="">
              <p>${values.nip}</p>
            </td>
            <td class="font-medium">${values.nama}</td>
            <td class="font-medium">${values.handphone}</td>
            <td>
            ${values.email}
            </td>
            <td>${values.alamat}</td>
          </tr>
          </div>`;
        });
        document.getElementById("tablebody").innerHTML=tableData
    })
    .catch(error => console.log('error', error));
