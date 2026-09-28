import {
    CalendarDays,
    CircleAlert,
    Clock3,
    WalletCards,
} from 'lucide-react'

const summaryItems = [
    {
        label: 'Total Items',
        value: '12',
        icon: CalendarDays,
    },
    {
        label: 'Expiring Soon',
        value: '3',
        icon: Clock3,
    },
    {
        label: 'Expired',
        value: '1',
        icon: CircleAlert,
    },
    {
        label: 'Upcoming Cost',
        value: 'RM 1,380',
        icon: WalletCards,
    },
]

function SummaryCards() {
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