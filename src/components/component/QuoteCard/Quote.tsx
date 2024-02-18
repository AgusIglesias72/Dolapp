interface QuoteCardProps {
  stock_id: string
  date: string
  value_buy: number
  value_sell: number
  value_avg: number
}

export default function QuoteCard({
  stock_id,
  date,
  value_buy,
  value_sell,
  value_avg,
}: QuoteCardProps) {
  return (
    <div>
      <h2>{stock_id}</h2>
      <p>{date}</p>
      <p>{value_buy}</p>
      <p>{value_sell}</p>
      <p>{value_avg}</p>
    </div>
  )
}
