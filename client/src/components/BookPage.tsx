import PencilBorder from "./PencilBorder";

interface BookPageProps {
  title?: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
  pageNumber?: number;
  totalPages?: number;
  isFirstPage?: boolean;
  isLastPage?: boolean;
}

export default function BookPage({
  title,
  text,
  imageSrc,
  imageAlt,
  pageNumber,
  totalPages,
  isFirstPage = false,
  isLastPage = false,
}: BookPageProps) {
  return (
    <div className="relative w-full h-full bg-card rounded-3xl shadow-2xl p-8 md:p-12 overflow-hidden">
      <PencilBorder position="top-left" color="text-primary" rotation="rotate-12" />
      <PencilBorder position="top-right" color="text-secondary" rotation="-rotate-6" />
      <PencilBorder position="bottom-left" color="text-accent" rotation="-rotate-12" />
      <PencilBorder position="bottom-right" color="text-chart-4" rotation="rotate-6" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-6">
        {title && (
          <h1 className="font-title text-4xl md:text-5xl text-primary text-center leading-tight">
            {title}
          </h1>
        )}

        <div className="flex-1 flex items-center justify-center w-full max-w-2xl">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto max-h-[50vh] object-contain rounded-2xl"
            data-testid={`img-story-${pageNumber || 0}`}
          />
        </div>

        <div className="w-full max-w-3xl">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-md">
            <p className="font-hand text-xl md:text-2xl text-foreground text-center leading-relaxed">
              {text}
            </p>
          </div>
        </div>

        {pageNumber !== undefined && totalPages !== undefined && (
          <div className="text-center">
            <p className="font-hand text-lg text-muted-foreground">
              Página {pageNumber} de {totalPages}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
