interface StatCardProps {
  value: string | number
  label: string
  icon?: React.ReactNode
  trend?: 'up' | 'down' | 'neutral'
  trendValue?: string
  color?: string
}

export default function StatCard({ 
  value, 
  label, 
  icon, 
  trend, 
  trendValue,
  color = 'text-primary-600'
}: StatCardProps) {
  const trendColors = {
    up: 'text-green-600',
    down: 'text-red-600',
    neutral: 'text-gray-600'
  }

  const trendIcons = {
    up: '↗',
    down: '↘',
    neutral: '→'
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <div className={`text-3xl font-bold ${color} mb-1`}>{value}</div>
          <div className="text-sm text-gray-600">{label}</div>
        </div>
        {icon && (
          <div className={`${color} opacity-20`}>
            {icon}
          </div>
        )}
      </div>
      {trend && trendValue && (
        <div className={`text-sm font-medium ${trendColors[trend]} mt-2 flex items-center`}>
          <span className="mr-1">{trendIcons[trend]}</span>
          {trendValue}
        </div>
      )}
    </div>
  )
}
