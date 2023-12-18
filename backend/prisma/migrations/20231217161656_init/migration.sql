-- CreateTable
CREATE TABLE "rooms" (
    "id" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "hospitalId" TEXT NOT NULL,

    CONSTRAINT "rooms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hospitals" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "hospitals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "surgeryRequests" (
    "id" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,
    "hospitalId" TEXT NOT NULL,
    "doctor" TEXT NOT NULL,
    "surgeryDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "generalObservations" TEXT NOT NULL,

    CONSTRAINT "surgeryRequests_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "rooms_id_key" ON "rooms"("id");

-- CreateIndex
CREATE UNIQUE INDEX "hospitals_id_key" ON "hospitals"("id");

-- CreateIndex
CREATE UNIQUE INDEX "surgeryRequests_id_key" ON "surgeryRequests"("id");

-- CreateIndex
CREATE UNIQUE INDEX "surgeryRequests_roomId_key" ON "surgeryRequests"("roomId");

-- AddForeignKey
ALTER TABLE "rooms" ADD CONSTRAINT "rooms_hospitalId_fkey" FOREIGN KEY ("hospitalId") REFERENCES "hospitals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "surgeryRequests" ADD CONSTRAINT "surgeryRequests_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "rooms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "surgeryRequests" ADD CONSTRAINT "surgeryRequests_hospitalId_fkey" FOREIGN KEY ("hospitalId") REFERENCES "hospitals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
