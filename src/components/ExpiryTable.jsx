import { Pencil, Trash2 } from 'lucide-react'
import StatusBadge from './StatusBadge'

const sampleItems = [
    {
        id: 1,
        name: 'Domain',
        category: 'Domain & Hosting',
        expiryDate: '2 Oct 2026',
        daysLeft: 4,
        cost: 60,
        status: 'Expiring Soon',
    },
    {
        id: 2,
        name: 'Car Insurance',
        category: 'Insurance',
        expiryDate: '10 Oct 2026',
        daysLeft: 12,
        cost: 1200,
        status: 'Expiring Soon',
    },
    {
        id: 3,
        name: 'Driving Licence',
        category: 'Identity & Travel',
        expiryDate: '18 Feb 2027',
        daysLeft: 143,
        cost: 30,
        status: 'Active',
    },
    {
        id: 4,
        name: 'Old Warranty',
        category: 'Warranty',
        expiryDate: '15 Sep 2026',
        daysLeft: -13,
        cost: null,
        status: 'Expired',
    },
]

function ExpiryTable() {
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
                    {sampleItems.map((item) => (
                        <tr key={item.id}>
                            <td className="item-name">{item.name}</td>

                            <td>{item.category}</td>

                            <td>{item.expiryDate}</td>

                            <td>
                                {item.daysLeft < 0
                                    ? `${Math.abs(item.daysLeft)} days ago`
                                    : item.daysLeft === 0
                                        ? 'Today'
                                        : `${item.daysLeft} days`}
                            </td>

                            <td>
                                {item.cost === null
                                    ? '—'
                                    : `RM ${item.cost.toLocaleString('en-MY')}`}
                            </td>

                            <td>
                                <StatusBadge status={item.status} />
                            </td>

                            <td>
                                <div className="table-actions">
                                    <button
                                        className="icon-button"
                                        type="button"
                                        aria-label={`Edit ${item.name}`}
                                    >
                                        <Pencil size={17} />
                                    </button>

                                    <button
                                        className="icon-button danger"
                                        type="button"
                                        aria-label={`Delete ${item.name}`}
                                    >
                                        <Trash2 size={17} />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ExpiryTable