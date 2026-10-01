import { useEffect } from 'react'
import { TriangleAlert, X } from 'lucide-react'

useEffect(() => {
    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            onCancel()
        }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
        window.removeEventListener('keydown', handleKeyDown)
    }
}, [onCancel])

function ConfirmDialog({ item, onCancel, onConfirm }) {
    return (
        <div
            className="modal-backdrop"
            role="presentation"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                    onCancel()
                }
            }}
        >
            <section
                className="confirm-dialog"
                role="alertdialog"
                aria-modal="true"
                aria-labelledby="confirm-delete-title"
                aria-describedby="confirm-delete-description"
                onMouseDown={(event) => event.stopPropagation()}
            >
                <div className="confirm-dialog-header">
                    <div className="confirm-icon">
                        <TriangleAlert size={22} />
                    </div>

                    <button
                        className="icon-button"
                        type="button"
                        onClick={onCancel}
                        aria-label="Close confirmation"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="confirm-dialog-content">
                    <h2 id="confirm-delete-title">Delete item?</h2>

                    <p id="confirm-delete-description">
                        <strong>{item.name}</strong> will be permanently removed from
                        your expiry tracker.
                    </p>
                </div>

                <div className="confirm-dialog-actions">
                    <button
                        className="secondary-button"
                        type="button"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>

                    <button
                        className="danger-button"
                        type="button"
                        onClick={onConfirm}
                    >
                        Delete Item
                    </button>
                </div>
            </section>
        </div>
    )
}

export default ConfirmDialog