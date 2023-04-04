fetch("https://hris_backend.ulbi.ac.id/pegawai/sdm")
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    let tableData = "";
    data.data.map((values) => {
      // Manipulasi data pegawai dan masukkan ke dalam bentuk tabel
      tableData += `
        <tr class="text-xs bg-gray-50">
          <td class="py-5 px-6 font-medium">${values.nidn}</td>
          <td class="flex px-4 py-3">
            <img class="w-8 h-8 mr-4 object-cover rounded-md" src="artemis-assets/images/LOGO ULBI - WIDE BACKGROUNG NEVY.png">
            <div>
              <p class="font-medium">${values.nama_sdm}</p>
            </div>
          </td>
          <td class="font-medium">${values.nip}</td>
          <td>
            <span class="inline-block py-1 px-2 text-white bg-green-500 rounded-full">${values.nama_status_aktif}</span>
          </td>
          <td>
            <span class="inline-block py-1 px-2 text-white bg-green-500 rounded-full">${values.nama_status_pegawai}</span>
          </td>
          <td>
            <span class="inline-block py-1 px-2 text-purple-500 bg-purple-50 rounded-full">${values.jenis_sdm}</span>
          </td>
          <td>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" data-employee-id="${values.id_sdm}">
              Detail
            </button>
          </td>
        </tr>`;
    });
    // Tampilkan data pegawai ke dalam tabel
    document.getElementById("tablebody").innerHTML = tableData;

    // Tambahkan event listener pada setiap tombol detail untuk mengambil id_sdm dan mengarahkan ke halaman detail pegawai yang sesuai
    const detailButtons = document.querySelectorAll('.bg-blue-500');
    detailButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const idSdm = event.target.getAttribute('data-employee-id');
        window.location.href = `detailpegawai.html?id_sdm=${idSdm}`;
      });
    });
  })
  .catch(error => {
    console.log('error', error);
    alert('Terjadi kesalahan pada server');
  });
