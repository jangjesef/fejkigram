import { Layout } from "@/components/Layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

const products = [
  { id: 1, name: "Fejki Olej 10%", price: "799 Kč", image: "/images/Weed VPQ7Aruqdzo.jpg", description: "Náš prémiový CBD olej s koncentrací 10%. Vyroben z nejkvalitnějších konopných rostlin, poskytuje účinnou úlevu a podporuje celkovou pohodu.", strength: "10%", packaging: "30ml skleněná lahvička s kapátkem", usage: "2-3 kapky pod jazyk, 2x denně", ingredients: "Konopný extrakt, MCT olej" },
  { id: 2, name: "Fejki Gumové bonbóny", price: "349 Kč", image: "/images/Cbd Gummies Elsa Olofsson.jpg", description: "Chutné a účinné CBD gumové bonbóny. Každý bonbón obsahuje přesnou dávku CBD pro snadné a chutné užívání.", strength: "25mg CBD na bonbón", packaging: "Balení 30 bonbónů", usage: "1-2 bonbóny denně", ingredients: "CBD izolát, přírodní a umělá aromata, glukózový sirup, želatina" },
  { id: 3, name: "Fejki Balzám", price: "499 K��", image: "/images/Weed Pictures Esteban Lopez.jpg", description: "Zklidňující CBD balzám pro lokální aplikaci. Ideální pro úlevu od bolesti svalů a kloubů, s příjemnou vůní a rychlým vstřebáváním.", strength: "500mg CBD na balení", packaging: "50ml plechovka", usage: "Aplikujte malé množství na postiženou oblast", ingredients: "CBD izolát, kokosový olej, včelí vosk, esenciální oleje" },
  { id: 4, name: "Fejki Květy", price: "599 Kč", image: "/images/Weed Pictures Budding.jpg", description: "Vysoce kvalitní CBD květy s bohatým spektrem kanabinoidů. Perfektní pro relaxaci a podporu duševní pohody.", strength: "4-6% CBD", packaging: "5g vzduchotěsný sáček", usage: "Vhodné pro vaporizaci nebo přípravu čaje", ingredients: "100% CBD konopné květy" },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === parseInt(params.id))

  if (!product) {
    return <Layout><div>Produkt nenalezen</div></Layout>
  }

  return (
    <Layout>
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl">{product.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-square relative">
              <Image 
                src={product.image} 
                alt={product.name} 
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div>
              <p className="text-2xl font-bold text-purple-700 mb-4">{product.price}</p>
              <p className="mb-4">{product.description}</p>
              <div className="space-y-2">
                <p><strong>Síla:</strong> {product.strength}</p>
                <p><strong>Balení:</strong> {product.packaging}</p>
                <p><strong>Použití:</strong> {product.usage}</p>
                <p><strong>Složení:</strong> {product.ingredients}</p>
              </div>
              <Button className="w-full mt-6">Přidat do košíku</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Layout>
  )
}