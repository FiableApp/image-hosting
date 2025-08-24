import Image from "next/image"
import { Download } from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <div className="mb-6">
          <Image
            src="/oso-investigador.webp"
            alt="Oso Investigador - Personaje kawaii con lupa"
            width={300}
            height={300}
            className="mx-auto rounded-xl"
            priority
          />
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-2">🔍 Oso Investigador</h1>

        <p className="text-gray-600 mb-6">Descarga esta adorable imagen del oso investigador kawaii</p>

        <a
          href="/oso-investigador.webp"
          download="oso-investigador.webp"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          <Download size={20} />
          Descargar Imagen
        </a>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-700 mb-2">Para APIs y desarrollo:</h3>
          <code className="text-sm bg-white p-2 rounded border block text-gray-600">/api/image/oso-investigador</code>
          <p className="text-xs text-gray-500 mt-1">Endpoint directo para consumo por APIs</p>
        </div>

        <div className="mt-4 text-sm text-gray-500">
          <p>Formato: WebP</p>
          <p>Tamaño: 300x300px</p>
        </div>
      </div>
    </main>
  )
}
