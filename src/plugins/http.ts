import http, { IncomingMessage, ServerResponse } from 'http'
import { config, errorCode } from '../config';
import routes from '../routes';

const serverHandler = (req: IncomingMessage, res: ServerResponse) => {
  const { method, url } = req as { method: string, url: string }

  const prefixRegexp = new RegExp(`^${config.prefix}`)
  
  const getRoute = url.replace(prefixRegexp, `${method.toLocaleLowerCase()} `)
  
  res.setHeader('Content-Type', config.contentType)
  
  try {
    routes[getRoute]({req, res})
  } catch (err) {
    // 找不到接口
    res.statusCode = 404

    return res.end()
  }


  // let data: Buffer[] = []
  
  
  // req.on('data', chunk => data.push(chunk))
  
  // req.on('end', () => {
  //   Buffer.concat(data).toString()
  // })
  
  
  // res.end(`{
  //   code: 200,
  //   data: '123'
  // }`);
}

const server = http.createServer()

server.on('request', serverHandler)

export default server
