const jenisKelamin = document.querySelector('input[name="jenis_kelamin"]:checked').value;

if (jenisKelamin === 'laki-laki') {
  console.log('Jenis kelamin: laki-laki');
} else {
  console.log('Jenis kelamin: perempuan');
}
