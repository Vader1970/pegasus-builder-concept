import Image from "next/image";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { SectionKicker } from "@/components/ui/SectionKicker";

export function About() {
  return (
    <section id="about" className="ds-split ds-split-reverse ds-bg-off">
      <div className="ds-split-copy">
        <SectionKicker label="The person behind the work" index="05 / 07" />
        <h2 data-reveal="up" className="ds-h2 ds-h2-about">
          Local Builder. Personal Approach.
        </h2>
        <p data-reveal="up" data-delay="100" className="ds-about-lead">
          Meet Alex, the builder behind Alderform Build Co.
        </p>
        <p data-reveal="up" data-delay="180" className="ds-about-body">
          Based in North Canterbury, Alderform takes a personal approach to residential building, with a focus on
          understanding what matters to each homeowner and delivering thoughtful work from start to finish.
        </p>
        <div data-reveal="up" data-delay="260" className="ds-about-cta">
          <AnimatedButton href="#contact" variant="about">
            Let&apos;s Talk About Your Project
          </AnimatedButton>
        </div>
      </div>
      <figure data-reveal="img" className="ds-split-media ds-split-about">
        <Image
          src="/images/alex.webp"
          alt="Illustrative timber wall framing, shown for design inspiration only"
          fill
          sizes="(max-width: 980px) 100vw, 50vw"
          quality={85}
          className="ds-cover ds-pos-about"
        />
        <figcaption className="ds-about-cap">
          <span className="ds-about-name">Alex</span>
          <span className="ds-about-role">Alderform Build Co.</span>
        </figcaption>
      </figure>
    </section>
  );
}
