import { useState } from 'react'
import { Plus } from 'lucide-react'
import SummaryCards from './components/SummaryCards'
import AttentionList from './components/AttentionList'
import ItemToolbar from './components/ItemToolbar'
import ExpiryTable from './components/ExpiryTable'
import ExpiryForm from './components/ExpiryForm'
import ConfirmDialog from './components/ConfirmDialog'

function App() {
  const [items, setItems] = useState([])
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingItem, setEditingItem] = useState(null)
  const [itemToDelete, setItemToDelete] = useState(null)

  const handleSaveItem = (itemToSave) => {
    setItems((currentItems) => {
      const itemExists = currentItems.some(
        (item) => item.id === itemToSave.id,
      )

      if (itemExists) {
        return currentItems.map((item) =>
          item.id === itemToSave.id ? itemToSave : item,
        )
      }

      return [...currentItems, itemToSave]
    })

    setEditingItem(null)
    setIsFormOpen(false)
  }

  const handleEditItem = (item) => {
    setEditingItem(item)
    setIsFormOpen(true)
  }

  const handleCloseForm = () => {
    setEditingItem(null)
    setIsFormOpen(false)
  }

  const handleDeleteRequest = (item) => {
    setItemToDelete(item)
  }

  const handleConfirmDelete = () => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.id !== itemToDelete.id),
    )

    setItemToDelete(null)
  }

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
            onClick={() => {
              setEditingItem(null)
              setIsFormOpen(true)
            }}
          >
            <Plus size={18} strokeWidth={2} />
            Add Item
          </button>
        </header>

        <main className="dashboard">
          <SummaryCards items={items} />
          <AttentionList items={items} />

          <section className="items-section" aria-labelledby="items-title">
            <div className="section-heading">
              <div>
                <h2 id="items-title">All Items</h2>
                <p>Manage and review all of your expiry dates.</p>
              </div>
            </div>

            <ItemToolbar />
            <ExpiryTable
              items={items}
              onEdit={handleEditItem}
              onDelete={handleDeleteRequest}
            />
          </section>
        </main>
      </div>

      {isFormOpen && (
        <ExpiryForm
          initialData={editingItem}
          onClose={handleCloseForm}
          onSubmit={handleSaveItem}
        />
      )}

      {itemToDelete && (
        <ConfirmDialog
          item={itemToDelete}
          onCancel={() => setItemToDelete(null)}
          onConfirm={handleConfirmDelete}
        />
      )}
    </>
  )
}

export default App