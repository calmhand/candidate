export default function styleBg(cardType) {
    switch (cardType) {
        case 'Interview':
            return "bg-[var(--color-c--blue)]"
        case 'Analytics':
            return "bg-[var(--color-c--red)]"
        case 'Advice':
            return "bg-[var(--color-c--green)]"
        default:
            return "bg-[var(--color-c--blue)]"
    }
}