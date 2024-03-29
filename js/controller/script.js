function fetchData(DosenID, TahunID) {
  const url = `http://127.0.0.1:3000/honor/dosen/perwalian/${DosenID}/${TahunID}`;

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

const Tahunajaran = {
  21: "Tahun Ajaran Ganjil",
  22: "Tahun Ajaran Genap",
};

function getTahunAjaran(tahun) {
  const duaDigitTerakhir = tahun.slice(-2);
  if (parseInt(duaDigitTerakhir) % 2 === 0) {
    return "Tahun Ajaran Genap";
  } else {
    return "Tahun Ajaran Ganjil";
  }
}

const tahun = "20222";
const tahunAjaran = getTahunAjaran(tahun);
console.log(tahunAjaran);

function displayResults(data) {
  const resultsBody = document.getElementById("results_body");
  resultsBody.innerHTML = ""; // Clear existing results

  if (Array.isArray(data) && data.length > 0) {
    data.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
      <td class="text-justify">${item.DosenID}</td>
      <td class="text-justify">${item.Nama}</td>
      <td class="text-justify">${item.TahunID}</td>
      <td class="text-justify">${item.TotalPerwalian}</td>
      <td class="text-justify">${item.Honor}</td>
      <td class="text-justify">${item.TanggalWaktu}</td>
      </td>
      <td>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" data-perwalian-id="${item.PresensiPerwalianID}">
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
  const tahunIdInput = document.querySelector("#tahunIdInput");
  const kodedosen = dosenIdInput.value.trim();
  const tahunid = tahunIdInput.value.trim();

  Swal.fire({
    title: "Memproses",
    html: '<div class="text-center"><i class="fas fa-spinner fa-spin fa-3x"></i></div>',
    showConfirmButton: false,
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  fetchData(kodedosen, tahunid)
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
