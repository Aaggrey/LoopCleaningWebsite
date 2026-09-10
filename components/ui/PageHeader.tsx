import type { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export default function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden bg-primary py-20 text-white sm:py-24">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-white blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-white blur-3xl"></div>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        {eyebrow && (
          <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold backdrop-blur">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}