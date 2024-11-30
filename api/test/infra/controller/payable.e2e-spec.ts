import { Test } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import { AppModule } from '@/app.module'
import { RepositoryModule } from '@/infra/repository/repository.module'
import * as request from 'supertest'
import { PrismaService } from '@/infra/repository/prisma/prisma.service'
import { PayableFactory } from '../../factories/make-payable'
import { AssignorFactory } from '../..//factories/make-assignor'

describe('Payable Controller (E2E)', () => {
  let app: INestApplication
  let prisma: PrismaService
  let payableFactory: PayableFactory
  let assignorFactory: AssignorFactory

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule, RepositoryModule],
      providers: [PayableFactory, AssignorFactory, PrismaService],
    }).compile()

    app = moduleRef.createNestApplication()
    prisma = moduleRef.get(PrismaService)
    payableFactory = moduleRef.get(PayableFactory)
    assignorFactory = moduleRef.get(AssignorFactory)

    await app.init()
  })

  test('[POST] /integrations/payable', async () => {
    const response = await request(app.getHttpServer())
      .post('/integrations/payable')
      .send({
        payable: {
          emissionDate: '2024-11-27T21:36:19.992Z',
          value: 50.25,
        },
        assignor: {
          document: '61754108318',
          email: 'prenansb@gmail.com',
          phone: '+55085987889257',
          name: 'Pedro',
        },
      })

    expect(response.statusCode).toBe(201)

    expect(response.body).toStrictEqual({
      payable: {
        emissionDate: '2024-11-27T21:36:19.992Z',
        value: 50.25,
      },
      assignor: {
        document: '61754108318',
        email: 'prenansb@gmail.com',
        phone: '+55085987889257',
        name: 'Pedro',
      },
    })

    const assignorOnDatabase = await prisma.assignor.findFirst({
      where: {
        email: 'prenansb@gmail.com',
      },
    })

    expect(assignorOnDatabase).toBeTruthy()

    const payableOnDatabase = await prisma.payable.findFirst({
      where: {
        emissionDate: '2024-11-27T21:36:19.992Z',
      },
    })

    expect(payableOnDatabase).toBeTruthy()
  })

  test('[POST] /integrations/payable/create', async () => {
    const assignor = await assignorFactory.makePrismaAssignor()

    const response = await request(app.getHttpServer())
      .post('/integrations/payable/create')
      .send({
        emissionDate: '2024-11-27T21:36:19.992Z',
        value: 50.25,
        assignorId: assignor.id,
      })

    expect(response.statusCode).toBe(201)

    const payableOnDatabase = await prisma.payable.findFirst({
      where: {
        emissionDate: '2024-11-27T21:36:19.992Z',
      },
    })

    expect(payableOnDatabase).toBeTruthy()
  })

  test('[GET] /integrations/payable/:id', async () => {
    const assignor = await assignorFactory.makePrismaAssignor()

    const payable = await payableFactory.makePrismaPayable({
      assignorId: assignor.id,
    })

    const response = await request(app.getHttpServer())
      .get(`/integrations/payable/${payable.id}`)
      .send()

    expect(response.statusCode).toBe(200)

    expect(response.body).toEqual(
      expect.objectContaining({
        id: payable.id,
        value: payable.value,
        emissionDate: payable.emissionDate.toISOString(),
        assignorId: assignor.id,
      })
    )
  })

  test('[PUT] /integrations/payable/:id', async () => {
    const assignor = await assignorFactory.makePrismaAssignor()

    const payable = await payableFactory.makePrismaPayable({
      assignorId: assignor.id,
    })

    const response = await request(app.getHttpServer())
      .put(`/integrations/payable/${payable.id}`)
      .send({
        value: 20.2,
      })

    expect(response.statusCode).toBe(200)

    expect(response.body).toEqual(
      expect.objectContaining({
        id: payable.id,
        value: 20.2,
        emissionDate: payable.emissionDate.toISOString(),
        assignorId: assignor.id,
      })
    )
  })

  test('[DELETE] /integrations/payable/:id', async () => {
    const assignor = await assignorFactory.makePrismaAssignor()

    const payable = await payableFactory.makePrismaPayable({
      assignorId: assignor.id,
    })

    const response = await request(app.getHttpServer()).delete(
      `/integrations/payable/${payable.id}`
    )

    expect(response.statusCode).toBe(200)

    const payableDeleted = await prisma.payable.findFirst({
      where: {
        id: payable.id,
      },
    })

    expect(payableDeleted).toBeFalsy()
  })
})
