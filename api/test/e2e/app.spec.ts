import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { Test } from '@nestjs/testing';
import { AppModule } from '../../src/app.module';
import { TodoService } from '../../src/infra/services/to-do/to-do.service';
import createPrismaMock from 'prisma-mock';
import { PrismaService } from '../../src/infra/repository/prisma/prisma.service';

let app: NestFastifyApplication;
let client: any;

describe('E2E', () => {
  const service = {
    create: jest.fn(() => Promise.resolve({ success: true })),
  };

  beforeAll(async () => {
    client = createPrismaMock();

    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(TodoService)
      .useValue(service)
      .overrideProvider(PrismaService)
      .useValue(client)
      .compile();

    app = moduleRef.createNestApplication<NestFastifyApplication>(
      new FastifyAdapter(),
    );

    await app.init();
    await app.getHttpAdapter().getInstance().ready();
  });

  it(`/POST todo`, async () => {
    const result = await app.inject({
      method: 'POST',
      url: '/todo',
      headers: { 'Content-Type': 'application/json' },
      body: {
        title: 'Texto',
        description: 'Testando a nova applicação',
      },
    });
    const payload = JSON.parse(result.payload);
    expect(result.statusCode).toEqual(201);
    expect(payload).toHaveProperty('success', true);
  });

  afterAll(async () => {
    await app.close();
  });
});
