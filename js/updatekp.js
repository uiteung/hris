const urlParams = new URLSearchParams(window.location.search);
const idNaikpangkat = urlParams.get("id_naikpangkat");
const dropdownJabatan = document.getElementById("JenisJabatanID");
const dropdownStatus = document.getElementById("id_statuskepeg");
const dropdownJenisKepeg = document.getElementById("id_jnskepeg");
const dropdownGolongan = document.getElementById("id_gol");

// Fetch data dari API jabatan
fetch("https://hris_backend.ulbi.ac.id/jbtn/jabatanstruktural")
	.then((response) => response.json())
	.then((data) => {
		// Looping data jabatan dan tambahkan data ke dalam dropdown
		data.data.forEach((jabatan) => {
			let option = document.createElement("option");
			option.text = jabatan.Nama;
			option.value = jabatan.JenisJabatanID;
			dropdownJabatan.add(option);
		});
	})
	.catch((error) => console.error(error));

// Fetch data dari API status kepegawaian
fetch("https://hris_backend.ulbi.ac.id/stskepeg/statuskepegawaian")
	.then((response) => response.json())
	.then((data) => {
		// Looping data stskepeg dan tambahkan data ke dalam dropdown
		data.data.forEach((statuskepeg) => {
			let option = document.createElement("option");
			option.text = statuskepeg.status;
			option.value = statuskepeg.id_statuskepeg;
			dropdownStatus.add(option);
		});
	})
	.catch((error) => console.error(error));

// Fetch data dari API jenis kepegawaian
fetch("https://hris_backend.ulbi.ac.id/jnskepeg/jeniskepegawaian")
	.then((response) => response.json())
	.then((data) => {
		// Looping data jabatan dan tambahkan data ke dalam dropdown
		data.data.forEach((jnskepeg) => {
			let option = document.createElement("option");
			option.text = jnskepeg.jns_kepeg;
			option.value = jnskepeg.id_jnskepeg;
			dropdownJenisKepeg.add(option);
		});
	})
	.catch((error) => console.error(error));

// Fetch data dari API golongan
fetch("https://hris_backend.ulbi.ac.id/gol/golongan")
	.then((response) => response.json())
	.then((data) => {
		// Looping data jabatan dan tambahkan data ke dalam dropdown
		data.data.forEach((gol) => {
			let option = document.createElement("option");
			option.text = gol.golongan_pangkat;
			option.value = gol.id_gol;
			dropdownGolongan.add(option);
		});
	})
	.catch((error) => console.error(error));

fetch(
	`https://hris_backend.ulbi.ac.id/kp/kenaikanpangkat/byid/${idNaikpangkat}`
)
	.then((result) => {
		// Ubah data yang didapat dari server menjadi objek JSON
		return result.json();
	})
	.then((data) => {
		document.getElementById("id_pegawai").value = data.data.id_pegawai;
		document.getElementById("id_gol").value = data.data.id_gol;
		document.getElementById("id_jnskepeg").value = data.data.id_jnskepeg;
		document.getElementById("id_statuskepeg").value = data.data.id_statuskepeg;
		document.getElementById("JenisJabatanID").value = data.data.JenisJabatanID;
		document.getElementById("nama").value = data.data.nama;
		document.getElementById("nip").value = data.data.nip;
		document.getElementById("nidn").value = data.data.nidn;
		document.getElementById("handphone").value = data.data.handphone;
		document.getElementById("nik").value = data.data.ktp;
		document.getElementById("jabatan").value = data.data.jabatan;
		document.getElementById("no_surat_usul").value = data.data.no_surat_usul;
		document.getElementById("tgl_surat_usul").value = data.data.tgl_surat_usul;
		document.getElementById("no_sk").value = data.data.no_sk;
		document.getElementById("tgl_sk").value = data.data.tgl_sk;
		document.getElementById("mk_tahun").value = data.data.mk_tahun;
		document.getElementById("mk_bulan").value = data.data.mk_bulan;
		document.getElementById("tmt_baru").value = data.data.tmt_baru;
		document.getElementById("gapok_baru").value = data.data.gapok_baru;
		document.getElementById("gapok_terbilang").value = data.data.gapok_terbilang;
		document.getElementById("kenaikan_gaji_berkala").value = data.data.kenaikan_gaji_berkala;
		document.getElementById("kenaikan_pangkat_selanjutnya").value = data.data.kenaikan_pangkat_selanjutnya;
		document.getElementById("ket").value = data.data.ket;
	})

	.catch((error) => {
		// Tangani error jika terjadi
		console.log("error", error);
		alert("Terjadi kesalahan pada server");
	});

