'use client';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="fr">
      <body className="global-error-body">
        <div className="global-error__box">
          <h1 className="global-error__title">Une erreur est survenue</h1>
          <p className="global-error__desc">
            Veuillez recharger la page ou réessayer dans un instant.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            className="global-error__btn"
          >
            Réessayer
          </button>
        </div>
      </body>
    </html>
  );
}
