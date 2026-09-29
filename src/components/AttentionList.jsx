import { AlertTriangle, CalendarDays } from 'lucide-react'
import {
    calculateDaysLeft,
    formatDaysLeft,
    getExpiryStatus,
} from '../utils/dateUtils'

function AttentionList({ items }) {
    const attentionItems = items
        .map((item) => ({
            ...item,
            daysLeft: calculateDaysLeft(item.expiryDate),
            status: getExpiryStatus(item.expiryDate),
        }))
        .filter(
            (item) =>
                item.status === 'Expired' ||
                item.status === 'Expiring Soon',
        )
        .sort((a, b) => a.daysLeft - b.daysLeft)
        .slice(0, 5)

    if (attentionItems.length === 0) {
        return (
            <section
                className="attention-section"
                aria-labelledby="attention-title"
            >
                <div className="section-heading">
                    <div>
                        <h2 id="attention-title">Needs Attention</h2>
                        <p>Items that are expiring soon and may require action.</p>
                    </div>
                </div>

                <div className="attention-empty">
                    <p>No urgent items right now.</p>
                </div>
            </section>
        )
    }

    return (
        <section className="attention-section" aria-labelledby="attention-title">
            <div className="section-heading">
                <div>
                    <h2 id="attention-title">Needs Attention</h2>
                    <p>Items that are expiring soon and may require action.</p>
                </div>
            </div>

            <div className="attention-list">
                {attentionItems.map((item) => (
                    <article className="attention-item" key={item.id}>
                        <div className="attention-icon">
                            <AlertTriangle size={19} strokeWidth={2} />
                        </div>

                        <div className="attention-content">
                            <div className="attention-main">
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>{item.category}</p>
                                </div>

                                <span className="attention-days">
                                    {formatDaysLeft(item.daysLeft)}
                                </span>
                            </div>

                            <div className="attention-meta">
                                <span>
                                    <CalendarDays size={15} />
                                    {item.recurrence === 'none'
                                        ? 'No recurrence'
                                        : item.recurrence === 'monthly'
                                            ? 'Monthly'
                                            : 'Yearly'}
                                </span>

                                {item.renewalCost !== null && (
                                    <span>
                                        RM {item.renewalCost.toLocaleString('en-MY')}
                                    </span>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default AttentionList