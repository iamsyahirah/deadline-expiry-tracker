import { Search } from 'lucide-react'

function ItemToolbar() {
    return (
        <div className="item-toolbar">
            <div className="search-box">
                <Search size={18} />
                <input
                    type="search"
                    placeholder="Search items..."
                    aria-label="Search expiry items"
                />
            </div>

            <div className="toolbar-controls">
                <select aria-label="Filter by status" defaultValue="all">
                    <option value="all">All Status</option>
                    <option value="active">Active</option>
                    <option value="expiring-soon">Expiring Soon</option>
                    <option value="expired">Expired</option>
                </select>

                <select aria-label="Sort items" defaultValue="soonest">
                    <option value="soonest">Soonest First</option>
                    <option value="latest">Latest First</option>
                </select>
            </div>
        </div>
    )
}

export default ItemToolbar