import { Pencil, Trash2 } from 'lucide-react'
import StatusBadge from './StatusBadge'
import {
    calculateDaysLeft,
    formatDaysLeft,
    formatExpiryDate,
    getExpiryStatus,
} from '../utils/dateUtils'

function ExpiryCard({ item, onEdit, onDelete }) {
    const daysLeft = calculateDaysLeft(item.expiryDate)
    const status = getExpiryStatus(item.expiryDate)

    return (
        <article className="expiry-card">
            <div className="expiry-card-header">
                <div>
                    <h3>{item.name}</h3>
                    <p>{item.category}</p>
                </div>

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
            </div>

            <div className="expiry-card-details">
                <div>
                    <span>Expiry</span>
                    <strong>{formatExpiryDate(item.expiryDate)}</strong>
                </div>

                <div>
                    <span>Days Left</span>
                    <strong>{formatDaysLeft(daysLeft)}</strong>
                </div>

                <div>
                    <span>Renewal Cost</span>
                    <strong>
                        {item.renewalCost === null
                            ? '—'
                            : `RM ${item.renewalCost.toLocaleString('en-MY')}`}
                    </strong>
                </div>

                <div>
                    <span>Recurrence</span>
                    <strong>
                        {item.recurrence === 'none'
                            ? 'None'
                            : item.recurrence === 'monthly'
                                ? 'Monthly'
                                : 'Yearly'}
                    </strong>
                </div>
            </div>

            <div className="expiry-card-footer">
                <StatusBadge status={status} />
            </div>
        </article>
    )
}

export default ExpiryCard