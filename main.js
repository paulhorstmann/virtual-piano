let keys = ["A", "S", "D", "F", "G", "H", "J", "W", "E", "T", "Z", "Y", "U"]

const playSound = async (key) => {
    key = key === "Z" ? "Y" : key
    keys.includes(key)
        ? new Audio(`./assets/audio/keys/${key}.mp3`).play()
        : console.warn(`An other key is pressed.`);
}

document.addEventListener("keydown", e => playSound(e.key.toUpperCase()));
document.querySelectorAll("kbd").forEach(kbd => kbd.addEventListener("click", (e) => {
    playSound(e.path[0].textContent)
}))
