export function parseLocalDate(dateString) {
  if (!dateString) return null

  const [year, month, day] = dateString.split('-').map(Number)

  return new Date(year, month - 1, day)
}

export function calculateDaysLeft(expiryDate) {
  const expiry = parseLocalDate(expiryDate)

  if (!expiry) return null

  const today = new Date()

  const startOfToday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  )

  const differenceInMilliseconds = expiry - startOfToday

  return Math.ceil(
    differenceInMilliseconds / (1000 * 60 * 60 * 24),
  )
}

export function getExpiryStatus(expiryDate) {
  const daysLeft = calculateDaysLeft(expiryDate)

  if (daysLeft === null) return 'Active'

  if (daysLeft < 0) {
    return 'Expired'
  }

  if (daysLeft <= 30) {
    return 'Expiring Soon'
  }

  return 'Active'
}

export function formatExpiryDate(dateString) {
  const date = parseLocalDate(dateString)

  if (!date) return '—'

  return new Intl.DateTimeFormat('en-MY', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date)
}

export function formatDaysLeft(daysLeft) {
  if (daysLeft === null) {
    return '—'
  }

  if (daysLeft === 0) {
    return 'Expires today'
  }

  if (daysLeft < 0) {
    const daysExpired = Math.abs(daysLeft)

    return `${daysExpired} day${daysExpired === 1 ? '' : 's'} ago`
  }

  return `${daysLeft} day${daysLeft === 1 ? '' : 's'} left`
}