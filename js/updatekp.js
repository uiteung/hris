const urlParams = new URLSearchParams(window.location.search);
const idNaikpangkat = urlParams.get("id_naikpangkat");

fetch(
	`https://hris_backend.ulbi.ac.id/kp/kenaikanpangkat/edit/${idNaikpangkat}`
)
	.then((result) => {
		// Ubah data yang didapat dari server menjadi objek JSON
		return result.json();
	})
	.then((data) => {
		// Tampilkan data pegawai ke dalam tabel atau div sesuai dengan struktur HTML yang digunakan pada file detailpegawai.html
		let divData = "";
		// Looping data pegawai dan masukkan ke dalam bentuk tabel
		divData += `
            <form>
                <div class="mb-3">
                  <label class="small mb-1" for="nama_lengkap"
                    >Nama Lengkap</label
                  >
                  <input
                    class="form-control"
                    id="nama_lengkap"
                    type="text"
                    placeholder="Inputkan Nama Lengkap"
                    value=${data.data.nama}
                    readonly />
                </div>

                <div class="row gx-3 mb-3">
                  <div class="col-md-6">
                    <label class="small mb-1" for="id_pegawai">Pegawai</label>
                    <input
                      class="form-control"
                      id="id_pegawai"
                      type="text"
                      placeholder="Inputkan Pegawai"
                      value="Dosen" />
                  </div>

                  <div class="col-md-6">
                    <label class="small mb-1" for="id_golongan">Golongan</label>
                    <input
                      class="form-control"
                      id="id_golongan"
                      type="text"
                      placeholder="Inputkan Golongan"
                      value="Golongan 1" />
                  </div>
                </div>

                <div class="row gx-3 mb-3">
                  <div class="col-md-6">
                    <label class="small mb-1" for="id_status">Status</label>
                    <input
                      class="form-control"
                      id="id_status"
                      type="text"
                      placeholder="Inputkan Status"
                      value="Status Pegawai" />
                  </div>

                  <div class="col-md-6">
                    <label class="small mb-1" for="JenisJabatanID"
                      >Jenis Jabatan</label
                    >
                    <input
                      class="form-control"
                      id="JenisJabatanID"
                      type="text"
                      placeholder="Inputkan Jenis Jabatan"
                      value="Jenis Jabatan" />
                  </div>
                </div>

                <div class="row gx-3 mb-3">
                  <div class="col-md-6">
                    <label class="small mb-1" for="inputPhone"
                      >Nomor Surat Usul</label
                    >
                    <input
                      class="form-control"
                      id="inputPhone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value="555-123-4567" />
                  </div>

                  <div class="col-md-6">
                    <label class="small mb-1" for="inputBirthday"
                      >Tanggal Surat Usul</label
                    >
                    <input
                      class="form-control"
                      id="inputBirthday"
                      type="text"
                      name="birthday"
                      placeholder="Enter your birthday"
                      value="06/10/1988" />
                  </div>
                </div>

                <div class="row gx-3 mb-3">
                  <div class="col-md-6">
                    <label class="small mb-1" for="inputPhone">Nomor SK</label>
                    <input
                      class="form-control"
                      id="inputPhone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value="555-123-4567" />
                  </div>

                  <div class="col-md-6">
                    <label class="small mb-1" for="inputBirthday"
                      >Tanggal SK</label
                    >
                    <input
                      class="form-control"
                      id="inputBirthday"
                      type="text"
                      name="birthday"
                      placeholder="Enter your birthday"
                      value="06/10/1988" />
                  </div>
                </div>

                <div class="mb-3">
                  <label class="small mb-1" for="inputUsername"
                    >Pejabat SK</label
                  >
                  <input
                    class="form-control"
                    id="inputUsername"
                    type="text"
                    placeholder="Enter your username"
                    value="username" />
                </div>

                <div class="row gx-3 mb-3">
                  <div class="col-md-6">
                    <label class="small mb-1" for="inputPhone"
                      >Masa Kerja (Bulan)</label
                    >
                    <input
                      class="form-control"
                      id="inputPhone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value="555-123-4567" />
                  </div>

                  <div class="col-md-6">
                    <label class="small mb-1" for="inputBirthday"
                      >Masa Kerja (Tahun)</label
                    >
                    <input
                      class="form-control"
                      id="inputBirthday"
                      type="text"
                      name="birthday"
                      placeholder="Enter your birthday"
                      value="06/10/1988" />
                  </div>
                </div>

                <div class="mb-3">
                  <label class="small mb-1" for="inputUsername"
                    >Gaji Pokok Baru</label
                  >
                  <input
                    class="form-control"
                    id="inputUsername"
                    type="text"
                    placeholder="Enter your username"
                    value="username" />
                </div>

                <div class="mb-3">
                  <label class="small mb-1" for="inputUsername"
                    >Gaji Pokok Terbilang</label
                  >
                  <input
                    class="form-control"
                    id="inputUsername"
                    type="text"
                    placeholder="Enter your username"
                    value="username" />
                </div>

                <div class="row gx-3 mb-3">
                  <div class="col-md-6">
                    <label class="small mb-1" for="inputPhone"
                      >Naik Selanjutnya</label
                    >
                    <input
                      class="form-control"
                      id="inputPhone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value="555-123-4567" />
                  </div>

                  <div class="col-md-6">
                    <label class="small mb-1" for="inputBirthday"
                      >Keterangan</label
                    >
                    <input
                      class="form-control"
                      id="inputBirthday"
                      type="text"
                      name="birthday"
                      placeholder="Enter your birthday"
                      value="06/10/1988" />
                  </div>
                </div>

                <div class="row justify-content-center">
                  <a class="btn btn-primary col-2" href="#" role="button"
                    >Ajukan Naik Pangkat</a
                  >
                </div>
              </form>`;
		// Tampilkan data pegawai ke dalam tabel
		document.getElementById("formdata").innerHTML = divData;

		// Dapatkan tombol update menggunakan id atau kelas
		const updateButton = document.querySelector('.btn-primary');

		// Tambahkan event listener untuk klik pada tombol
		updateButton.addEventListener('click', function () {
			// Arahkan pengguna ke halaman form update
			window.location.href = 'updatekp.html';
		});
	})

	.catch((error) => {
		// Tangani error jika terjadi
		console.log("error", error);
		alert("Terjadi kesalahan pada server");
	});
