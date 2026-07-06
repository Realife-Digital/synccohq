import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  onClick?: () => void;
  className?: string;
  inverted?: boolean;
};

export default function Logo({ onClick, className = "", inverted = false }: LogoProps) {
  const textClass = inverted ? "text-white" : "text-surface-on";

  return (
    <Link
      href="/"
      onClick={onClick}
      className={`group inline-flex items-center gap-3 ${className}`}
      aria-label="Syncco home"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center">
        <Image
          src="/images/syncco-icon.svg"
          alt=""
          width={33}
          height={40}
          className="h-10 w-auto -rotate-90"
          priority
        />
      </span>
      <span className={`flex items-center gap-2 border-l pl-3.5 ${inverted ? "border-white/20" : "border-brand/30"} ${textClass}`}>
        <span className="text-xl font-semibold tracking-tight group-hover:opacity-90">Syncco</span>
        <span className="hidden h-1.5 w-1.5 rounded-full bg-brand sm:block" aria-hidden />
      </span>
    </Link>
  );
}
