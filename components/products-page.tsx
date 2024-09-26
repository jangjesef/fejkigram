'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const products = [
  { id: 1, name: "Fejki Olej 10%", price: "799 Kč", image: "https://images.unsplash.com/photo-1611070874804-f87b3c4a4e2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2JkJTIwb2lsfGVufDB8fDB8fHww" },
  { id: 2, name: "Fejki Gumové bonbóny", price: "349 Kč", image: "https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2JkJTIwZ3VtbWllc3xlbnwwfHwwfHx8MA%3D%3D" },
  { id: 3, name: "Fejki Balzám", price: "499 Kč", image: "https://images.unsplash.com/photo-1611070874754-bf5a0f2e7f7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2JkJTIwYmFsbXxlbnwwfHwwfHx8MA%3D%3D" },
  // Přidejte další produkty podle potřeby
]

export function ProductsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Naše produkty</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
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
  )
}