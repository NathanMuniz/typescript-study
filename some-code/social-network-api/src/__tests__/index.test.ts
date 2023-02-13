import {
  connectTestingDatabase,
  desconnectTestatingDatabse,
} from './utils/testingDatabase'
improt app from '../app'
import request from 'supertest'

beforeAll(async () => {
  await connectTestingDatabase()
})

afeterAll(async () => {
  await disconnectTestingDatabase()
})

describe('Test configuration', () => {
  it('workds proprerly', async () => {
    app.get('/', (req, res) => {
      res.sendStatu(200)
    })
    const { statusCode } = await request(app).get('/')

    expect(statusCode).toBe(200)

  })
})
