import { FeatureCard } from "@/components/FeatureCard";

export const MobileFeatureCards = () => {
  return (
    <div className="relative box-border caret-transparent block max-w-[1824px] mt-12 mx-6 md:hidden md:mx-12">
      <div className="text-[0px] box-border caret-transparent leading-[0px] -mx-1.5 before:accent-auto before:box-border before:caret-transparent before:text-white before:table before:text-[0px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[0px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-helvetica_now_text after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-white after:table after:text-[0px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[0px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-helvetica_now_text">
        <div className="relative text-base box-border caret-transparent inline-block leading-7 min-h-px align-top w-full px-1.5">
          <div className="box-border caret-transparent w-full">
            <section className="relative text-transparent box-border">
              <div className="text-white items-center box-border caret-transparent flex justify-between mb-6 pt-0.5 px-6 md:px-12">
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0"></div>
              </div>
              <ul className="box-border flex list-none overflow-auto pl-6 pb-[30px] scroll-px-6 scroll-py-0 md:pl-12 md:scroll-px-12">
                <FeatureCard
                  ariaLabel="Les autres chaussures atténuent les sensations. La technologie Nike Mind les amplifie."
                  slideNumber={1}
                  totalSlides={3}
                  imageAlt="Nike Mind"
                  imageSrc=""
                  description="Les autres chaussures atténuent les sensations. La technologie Nike Mind les amplifie."
                  listItemVariant="min-h-[auto] min-w-[auto] mr-3"
                  imageVariant="opacity-100 md:min-h-0 md:opacity-0"
                  textContainerVariant="min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0"
                />
                <FeatureCard
                  ariaLabel="En sollicitant les milliers de mécanorécepteurs présents sous les pieds, elle stimule la zone sensorielle du cerveau."
                  slideNumber={2}
                  totalSlides={3}
                  imageAlt="Nike Mind"
                  imageSrc=""
                  description="En sollicitant les milliers de mécanorécepteurs présents sous les pieds, elle stimule la zone sensorielle du cerveau."
                  listItemVariant="min-h-[auto] min-w-[auto] mr-3"
                  imageVariant="opacity-100 md:min-h-0 md:opacity-0"
                  textContainerVariant="min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0"
                />
                <FeatureCard
                  ariaLabel="Nike Mind : une nouvelle façon de connecter le corps et le cerveau dans les moments les plus importants."
                  slideNumber={3}
                  totalSlides={3}
                  imageAlt="Nike Mind"
                  imageSrc=""
                  description="Nike Mind : une nouvelle façon de connecter le corps et le cerveau dans les moments les plus importants."
                  listItemVariant="min-h-[auto] min-w-[auto]"
                  imageVariant="opacity-100 md:min-h-0 md:opacity-0"
                  textContainerVariant="min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0"
                />
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
