import pool from "@/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer';
import CryptoJS from "crypto-js";
import { getToken } from "next-auth/jwt";

//Getting user details and log in for the user
export async function GET(request) {
    const session = await getServerSession()
    const email = session.user.email;
    try {
        const transporter = nodemailer.createTransport({
            pool: true,
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // use TLS
            auth: {
                user: process.env.HOST_EMAIL,
                pass: process.env.HOST_PASS,
            },
        });

        const token = await getToken({req:request});
        let bytes = CryptoJS.AES.decrypt(token.OTP, process.env.ENCRYPT_SECRET);
        let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        const OTP = parseInt(decryptedData);

        const mailOptions = {
            from: 'arjavprajapati12@gmail.com',
            to: email,
            subject: 'OTP Verification',
            text: `Your OTP: ${OTP} for authentication`,
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ status: 200, ok: true });
    } catch (err) {
        return NextResponse.json({ status: 500, ok: false, msg: "Internal server error!" });
    }
}


export async function POST(request,response) {
    try {
        const { userOTP } = await request.json();
        const token = await getToken({req:request});

        let bytes = CryptoJS.AES.decrypt(token.OTP, process.env.ENCRYPT_SECRET);
        let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        if (parseInt(userOTP) === decryptedData) {
            delete token.OTP;
            return NextResponse.json({ status: 200, ok: true, msg: "Successful!" })
        }
        return NextResponse.json({ status: 401, ok: false, msg: "Invalid otp!" });
    } catch(err) {
        return NextResponse.json({ status: 500, ok: false, msg: "Internal server error!" });
    }
}