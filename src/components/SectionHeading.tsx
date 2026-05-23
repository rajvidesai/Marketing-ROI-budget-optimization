type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export const SectionHeading = ({ eyebrow, title, description }: SectionHeadingProps) => (
  <div className="max-w-3xl">
    <span className="eyebrow">{eyebrow}</span>
    <h2 className="mt-5 font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-[2.8rem]">
      {title}
    </h2>
    <p className="mt-4 text-base leading-8 text-muted sm:text-lg">{description}</p>
  </div>
);
