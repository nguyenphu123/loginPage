import { NextResponse } from "next/server";

//create an article
let email = "Admin@mail.com";
let password = "123456";
export async function POST(req) {
  const { inputemail, inputpassword } = await req.json();

  try {
    if (email == inputemail && password == inputpassword) {
      return NextResponse.json({
        msg: ["Login successfully"],
        success: true,
      });
    } else {
      return NextResponse.json({
        msg: ["Login failed"],
        success: false,
      });
    }
  } catch (error) {
    return NextResponse.json({
      msg: ["Login failed"],
      success: false,
    });
  }
}
