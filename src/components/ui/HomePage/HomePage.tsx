import QuoteCard from '@/components/component/QuoteCard/Quote'
import client from '@/lib/prisma'

const INITIAL_TICKERS = ['USD_OFICIAL', 'USD_BLUE', 'USD_CCL', 'USD_MEP']

export default async function HomePage() {
  const dollarQuotation = await client.dailyDollarQuotation.findMany({
    select: {
      stock_id: true,
      date: true,
      value_buy: true,
      value_sell: true,
      value_avg: true,
    },
    where: {
      stock_id: {
        in: INITIAL_TICKERS,
      },
    },
    orderBy: {
      date: 'desc',
    },
    take: INITIAL_TICKERS.length,
  })

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full ">
      Hola. Soy la página de inicio. Probando Deploysa
      {dollarQuotation.map((dq) => (
        <QuoteCard
          key={dq.stock_id}
          stock_id={dq.stock_id}
          date={dq.date.toLocaleDateString()}
          value_buy={dq.value_buy}
          value_sell={dq.value_sell}
          value_avg={dq.value_avg}
        />
      ))}
    </div>
  )
}
