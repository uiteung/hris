const urlParams = new URLSearchParams(window.location.search);
const idNaikpangkat = urlParams.get("id_naikpangkat");

fetch(
	`https://hris_backend.ulbi.ac.id/kp/kenaikanpangkat/byid/${idNaikpangkat}`
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
            <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Nama</h6>
                  </div>
                  <div class="col-sm-9 text-bold">${data.data.nama}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">NIDN</h6>
                  </div>
                  <div class="col-sm-9 text-bold">${data.data.nidn}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">NIP</h6>
                  </div>
                  <div class="col-sm-9 text-bold">${data.data.nip}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">NIPY</h6>
                  </div>
                  <div class="col-sm-9 text-bold">${data.data.nipy}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">NIK</h6>
                  </div>
                  <div class="col-sm-9 text-bold">${data.data.ktp}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">No. Handphone</h6>
                  </div>
                  <div class="col-sm-9 text-bold">${data.data.handphone}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Golongan</h6>
                  </div>
                  <div class="col-sm-9 text-bold">${data.data.gol}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Jabatan</h6>
                  </div>
                  <div class="col-sm-9 text-bold">${data.data.singkatan}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Jenis Pegawai</h6>
                  </div>
                  <div class="col-sm-9 text-bold">${data.data.jns_kepeg}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Status Pegawai</h6>
                  </div>
                  <div class="col-sm-9 text-bold">${data.data.status}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">No. Surat Usul</h6>
                  </div>
                  <div class="col-sm-9 text-bold">${data.data.no_surat_usul}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Tanggal Surat Usul</h6>
                  </div>
                  <div class="col-sm-9 text-bold">${data.data.tgl_surat_usul}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">No. SK</h6>
                  </div>
                  <div class="col-sm-9 text-bold">${data.data.no_sk}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Tanggal SK</h6>
                  </div>
                  <div class="col-sm-9 text-bold">${data.data.tgl_sk}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Pejabat SK</h6>
                  </div>
                  <div class="col-sm-9 text-bold">${data.data.pejabat_sk}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Masa Kerja (Tahun)</h6>
                  </div>
                  <div class="col-sm-9 text-bold">${data.data.mk_tahun}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Masa Kerja (Bulan)</h6>
                  </div>
                  <div class="col-sm-9 text-bold">${data.data.mk_bulan}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Terhitung Mulai Tanggal Baru</h6>
                  </div>
                  <div class="col-sm-9 text-bold">${data.data.tmt_baru}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Gaji Pokok Baru</h6>
                  </div>
                  <div class="col-sm-9 text-bold">${data.data.gapok_baru}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Gaji Pokok Terbilang</h6>
                  </div>
                  <div class="col-sm-9 text-bold">${data.data.gapok_terbilang}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Naik Selanjutnya</h6>
                  </div>
                  <div class="col-sm-9 text-bold">${data.data.naik_selanjutnya}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Keterangan</h6>
                  </div>
                  <div class="col-sm-9 text-bold">${data.data.ket}</div>
                </div>
				<hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Ubah Status Kenaikan Pangkat</h6>
                  </div>
				  <div class="col-sm-9 text-bold">
				  	<button type="button" class="btn btn-primary">Update</button>
				  </div>
                </div>
			</div>`;
		// Tampilkan data pegawai ke dalam tabel
		document.getElementById("detailkp").innerHTML = divData;

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
