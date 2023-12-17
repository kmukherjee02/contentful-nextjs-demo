import { format } from 'date-fns'
import { DateProps } from 'types'

export default function DateComponent({ dateString }: DateProps) {
  return (
    <time dateTime={dateString}>
      {format(new Date(dateString), 'LLLL	d, yyyy')}
    </time>
  )
}
