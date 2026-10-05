// ======================================================
// NOVAIX - OFFLINE AI
// Dibuat oleh Akbar Idhofi | Prototype
// ======================================================

const AI_NAME = "Novaix";

const SYSTEM_PROMPT = `
Kamu adalah Novaix, AI yang dibuat oleh Akbar Idhofi dan masih dalam tahap prototype.

Tugasmu membantu pengguna memahami berbagai hal dengan bahasa Indonesia
yang sederhana, jelas, santai, dan mudah dipahami.

ATURAN:
- Jawab langsung sesuai pertanyaan pengguna.
- Jelaskan dari dasar jika pengguna belum mengerti.
- Gunakan contoh sederhana jika diperlukan.
- Jika memberikan langkah, gunakan nomor.
- Untuk coding, berikan kode yang sederhana dan mudah disalin.
- Jangan mengarang informasi.
- Jika tidak tahu, katakan dengan jujur.
- Jangan membuat jawaban terlalu panjang kecuali diperlukan.
- Jika pengguna salah memahami sesuatu, luruskan dengan baik.
- Utamakan jawaban yang mudah dipahami.

Identitas:
Novaix — Dibuat oleh Akbar Idhofi | Prototype
`;

const knowledge = [
    {
        keywords: ["halo", "hai", "hello", "hi"],
        answer: `Halo! 👋 Aku Novaix.

Aku adalah AI prototype yang saat ini berjalan secara offline.
Coba tanyakan sesuatu kepadaku.`
    },

    {
        keywords: ["siapa kamu", "kamu siapa", "nama kamu"],
        answer: `Aku Novaix 🤖

Aku dibuat oleh Akbar Idhofi dan saat ini masih berstatus Prototype.

Aku dibuat untuk membantu pengguna belajar dan memahami berbagai hal.`
    },

    {
        keywords: ["siapa pembuatmu", "yang membuat kamu", "dibuat siapa"],
        answer: `Aku dibuat oleh Akbar Idhofi. 🚀

Namaku Novaix dan saat ini aku masih dalam tahap Prototype.`
    },

    {
        keywords: ["html", "apa itu html"],
        answer: `HTML adalah bahasa untuk membuat struktur website.

Contohnya:
- Judul
- Teks
- Gambar
- Tombol
- Form

Gampangnya:
HTML = kerangka website 🏗️`
    },

    {
        keywords: ["css", "apa itu css"],
        answer: `CSS digunakan untuk mengatur tampilan website.

Contohnya:
- Warna
- Ukuran tulisan
- Posisi
- Background
- Animasi

Gampangnya:
HTML = struktur
CSS = tampilan 🎨`
    },

    {
        keywords: ["javascript", "java script", "js"],
        answer: `JavaScript membuat website menjadi interaktif.

Contohnya:
- Tombol bisa ditekan
- Menu bisa terbuka
- Chat bisa bekerja
- Animasi bisa berjalan

Gampangnya:
HTML = struktur
CSS = tampilan
JavaScript = logika ⚙️`
    },

    {
        keywords: ["website", "web"],
        answer: `Website adalah halaman yang dapat dibuka melalui browser seperti Chrome.

Biasanya website dibuat menggunakan:
1. HTML → struktur
2. CSS → tampilan
3. JavaScript → fungsi dan interaksi`
    },

    {
        keywords: ["coding", "programming", "pemrograman"],
        answer: `Coding adalah kegiatan menulis perintah agar komputer melakukan sesuatu.

Contoh JavaScript:

let nama = "Akbar";
console.log("Halo " + nama);`
    },

    {
        keywords: ["error", "eror", "kode error"],
        answer: `Kalau kode mengalami error, jangan panik. 😄

Coba:
1. Baca pesan error.
2. Lihat baris yang disebutkan.
3. Periksa tanda kurung.
4. Periksa nama variabel.
5. Periksa kesalahan pengetikan.

Kalau kamu kirim error-nya, Novaix bisa membantu menjelaskannya.`
    },

    {
        keywords: ["cpu", "prosesor", "processor"],
        answer: `CPU atau prosesor adalah bagian komputer yang memproses instruksi.

Gampangnya:
CPU = "otak" komputer 🧠`
    },

    {
        keywords: ["ram"],
        answer: `RAM adalah tempat penyimpanan sementara yang digunakan perangkat saat menjalankan aplikasi.

Gampangnya:
RAM membantu perangkat menjalankan beberapa pekerjaan secara bersamaan.`
    },

    {
        keywords: ["internet"],
        answer: `Internet adalah jaringan besar yang menghubungkan banyak perangkat di seluruh dunia.

Dengan internet kita bisa:
- Membuka website
- Mengirim pesan
- Menonton video
- Bermain game online
- Mengakses berbagai layanan`
    },

    {
        keywords: ["api", "apa itu api"],
        answer: `API adalah penghubung yang memungkinkan satu aplikasi berkomunikasi dengan aplikasi atau layanan lain.

Gampangnya:

Website → API → Layanan lain

API seperti jembatan komunikasi antar sistem.`
    },

    {
        keywords: ["ai", "artificial intelligence", "kecerdasan buatan"],
        answer: `AI adalah singkatan dari Artificial Intelligence atau kecerdasan buatan.

AI adalah teknologi yang dibuat untuk melakukan tugas tertentu yang membutuhkan kemampuan seperti memahami bahasa, mengenali pola, atau membuat prediksi.

Novaix sendiri adalah prototype yang saat ini bekerja secara offline.`
    },

    {
        keywords: ["terima kasih", "makasih", "thanks"],
        answer: `Sama-sama! 😄

Semoga Novaix bisa membantu kamu belajar dan mengembangkan project-mu. 🚀`
    },

    {
        keywords: ["bantu", "help", "tolong"],
        answer: `Tentu! 🤖

Kamu bisa bertanya tentang:
- Coding
- Website
- Komputer
- Teknologi
- Pelajaran
- Pertanyaan umum

Tulis saja pertanyaanmu.`
    }
];

