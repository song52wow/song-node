import http, { IncomingMessage, ServerResponse } from 'http'
import { config, errorCode } from '../config';
import { routeList } from './routes';

function getDataJson(req:IncomingMessage) {
  return new Promise(resolve => {
    let data: Buffer[] = []
  
    req.on('data', chunk => data.push(chunk))
    
    req.on('end', () => resolve(Buffer.concat(data).toString()))
  })
}

async function serverHandler(req: IncomingMessage, res: ServerResponse) {
  const { method, url } = req as { method: string, url: string }

  // 请求方法转换为小写
  const lowerMethodStr = method.toLocaleLowerCase()
  
  res.setHeader('Content-Type', config.contentType)

  if (!routeList.has(`${url} ${lowerMethodStr}`)) {
    res.statusCode = 404

    return res.end()
  }

  let newReq = {}
  
  // routeList.get(`${url} ${lowerMethodStr}`)

  const data = await getDataJson(req)

  console.log(data);
  
  
}

const server = http.createServer()

server.on('request', serverHandler)

export default server