function updateKp() {
	// ambil nilai dari elemen input
	const newIdPegawai = parseInt(document.getElementById('id_pegawai').value);
	const newIdGolongan = parseInt(document.getElementById('id_gol').value);
	const newIdJenisKepegawaian = parseInt(document.getElementById('id_jnskepeg').value);
	const newIdStatusKepegawaian = parseInt(document.getElementById('id_statuskepeg').value);
	const newIdJenisJabatan = parseInt(document.getElementById('JenisJabatanID').value);
	const newJabatan = document.getElementById('jabatan').value;
	const newNoSuratUsul = document.getElementById('no_surat_usul').value;
	const newTanggalSuratUsul = document.getElementById('tgl_surat_usul').value;
	const newNoSk = document.getElementById('no_sk').value;
	const newTanggalSK = document.getElementById('tgl_sk').value;
	const newMkTahun = document.getElementById('mk_tahun').value;
	const newMkBulan = document.getElementById('mk_bulan').value;
	const newTmtBaru = document.getElementById('tmt_baru').value;
	const newGapokBaru = parseFloat(document.getElementById('gapok_baru').value);
	const newGapokTerbilang = document.getElementById('gapok_terbilang').value;
	const newKenaikanGajiBerkala = document.getElementById('kenaikan_gaji_berkala').value;
	const newKenaikanPangkatSelanjutnya = document.getElementById('kenaikan_pangkat_selanjutnya').value;
	const newKeterangan = document.getElementById('ket').value;

	// buat objek untuk dikirim ke server
	const data = {
		id_pegawai: newIdPegawai,
		id_gol: newIdGolongan,
		id_jnskepeg: newIdJenisKepegawaian,
		id_statuskepeg: newIdStatusKepegawaian,
		JenisJabatanID: newIdJenisJabatan,
		jabatan: newJabatan,
		no_surat_usul: newNoSuratUsul,
		tgl_surat_usul: newTanggalSuratUsul,
		no_sk: newNoSk,
		tgl_sk: newTanggalSK,
		mk_tahun: newMkTahun,
		mk_bulan: newMkBulan,
		tmt_baru: newTmtBaru,
		gapok_baru: newGapokBaru,
		gapok_terbilang: newGapokTerbilang,
		kenaikan_gaji_berkala: newKenaikanGajiBerkala,
		kenaikan_pangkat_selanjutnya: newKenaikanPangkatSelanjutnya,
		ket: newKeterangan
	};

	// kirim permintaan ke server
	fetch(`https://hris_backend.ulbi.ac.id/kp/kenaikanpangkat/edit/${idNaikpangkat}`, {
		method: 'PATCH',
		body: JSON.stringify(data),
		headers: {
			'Content-type': 'application/json',
		},
	})
		.then((response) => {
			if (!response.ok) { // cek jika response tidak ok
				throw new Error('Terjadi kesalahan saat mengajukan kenaikan pangkat'); // lempar error
			}
			return response.json();
		})
		.then((json) => {
			console.log(json);
			// tampilkan notifikasi ketika data berhasil diupdate
			Swal.fire(
				'Berhasil!',
				'Status Kenaikan Pangkat Berhasil Diubah!',
				'success'
			).then(() => {
				// redirect ke halaman home setelah update berhasil
				window.location.href = 'kenaikanpangkat.html';
			});
		})
		.catch((error) => { // tangani kesalahan
			console.error(error); // tampilkan error di console
			// tampilkan notifikasi error
			Swal.fire(
				'Error!',
				error.message,
				'error'
			);
		});
}
