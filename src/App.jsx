import { useState } from 'react'
import { Plus } from 'lucide-react'
import SummaryCards from './components/SummaryCards'
import AttentionList from './components/AttentionList'
import ItemToolbar from './components/ItemToolbar'
import ExpiryTable from './components/ExpiryTable'
import ExpiryForm from './components/ExpiryForm'

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <>
      <div className="app-shell">
        <header className="app-header">
          <div>
            <p className="eyebrow">Personal Expiry Tracker</p>
            <h1>Deadline</h1>
            <p className="header-description">
              Keep important expiry dates and renewals in one place.
            </p>
          </div>

          <button
            className="primary-button"
            type="button"
            onClick={() => setIsFormOpen(true)}
          >
            <Plus size={18} strokeWidth={2} />
            Add Item
          </button>
        </header>

        <main className="dashboard">
          <SummaryCards />
          <AttentionList />

          <section className="items-section" aria-labelledby="items-title">
            <div className="section-heading">
              <div>
                <h2 id="items-title">All Items</h2>
                <p>Manage and review all of your expiry dates.</p>
              </div>
            </div>

            <ItemToolbar />
            <ExpiryTable />
          </section>
        </main>
      </div>

      {isFormOpen && (
        <ExpiryForm onClose={() => setIsFormOpen(false)} />
      )}
    </>
  )
}

export default App