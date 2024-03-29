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
                  <div class="col-sm-4">
                    <h6 class="mb-0">Nama</h6>
                  </div>
                  <div class="col-sm-8 text-bold">${data.data.nama}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-4">
                    <h6 class="mb-0">NIDN</h6>
                  </div>
                  <div class="col-sm-8 text-bold">${data.data.nidn}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-4">
                    <h6 class="mb-0">NIP</h6>
                  </div>
                  <div class="col-sm-8 text-bold">${data.data.nip}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-4">
                    <h6 class="mb-0">NIK</h6>
                  </div>
                  <div class="col-sm-8 text-bold">${data.data.ktp}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-4">
                    <h6 class="mb-0">No. Handphone</h6>
                  </div>
                  <div class="col-sm-8 text-bold">${data.data.handphone}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-4">
                    <h6 class="mb-0">Golongan</h6>
                  </div>
                  <div class="col-sm-8 text-bold">${data.data.golongan_pangkat}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-4">
                    <h6 class="mb-0">Jabatan</h6>
                  </div>
                  <div class="col-sm-8 text-bold">${data.data.Nama}</div>
                </div>
                <hr />
				<div class="row">
                  <div class="col-sm-4">
                    <h6 class="mb-0">Jabatan</h6>
                  </div>
                  <div class="col-sm-8 text-bold">${data.data.jabatan}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-4">
                    <h6 class="mb-0">Jenis Pegawai</h6>
                  </div>
                  <div class="col-sm-8 text-bold">${data.data.jns_kepeg}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-4">
                    <h6 class="mb-0">Status Pegawai</h6>
                  </div>
                  <div class="col-sm-8 text-bold">${data.data.status}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-4">
                    <h6 class="mb-0">No. Surat Usul</h6>
                  </div>
                  <div class="col-sm-8 text-bold">${data.data.no_surat_usul}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-4">
                    <h6 class="mb-0">Tanggal Surat Usul</h6>
                  </div>
                  <div class="col-sm-8 text-bold">${data.data.tgl_surat_usul}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-4">
                    <h6 class="mb-0">No. SK</h6>
                  </div>
                  <div class="col-sm-8 text-bold">${data.data.no_sk}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-4">
                    <h6 class="mb-0">Tanggal SK</h6>
                  </div>
                  <div class="col-sm-8 text-bold">${data.data.tgl_sk}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-4">
                    <h6 class="mb-0">Masa Kerja (Tahun)</h6>
                  </div>
                  <div class="col-sm-8 text-bold">${data.data.mk_tahun}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-4">
                    <h6 class="mb-0">Masa Kerja (Bulan)</h6>
                  </div>
                  <div class="col-sm-8 text-bold">${data.data.mk_bulan}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-4">
                    <h6 class="mb-0">Terhitung Mulai Tanggal Baru</h6>
                  </div>
                  <div class="col-sm-8 text-bold">${data.data.tmt_baru}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-4">
                    <h6 class="mb-0">Gaji Pokok Baru</h6>
                  </div>
                  <div class="col-sm-8 text-bold">${data.data.gapok_baru}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-4">
                    <h6 class="mb-0">Gaji Pokok Terbilang</h6>
                  </div>
                  <div class="col-sm-8 text-bold">${data.data.gapok_terbilang}</div>
                </div>
                <hr />
				<div class="row">
                  <div class="col-sm-4">
                    <h6 class="mb-0">Kenaikan Gaji Berkala Selanjutnya</h6>
                  </div>
                  <div class="col-sm-8 text-bold">${data.data.kenaikan_gaji_berkala}</div>
                </div>
                <hr />
				<div class="row">
                  <div class="col-sm-4">
                    <h6 class="mb-0">Kenaikan Pangkat Selanjutnya</h6>
                  </div>
                  <div class="col-sm-8 text-bold">${data.data.kenaikan_pangkat_selanjutnya}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-4">
                    <h6 class="mb-0">Keterangan</h6>
                  </div>
                  <div class="col-sm-8 text-bold">${data.data.ket}</div>
                </div>
			</div>`;
		// Tampilkan data pegawai ke dalam tabel
		document.getElementById("detailkp").innerHTML = divData;
	})

	.catch((error) => {
		// Tangani error jika terjadi
		console.log("error", error);
		alert("Terjadi kesalahan pada server");
	});
