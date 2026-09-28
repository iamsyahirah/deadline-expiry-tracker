import { AlertTriangle, CalendarDays } from 'lucide-react'

const attentionItems = [
    {
        id: 1,
        name: 'Domain',
        category: 'Domain & Hosting',
        daysLeft: 4,
        cost: 60,
        recurrence: 'Yearly',
    },
    {
        id: 2,
        name: 'Car Insurance',
        category: 'Insurance',
        daysLeft: 12,
        cost: 1200,
        recurrence: 'Yearly',
    },
    {
        id: 3,
        name: 'Hosting',
        category: 'Domain & Hosting',
        daysLeft: 25,
        cost: 120,
        recurrence: 'Yearly',
    },
]

function AttentionList() {
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
                                    {item.daysLeft} days left
                                </span>
                            </div>

                            <div className="attention-meta">
                                <span>
                                    <CalendarDays size={15} />
                                    {item.recurrence}
                                </span>

                                <span>
                                    RM {item.cost.toLocaleString('en-MY')}
                                </span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default AttentionList