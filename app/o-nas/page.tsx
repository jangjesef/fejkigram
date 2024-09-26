import { Layout } from "@/components/Layout"

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">O nás</h1>
        <p className="mb-4">
          Fejki Shop je váš důvěryhodný zdroj CBD produktů v České republice. Naše společnost byla založena s cílem přinášet kvalitní a účinné CBD produkty všem, kteří hledají přírodní alternativy pro zlepšení svého zdraví a pohody.
        </p>
        <p className="mb-4">
          Naše produkty jsou pečlivě vybírány a testovány, abychom zajistili nejvyšší kvalitu a účinnost. Spolupracujeme pouze s důvěryhodnými dodavateli a výrobci, kteří sdílejí naši vizi a hodnoty.
        </p>
        <p>
          V Fejki Shopu věříme v sílu přírody a v potenciál CBD. Naším posláním je vzdělávat veřejnost o výhodách CBD a poskytovat prvotřídní produkty, které mohou pozitivně ovlivnit životy našich zákazníků.
        </p>
      </div>
    </Layout>
  )
}