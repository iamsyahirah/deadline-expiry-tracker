import { Pencil, Trash2 } from 'lucide-react'
import StatusBadge from './StatusBadge'
import {
    calculateDaysLeft,
    formatDaysLeft,
    formatExpiryDate,
    getExpiryStatus,
} from '../utils/dateUtils'

function ExpiryTable({ items, onEdit, onDelete }) {
    return (
        <div className="table-wrapper">
            <table className="expiry-table">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Category</th>
                        <th>Expiry</th>
                        <th>Days Left</th>
                        <th>Cost</th>
                        <th>Status</th>
                        <th>
                            <span className="sr-only">Actions</span>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {items.map((item) => {
                        const daysLeft = calculateDaysLeft(item.expiryDate)
                        const status = getExpiryStatus(item.expiryDate)

                        return (
                            <tr key={item.id}>
                                <td className="item-name">{item.name}</td>

                                <td>{item.category}</td>

                                <td>{formatExpiryDate(item.expiryDate)}</td>

                                <td>{formatDaysLeft(daysLeft)}</td>

                                <td>
                                    {item.renewalCost === null
                                        ? '—'
                                        : `RM ${item.renewalCost.toLocaleString('en-MY')}`}
                                </td>

                                <td>
                                    <StatusBadge status={status} />
                                </td>

                                <td>
                                    <div className="table-actions">
                                        <button
                                            className="icon-button"
                                            type="button"
                                            onClick={() => onEdit(item)}
                                            aria-label={`Edit ${item.name}`}
                                        >
                                            <Pencil size={17} />
                                        </button>

                                        <button
                                            className="icon-button danger"
                                            type="button"
                                            onClick={() => onDelete(item)}
                                            aria-label={`Delete ${item.name}`}
                                        >
                                            <Trash2 size={17} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ExpiryTable