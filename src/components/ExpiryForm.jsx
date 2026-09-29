import { useState } from 'react'
import { X } from 'lucide-react'
import { CATEGORIES } from '../data/categories'

function ExpiryForm({ onClose, onSubmit, initialData = null }) {
    const isEditing = Boolean(initialData)

    const [formData, setFormData] = useState({
        name: initialData?.name ?? '',
        category: initialData?.category ?? '',
        expiryDate: initialData?.expiryDate ?? '',
        renewalCost: initialData?.renewalCost ?? '',
        recurrence: initialData?.recurrence ?? 'none',
    })

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormData((currentFormData) => ({
            ...currentFormData,
            [name]: value,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const submittedItem = {
            ...initialData,
            id: initialData?.id ?? crypto.randomUUID(),
            name: formData.name.trim(),
            category: formData.category,
            expiryDate: formData.expiryDate,
            renewalCost:
                formData.renewalCost === ''
                    ? null
                    : Number(formData.renewalCost),
            recurrence: formData.recurrence,
            createdAt: initialData?.createdAt ?? new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        }

        onSubmit(submittedItem)
    }

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
                        <p className="eyebrow">
                            {isEditing ? 'Update expiry item' : 'New expiry item'}
                        </p>

                        <h2 id="expiry-form-title">
                            {isEditing ? 'Edit Item' : 'Add Item'}
                        </h2>
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

                <form className="expiry-form" onSubmit={handleSubmit}>
                    <div className="form-field">
                        <label htmlFor="name">Item Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="e.g. Car Insurance"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-field">
                        <label htmlFor="category">Category</label>

                        <select
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                        >
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
                            value={formData.expiryDate}
                            onChange={handleChange}
                            required
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
                                value={formData.renewalCost}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="form-field">
                        <label htmlFor="recurrence">Recurrence</label>

                        <select
                            id="recurrence"
                            name="recurrence"
                            value={formData.recurrence}
                            onChange={handleChange}
                            required
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
                            {isEditing ? 'Save Changes' : 'Save Item'}
                        </button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default ExpiryForm