function fetchData(DosenID) {
  const url = `http://127.0.0.1:3000/honor/dosen/perwalian/${DosenID}`;

  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Request failed.");
      })
      .then((data) => {
        if (data.code === 200 && data.success && data.data) {
          displayResults(data.data);
          resolve(); // Resolve tanpa parameter jika pencarian berhasil
        } else {
          throw new Error("Invalid data format or empty data.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        reject(error); // Reject dengan kesalahan jika terjadi error
      });
  });
}

const pembimbingMapping = {
  NN056L: "Cahyo Prianto, S.Pd., M.T.,CDSP, SFPC",
  TI126L: "M. Yusril Helmi Setyawan, S.Kom., M.Kom.,SFPC",
  TI122L: "Mohamad Nurkamal Fauzan, S.T., M.T., SFPC",
  NN222L: "Nisa Hanum Harani, S.Kom., M.T.,CDSP, SFPC",
  NN225L: "Noviana Riza, S.Si., M.T., SFPC",
  LB053L: "Rd. Nuraini Siti Fatonah, S.S., M.Hum., SFPC",
  NN257L: "Rolly Maulana Awangga,S.T.,MT.,CAIP, SFPC",
  NN258L: "Roni Andarsyah, S.T., M.Kom., SFPC",
  TI117L: "Roni Habibi, S.Kom., M.T., SFPC",
  TI125L: "Syafrial Fachri Pane,ST. MTI,EBDP.CDSP,SFPC",
  TI041L: "Woro Isti Rahayu, S.T., M.T., SFPC",
};

// const Tahunajaran = {
//   21: "Tahun Ajaran Ganjil",
//   22: "Tahun Ajaran Genap",
// };

// function getTahunAjaran(tahun) {
//   const duaDigitTerakhir = tahun.slice(-2);
//   if (parseInt(duaDigitTerakhir) % 2 === 0) {
//     return "Tahun Ajaran Genap";
//   } else {
//     return "Tahun Ajaran Ganjil";
//   }
// }

// const tahun = "20222";
// const tahunAjaran = getTahunAjaran(tahun);
// console.log(tahunAjaran);

function displayResults(data) {
  const resultsBody = document.getElementById("results_body");
  resultsBody.innerHTML = ""; // Clear existing results

  if (Array.isArray(data) && data.length > 0) {
    data.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
      <td class="py-5 px-6 font-medium">${item.DosenID}</td>
      <td class="py-5 px-6 font-medium">${pembimbingMapping[item.DosenID]}</td>
      <td class="flex px-4 py-3">
        <div>
          <p class="font-medium">${item.TahunID}</p>
        </div>
      </td>
      <td class="font-medium">${item.PerwalianKe}</td>
      <td class="py-5 px-6 font-medium">${item.TahunAngkatan}</td>
      <td class="py-5 px-6 font-medium">${item.Kelas}</td>
      <td class="py-5 px-6 font-medium">${item.TanggalWaktu}</td>
      <td class="py-5 px-6 font-medium">${item.Honor}</td>
      </td>
      <td>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" data-employee-id="${
          item.PresensiPerwalianID
        }">
          Detail
        </button>
      </td>
        `;
      resultsBody.appendChild(row);
    });

    const deleteButtons = document.querySelectorAll(".bg-blue-500");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const PresensiPerwalianID = button.dataset.PresensiPerwalianID;
        deletePerwalian(PresensiPerwalianID);
      });
    });
  } else {
    console.error("Invalid data format or empty data.");
  }
  console.log(data);
}

function applyFilters() {
  const dosenIdInput = document.querySelector("#dosenIdInput");
  const kodedosen = dosenIdInput.value.trim();

  Swal.fire({
    title: "Memproses",
    html: '<div class="text-center"><i class="fas fa-spinner fa-spin fa-3x"></i></div>',
    showConfirmButton: false,
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  fetchData(kodedosen)
    .then(() => {
      Swal.close(); // Menutup SweetAlert setelah pencarian berhasil
      Swal.fire({
        title: "Sukses",
        text: "Data berhasil ditemukan",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
    })
    .catch(() => {
      Swal.close(); // Menutup SweetAlert setelah pencarian gagal atau tidak ada data
      Swal.fire({
        title: "Error",
        text: "Data tidak ditemukan",
        icon: "error",
        confirmButtonText: "OK",
      });
    });
}

document.querySelector("#submit_btn").addEventListener("click", applyFilters);

function hideModal() {
  const modalElement = document.getElementById("modal");

  modalElement.classList.add("hidden");
}

function doSomethingAfterDelete() {
  showModal("Data berhasil dihapus");
  document.getElementById("modal-close").addEventListener("click", function () {
    location.reload();
  });
}

// document.getElementById("modal-close").addEventListener("click", hideModal);

function showModal(message) {
  Swal.fire({
    title: "Selamat!",
    text: message,
    icon: "success",
    confirmButtonText: "Tutup",
  }).then(() => {
    location.reload();
  });
}

//   function deleteBimbingan(kodepertemuan) {
//     const urlGet = `https://hris_backend.ulbi.ac.id/bim/databimbingan/bykodepertemuan/${kodepertemuan}`;

//     fetch(urlGet)
//       .then(response => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           throw new Error('Gagal mengambil data');
//         }
//       })
//       .then(data => {
//         const urlDelete = `https://hris_backend.ulbi.ac.id/bim/databimbingan/delete/${data.data.kodepertemuan}`;
//         return fetch(urlDelete, {
//           method: 'DELETE'
//         });
//       })
//       .then(response => {
//         if (response.ok) {
//           console.log('Data berhasil dihapus');
//           showModal('Data Berhasil Dihapus');
//         } else {
//           throw new Error('Terjadi kesalahan saat menghapus data');
//         }
//       })
//       .catch(error => {
//         console.log('Terjadi kesalahan:', error);
//         console.error('Terjadi kesalahan:', error);
//       });
//   }
