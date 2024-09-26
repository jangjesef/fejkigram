import Link from 'next/link'
import { Instagram, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-purple-100 p-4 md:p-8">
      <div className="grid grid-cols-4 gap-4 max-w-6xl mx-auto">
        {/* Header */}
        <Card className="col-span-4 bg-purple-800 text-white">
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex justify-between items-center">
              Fejki Shop
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <nav className="hidden md:block">
              <ul className="flex space-x-4">
                <li><Link href="/" className="hover:underline">Domů</Link></li>
                <li><Link href="/produkty" className="hover:underline">Produkty</Link></li>
                <li><Link href="/o-nas" className="hover:underline">O nás</Link></li>
                <li><Link href="/kontakt" className="hover:underline">Kontakt</Link></li>
              </ul>
            </nav>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="col-span-4">
          {children}
        </div>

        {/* Footer */}
        <Card className="col-span-4 bg-purple-800 text-white">
          <CardContent className="flex justify-between items-center py-4">
            <p>© 2024 Fejki Shop. Všechna práva vyhrazena.</p>
            <a href="https://instagram.com/fejkigram" target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline">
              <Instagram className="mr-1 h-5 w-5" />
              fejkigram
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}