import { Post, Prefix, Controller } from "../plugins/decorator/controller";

@Controller
@Prefix('/check')
class Check {
  @Post('/aaa')
  aaa() {
    console.log('aaa')
  }
}