import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail } from "lucide-react"

export function ContactPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Kontaktujte nás</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Kontaktní informace</h2>
          <ul className="space-y-4">
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
          <h2 className="text-2xl font-bold mb-4">Napište nám</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">Jméno</label>
              <input type="text" id="name" className="w-full px-4 py-2 rounded-md border" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">E-mail</label>
              <input type="email" id="email" className="w-full px-4 py-2 rounded-md border" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">Zpráva</label>
              <textarea id="message" rows={4} className="w-full px-4 py-2 rounded-md border"></textarea>
            </div>
            <Button type="submit">Odeslat zprávu</Button>
          </form>
        </div>
      </div>
    </div>
  )
}