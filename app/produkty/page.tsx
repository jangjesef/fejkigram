import { Layout } from "@/components/Layout"
import { ProductCard } from "@/components/ProductCard"

const products = [
  { id: 1, name: "Fejki Olej 10%", price: "799 Kč", image: "/images/Weed VPQ7Aruqdzo.jpg" },
  { id: 2, name: "Fejki Gumové bonbóny", price: "349 Kč", image: "/images/Cbd Gummies Elsa Olofsson.jpg" },
  { id: 3, name: "Fejki Balzám", price: "499 Kč", image: "/images/Weed Pictures Esteban Lopez.jpg" },
  { id: 4, name: "Fejki Květy", price: "599 Kč", image: "/images/Weed Pictures Budding.jpg" },
]

export default function Products() {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Naše produkty</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </Layout>
  )
}