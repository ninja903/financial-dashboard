import "dotenv/config"
import "./config/passport.config"
import express, { NextFunction, Request, Response } from "express"
import { Env } from "./config/env.config"
import cors from "cors"
import { HTTPSTATUS } from "./config/http.config"
import { errorHandler } from "./middlewares/errorHandler.middleware"
import { BadRequestException } from "./utils/app-error"
import connctDatabase from "./config/database.config"
import authRoutes from "./routes/auth.route"
import passport from "passport"
import userRoutes from "./routes/user.route"
import { passportAuthenticateJwt } from "./config/passport.config"
import transactionRoutes from "./routes/transaction.route";
import { startJobs } from "./cron/scheduler"
import { initializeCrons } from "./cron"
import reportRoutes from "./routes/report.route"
import { calulateNextReportDate } from "./utils/helper"



const app = express()
const BASE_PATH = Env.BASE_PATH;
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());


app.use(
    cors({
        origin: Env.FRONTEND_ORIGIN,
        credentials: true,
    })
);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    throw new BadRequestException("this is test ")
    res.status(HTTPSTATUS.OK).json({
        message: "hello server is running"
    })
});



app.use(`${BASE_PATH}/auth`, authRoutes);
app.use(`${BASE_PATH}/user`, passportAuthenticateJwt, userRoutes);
app.use(`${BASE_PATH}/transaction`, passportAuthenticateJwt, transactionRoutes);
app.use(`${BASE_PATH}/report`, passportAuthenticateJwt, reportRoutes)

app.use(errorHandler)

app.listen(Env.PORT, async () => {
    await connctDatabase();
    
    
  if (Env.NODE_ENV === "development") {
    await initializeCrons();
  }
  
    console.log(`Server is running on port ${Env.PORT} in ${Env.NODE_ENV} mode`);
    
});