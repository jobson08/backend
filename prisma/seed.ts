/*import { PrismaClient } from '@prisma/client';
//import * as bcrypt from 'bcrypt';
const prisma = new PrismaClient();
async function main() {
  //user
  await prisma.user.create({
    data: {
      name: 'job',
      email: 'job@teste.com.br',
      password: '12345678',
      enabled: true,
    },
  });
  //account
  await prisma.account.create({
    data: { name: 'Carteira', typeAccount: 'moeda', userId: 1 },
  });
  await prisma.account.create({
    data: { name: 'Poupnaça', typeAccount: 'moeda', userId: 1 },
  });
  await prisma.account.create({
    data: { name: 'Cartão de credito', typeAccount: 'Cartão', userId: 1 },
  });
  //category
  await prisma.category.create({
    data: { name: 'fabrica de bolos', userId: 1 },
  });
  await prisma.category.create({
    data: { name: 'Padaria', userId: 1 },
  });
  await prisma.category.create({
    data: { name: 'Casa', userId: 1 },
  });
  await prisma.category.create({
    data: { name: 'Gasto Pessoal', userId: 1 },
  });
  await prisma.category.create({
    data: { name: 'Gasto Esporádicos', userId: 1 },
  });
  await prisma.category.create({
    data: { name: 'Imposto', userId: 1 },
  });
  await prisma.category.create({
    data: { name: 'Saude', userId: 1 },
  });
  await prisma.category.create({
    data: { name: 'Transporte', userId: 1 },
  });
  await prisma.category.create({
    data: { name: 'Serviços Financeiros', userId: 1 },
  });

  

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });*/
