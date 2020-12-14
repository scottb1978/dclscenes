// import * as http from "./http";
// import * as nft from "./nft";
  
// // OpenSeaAPI.getWalletNFTs('0x4595ff64328faf80a8cf0d52355639984b6af23c');   
// let nftIndex = 0;
//   const MY_ASSETS_URL = 'http://localhost:3000/nftPictureFrames';
// http.ajaxGet(MY_ASSETS_URL, (r) => {
//     r.forEach(e => {
//         log(e.location)
//         let x = (nftIndex % 6) * 2 + 1;
//           let y = Math.floor(nftIndex / 6) + 2;
//         //   log(assetName+"|"+x+"|"+y); 
//           let z = 6;
//           const pos = new Vector3(x,y,z); 
//           const rot = Quaternion.Euler(0, 0, 0);
//           const resize = 1;
//           const scale = new Vector3(resize,resize,resize);
//       // const url = 'ethereum://' + e.art.contract + '/' + e.art.id 
//       const url = 'ethereum://0xd07dc4262bcdbf85190c01c996b4c06a461d2430/86551'

//           nft.createNFT(url, pos, scale, rot)
//           nftIndex++
//     })  

// })

import utils from '../../node_modules/decentraland-ecs-util'

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1), 
  scale: new Vector3(1, 1, 1)   
})
_scene.addComponentOrReplace(transform)

const delay = ms => new Promise(res => setTimeout(res, ms)); 
 
async function loadFrames() {
  let frames = 'http://localhost:3000/nftPictureFrames'
 

  try { 
    let response = await fetch(frames)
    let json = await response.json()

    json.forEach(e => {
        delay(5000);
        log(e.location)
        const frame = new Entity(e.location)
        engine.addEntity(frame)
        frame.setParent(_scene)
        const t = new Transform({ 
          position: new Vector3(e.position.x, e.position.y, e.position.z),
          rotation: new Quaternion(e.rotation.x, e.rotation.y, e.rotation.z, e.rotation.w),
          scale: new Vector3(e.scale.x, e.scale.y, e.scale.z)
        })
      frame.addComponentOrReplace(t)
      
      const art = new Entity()
      art.setParent(frame)

      art.addComponent(
        new Transform({
          position: new Vector3(0, 0.25, 0),
          rotation: Quaternion.Euler(0, 180, 0),
        })
      )

     let nft = 'ethereum://' + e.art.contract + '/' + e.art.id 
    //  let nft = 'ethereum://0xd07dc4262bcdbf85190c01c996b4c06a461d2430/59442' 
     log(nft)

      
      // art.addComponent(new NFTShape(nft, Color3.Black())); 
     art.addComponent(
       new NFTShape(nft, {
         color: Color3.FromHexString('#FFFFFF'),
         style: PictureFrameStyle['Minimal_White'],
      }) 
     )
  
    })    
  } 
  catch (e) {
    log("before");
    log(e);
    log("after");
  }
  finally{
    log("finally");

  }
};



loadFrames();