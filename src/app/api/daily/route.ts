import type { NextRequest } from 'next/server'
import client from '@/lib/prisma'

export const dynamic = 'force-dynamic' // defaults to force-static

// https://dolarapi.com/docs/operations/get-dolares.html
// https://github.com/enzonotario/esjs-dolar-api/blob/main/cron/acciones/extraccion/extraerDolares.esjs
// https://cheerio.js.org/

export async function GET(request: NextRequest) {
  //   const authHeader = request.headers.get('authorization')
  //   if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
  //     return new Response('Unauthorized', {
  //       status: 401,
  //     })
  //   }

  // Para consultas en la web se puede usar el endpoint de bluelytics, para registros diarios es preferible dolarapi
  // try {
  //   const URL_FETCH = 'https://api.bluelytics.com.ar/v2/latest'

  //   const response = await fetch(URL_FETCH, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //   const data = await response.json()

  //   const { blue, oficial, last_update } = data

  //   const {
  //     value_avg: blue_avg,
  //     value_sell: blue_sell,
  //     value_buy: blue_buy,
  //   } = blue

  //   const {
  //     value_avg: oficial_avg,
  //     value_sell: oficial_sell,
  //     value_buy: oficial_buy,
  //   } = oficial

  //   const create_blue = await client.dailyDollarQuotation.create({
  //     data: {
  //       value_avg: blue_avg,
  //       value_sell: blue_sell,
  //       value_buy: blue_buy,
  //       stock_id: 'USD_BLUE',
  //       date: new Date(last_update),
  //     },
  //   })

  //   const create_oficial = await client.dailyDollarQuotation.create({
  //     data: {
  //       value_avg: oficial_avg,
  //       value_sell: oficial_sell,
  //       value_buy: oficial_buy,
  //       stock_id: 'USD_OFICIAL',
  //       date: new Date(last_update),
  //     },
  //   })

  //   return Response.json({
  //     success: true,
  //     data: {
  //       create_blue,
  //       create_oficial,
  //       last_update,
  //     },
  //   })
  // } catch (error) {
  //   console.error(error)
  //   return Response.json({
  //     success: false,
  //     error,
  //   })
  // }

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

    const createQuotations = await client.dailyDollarQuotation.createMany({
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
          date: new Date(),
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

// export async function POST(request: NextRequest) {
//   try {
//     await client.dailyDollarQuotation.createMany({
//       data: historicOficial.map((item) => {
//         const dateParts = item.Fecha.split('/')
//         const dateObject = new Date(
//           +dateParts[2],
//           +dateParts[1] - 1,
//           +dateParts[0]
//         )

//         return {
//           value_avg: item.Valor,
//           value_sell: item.Valor,
//           value_buy: item.Valor,
//           stock_id: 'USD_CCL',
//           date: dateObject,
//         }
//       }),
//     })

//     return Response.json({
//       success: true,
//     })
//   } catch (error) {
//     console.error(error)
//     return Response.json({
//       success: false,
//       error,
//     })
//   }
// }
