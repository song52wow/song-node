import '../controllers/pundixController'

// import { readdir } from "fs";
// import path from "path";

// class Controller {
//   // 读取Controller文件夹
//   static dirFileList(): Promise<string[]> {
//     return new Promise(resolve => {
//       const dirPath = path.resolve(__filename, '../')
  
//       readdir(dirPath, (error, fileList) => {
//         const fileListMap = fileList.map(file => path.resolve(dirPath, file))

//         resolve(fileListMap)
//       })
//     })
//   }

//   // 实例化
//   static async instantiation() {
//     const controllerList = await Controller.dirFileList()

//     controllerList.forEach(list => {
//       if(!/(.*)Controller\.ts$/.test(list)) return;

//       import(list)
//     })
//   }
// }

// export default Controller