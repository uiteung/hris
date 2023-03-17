// Set headers yang diperlukan untuk mengakses API
const headers = {
	'Content-Type': 'application/json',
	'Authorization': `Bearer ${localStorage.getItem('token')}`
};

// Set requestOptions untuk melakukan fetch data
const requestOptions = {
	method: 'GET',
	headers: headers,
	redirect: 'follow'
};

// Cek apakah token sudah tersimpan di localStorage, jika tidak maka redirect ke halaman login
if (!localStorage.getItem('token')) {
	window.location.href = 'login.html';
}

// Ambil data pegawai dengan mengirimkan request ke endpoint "https://hris_backend.ulbi.ac.id/pegawai/sdm"
fetch("https://hris_backend.ulbi.ac.id/pegawai/sdm", requestOptions)
	.then((result) => {
		// Ubah data yang didapat dari server menjadi objek JSON
		return result.json();
	})
	.then((objectData) => {
		let tableData = "";
		// Looping data pegawai dan masukkan ke dalam bentuk tabel
		objectData.data.map((values) => {
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
        </tr>`;
		});
		// Tampilkan data pegawai ke dalam tabel
		document.getElementById("tablebody").innerHTML = tableData;
	})
	.catch(error => {
		// Tangani error jika terjadi
		console.log('error', error);
		alert('Terjadi kesalahan pada server');
	});