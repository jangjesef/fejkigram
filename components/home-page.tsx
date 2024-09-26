import Link from 'next/link'

export function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-purple-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Fejki Shop</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:underline">Domů</Link></li>
              <li><Link href="/produkty" className="hover:underline">Produkty</Link></li>
              <li><Link href="/o-nas" className="hover:underline">O nás</Link></li>
              <li><Link href="/kontakt" className="hover:underline">Kontakt</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* ... zbytek kódu zůstává stejný ... */}
    </div>
  )
}