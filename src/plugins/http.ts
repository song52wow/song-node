import http, { IncomingMessage, ServerResponse } from 'http'
import { config, errorCode } from '../config';
import routes from '../routes';

function serverHandler(req: IncomingMessage, res: ServerResponse) {
  let data: Buffer[] = []

  const { method, url } = req as { method: string, url: string }
  
  res.setHeader('Content-Type', config.contentType)
  
  try {
    routes[method.toLocaleLowerCase()][url]({req, res})
  } catch (err) {
    // 找不到接口
    res.statusCode = 404

    return res.end()
  }

  req.on('data', chunk => data.push(chunk))

  req.on('end', () => {
    Buffer.concat(data).toString()
  })


  res.end(`{
    code: 200,
    data: '123'
  }`);
}

export default http.createServer(serverHandler)
