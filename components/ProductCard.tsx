import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
  id: number
  name: string
  price: string
  image: string
}

export function ProductCard({ id, name, price, image }: ProductCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle className="text-sm">{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow p-2">
        <div className="aspect-square w-full relative mb-2">
          <Image 
            src={image} 
            alt={name} 
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <p className="text-sm font-bold text-purple-700">{price}</p>
      </CardContent>
      <CardFooter className="p-2">
        <Link href={`/produkty/${id}`} className="w-full">
          <Button variant="outline" className="w-full text-xs">Detail</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}