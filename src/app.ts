import http, { IncomingMessage, ServerResponse } from 'http'
import { config } from "./config"
import routes from './routes'

const serverHandler = (req: IncomingMessage, res: ServerResponse) => {
  let data: Buffer[] = []

  const { url } = req as { method: string, url: string }
  

  const prefixRegexp = new RegExp(`^${config.prefix}`)
  const getRoute = url.replace(prefixRegexp, '')

  console.log(getRoute);
  
  
  // 设置返回头
  res.setHeader('Content-Type', config.contentType)
  
  try {
    routes[getRoute]({req, res})
  } catch (err) {
    // 找不到接口
    res.statusCode = 404

    return res.end()
  }

  // req.on('data', chunk => data.push(chunk))

  // req.on('end', () => {
  //   Buffer.concat(data).toString()
  // })


  res.end();
}
  
// 启动http服务器
http.createServer(serverHandler)
  .listen(config.port, () => console.log(`http://127.0.0.1:${config.port}`))
