const surahSelect = document.getElementById("surahSelect");
const surahTitle = document.getElementById("surahTitle");
const audioPlayer = document.getElementById("audioPlayer");
const ayatContainer = document.getElementById("ayatContainer");

// Daftar surah
const surahNames = [... panjang seperti sebelumnya ...];

// Isi dropdown
surahNames.forEach((name, index) => {
    let opt = document.createElement("option");
    opt.value = index + 1;
    opt.textContent = `${index + 1}. ${name}`;
    surahSelect.appendChild(opt);
});

// Event utama
surahSelect.addEventListener("change", async function() {
    const surahNum = this.value;
    const surahStr = surahNum.toString().padStart(3, "0");

    surahTitle.textContent = surahNames[surahNum - 1];
    audioPlayer.src = `https://server8.mp3quran.net/afs/${surahStr}.mp3`;

    // Ambil teks ayat
    const textRes = await fetch(`https://api.alquran.cloud/v1/surah/${surahNum}`);
    const textData = await textRes.json();

    // Ambil timestamp ayat
    const timeRes = await fetch(`https://server8.mp3quran.net/afs/Timing/${surahStr}.json`);
    const timeData = await timeRes.json();

    ayatContainer.innerHTML = "";

    // Render ayat
    textData.data.ayahs.forEach(ayat => {
        let div = document.createElement("div");
        div.className = "ayah";
        div.id = `ayah-${ayat.numberInSurah}`;
        div.textContent = ayat.text;
        ayatContainer.appendChild(div);
    });

    let timings = timeData; // array berisi { ayah, start, end }

    // Sinkron audio
    audioPlayer.ontimeupdate = () => {
        let current = audioPlayer.currentTime;

        // Temukan ayat yang sedang dibaca
        let active = timings.find(t => current >= t.start && current <= t.end);
        if (!active) return;

        let allAyah = document.querySelectorAll(".ayah");
        allAyah.forEach(a => a.classList.remove("active"));

        let activeAyahDiv = document.getElementById(`ayah-${active.ayah}`);
        if (activeAyahDiv) {
            activeAyahDiv.classList.add("active");

            // Auto scroll smooth
            activeAyahDiv.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };

    audioPlayer.play();
});
