export function formatDate(dateString) {
    const date = new Date(dateString)
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()

    return `${day}/${month}/${year}`
}

export function formatTagNames(tagName) {
    switch (tagName.toLowerCase()) {
        case 'music':
            return 'Âm nhạc'
        case 'technology':
            return 'Công nghệ'
        case 'cuisine':
            return 'Ẩm thực'
        case 'sharing':
            return 'Tâm sự'
        case 'traveling':
            return 'Du lịch'
        case 'youth':
            return 'Thanh xuân'
        default:
            return 'Chia sẻ'
    }
}
