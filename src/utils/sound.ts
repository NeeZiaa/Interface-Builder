const soundPath = import.meta.env.VITE_APP_SOUNDS_PATH

export const play = (sound: string) => {
    const audio = new Audio(`${soundPath}/${sound}.mp3`)
    audio.play()
    return audio
}
export const stop = (audio: HTMLAudioElement) => {
    audio.pause()
    return audio
}
