import { X } from 'lucide-react'
import { CATEGORIES } from '../data/categories'

function ExpiryForm({ onClose }) {
    return (
        <div className="modal-backdrop" role="presentation">
            <section
                className="modal-card"
                role="dialog"
                aria-modal="true"
                aria-labelledby="expiry-form-title"
            >
                <div className="modal-header">
                    <div>
                        <p className="eyebrow">New expiry item</p>
                        <h2 id="expiry-form-title">Add Item</h2>
                    </div>

                    <button
                        className="icon-button"
                        type="button"
                        onClick={onClose}
                        aria-label="Close form"
                    >
                        <X size={20} />
                    </button>
                </div>

                <form className="expiry-form">
                    <div className="form-field">
                        <label htmlFor="name">Item Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="e.g. Car Insurance"
                        />
                    </div>

                    <div className="form-field">
                        <label htmlFor="category">Category</label>
                        <select id="category" name="category" defaultValue="">
                            <option value="" disabled>
                                Select category
                            </option>

                            {CATEGORIES.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-field">
                        <label htmlFor="expiryDate">Expiry Date</label>
                        <input
                            id="expiryDate"
                            name="expiryDate"
                            type="date"
                        />
                    </div>

                    <div className="form-field">
                        <label htmlFor="renewalCost">
                            Renewal Cost
                            <span className="optional-label">Optional</span>
                        </label>

                        <div className="currency-input">
                            <span>RM</span>
                            <input
                                id="renewalCost"
                                name="renewalCost"
                                type="number"
                                min="0"
                                step="0.01"
                                placeholder="0.00"
                            />
                        </div>
                    </div>

                    <div className="form-field">
                        <label htmlFor="recurrence">Recurrence</label>
                        <select
                            id="recurrence"
                            name="recurrence"
                            defaultValue="none"
                        >
                            <option value="none">None</option>
                            <option value="monthly">Monthly</option>
                            <option value="yearly">Yearly</option>
                        </select>
                    </div>

                    <div className="form-actions">
                        <button
                            className="secondary-button"
                            type="button"
                            onClick={onClose}
                        >
                            Cancel
                        </button>

                        <button className="primary-button" type="submit">
                            Save Item
                        </button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default ExpiryForm