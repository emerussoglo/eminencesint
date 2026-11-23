import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-page__box">
        <p className="not-found-page__code">404</p>
        <h1 className="not-found-page__title">Page introuvable</h1>
        <p className="not-found-page__desc">
          La page demandée n&apos;existe pas ou a été déplacée. Retournez à
          l&apos;accueil pour explorer nos véhicules chinois et services.
        </p>
        <Link href="/" className="not-found-page__btn">
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
