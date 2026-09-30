import { SearchX, CalendarPlus } from 'lucide-react'

function EmptyState({ hasItems }) {
    const Icon = hasItems ? SearchX : CalendarPlus

    return (
        <div className="empty-state">
            <div className="empty-state-icon">
                <Icon size={22} />
            </div>

            <h3>
                {hasItems ? 'No matching items' : 'No expiry dates yet'}
            </h3>

            <p>
                {hasItems
                    ? 'Try changing your search term or status filter.'
                    : 'Add your first item to start tracking important renewals.'}
            </p>
        </div>
    )
}

export default EmptyState