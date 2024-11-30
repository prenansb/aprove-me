import { Test } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import { AssignorFactory } from '../../factories/make-assignor'
import { AppModule } from '@/app.module'
import { RepositoryModule } from '@/infra/repository/repository.module'
import * as request from 'supertest'
import { PrismaService } from '@/infra/repository/prisma/prisma.service'

describe('Assignor Controller (E2E)', () => {
  let app: INestApplication
  let prisma: PrismaService
  let assignorFactory: AssignorFactory

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule, RepositoryModule],
      providers: [AssignorFactory, PrismaService],
    }).compile()

    app = moduleRef.createNestApplication()
    prisma = moduleRef.get(PrismaService)
    assignorFactory = moduleRef.get(AssignorFactory)

    await app.init()
  })

  test('[POST] /integrations/assignor/create', async () => {
    const response = await request(app.getHttpServer())
      .post('/integrations/assignor/create')
      .send({
        document: '61754108318',
        email: 'prenansb@gmail.com',
        name: 'Pedro',
        phone: '085987889257',
      })

    expect(response.statusCode).toBe(201)

    const assignorOnDatabase = await prisma.assignor.findFirst({
      where: {
        email: 'prenansb@gmail.com',
      },
    })

    expect(assignorOnDatabase).toBeTruthy()
  })

  test('[GET] /integrations/assignor/:id', async () => {
    const assignor = await assignorFactory.makePrismaAssignor()

    const response = await request(app.getHttpServer())
      .get(`/integrations/assignor/${assignor.id}`)
      .send()

    expect(response.statusCode).toBe(200)

    expect(response.body).toEqual(
      expect.objectContaining({
        document: assignor.document,
        email: assignor.email,
        id: assignor.id,
        name: assignor.name,
        phone: assignor.phone,
      })
    )
  })

  test('[PUT] /integrations/assignor/:id', async () => {
    const assignor = await assignorFactory.makePrismaAssignor()

    const response = await request(app.getHttpServer())
      .put(`/integrations/assignor/${assignor.id}`)
      .send({
        name: 'Renan',
      })

    expect(response.statusCode).toBe(200)

    expect(response.body).toEqual({
      document: assignor.document,
      email: assignor.email,
      id: assignor.id,
      name: 'Renan',
      phone: assignor.phone,
    })
  })

  test('[DELETE] /integrations/assignor/:id', async () => {
    const assignor = await assignorFactory.makePrismaAssignor()

    const response = await request(app.getHttpServer()).delete(
      `/integrations/assignor/${assignor.id}`
    )

    expect(response.statusCode).toBe(200)

    const assignorDeleted = await prisma.assignor.findFirst({
      where: {
        id: assignor.id,
      },
    })

    expect(assignorDeleted).toBeFalsy()
  })
})
