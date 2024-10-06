import Link from "next/link";

export default function FontFundPage() {
  return (
    <div className="min-h-screen bg-c-background flex flex-col items-center justify-center">
      <header className="w-full p-4 bg-gradient-red-2 text-white text-center">
        <h1 className="text-3xl font-bold">Página Não Encontrada</h1>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-4 text-c-text">
        <p className="mb-6 text-center">
          Parece que a página que você está procurando não existe. Ela pode ter
          sido removida, o link pode estar incorreto, ou a página pode estar
          temporariamente indisponível.
        </p>

        <p className="font-bold text-lg">O que você pode fazer:</p>
        <ul className="list-disc list-inside text-left">
          <li>Verifique o endereço do link para garantir que está correto.</li>
          <li>
            Volte para a{" "}
            <Link href="/" className="text-blue-500 underline">
              página inicial
            </Link>{" "}
            e tente navegar a partir de lá.
          </li>
          <li>Se precisar de ajuda, entre em contato conosco.</li>
        </ul>
      </main>

      <footer className="w-full p-4 bg-gradient-red-2 text-white text-center">
        <p>&copy; 2024 Font Fund. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
