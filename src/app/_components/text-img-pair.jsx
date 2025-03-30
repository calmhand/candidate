import Image from "next/image";
import previewOne from "@/assets/previewOne.webp";

export default function TextImgPair({text}) {
    return (
        <>
            <section className={"my-16"}>
                <div className={"flex flex-col justify-center items-center gap-4"}>
                    <div>
                        <p className={"text-xs"}>
                            With Candidate, you can <b>prepare yourself</b> by taking
                            note of how you <b>handle common questions</b>,
                            curveballs, and more!
                        </p>
                    </div>
                    <div className={"border border-[var(--color-c--black)] rounded-sm justify-items-center"}>
                        <Image className={"border-l border-r border-[var(--color-c--black)] w-1/2"} src={ previewOne } alt={"Preview of interviews page."} />
                    </div>
                </div>
            </section>
        </>
    )
}