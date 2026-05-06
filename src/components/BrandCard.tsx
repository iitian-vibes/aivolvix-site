import { useState } from "react";

interface Props {
  name: string;
  tagline: string;
  url: string;
  preview: string;
}

export default function BrandCard({ name, tagline, url, preview }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className="group relative block bg-card border border-rule rounded-xl overflow-hidden transition-transform duration-300 ease-out hover:-translate-y-0.5 focus-visible:-translate-y-0.5"
    >
      <div className="aspect-[3/2] relative overflow-hidden bg-bone">
        <img
          src={preview}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            hovered ? "opacity-100" : "opacity-70"
          }`}
          loading="lazy"
          decoding="async"
        />
        <div
          className={`absolute inset-0 bg-ink transition-opacity duration-500 ${
            hovered ? "opacity-0" : "opacity-10"
          }`}
        />
      </div>
      <div className="p-6 sm:p-8">
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink leading-tight">
          {name}
        </h3>
        <p className="mt-2 text-body leading-[1.6]">{tagline}</p>
        <p className="mt-6 font-mono text-eyebrow uppercase tracking-[0.2em] text-accent-gold">
          → {url.replace(/^https?:\/\//, "")}
        </p>
      </div>
    </a>
  );
}
