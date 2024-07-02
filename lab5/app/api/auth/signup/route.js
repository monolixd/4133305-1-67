import { PrismaClient } from "@prisma/client";
import { hashSync } from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { email, name, password } = await req.json();
    const hashPassword = hashSync(password, 10);
    const newUser = await prisma.user.create({
      data: {
        email,
        name,
        password: hashPassword,
      },
    });
    return Response.json({
      msg: "User created successfully",
      newUser,
    });
  } 
  catch (err) {
    return Response.json(err, { status: 500 });
  }
}
