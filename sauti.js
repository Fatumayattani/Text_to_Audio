let audio = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    audio.voice = voices[0];

    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i);
    });
};

voiceSelect.addEventListener("change", () => {
    audio.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
    audio.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(audio);
});
