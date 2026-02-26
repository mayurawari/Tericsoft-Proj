
import './App.css'
import { List } from './components/List'

function App() {
  return (
    <div className="bg-linear-to-r from-blue-100 to-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <header className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
            Latest Posts
          </h1>
        </header>
        <main >
        <List />
        </main>
      </div>
    </div>
  )
}

export default App
