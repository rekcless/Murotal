const surahSelect = document.getElementById("surahSelect");
const surahTitle = document.getElementById("surahTitle");
const audioPlayer = document.getElementById("audioPlayer");

const surahNames = [
    "Al-Fatihah", "Al-Baqarah", "Ali 'Imran", "An-Nisa'", "Al-Ma'idah", "Al-An'am",
    "Al-A'raf", "Al-Anfal", "At-Taubah", "Yunus", "Hud", "Yusuf", "Ar-Ra'd", "Ibrahim",
    "Al-Hijr", "An-Nahl", "Al-Isra'", "Al-Kahf", "Maryam", "Taha", "Al-Anbiya'",
    "Al-Hajj", "Al-Mu’minun", "An-Nur", "Al-Furqan", "Asy-Syu'ara'", "An-Naml",
    "Al-Qasas", "Al-Ankabut", "Ar-Rum", "Luqman", "As-Sajdah", "Al-Ahzab", "Saba'",
    "Fatir", "Ya-Sin", "As-Saffat", "Sad", "Az-Zumar", "Ghafir", "Fussilat",
    "Asy-Syura", "Az-Zukhruf", "Ad-Dukhan", "Al-Jathiyah", "Al-Ahqaf", "Muhammad",
    "Al-Fath", "Al-Hujurat", "Qaf", "Az-Zariyat", "At-Tur", "An-Najm", "Al-Qamar",
    "Ar-Rahman", "Al-Waqi'ah", "Al-Hadid", "Al-Mujadilah", "Al-Hasyr", "Al-Mumtahanah",
    "As-Saff", "Al-Jumu'ah", "Al-Munafiqun", "At-Taghabun", "At-Talaq", "At-Tahrim",
    "Al-Mulk", "Al-Qalam", "Al-Haqqah", "Al-Ma'arij", "Nuh", "Al-Jinn", "Al-Muzzammil",
    "Al-Muddaththir", "Al-Qiyamah", "Al-Insan", "Al-Mursalat", "An-Naba'", "An-Nazi'at",
    "Abasa", "At-Takwir", "Al-Infitar", "Al-Mutaffifin", "Al-Insyiqaq", "Al-Buruj",
    "At-Tariq", "Al-A'la", "Al-Ghashiyah", "Al-Fajr", "Al-Balad", "Asy-Syams", "Al-Lail",
    "Ad-Duha", "Asy-Syarh", "At-Tin", "Al-'Alaq", "Al-Qadr", "Al-Bayyinah",
    "Az-Zalzalah", "Al-Adiyat", "Al-Qari'ah", "At-Takathur", "Al-Asr", "Al-Humazah",
    "Al-Fil", "Quraisy", "Al-Ma'un", "Al-Kausar", "Al-Kafirun", "An-Nasr",
    "Al-Masad", "Al-Ikhlas", "Al-Falaq", "An-Nas"
];

// isi dropdown
surahNames.forEach((name, index) => {
    let opt = document.createElement("option");
    opt.value = index + 1;
    opt.textContent = `${index + 1}. ${name}`;
    surahSelect.appendChild(opt);
});

// event ketika surah dipilih
surahSelect.addEventListener("change", function() {
    const number = this.value.toString().padStart(3, '0');
    surahTitle.textContent = surahNames[this.value - 1];
    audioPlayer.src = `https://server8.mp3quran.net/afs/${number}.mp3`;
    audioPlayer.play();
});
