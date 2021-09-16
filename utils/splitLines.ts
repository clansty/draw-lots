export default function splitLines(text: string) {
    let lines = text.split('\n')
    lines = lines.filter(e => e.replace(/(\r\n|\n|\r| )/gm, ''))
    if (!lines.length) return []
    return lines
}
