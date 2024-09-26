'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, MapPin, Phone, Mail, Instagram } from "lucide-react"
import Link from 'next/link'

const featuredProducts = [
  { id: 1, name: "Fejki Olej 10%", price: "799 Kč", image: "https://images.unsplash.com/photo-1611070874804-f87b3c4a4e2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2JkJTIwb2lsfGVufDB8fDB8fHww" },
  { id: 2, name: "Fejki Gumové bonbóny", price: "349 Kč", image: "https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2JkJTIwZ3VtbWllc3xlbnwwfHwwfHx8MA%3D%3D" },
  { id: 3, name: "Fejki Balzám", price: "499 Kč", image: "https://images.unsplash.com/photo-1611070874754-bf5a0f2e7f7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2JkJTIwYmFsbXxlbnwwfHwwfHx8MA%3D%3D" },
]

export function Page() {
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

      <main className="flex-grow">
        <section className="bg-purple-700 text-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Vítejte ve Fejki Shopu</h2>
            <p className="text-xl mb-8">Objevte sílu přírody s našimi Fejki produkty</p>
            <Button size="lg">
              Nakupovat
              <ShoppingCart className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Naše nejoblíbenější produkty</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <Card key={product.id}>
                  <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-md" />
                    <p className="text-2xl font-bold text-purple-700">{product.price}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Přidat do košíku</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-purple-100 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Proč Fejki Shop?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Kvalitní produkty</h3>
                <p>Všechny naše produkty jsou pečlivě vybírány a testovány pro zajištění nejvyšší kvality.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Rychlé doručení</h3>
                <p>Garantujeme doručení do 2-3 pracovních dnů po celé České republice.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Odborné poradenství</h3>
                <p>Náš tým je připraven zodpovědět všechny vaše dotazy a pomoci vám s výběrem.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-purple-800 text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Fejki Shop</h3>
            <p>Váš důvěryhodný zdroj Fejki produktů v České republice.</p>
            <div className="mt-4 flex items-center">
              <span className="mr-2">Provozováno uživatelem:</span>
              <a href="https://instagram.com/fejkigram" target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline">
                <Instagram className="mr-1 h-5 w-5" />
                fejkigram
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Kontaktujte nás</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                Fejki ulice 123, Praha 1, 110 00
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                +420 123 456 789
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                info@fejkishop.cz
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Přihlaste se k odběru novinek a získejte 10% slevu na první nákup.</p>
            <div className="flex">
              <input type="email" placeholder="Váš e-mail" className="flex-grow px-4 py-2 rounded-l-md text-black" />
              <Button variant="secondary" className="rounded-l-none">Odebírat</Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}