import { getChildren } from "./database.js"

const children = getChildren()

document.addEventListener("click", e => {
    if (e.target.id.startsWith("child--")) {
        const [,childId] = e.target.id.split("--")
        const child = children.find(c => c.id === parseInt(childId))
        window.alert(`${child.name} has a wish of ${child.wish}`)
    }
})

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li id="child--${child.id}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