function cleanText(text) {
    return text
        .toLowerCase()
        .trim()
        .replace(/[?!.,]/g, "");
}

function findAnswer(question) {
    const text = cleanText(question);

    let bestAnswer = null;
    let bestScore = 0;

    for (const item of knowledge) {
        let score = 0;

        for (const keyword of item.keywords) {
            if (text.includes(keyword.toLowerCase())) {
                score++;
            }
        }

        if (score > bestScore) {
            bestScore = score;
            bestAnswer = item.answer;
        }
    }

    return bestAnswer;
}

function askAI(question) {
    if (!question || question.trim() === "") {
        return "Tulis pertanyaanmu terlebih dahulu. 🙂";
    }

    const answer = findAnswer(question);

    if (answer) {
        return answer;
    }

    return `Aku belum mempunyai jawaban untuk:

"${question}"

Aku masih Novaix versi Prototype dan saat ini bekerja secara offline.

Coba gunakan pertanyaan yang lebih sederhana atau tambahkan penjelasan. 🤖`;
}


// ======================================================
// HUBUNGKAN DENGAN HTML
// ======================================================

const input =
    document.querySelector("#userInput") ||
    document.querySelector("#messageInput") ||
    document.querySelector("#chatInput");

const sendButton =
    document.querySelector("#sendButton") ||
    document.querySelector("#sendBtn") ||
    document.querySelector("#send");

const chatBox =
    document.querySelector("#chatBox") ||
    document.querySelector("#chatMessages") ||
    document.querySelector("#messages");


function addMessage(text, sender) {
    if (!chatBox) {
        console.log(sender + ":", text);
        return;
    }

    const message = document.createElement("div");

    message.className =
        sender === "user"
            ? "user-message"
            : "ai-message";

    message.textContent = text;

    chatBox.appendChild(message);

    chatBox.scrollTop = chatBox.scrollHeight;
}


function sendMessage() {
    if (!input) {
        console.error("Input chat tidak ditemukan.");
        return;
    }

    const question = input.value.trim();

    if (!question) return;

    addMessage(question, "user");

    input.value = "";

    setTimeout(() => {
        const answer = askAI(question);
        addMessage(answer, "ai");
    }, 300);
}


if (sendButton) {
    sendButton.addEventListener("click", sendMessage);
}


if (input) {
    input.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            sendMessage();
        }
    });
}


if (chatBox) {
    addMessage(
`Halo! 👋 Aku Novaix.

Aku dibuat oleh Akbar Idhofi dan masih dalam tahap Prototype.

Aku bekerja secara offline tanpa API.

Silakan tulis pertanyaanmu. 🤖`,
        "ai"
    );
}


window.askAI = askAI;
window.sendMessage = sendMessage;