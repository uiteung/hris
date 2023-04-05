fetch("https://hris_backend.ulbi.ac.id/kp/kenaikanpangkat")
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    let tableData = "";
    data.data.map((values) => {
      // Manipulasi data pegawai dan masukkan ke dalam bentuk tabel
      tableData += `
        <tr class="text-xs bg-gray-50">
          <td class="py-5 px-6 font-medium">${values.nip}</td>
          <td class="py-5 px-6 font-medium">${values.nik}</td>
          <td class="font-medium">${values.mk_bulan}</td>
          <td class="font-medium">${values.mk_tahun}</td>
          <td class="font-medium">${values.no_sk}</td>
          <td class="font-medium">${values.tgl_sk}</td>
          <td class="font-medium">${values.no_surat_usul}</td>
          <td class="font-medium">${values.tgl_surat_usul}</td>
          <td class="font-medium">${values.naik_selanjutnya}</td>
          <td>
          <span class="inline-block py-1 px-2 text-white bg-green-500 rounded-full">${values.pejabat_sk}</span>
          </td>
          <td>
          <span class="inline-block py-1 px-2 text-purple-500 bg-purple-50 rounded-full">${values.ket}</span>
          </td>
          <td>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" data-employee-nip="${values.nip}">
              Naik Pangkat
            </button>
          </td>
        </tr>`;
    });
    // Tampilkan data pegawai ke dalam tabel
    document.getElementById("tablebody").innerHTML = tableData;

    // Tambahkan event listener pada setiap tombol detail untuk mengambil nip dan mengarahkan ke halaman detail pegawai yang sesuai
    const detailButtons = document.querySelectorAll('.bg-blue-500');
    detailButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const nip = event.target.getAttribute('data-employee-nip');
        window.location.href = `prosesnaikpangkat.html?nip=${nip}`;
      });
    });
  })
  .catch(error => {
    console.log('error', error);
    alert('Terjadi kesalahan pada server');
  });
