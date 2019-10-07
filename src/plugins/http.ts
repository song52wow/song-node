import http, { IncomingMessage, ServerResponse } from 'http'
import { config } from '../config';

function serverHandler(req: IncomingMessage, res: ServerResponse) {
  let data = ''

  req.on('data', chunk => data += chunk)

  req.on('end', () => {
    const bin = new Buffer(data)

    console.log(bin.toString('utf-8'));
    
  })


  res.writeHead(200, { 'Content-Type': config.contentType });
  res.end(`{
    code: 200,
    data: '123'
  }`);
}

export default http.createServer(serverHandler)
