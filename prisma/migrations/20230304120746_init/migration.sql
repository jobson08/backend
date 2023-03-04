-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "citext";

-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- CreateTable
CREATE TABLE "user" (
    "id" BIGSERIAL NOT NULL,
    "name" CITEXT NOT NULL,
    "email" CITEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar" TEXT,
    "status" BOOLEAN NOT NULL,
    "monthlySpending" BIGINT NOT NULL,
    "annualSpending" BIGINT NOT NULL,
    "monthlyEarning" BIGINT NOT NULL,
    "gainAnnual" BIGINT NOT NULL,
    "monthlySaving" BIGINT NOT NULL,
    "role" INTEGER,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "income_id" BIGINT NOT NULL,
    "expense_id" BIGINT NOT NULL,
    "category_id" BIGINT NOT NULL,
    "accont_id" BIGINT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "income" (
    "id" BIGSERIAL NOT NULL,
    "title" CITEXT NOT NULL,
    "value" MONEY NOT NULL,
    "icomeDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "income_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "expense" (
    "id" BIGSERIAL NOT NULL,
    "title" CITEXT NOT NULL,
    "value" MONEY NOT NULL,
    "expenseDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "expense_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category" (
    "id" BIGSERIAL NOT NULL,
    "name" CITEXT NOT NULL,
    "type" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "income_id" BIGINT NOT NULL,
    "expense_id" BIGINT NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "acconunt" (
    "id" BIGSERIAL NOT NULL,
    "name" CITEXT NOT NULL,
    "balance" MONEY NOT NULL,
    "type" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "income_id" BIGINT NOT NULL,
    "expense_id" BIGINT NOT NULL,

    CONSTRAINT "acconunt_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "income_title_key" ON "income"("title");

-- CreateIndex
CREATE UNIQUE INDEX "expense_title_key" ON "expense"("title");

-- CreateIndex
CREATE UNIQUE INDEX "category_name_key" ON "category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "acconunt_name_key" ON "acconunt"("name");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_income_id_fkey" FOREIGN KEY ("income_id") REFERENCES "income"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_expense_id_fkey" FOREIGN KEY ("expense_id") REFERENCES "expense"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_accont_id_fkey" FOREIGN KEY ("accont_id") REFERENCES "acconunt"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "category" ADD CONSTRAINT "category_income_id_fkey" FOREIGN KEY ("income_id") REFERENCES "income"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "category" ADD CONSTRAINT "category_expense_id_fkey" FOREIGN KEY ("expense_id") REFERENCES "expense"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acconunt" ADD CONSTRAINT "acconunt_income_id_fkey" FOREIGN KEY ("income_id") REFERENCES "income"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acconunt" ADD CONSTRAINT "acconunt_expense_id_fkey" FOREIGN KEY ("expense_id") REFERENCES "expense"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
