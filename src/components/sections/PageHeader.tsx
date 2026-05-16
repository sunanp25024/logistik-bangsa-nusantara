export function PageHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <section className="bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 lg:py-20">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">{eyebrow}</span>
        <h1 className="mt-3 text-3xl lg:text-5xl font-semibold text-charcoal leading-tight max-w-3xl">{title}</h1>
        {description && <p className="mt-4 text-charcoal-soft max-w-2xl">{description}</p>}
      </div>
    </section>
  );
}
