export default function TestPage() {
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold text-green-800 mb-4">
          🎉 Test de fonctionnement
        </h1>
        <p className="text-xl text-green-600 mb-6">
          Next.js et Tailwind CSS fonctionnent correctement !
        </p>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-gray-700">
            Votre serveur Next.js est opérationnel. 
            <br />
            Accédez à <code className="bg-gray-100 px-2 py-1 rounded">/test</code> pour voir cette page.
          </p>
        </div>
      </div>
    </div>
  )
}
