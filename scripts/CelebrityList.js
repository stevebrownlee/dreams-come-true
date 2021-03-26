import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

document.addEventListener("click", e => {
    if (e.target.id.startsWith("star--")) {
        const [,starId] = e.target.id.split("--")
        const star = celebrities.find(c => c.id === parseInt(starId))
        window.alert(`${star.name} is ${star.sport} star`)
    }
})

export const Celebrities = () => {
    let html = "<ol>"

    for (const star of celebrities) {
        html += `<li id="star--${star.id}">${star.name}</li>`
    }

    html += "</ol>"
    return html
}
