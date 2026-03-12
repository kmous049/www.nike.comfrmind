import { FeatureCard } from "@/components/FeatureCard";

export const DesktopFeatureCards = () => {
  return (
    <div className="relative box-border caret-transparent hidden max-w-[1824px] mt-12 mx-6 md:block md:mx-12">
      <div className="text-[0px] box-border caret-transparent leading-[0px] -mx-1.5 before:accent-auto before:box-border before:caret-transparent before:text-white before:table before:text-[0px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[0px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-helvetica_now_text after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-white after:table after:text-[0px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[0px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-helvetica_now_text">
        <div className="relative text-base box-border caret-transparent inline-block leading-7 min-h-px align-top w-full px-1.5">
          <div className="box-border caret-transparent w-full">
            <section className="relative text-transparent box-border">
              <div className="text-white items-center box-border caret-transparent flex justify-between mb-6 pt-0.5 px-6 md:px-12">
                <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"></div>
              </div>
              <ul className="box-border flex list-none overflow-auto pl-6 pb-[30px] scroll-px-6 scroll-py-0 md:pl-12 md:scroll-px-12">
                <FeatureCard
                  ariaLabel="Les autres chaussures atténuent les sensations. La technologie Nike Mind les amplifie."
                  slideNumber={1}
                  totalSlides={3}
                  imageAlt="Nike Mind"
                  imageSrc="https://c.animaapp.com/mmmpddetmw6vVN/assets/nike-mind-1.jpg"
                  description="Les autres chaussures atténuent les sensations. La technologie Nike Mind les amplifie."
                  listItemVariant="min-h-0 min-w-0 mr-3 md:min-h-[auto] md:min-w-[auto]"
                  imageVariant=""
                  textContainerVariant="min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
                />
                <FeatureCard
                  ariaLabel="En sollicitant les milliers de mécanorécepteurs présents sous les pieds, elle stimule la zone sensorielle du cerveau."
                  slideNumber={2}
                  totalSlides={3}
                  imageAlt="Nike Mind"
                  imageSrc="https://c.animaapp.com/mmmpddetmw6vVN/assets/nike-mind-2.jpg"
                  description="En sollicitant les milliers de mécanorécepteurs présents sous les pieds, elle stimule la zone sensorielle du cerveau."
                  listItemVariant="min-h-0 min-w-0 mr-3 md:min-h-[auto] md:min-w-[auto]"
                  imageVariant=""
                  textContainerVariant="min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
                />
                <FeatureCard
                  ariaLabel="Nike Mind : une nouvelle façon de connecter le corps et le cerveau dans les moments les plus importants."
                  slideNumber={3}
                  totalSlides={3}
                  imageAlt="Nike Mind"
                  imageSrc="https://c.animaapp.com/mmmpddetmw6vVN/assets/nike-mind-3.jpg"
                  description="Nike Mind : une nouvelle façon de connecter le corps et le cerveau dans les moments les plus importants."
                  listItemVariant="min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
                  imageVariant=""
                  textContainerVariant="min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
                />
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
