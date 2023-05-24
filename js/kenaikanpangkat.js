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
          <td class="py-5 px-6 font-medium">${values.nama}</td>
          <td class="py-5 px-6 font-medium">${values.nip}</td>
          <td class="py-5 px-6 font-medium">${values.ktp}</td>
          <td class="py-5 px-6 font-medium">${values.nidn}</td>
          <td class="py-5 px-6 font-medium">${values.handphone}</td>
          <td class="py-5 px-6 font-medium">
            <span class="inline-block py-1 px-2 text-white bg-green-500 rounded-full">${values.status}</span>
          </td>
          <td class="py-5 px-6 font-medium">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" data-id-naikpangkat="${values.id_naikpangkat}">
            Detail
          </button>  
		  <button class="bg-orange-300 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" data-id-naikpangkat="${values.id_naikpangkat}">
            Update
          </button>      
          </td>
        </tr>`;
		});
		// Tampilkan data pegawai ke dalam tabel
		document.getElementById("tablebody").innerHTML = tableData;

		// Tambahkan event listener pada setiap tombol detail untuk mengambil nip dan mengarahkan ke halaman detail pegawai yang sesuai
		const detailButtons = document.querySelectorAll(".bg-blue-500");
		detailButtons.forEach((button) => {
			button.addEventListener("click", (event) => {
				const idNaikpangkat = event.target.getAttribute("data-id-naikpangkat");
				if (!idNaikpangkat) {
					alert("Terjadi kesalahan. Tidak dapat menampilkan detail data.");
					return;
				}
				window.location.href = `detailkp.html?id_naikpangkat=${idNaikpangkat}`;
			});
		});

		const updateButtons = document.querySelectorAll(".bg-orange-300");
		updateButtons.forEach((button) => {
			button.addEventListener("click", (event) => {
				const idNaikpangkat = event.target.getAttribute("data-id-naikpangkat");
				if (!idNaikpangkat) {
					alert("Terjadi kesalahan. Tidak dapat menampilkan detail data.");
					return;
				}
				window.location.href = `updatekp.html?id_naikpangkat=${idNaikpangkat}`;
			});
		});
	})
	.catch((error) => {
		console.log("error", error);
		alert("Terjadi kesalahan pada server");
	});
