import { Layout } from "@/components/Layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Contact() {
  return (
    <Layout>
      <div className="grid grid-cols-4 gap-4">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Kontaktujte nás</CardTitle>
          </CardHeader>
        </Card>

        <Card className="col-span-4 md:col-span-2">
          <CardHeader>
            <CardTitle>Napište nám</CardTitle>
          </CardHeader>
          <CardContent>
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
          </CardContent>
        </Card>

        <Card className="col-span-4 md:col-span-2">
          <CardHeader>
            <CardTitle>Kontaktní informace</CardTitle>
          </CardHeader>
          <CardContent>
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
          </CardContent>
        </Card>

        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Kde nás najdete</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.0336518394697!2d14.418206776680424!3d50.08777491388736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94e8cf28b2e7%3A0x1f7e1a4f7e3d6e0!2zVsOhY2xhdnNrw6kgbsOhbS4sIDExMCAwMCBQcmFoYSAx!5e0!3m2!1scs!2scz!4v1681990028665!5m2!1scs!2scz" 
                width="100%" 
                height="450" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}