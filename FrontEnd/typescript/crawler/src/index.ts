import express, {Request, Response, NextFunction} from 'express'
import './controller/LoginController'
import './controller/CrawlerController'
import router from './router'
import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'




const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieSession({
  name: 'session',
  keys: ['teacherMa'],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))
app.use((req:Request,res:Response,next:NextFunction) => {
  req.teacherName = "123"
  next()
})
app.use(router)


app.listen(5000, ()=>{
  console.log('server is running')
})