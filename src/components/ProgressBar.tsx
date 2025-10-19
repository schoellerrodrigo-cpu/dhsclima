interface ProgressBarProps {
  label: string
  value: number
  maxValue: number
  color?: string
  showPercentage?: boolean
}

export default function ProgressBar({ 
  label, 
  value, 
  maxValue, 
  color = 'bg-primary-600',
  showPercentage = true 
}: ProgressBarProps) {
  const percentage = Math.round((value / maxValue) * 100)

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        {showPercentage && (
          <span className="text-sm font-bold text-gray-900">{percentage}%</span>
        )}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className={`${color} h-full rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
