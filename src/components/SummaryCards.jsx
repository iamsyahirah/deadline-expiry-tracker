import {
    CalendarDays,
    CircleAlert,
    Clock3,
    WalletCards,
} from 'lucide-react'
import {
    calculateDaysLeft,
    getExpiryStatus,
} from '../utils/dateUtils'

function SummaryCards({ items }) {
    const totalItems = items.length

    const expiringSoon = items.filter(
        (item) => getExpiryStatus(item.expiryDate) === 'Expiring Soon',
    ).length

    const expired = items.filter(
        (item) => getExpiryStatus(item.expiryDate) === 'Expired',
    ).length

    const upcomingCost = items.reduce((total, item) => {
        const daysLeft = calculateDaysLeft(item.expiryDate)

        const isUpcoming =
            daysLeft !== null &&
            daysLeft >= 0 &&
            daysLeft <= 30

        if (!isUpcoming || item.renewalCost === null) {
            return total
        }

        return total + item.renewalCost
    }, 0)

    const summaryItems = [
        {
            label: 'Total Items',
            value: totalItems,
            icon: CalendarDays,
        },
        {
            label: 'Expiring Soon',
            value: expiringSoon,
            icon: Clock3,
        },
        {
            label: 'Expired',
            value: expired,
            icon: CircleAlert,
        },
        {
            label: 'Upcoming Cost',
            value: `RM ${upcomingCost.toLocaleString('en-MY', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 2,
            })}`,
            icon: WalletCards,
        },
    ]

    return (
        <section className="summary-section" aria-labelledby="overview-title">
            <div className="section-heading">
                <div>
                    <h2 id="overview-title">Overview</h2>
                    <p>A quick view of your expiry and renewal status.</p>
                </div>
            </div>

            <div className="summary-grid">
                {summaryItems.map((item) => {
                    const Icon = item.icon

                    return (
                        <article className="summary-card" key={item.label}>
                            <div className="summary-card-icon">
                                <Icon size={20} strokeWidth={2} />
                            </div>

                            <div>
                                <p className="summary-label">{item.label}</p>
                                <p className="summary-value">{item.value}</p>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default SummaryCards