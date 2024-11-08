Ada 2 cara untuk menarik docker dan menjalankannya, cara pertama adalah dengan cloning repository master dan cara kedua adalah pull images frontend dan backend dari docker hub.
1. Dengan cara cloning repository master:
   - Buka link berikut https://github.com/Juniorchen02/Pet-Adoption/.
   - Lalu tekan Code dan dibagian HTTPS terdapat link seperti berikut https://github.com/Juniorchen02/Pet-Adoption.git, copy link tersebut.
   - Buat satu folder baru di Visual Studio Code, kemudian buka terminal dan jalankan: git clone https://github.com/Juniorchen02/Pet-Adoption.git.
   - Setelah itu, repository akan tercloning lalu masuk ke folder yang sedang dibuka saat ini.
   - Setelah cloning selesai, masuk ke folder root terlebih dahulu, di terminal jalankan: cd pet-adoption, untuk masuk ke root.
   - Selah masuk ke root, di terminal jalankan: docker-compose up. Tunggu sampai mysql, backend, dan frontend berhasil di create dan telah berjalan.
   - Jika mysql, backend dan frontend telah berjalan, container yang telah di build dapat diakses di localhost:3000 (http://localhost:3000).
2. Dengan cara pull images frontend dan backend dari docker hub.
   - Buka link berikut https://hub.docker.com/r/juniorchen02/adoptpet/tags.
   - Terdapat 2 versi dibagian frontend dan backend, yaitu versi 1.0.0 dan 1.1.0. Versi 1.0.0 adalah versi container sebelum penambahan fitur, dan untuk versi 1.1.0 adalah versi container setelah penambahan fitur.
   - Misalnya versi yang akan digunakan adalah versi 1.0.0, pertama-tama pull frontend dan backend dengan versi 1.0.0 terlebih dahulu dari docker.
   - Buat satu folder baru di Visual Studio Code, kemudian buka terminal dan jalankan: docker pull juniorchen02/adoptpet:frontend_1.0.0 (juniorchen02/adoptpet adalah nama repository di docker hub), lalu tunggu sampai images frontend berhasil ditarik.
   - Buat satu folder baru di Visual Studio Code, kemudian buka terminal dan jalankan: docker pull juniorchen02/adoptpet:backend_1.0.0 (juniorchen02/adoptpet adalah nama repository di docker hub), lalu tunggu sampai images backend berhasil ditarik.
   - Setelah kedua images telah berhasil ditarik, selanjutnya buat file dengan nama: docker-compose.yml. Isi dari docker-compose.yml ini dapat diambil dari github dengan link berikut: https://github.com/Juniorchen02/Pet-Adoption/blob/master/docker-compose.yml.
   - Setelah itu, jalankan di terminal jalankan: docker-compose up. Tunggu sampai mysql, backend, dan frontend berhasil di create dan telah berjalan.
   - Jika mysql, backend dan frontend telah berjalan, container yang telah di build dapat diakses di localhost:3000 (http://localhost:3000).

NOTE PENTING: Sebelum menjalankan container yang telah di cloning atau di pull dari images di docker hub, pastikan frontend, backend, dan mysql sedang tidak dalam keadaan berjalan.
