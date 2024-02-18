import type { NextRequest } from 'next/server'
import client from '@/lib/prisma'

export const dynamic = 'force-dynamic' // defaults to force-static

export async function POST(request: NextRequest) {
  try {
    const URL_FETCH = 'https://dolarapi.com/v1/dolares'

    const response = await fetch(URL_FETCH, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()

    const filteredData = data.filter(
      (item: any) =>
        item.casa === 'blue' ||
        item.casa === 'oficial' ||
        item.casa === 'bolsa' ||
        item.casa === 'contadoconliqui'
    )

    const createQuotations = await client.dollarQuotation.createMany({
      data: filteredData.map((item: any) => {
        const { casa, compra, venta, fechaActualizacion } = item
        const getStockId = (casa: string) => {
          if (casa === 'blue') {
            return 'USD_BLUE'
          }
          if (casa === 'oficial') {
            return 'USD_OFICIAL'
          }
          if (casa === 'bolsa') {
            return 'USD_MEP'
          }
          if (casa === 'contadoconliqui') {
            return 'USD_CCL'
          }
        }

        return {
          id: `${getStockId(casa)}_${fechaActualizacion}`,
          value_avg: (compra + venta) / 2,
          value_sell: venta,
          value_buy: compra,
          stock_id: getStockId(casa),
          date: new Date(fechaActualizacion),
        }
      }),
    })

    return Response.json({
      success: true,
      data: {
        createQuotations,
      },
    })
  } catch (error) {
    console.error(error)
    return Response.json({
      success: false,
      error,
    })
  }
}
