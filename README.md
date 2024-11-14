# Pet Adoption - Cara Menjalankan Docker

Ada dua cara untuk menarik Docker dan menjalankannya:

## 1. Dengan cara cloning repository master
   - Buka link berikut [GitHub Repository](https://github.com/Juniorchen02/Pet-Adoption/).
   - Lalu tekan Code dan di bagian HTTPS terdapat link seperti berikut: [https://github.com/Juniorchen02/Pet-Adoption.git](https://github.com/Juniorchen02/Pet-Adoption.git). Salin link tersebut.
   - Buat satu folder baru di Visual Studio Code, kemudian buka terminal dan jalankan: 
     ```bash
     git clone https://github.com/Juniorchen02/Pet-Adoption.git
     ```
   - Setelah repository ter-cloning, masuk ke folder yang sedang dibuka saat ini.
   - Setelah cloning selesai, masuk ke folder root terlebih dahulu dengan perintah:
     ```bash
     cd pet-adoption
     ```
   - Di terminal, jalankan:
     ```bash
     docker-compose up
     ```
     Tunggu sampai MySQL, backend, dan frontend berhasil dibuat dan berjalan.
   - Jika MySQL, backend, dan frontend telah berjalan, container yang telah dibangun dapat diakses di [http://localhost:3000](http://localhost:3000).

## 2. Dengan cara pull images frontend dan backend dari Docker Hub
   - Buka link berikut [Docker Hub Repository](https://hub.docker.com/r/juniorchen02/adoptpet/tags).
   - Terdapat 2 versi pada bagian frontend dan backend, yaitu versi 1.0.0 dan 1.1.0. Versi 1.0.0 adalah versi container sebelum penambahan fitur, dan versi 1.1.0 adalah versi container setelah penambahan fitur.
   - Misalnya versi yang akan digunakan adalah versi 1.0.0, pertama-tama pull frontend dan backend dengan versi 1.0.0 terlebih dahulu dari Docker.
   - Buat satu folder baru di Visual Studio Code, kemudian buka terminal dan jalankan:
     ```bash
     docker pull juniorchen02/adoptpet:frontend_1.0.0
     ```
     Tunggu sampai images frontend berhasil ditarik.
   - Kemudian, jalankan:
     ```bash
     docker pull juniorchen02/adoptpet:backend_1.0.0
     ```
     Tunggu sampai images backend berhasil ditarik.
   - Setelah kedua images berhasil ditarik, buat file dengan nama `docker-compose.yml`. Isi dari `docker-compose.yml` ini dapat diambil dari GitHub pada link berikut: [docker-compose.yml](https://github.com/Juniorchen02/Pet-Adoption/blob/master/docker-compose.yml).
   - Setelah itu, di terminal jalankan:
     ```bash
     docker-compose up
     ```
     Tunggu sampai MySQL, backend, dan frontend berhasil dibuat dan berjalan.
   - Jika MySQL, backend, dan frontend telah berjalan, container yang telah dibangun dapat diakses di [http://localhost:3000](http://localhost:3000).

**Penting**: Sebelum menjalankan container yang telah di-cloning atau di-pull dari images di Docker Hub, pastikan frontend, backend, dan MySQL tidak dalam keadaan berjalan.
