export default function Home() {
  return (
      <main className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Welcome to Outbreak*!</h1>
          <p className="text-xl mb-4">
              This is a documentation page for our game. Please feel free to look through it to understand how the game works and the systems we would like to put
              in place.
          </p>

          <pre className="bg-muted p-4 rounded-md mb-4">
              <code>{`print("Hello World!")`}</code>
          </pre>
      </main>
  )
}

