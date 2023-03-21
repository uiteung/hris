// Set headers yang diperlukan untuk mengakses API
const headers = {
	'Content-Type': 'application/json',
	'Authorization': `Bearer ${localStorage.getItem('token')}`
};

// Ambil id_sdm dari URL
const urlParams = new URLSearchParams(window.location.search);
const idSdm = urlParams.get('id_sdm');

// Set requestOptions untuk melakukan fetch data
const requestOptions = {
	method: 'GET',
	headers: headers,
	redirect: 'follow'
};

// Ambil data pegawai dengan mengirimkan request ke endpoint "https://hris_backend.ulbi.ac.id/pegawai/sdm/byid/:id_sdm"
fetch(`https://hris_backend.ulbi.ac.id/pegawai/sdm/byid/${idSdm}`, requestOptions)
	.then((result) => {
		// Ubah data yang didapat dari server menjadi objek JSON
		return result.json();
	})
	.then((objectData) => {
		// Tampilkan data pegawai ke dalam tabel atau div sesuai dengan struktur HTML yang digunakan pada file detailpegawai.html
		let divData = "";
		// Looping data pegawai dan masukkan ke dalam bentuk tabel
		divData += `
            <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Nama Lengkap</h6>
                  </div>
                  <div class="col-sm-9 text-bold">${objectData.data.nama}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Jenis Kelamin</h6>
                  </div>
                  <div class="col-sm-9 text-bold">${objectData.data.jenis_kelamin}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Tempat Lahir</h6>
                  </div>
                  <div class="col-sm-9 text-bold">${objectData.data.tempat_lahir}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Tanggal Lahir</h6>
                  </div>
                  <div class="col-sm-9 text-bold">${objectData.data.tanggal_lahir}</div>
                </div>
				<hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Nama Ibu Kandung</h6>
                  </div>
                  <div class="col-sm-9 text-bold">${objectData.data.nama_ibu_kandung}</div>
                </div>
			</div>`;
		// Tampilkan data pegawai ke dalam tabel
		document.getElementById("profilpribadi").innerHTML = divData;
	})

fetch(`https://hris_backend.ulbi.ac.id/pegawai/sdm/kepegawaian/${idSdm}`, requestOptions)
	.then((result) => {
		return result.json();
	})
	.then((objectData) => {
		let divData = "";
		divData += `
			<div class="card mt-3">
              <ul class="list-group list-group-flush">
                <li
                  class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 class="mb-0">NIP</h6>
                  <span class="text-bold">${objectData.data.nip}</span>
                </li>
                <li
                  class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 class="mb-0">SK CPNS</h6>
                  <span class="text-bold">${objectData.data.sk_cpns}</span>
                </li>
                <li
                  class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 class="mb-0">Tanggal SK CPNS</h6>
                  <span class="text-bold">${objectData.data.TanggalSkCpns}</span>
                </li>
                <li
                  class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 class="mb-0">SK TMMD</h6>
                  <span class="text-bold">${objectData.data.sk_tmmd}</span>
                </li>
                <li
                  class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 class="mb-0">TMMD</h6>
                  <span class="text-bold">${objectData.data.tmmd}</span>
                </li>
                <li
                  class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 class="mb-0">Sumber Gaji</h6>
                  <span class="text-bold">${objectData.data.sumber_gaji}</span>
                </li>
                <li
                  class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 class="mb-0">NIDN</h6>
                  <span class="text-bold">${objectData.data.nidn}</span>
                </li>
              </ul>
            </div>
		`;
		document.getElementById("kepegawaian").innerHTML = divData;
	})

fetch(`https://hris_backend.ulbi.ac.id/pegawai/sdm/lain/${idSdm}`, requestOptions)
	.then((result) => {
		return result.json();
	})
	.then((objectData) => {
		let divData = "";
		divData += `
			<div class="card mt-3">
              <ul class="list-group list-group-flush">
                <li
                  class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 class="mb-0">NPWP</h6>
                  <span class="text-bold">${objectData.data.npwp}</span>
                </li>
                <li
                  class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 class="mb-0">Nama</h6>
                  <span class="text-bold">${objectData.data.nama_wp}</span>
                </li>
              </ul>
            </div>
		`;
		document.getElementById("lain").innerHTML = divData;
	})

fetch(`https://hris_backend.ulbi.ac.id/pegawai/sdm/kependudukan/${idSdm}`, requestOptions)
	.then((result) => {
		return result.json();
	})
	.then((objectData) => {
		let divData = "";
		divData += `
                    <h6 class="d-flex align-items-center mb-3">Kependudukan</h6>
					<hr />
                    <h6 class="mb-0">NIK</h6>
                    <div>
                      <h7>${objectData.data.nik}</h7>
                    </div>
					<hr />
                    <h6 class="mb-0">Agama</h6>
                    <div>
                      <h7>${objectData.data.agama}</h7>
                    </div>
					<hr />
                    <h6 class="mb-0">Kewarganegaraan</h6>
                    <div>
                      <h7>${objectData.data.kewarganegaraan}</h7>
                    </div>
					<hr />
                    <h6 class="mb-0">Kode Negara</h6>
                    <div>
                      <h7>${objectData.data.kode_negara}</h7>
                    </div>
		`;
		document.getElementById("kependudukan").innerHTML = divData;
	})

