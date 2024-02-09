const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

async function run(){
    await prisma.$executeRawUnsafe('DROP Database guide-front-back')
    await prisma.$executeRawUnsafe('CREATE Database guide-front-back')
}
console.log('Reset DB')
run()