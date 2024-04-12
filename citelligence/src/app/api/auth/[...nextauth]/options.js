import pool from "@/db"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';
import CryptoJS from "crypto-js";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "text" }
            },
            async authorize(credentials, req) {
                try {
                    const email = credentials.email;
                    // Query the database to check if the email exists
                    const [rows] = await pool.promise().query('SELECT * FROM user_acc WHERE emailormobile = ?', [email]);
                    if (rows.length === 1) {
                        return{
                            email:rows[0].emailormobile,
                            id:rows[0].userid,
                            exists:true
                        };
                    } else {
                        return {
                            email,
                            exists:false
                        }
                    }
                } catch (error) {
                    return null;
                }
            }
        })
    ],
    session: {
        jwt: true,
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, user }) {
            if(user){
                token.exists = user.exists
                token.OTP = CryptoJS.AES.encrypt((Math.floor(1000 + Math.random() * 9000)).toString(), process.env.ENCRYPT_SECRET).toString();
                return { ...token, ...user }
            }
            return token
        },
        async session({ session, user, token }) {
            if(token){
                session.user.email = token.email;
                session.exists = token.exists
                return session
            }
        },
        async signIn({ account, profile, user }) {
            if (account.provider === "google") {
                return profile.email_verified && profile.email.endsWith("@gmail.com")
            } else if (account.provider === "credentials") {
                if(user){
                    return true
                }
                return false
            }
            return true// Do different verification for other providers that don't have `email_verified`
        },
    },

}