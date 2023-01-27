var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://hris_backend.ulbi.ac.id/gaji/peg/transaksiall", requestOptions)
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
        <p>${values.nik}</p>
      </td>
      <td class="font-medium">${values.pokok}</td>
      <td class="font-medium">${values.gaji_kotor}</td>
      <td>
      ${values.total_potongan}
      </td>
      <td>${values.gaji_bersih}</td>
    </tr>
    </div>`;
  });
  document.getElementById("tablecrot").innerHTML=tableData
})
.catch(error => console.log('error', error));
