export const getBackColor = (color: string): string => {
    switch (color) {
        case 'red':
            return '#fff6f7'
        case 'green':
            return '#f1fef5'
        case 'yellow':
            return '#fdffe7'
        default:
            return ''
    }
}