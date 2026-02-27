# 🎨 Planning Design & Pengembangan UI/UX Project CUP
**Konsep Utama:** Clean White, Negative Space, Modern Minimalist.

Dokumen ini berisi roadmap dan guideline untuk pengembangan desain antarmuka (UI) dan pengalaman pengguna (UX) aplikasi CUP ke depannya. Fokus utama adalah menciptakan kesan "luas", "bersih", dan "premium" dengan memanfaatkan *whitespace* secara maksimal.

---

## 1. Filosofi Desain
*   **Less is More**: Hapus elemen dekoratif yang tidak perlu. Biarkan konten "bernapas".
*   **Negative Space sebagai Komponen**: Whitespace bukan area kosong, melainkan elemen aktif untuk memisahkan konten dan memandu mata.
*   **Typography Driven**: Gunakan tipografi besar dan bold sebagai elemen visual utama pengganti gambar yang berlebihan.
*   **Micro-Interactions**: Animasi halus untuk menambah kesan hidup tanpa membuat desain terasa berat.

---

## 2. Design System

### 🎨 Color Palette (Sangat Terbatas)
Fokus pada monokromatik dengan satu warna aksen.
*   **Canvas (Background)**:
    *   `#FFFFFF` (Utama - Pure White)
    *   `#FAFAFA` (Secondary - Sangat halus untuk membedakan section)
*   **Foreground (Text)**:
    *   `#000000` (Heading Utama - Kontras maksimal)
    *   `#333333` (Body Text - Nyaman dibaca)
    *   `#000000` dengan opacity 40-50% (Meta info / Label)
*   **Accent**:
    *   `#FDE047` (Yellow - Highlight, Action Button)
    *   Gunakan aksen HANYA pada elemen interaktif penting (CTA).

### 🔠 Typography
*   **Font Family**: `DM Sans` (Sudah digunakan, pertahankan).
*   **Scale**:
    *   **Display**: `text-6xl` hingga `text-9xl` (Untuk impact statement).
    *   **Heading**: `text-3xl` hingga `text-5xl` (Judul section).
    *   **Body**: `text-lg` (Ukuran standar diperbesar sedikit agar terbaca lega).
    *   **Label**: `text-xs` uppercase + tracking-widest (Untuk kategori/tag).

### 📐 Layout & Spacing
*   **Container**: `max-w-7xl` atau `max-w-[90rem]` agar tidak terlalu melebar di layar besar, tapi tetap terasa luas.
*   **Section Spacing**: Gunakan `py-24` atau bahkan `py-32` (96px - 128px) antar section. Jangan takut jarak jauh.
*   **Grid**: Gunakan grid yang longgar (gap-8 atau gap-12).

---

## 3. Roadmap Pengembangan UI (Mockup Phase)

Berikut adalah rencana pengembangan komponen per halaman dengan fokus UI/UX baru:

### Phase 1: Foundation Refinement (Minggu 1)
Mengubah struktur dasar agar lebih konsisten dengan konsep "Clean White".
1.  **Global Reset**: Pastikan background `body` adalah absolute white.
2.  **Typography Audit**: Perbesar semua font size standar. `p` standar minimal 16px-18px.
3.  **Whitespace Injection**: Tambahkan padding double pada semua container yang sudah ada.

### Phase 2: Hero Section 2.0 (Fokus Impact)
*   **Current Issue**: Layout padat, text mungkin kurang "pop".
*   **New Plan**:
    *   Judul raksasa ditengah (Centered).
    *   Background putih bersih tanpa gangguan.
    *   Satu elemen visual kuat (misal: satu foto "Hero" yang artistik atau 3D abstract element).
    *   Navigasi dibuat transparan atau sangat minimalis (Menu pojok kanan).

### Phase 3: "Bento Grid" Layout (Untuk Konten)
Menggantikan list event biasa dengan layout grid asimetris (seperti bento box) tapi dengan gaya *wireframe-ish* atau *clean card*.
*   **Card Style**:
    *   Background: `#F9F9F9` atau Putih dengan Border tipis `#E5E5E5`.
    *   Hover: Border menjadi hitam `#000000` atau shadow sangat halus.
    *   Radius: `rounded-[2rem]` (Sangat bulat).
*   **Content**:
    *   Event Card: Fokus pada Tanggal (besar) dan Judul. Deskripsi disembunyikan atau minimal.
    *   Idea Card: Tampil seperti "Post-it" digital yang bersih.

### Phase 4: Interactive Elements (Idea Generator)
*   **Input Field**: Bukan kotak input biasa. Buat seperti kalimat teks besar.
    *   *Contoh*: "Saya ingin mengadakan [ Acara Ngopi ] di [ Jakarta Selatan ]..." (Bagian dalam kurung bisa diklik/diedit).
*   **Result Display**: Kartu hasil muncul dengan animasi *fade-in* satu per satu, memberikan kesan "dipikirkan" oleh AI.

---

## 4. Todo List Implementasi (Next Steps)

1.  **[ ] Create Layout Wrapper**: Buat komponen `Layout` yang mengatur margin global agar konsisten.
2.  **[ ] Refactor Hero**: Sederhanakan Hero.tsx. Hapus elemen badge yang terlalu ramai. Fokus pada Headline.
3.  **[ ] Redesign Cards**: Ubah `EventCard.tsx` atau komponen grid di Hero menjadi lebih bersih (hapus background overlay gelap jika ada, ganti dengan text hitam di atas putih).
4.  **[ ] Improve Navigation**: Buat Navbar yang "disappearing" saat scroll down dan muncul saat scroll up (untuk layar terasa penuh).

---

## Contoh Struktur Visual (Mental Model)

```
[ Navbar: Logo (Kiri) ........................ Menu (Kanan) ]
.
.
.
          (whitespace 150px)
.
.
      BERTEMU TEMAN BARU
      LEWAT BUDAYA NGOPI.
.
          (Button: Gabung Waitlist)
.
.
          (whitespace 100px)
.
.
[ Grid Item 1 ] [ Grid Item 2 (Lebar) ]
[ Grid Item 3 ] [ Grid Item 4 ]
.
.
``` 
