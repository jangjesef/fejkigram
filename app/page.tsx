'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, MapPin, Phone, Mail } from "lucide-react"
import Link from 'next/link'
import { Layout } from "@/components/Layout"
import { ProductCard } from "@/components/ProductCard"
import dynamic from 'next/dynamic';

const WeedGame = dynamic(() => import('./components/WeedGame'), { ssr: false });

const featuredProducts = [
  { id: 1, name: "Fejki Olej 10%", price: "799 Kč", image: "/images/Weed VPQ7Aruqdzo.jpg" },
  { id: 2, name: "Fejki Gumové bonbóny", price: "349 Kč", image: "/images/Cbd Gummies Elsa Olofsson.jpg" },
  { id: 3, name: "Fejki Balzám", price: "499 Kč", image: "/images/Weed Pictures Esteban Lopez.jpg" },
  { id: 4, name: "Fejki Květy", price: "599 Kč", image: "/images/Weed Pictures Budding.jpg" },
]

export default function Home() {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Hero with video background */}
        <Card className="col-span-1 md:col-span-2 relative overflow-hidden rounded-lg" style={{minHeight: '400px'}}>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/Growing Marijuana Tree.mp4" type="video/mp4" />
            Váš prohlížeč nepodporuje video tag.
          </video>
          <div className="absolute inset-0 bg-purple-700 bg-opacity-60"></div>
          <div className="relative z-10 p-6 text-white h-full flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4">Vítejte ve Fejki Shopu</h2>
            <p className="text-xl mb-8">Objevte sílu přírody s našimi Fejki produkty</p>
            <Link href="/produkty">
              <Button size="lg">
                Nakupovat
                <ShoppingCart className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </Card>

        {/* Featured Products */}
        <div className="col-span-1 md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Why Fejki Shop */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Proč Fejki Shop?</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Kvalitní produkty</li>
              <li>Rychlé doručení</li>
              <li>Odborné poradenství</li>
            </ul>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Kontaktujte nás</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                Fejki ulice 123, Praha 1
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
          </CardContent>
        </Card>

        {/* Newsletter */}
        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle>Odebírejte náš newsletter</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Přihlaste se k odběru novinek a získejte 10% slevu na první nákup.</p>
            <div className="flex">
              <input type="email" placeholder="Váš e-mail" className="flex-grow px-4 py-2 rounded-l-md" />
              <Button variant="secondary" className="rounded-l-none">Odebírat</Button>
            </div>
          </CardContent>
        </Card>

        {/* Weed Game */}
        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-green-800">Zahrajte si Weed Grower Game</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center bg-green-50 p-4 rounded-lg">
            <WeedGame />
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}