import Link from "next/link";
import Image from "next/image";

import appIcon from "@/assets/logos/app_icon-color.svg"
import DocumentIcon from "@/assets/icons/document.svg"
import UserIcon from "@/assets/icons/user.svg"
import TrackerIcon from "@/assets/icons/tracker.svg"
import InterviewFeature from "@/assets/interview-feature.png"
import TipsFeature from "@/assets/tips-feature.png"
import TrackerFeature from "@/assets/tracker-feature.png"
import previewOne from "@/assets/previewOne.webp";
import previewTwo from "@/assets/tips.webp";
import previewThree from "@/assets/tracker.webp";

export default function Home() {
  return (
    <>
        <main className="mx-16 flex flex-col gap-12">
          <section id={"hero"} className={"text-center my-24"}>
              <div className={"flex flex-col justify-center items-center my-4"}>
                  <div className={"flex flex-col justify-start text-center"}>
                      <img className={"h-[6rem] md:h-[12rem] w-auto"} src={appIcon.src} alt={"App Logo"}/>
                      <h1 className={"inline font-bold text-6xl md:text-7xl"}>
                          Candidate
                      </h1>
                  </div>
                  <span className={"text-sm md:text-lg"}>An Accountability Tracker for Job Seekers.</span>
              </div>

              <div className={"text-[0.75rem] md:text-lg"}>
                  <Link className="bg-[var(--color-c--space)] text-[var(--color-c--white)] py-2 px-4 mx-2 rounded-sm" href="/public">
                      Get Started
                  </Link>
                  <Link className="bg-[var(--color-c--white)] box-border border border-[var(--color-c--black)] text-[var(--color-c--black)] py-2 px-4 mx-2 rounded-sm" href="/public">
                      About
                  </Link>
              </div>
          </section>

          <div className={`md:grid md:grid-cols-3 items-end gap-6 text-xs md:text-sm`}>
              <section className={"my-16"}>
                  <div className={"flex flex-col justify-center items-center gap-4"}>
                      <div>
                          <p>
                              With Candidate, you can <b>prepare yourself</b> by taking
                              note of how you <b>handle common questions</b>,
                              curveballs, and more!
                          </p>
                      </div>
                      <div className={"border border-[var(--color-c--black)] rounded-sm justify-items-center"}>
                          <Image className={"border-l border-r border-[var(--color-c--black)] w-1/2"}
                                 src={ previewOne }
                                 alt={"Preview of interviews page."}
                                 unoptimized={true}
                          />
                      </div>
                  </div>
              </section>

              <section className={"my-16"}>
                  <div className={"flex flex-col justify-center items-center gap-4"}>
                      <div>
                          <p>
                              After an interview, anxiety can arise and leave you wondering
                              what you could have done better, In Candidate, you can give
                              yourself feedback to <b>improve your performance</b> going into the
                              next round.
                          </p>
                      </div>
                      <div className={"border border-[var(--color-c--black)] rounded-sm justify-items-center"}>
                          <Image className={"border-l border-r border-[var(--color-c--black)] w-1/2"} src={ previewTwo } alt={"Preview of tips page."} />
                      </div>
                  </div>
              </section>

              <section className={"my-16"}>
                  <div className={"flex flex-col justify-center items-center gap-4"}>
                      <div>
                          <p>
                              Get to <b>know the company better</b> by saving your <b>research notes</b>. You can not
                              only grade yourself, but <b>grade the performance of the company</b> in how they
                              handle interviews, see if their values align with yours, and more.
                          </p>
                      </div>
                      <div className={"border border-[var(--color-c--black)] rounded-sm justify-items-center"}>
                          <Image className={"border-l border-r border-[var(--color-c--black)] w-1/2"} src={ previewThree } alt={"Preview of tracker."} />
                      </div>
                  </div>
              </section>
          </div>

          <section className={"grid grid-rows-3 md:grid-cols-3 md:grid-rows-none gap-6 text-xs md:text-sm"}>
                <div className={"flex flex-col gap-4 border border-[var(--color-c--black)] rounded-sm"}>
                    <span className={"font-bold border-b p-2 align-baseline"}>
                        <Image className={"inline h-auto w-1/8 pr-2"} src={DocumentIcon} alt="Document Icon" />
                        Track Interviews
                    </span>
                    <div><Image src={InterviewFeature} alt={"Interview Feature"} /></div>
                    <p className={"p-2 border-t "}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                    </p>
                </div>

              <div className={"flex flex-col gap-4 border border-[var(--color-c--black)] rounded-sm"}>
                    <span className={"font-bold border-b p-2 align-baseline"}>
                        <Image className={"inline h-auto w-1/8 pr-2"} src={UserIcon} alt="User Icon" />
                        Set Reminders and Tips
                    </span>
                  <div><Image src={TipsFeature} alt={"Interview Feature"} /></div>
                  <p className={"p-2 border-t "}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                  </p>
              </div>

              <div className={"flex flex-col gap-4 border border-[var(--color-c--black)] rounded-sm"}>
                    <span className={"font-bold border-b p-2 align-baseline"}>
                        <Image className={"inline h-auto w-1/8 pr-2"} src={TrackerIcon} alt="User Icon" />
                        Review Performance
                    </span>
                  <div><Image src={TrackerFeature} alt={"Interview Feature"} /></div>
                  <p className={"p-2 border-t "}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                  </p>
              </div>
          </section>
        </main>
    </>
  );
}
