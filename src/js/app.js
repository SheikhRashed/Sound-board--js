"use strict"
const musics = ["music-one", "music-two", "music-three"]

musics.forEach((music, idx) => {
	const btn = document.createElement("button")
	btn.classList.add("btn")

	btn.innerText = music

	btn.addEventListener("click", () => {
		stopSong()
		document.getElementById(music).play()
	})

	document.getElementById("music-buttons").appendChild(btn)
})

function stopSong() {
	musics.forEach((music) => {
		const song = document.getElementById(music)
		song.pause()
		song.currentTime = 0
	})
}
