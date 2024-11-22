# Dapoer Papoea: Menjaga Warisan Kuliner Khas Papua

Dapoer Papoea adalah sebuah proyek open-source yang bertujuan untuk mendokumentasikan dan mempopulerkan resep-resep kuliner khas Papua. Dengan menggunakan teknologi modern seperti AstroJS, TailwindCSS, dan Preline UI, kami berharap dapat memberikan pengalaman interaktif yang memudahkan siapa saja untuk mengeksplorasi dan mencoba resep khas Papua.

## ✨ Fitur Utama

- 📚 Resep Lengkap: Mulai dari makanan pokok hingga camilan khas Papua.
- 🔎 Pencarian Resep: Temukan resep favorit dengan mudah menggunakan fitur pencarian.
- 🌐 Navigasi Antar Bab: Sistem navigasi yang responsif untuk mempermudah eksplorasi resep.
- 📱 Responsif: Dirancang untuk berfungsi dengan baik di semua perangkat.

## 🛠️ Tech Stack

- AstroJS: Framework modern untuk membangun website yang cepat.
- TailwindCSS: Utility-first CSS framework untuk styling cepat.
- Preline UI: Komponen UI yang mudah digunakan untuk meningkatkan antarmuka pengguna.

## 🚀 Memulai Proyek

### 1. Clone Repository

```
git clone https://github.com/papua-opensource/dapoer-papoea.git
cd dapoer-papoea
```

### 2. Install Dependencies

Gunakan package manager pilihan Anda (npm, yarn, atau pnpm):

```
pnpm install
# atau
npm install
```

### 3. Jalankan Proyek

```
pnpm dev
```

Akses proyek Anda di ```http://localhost:4321```.

### 4. Build untuk Produksi

```pnpm build```

## 📂 Struktur Proyek

```
├── public/                # Asset statis seperti gambar
├── src/                   
│   ├── components/        # Komponen reusable seperti ChapterNavigation
│   ├── data/              # Data JSON untuk chapters dan recipes
│   ├── layouts/           # Layout dasar seperti Layout.astro
│   ├── pages/             # Halaman website
├── astro.config.mjs       # Konfigurasi utama untuk AstroJS
├── LICENSE                # Informasi lisensi proyek
├── package.json           # # Informasi dependenciesInformasi dependencies
├── pnpm-lock.yaml         # File lock untuk dependensi menggunakan pnpm
├── README.md              # Dokumentasi proyek
├── tailwind.config.js     # Konfigurasi TailwindCSS
└── tsconfig.json          # Konfigurasi TypeScript
```

## 🤝 Kontribusi

Kami menyambut kontribusi dari siapa saja yang tertarik untuk membantu melestarikan warisan kuliner Papua. Berikut adalah panduan untuk berkontribusi:
Langkah Berkontribusi

1. Fork repository ini ke akun GitHub Anda.

2. Clone repository hasil fork:

    ```
    git clone https://github.com/username/dapoer-papoea.git
    ```

3. Buat branch baru untuk perubahan Anda:

    ```
    git checkout -b fitur-baru-anda
    ```

4. Lakukan perubahan yang diperlukan, pastikan kode Anda sudah diuji.

5. Commit perubahan Anda:

    ```
    git commit -m "feat: Menambahkan fitur baru"
    ```

6. Push branch Anda ke repository fork Anda:

    ```
    git push origin fitur-baru-anda
    ```

7. Buat Pull Request (PR) ke repository utama.

### Panduan Kontribusi

- Pastikan commit Anda mengikuti [convetional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- Berikan deskripsi yang jelas di setiap Pull Request.
- Tambahkan dokumentasi jika Anda menambahkan fitur baru.

## 🛡️ Lisensi

Proyek ini dilisensikan di bawah lisensi MIT. Silakan baca [LICESE](./LICENSE) untuk detailnya.

## 💌 Dukungan

Jika Anda menyukai proyek ini, beri bintang ⭐ di repository ini. Anda juga dapat mendukung dengan cara lain:

- Bagikan proyek ini kepada teman-teman Anda.
- Gunakan proyek ini untuk membuat website kuliner lokal di daerah Anda.

## 📞 Kontak

Jika Anda memiliki pertanyaan atau masukan, jangan ragu untuk menghubungi kami melalui:

- Email: [contact@dapoerpapoea.web.id](contact@dapoerpapoea.web.id)
- GitHub Issues: Buka Diskusi

Terima kasih telah mendukung proyek Dapoer Papoea! 🙌 Mari bersama-sama menjaga dan melestarikan kuliner khas Papua untuk generasi mendatang. 🌏✨