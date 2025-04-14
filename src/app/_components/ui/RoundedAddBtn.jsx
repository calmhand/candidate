import {Icons} from "@/_components/icons"

function styleButtonBg(cardType) {
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

export default function AddBtn({type}) {
    return (
        <>
            <button
                type="button"
                aria-label="Add Content Button"
                className={`${styleButtonBg(type)} p-1 rounded-full`}
            >
                <Icons.plus color={`var(--color-c--white)`} />
            </button>
        </>
    )
}