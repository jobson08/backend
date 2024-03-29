import { PrismaClient } from '@prisma/client';
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
    data: { name: 'fabrica de bolos', icon: 1, typeExpense: false, userId: 1 },
  });
  await prisma.category.create({
    data: {
      name: 'Despesa fabrica de bolos',
      icon: 2,
      typeExpense: true,
      userId: 1,
    },
  });
  await prisma.category.create({
    data: { name: 'Padaria', icon: 3, typeExpense: false, userId: 1 },
  });
  await prisma.category.create({
    data: { name: 'Despesa Padaria', icon: 4, typeExpense: true, userId: 1 },
  });
  await prisma.category.create({
    data: { name: 'Despesa Casa', icon: 5, typeExpense: true, userId: 1 },
  });
  await prisma.category.create({
    data: { name: 'Gasto Pessoal', icon: 6, typeExpense: true, userId: 1 },
  });
  await prisma.category.create({
    data: { name: 'Gasto Esporádicos', icon: 7, typeExpense: true, userId: 1 },
  });
  await prisma.category.create({
    data: { name: 'Imposto', icon: 8, typeExpense: true, userId: 1 },
  });
  await prisma.category.create({
    data: { name: 'Saude', icon: 9, typeExpense: true, userId: 1 },
  });
  await prisma.category.create({
    data: { name: 'Transporte', icon: 10, typeExpense: true, userId: 1 },
  });
  await prisma.category.create({
    data: {
      name: 'Serviços Financeiros',
      icon: 11,
      typeExpense: true,
      userId: 1,
    },
  });

  //SubCategory
  await prisma.subCategory.create({
    data: { name: 'Sony Pão', categoryId: 2, userId: 1 },
  });
  await prisma.subCategory.create({
    data: { name: 'Sony', categoryId: 1, userId: 1 },
  });
  await prisma.subCategory.create({
    data: { name: 'Carlos Merces', categoryId: 1, userId: 1 },
  });
  await prisma.subCategory.create({
    data: { name: 'Luiz Garapu', categoryId: 1, userId: 1 },
  });
  await prisma.subCategory.create({
    data: { name: 'Produção Despesa', categoryId: 1, userId: 1 },
  });

  //npx prisma migrate reset
  //npx prisma db seed
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
