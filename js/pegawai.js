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
        // console.log(objectData.data[0].nip);
        let tableData="";
        objectData.data.map((values)=>{
            tableData +=`
            <div>
            <tr class="text-xs bg-gray-50">
              <td class="py-5 px-6 font-medium">${values.nip}</td>
              <td class="flex px-4 py-3">
                <img class="w-8 h-8 mr-4 object-cover rounded-md" src="artemis-assets/images/LOGO ULBI - WIDE BACKGROUNG NEVY.png">
                <div>
                  <p class="font-medium">${values.nama}</p>
                  <p class="text-gray-500">${values.email}</p>
                </div>
              </td>
              <td class="font-medium">${values.handphone}</td>
              <td>
                <span class="inline-block py-1 px-2 text-white bg-green-500 rounded-full">${values.alamat}</span>
              </td>
              <td>
                <span class="inline-block py-1 px-2 text-purple-500 bg-purple-50 rounded-full">${values.tanggal_lahir}</span>
              </td>
            </tr>
          </div>`;
        });
        document.getElementById("tablebody").innerHTML=tableData
    })
    .catch(error => console.log('error', error));