fetch(`https://hris_backend.ulbi.ac.id/pegawai/sdm/keluarga/${idSdm}`, requestOptions)
	.then((result) => {
		return result.json();
	})
	.then((objectData) => {
		let divData = "";
		divData += `
                    <h6 class="d-flex align-items-center mb-3">Keluarga</h6>
					<hr />
                    <h6 class="mb-0">Status Kawin</h6>
                    <div>
                      <h7>${objectData.data.status_kawin}</h7>
                    </div>
					<hr />
                    <h6 class="mb-0">Nama Pasangan</h6>
                    <div>
                      <h7>${objectData.data.nama_pasangan}</h7>
                    </div>
					<hr />
                    <h6 class="mb-0">NIP Pasangan</h6>
                    <div>
                      <h7>${objectData.data.nip_pasangan}</h7>
                    </div>
					<hr />
                    <h6 class="mb-0">Pekerjaan Pasangan</h6>
                    <div>
                      <h7>${objectData.data.pekerjaan_pasangan}</h7>
                    </div>
		`;
		document.getElementById("keluarga").innerHTML = divData;
	})

fetch(`https://hris_backend.ulbi.ac.id/pegawai/sdm/bidang_ilmu/${idSdm}`, requestOptions)
	.then((result) => {
		return result.json();
	})
	.then((objectData) => {
		let tableData = "";
		objectData.data.forEach((data) => {
			tableData += `
	                <tr>
	                  <td>${data.urutan}</td>
	                  <td>${data.kelompok_bidang}</td>
	                </tr>
				`;
		});
		document.getElementById("tablebody").innerHTML = tableData;
	})

fetch(`https://hris_backend.ulbi.ac.id/pegawai/sdm/alamat/${idSdm}`, requestOptions)
	.then((result) => {
		// Ubah data yang didapat dari server menjadi objek JSON
		return result.json();
	})
	.then((objectData) => {
		// Tampilkan data pegawai ke dalam tabel atau div sesuai dengan struktur HTML yang digunakan pada file detailpegawai.html
		let divData = "";
		// Looping data pegawai dan masukkan ke dalam bentuk tabel
		divData += `
            <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Email</h6>
                  </div>
                  <div class="col-sm-9 text-bold">${objectData.data.email}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Alamat</h6>
                  </div>
                  <div class="col-sm-9 text-bold">${objectData.data.alamat}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Rt</h6>
                  </div>
                  <div class="col-sm-9 text-bold">${objectData.data.rt}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Rw</h6>
                  </div>
                  <div class="col-sm-9 text-bold">${objectData.data.rw}</div>
                </div>
				<hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Dusun</h6>
                  </div>
                  <div class="col-sm-9 text-bold">${objectData.data.dusun}</div>
                </div>
				<hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Kelurahan</h6>
                  </div>
                  <div class="col-sm-9 text-bold">${objectData.data.kelurahan}</div>
                </div>
				<hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Kota / Kabupaten</h6>
                  </div>
                  <div class="col-sm-9 text-bold">${objectData.data.kota_kabupaten}</div>
                </div>
				<hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Kode Pos</h6>
                  </div>
                  <div class="col-sm-9 text-bold">${objectData.data.kode_pos}</div>
                </div>
				<hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Telepon Rumah</h6>
                  </div>
                  <div class="col-sm-9 text-bold">${objectData.data.telepon_rumah}</div>
                </div>
				<hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Telepon Hp</h6>
                  </div>
                  <div class="col-sm-9 text-bold">${objectData.data.telepon_hp}</div>
                </div>
			</div>`;
		// Tampilkan data pegawai ke dalam tabel
		document.getElementById("alamat").innerHTML = divData;
	})

fetch(`https://hris_backend.ulbi.ac.id/pegawai/sdm/ajuan?id_sdm=${idSdm}`, requestOptions)
	.then((result) => {
		return result.json();
	})
	.then((objectData) => {
		let tableData = "";
		objectData.data.forEach((data) => {
			console.log(objectData.data);
			tableData += `
	                <tr>
	                  <td>${data.tanggal_ajuan}</td>
	                  <td>${data.tanggal_verifikasi}</td>
	                  <td>${data.jenis_ajuan}</td>
	                  <td>${data.keterangan}</td>
	                  <td>${data.umur}</td>
	                  <td>${data.status}</td>
	                </tr>
				`;
		});
		document.getElementById("ajuan").innerHTML = tableData;
	})

	.catch(error => {
		// Tangani error jika terjadi
		console.log('error', error);
		alert('Terjadi kesalahan pada server');
	});