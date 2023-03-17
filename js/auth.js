// Ambil elemen form dan input dari halaman
const form = document.querySelector('form');
const usernameInput = document.querySelector('input[name="username"]');
const passwordInput = document.querySelector('input[name="password"]');
const idPenggunaInput = document.querySelector('input[name="id_pengguna"]');
const loginButton = document.querySelector('input[name="login-button"]');

// Tangani event submit form
form.addEventListener('submit', (event) => {
	event.preventDefault(); // Mencegah form dikirim secara otomatis

	// Ambil nilai dari input form
	const username = usernameInput.value;
	const password = passwordInput.value;
	const idPengguna = idPenggunaInput.value;

	// Kirim request untuk mendapatkan token
	fetch('https://hris_backend.ulbi.ac.id/authorize/auth', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			username: username,
			password: password,
			id_pengguna: idPengguna
		})
	})
		.then(response => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error('Gagal mendapatkan token.');
			}
		})
		.then(data => {
			// Simpan token di localStorage
			localStorage.setItem('token', data.token);

			// Alihkan ke halaman dashboard
			window.location.href = 'index.html';
			alert('Berhasil Login!');
		})
		.catch(error => {
			console.error(error);
			alert('Login gagal. Silakan coba lagi.');
		});
});