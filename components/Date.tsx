import { format } from 'date-fns'

type DateProps = {
    dateString: string;
}

export default function DateComponent({ dateString }: DateProps) {
  return (
    <time dateTime={dateString}>
      {format(new Date(dateString), 'LLLL	d, yyyy')}
    </time>
  )
}
