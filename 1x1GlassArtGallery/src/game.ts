import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../80d9cb1c-2fcf-4585-8e19-e2d5621fd54d/src/item"
import Script2 from "../85cf3207-2792-4349-9938-21fd82ea2168/src/item"
import Script3 from "../c44b9c20-02ab-4974-97e0-78e98ac722f0/src/item"
import Script4 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"
import { getParcel } from "@decentraland/ParcelIdentity"
import utils from '../node_modules/decentraland-ecs-utils/index'

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const wood = new Entity('wood')
engine.addEntity(wood)
wood.setParent(_scene)
const gltfShape = new GLTFShape("models/FloorBaseWood_01/FloorBaseWood_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
wood.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wood.addComponentOrReplace(transform2)

const doorframeDarkGrey = new Entity('doorframeDarkGrey')
engine.addEntity(doorframeDarkGrey)
doorframeDarkGrey.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(10.5, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1)
})
doorframeDarkGrey.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("models/DarkGreyDoorframe.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
doorframeDarkGrey.addComponentOrReplace(gltfShape2)

const glass = new Entity('glass')
engine.addEntity(glass)
glass.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(13.5, 14, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.999999046325684, 3.5, 0.49999991059303284)
})
glass.addComponentOrReplace(transform4)
const gltfShape3 = new GLTFShape("models/glass.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
glass.addComponentOrReplace(gltfShape3)

const glass2 = new Entity('glass2')
engine.addEntity(glass2)
glass2.setParent(_scene)
glass2.addComponentOrReplace(gltfShape3)
const transform5 = new Transform({
  position: new Vector3(4.5, 14, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(7.499998569488525, 3.5, 0.49999991059303284)
})
glass2.addComponentOrReplace(transform5)

const glass3 = new Entity('glass3')
engine.addEntity(glass3)
glass3.setParent(_scene)
glass3.addComponentOrReplace(gltfShape3)
const transform6 = new Transform({
  position: new Vector3(0.5, 0, 8),
  rotation: new Quaternion(-2.2161691681413893e-15, -0.7071067690849304, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(14.99999713897705, 3.5, 0.49999991059303284)
})
glass3.addComponentOrReplace(transform6)

const glass4 = new Entity('glass4')
engine.addEntity(glass4)
glass4.setParent(_scene)
glass4.addComponentOrReplace(gltfShape3)
const transform7 = new Transform({
  position: new Vector3(15.5, 0, 8.5),
  rotation: new Quaternion(-2.2161691681413893e-15, -0.7071067690849304, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(14.99999713897705, 3.5, 0.49999991059303284)
})
glass4.addComponentOrReplace(transform7)

const glass5 = new Entity('glass5')
engine.addEntity(glass5)
glass5.setParent(_scene)
glass5.addComponentOrReplace(gltfShape3)
const transform8 = new Transform({
  position: new Vector3(8, 0, 15.5),
  rotation: new Quaternion(-9.56433181622824e-15, -5.960464477539063e-8, -6.632167603596922e-15, -1),
  scale: new Vector3(14.999999046325684, 3.5, 0.4999999701976776)
})
glass5.addComponentOrReplace(transform8)


const l1n1 = new Entity('nftPictureFrame3')

const rainLight = new Entity('rainLight')
engine.addEntity(rainLight)
rainLight.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rainLight.addComponentOrReplace(transform21)

const fourSquareFloorPanel = new Entity('fourSquareFloorPanel')
engine.addEntity(fourSquareFloorPanel)
fourSquareFloorPanel.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(16, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(8, 1, 8)
})
fourSquareFloorPanel.addComponentOrReplace(transform22)
const gltfShape4 = new GLTFShape("models/FloorSciFiPanel_02/FloorSciFiPanel_02.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
fourSquareFloorPanel.addComponentOrReplace(gltfShape4)

const glass7 = new Entity('glass7')
engine.addEntity(glass7)
glass7.setParent(_scene)
glass7.addComponentOrReplace(gltfShape3)
const transform23 = new Transform({
  position: new Vector3(0.5, 3.5, 8),
  rotation: new Quaternion(-2.2161691681413893e-15, -0.7071067690849304, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(14.99999713897705, 3.5, 0.49999991059303284)
})
glass7.addComponentOrReplace(transform23)

const glass9 = new Entity('glass9')
engine.addEntity(glass9)
glass9.setParent(_scene)
glass9.addComponentOrReplace(gltfShape3)
const transform24 = new Transform({
  position: new Vector3(15.5, 3.5, 8.5),
  rotation: new Quaternion(-2.2161691681413893e-15, -0.7071067690849304, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(14.99999713897705, 3.5, 0.49999991059303284)
})
glass9.addComponentOrReplace(transform24)

const glass10 = new Entity('glass10')
engine.addEntity(glass10)
glass10.setParent(_scene)
glass10.addComponentOrReplace(gltfShape3)
const transform25 = new Transform({
  position: new Vector3(8, 3.5, 15.5),
  rotation: new Quaternion(-9.56433181622824e-15, -5.960464477539063e-8, -6.632167603596922e-15, -1),
  scale: new Vector3(14.999999046325684, 3.5, 0.4999999701976776)
})
glass10.addComponentOrReplace(transform25)

const fourSquareFloorPanel3 = new Entity('fourSquareFloorPanel3')
engine.addEntity(fourSquareFloorPanel3)
fourSquareFloorPanel3.setParent(_scene)
fourSquareFloorPanel3.addComponentOrReplace(gltfShape4)
const transform26 = new Transform({
  position: new Vector3(16, 7, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(8, 2.5, 8)
})
fourSquareFloorPanel3.addComponentOrReplace(transform26)

const glass12 = new Entity('glass12')
engine.addEntity(glass12)
glass12.setParent(_scene)
glass12.addComponentOrReplace(gltfShape3)
const transform27 = new Transform({
  position: new Vector3(0.5, 3.5, 8),
  rotation: new Quaternion(-2.2161691681413893e-15, -0.7071067690849304, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(14.99999713897705, 3.5, 0.49999991059303284)
})
glass12.addComponentOrReplace(transform27)

const glass14 = new Entity('glass14')
engine.addEntity(glass14)
glass14.setParent(_scene)
glass14.addComponentOrReplace(gltfShape3)
const transform28 = new Transform({
  position: new Vector3(15.5, 3.5, 8.5),
  rotation: new Quaternion(-2.2161691681413893e-15, -0.7071067690849304, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(14.99999713897705, 3.5, 0.49999991059303284)
})
glass14.addComponentOrReplace(transform28)

const glass15 = new Entity('glass15')
engine.addEntity(glass15)
glass15.setParent(_scene)
glass15.addComponentOrReplace(gltfShape3)
const transform29 = new Transform({
  position: new Vector3(8, 3.5, 15.5),
  rotation: new Quaternion(-9.56433181622824e-15, -5.960464477539063e-8, -6.632167603596922e-15, -1),
  scale: new Vector3(14.999999046325684, 3.5, 0.4999999701976776)
})
glass15.addComponentOrReplace(transform29)

const fourSquareFloorPanel4 = new Entity('fourSquareFloorPanel4')
engine.addEntity(fourSquareFloorPanel4)
fourSquareFloorPanel4.setParent(_scene)
fourSquareFloorPanel4.addComponentOrReplace(gltfShape4)
const transform30 = new Transform({
  position: new Vector3(16, 7, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(8, 2.5, 8)
})
fourSquareFloorPanel4.addComponentOrReplace(transform30)

const glass18 = new Entity('glass18')
engine.addEntity(glass18)
glass18.setParent(_scene)
glass18.addComponentOrReplace(gltfShape3)
const transform31 = new Transform({
  position: new Vector3(15.5, 7, 8.5),
  rotation: new Quaternion(-2.2161691681413893e-15, -0.7071067690849304, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(14.99999713897705, 3.5, 0.49999991059303284)
})
glass18.addComponentOrReplace(transform31)

const glass19 = new Entity('glass19')
engine.addEntity(glass19)
glass19.setParent(_scene)
glass19.addComponentOrReplace(gltfShape3)
const transform32 = new Transform({
  position: new Vector3(8, 14, 15.5),
  rotation: new Quaternion(-9.56433181622824e-15, -5.960464477539063e-8, -6.632167603596922e-15, -1),
  scale: new Vector3(14.999999046325684, 3.5, 0.4999999701976776)
})
glass19.addComponentOrReplace(transform32)

const glass20 = new Entity('glass20')
engine.addEntity(glass20)
glass20.setParent(_scene)
glass20.addComponentOrReplace(gltfShape3)
const transform33 = new Transform({
  position: new Vector3(0.5, 14, 8),
  rotation: new Quaternion(-2.2161691681413893e-15, -0.7071067690849304, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(14.99999713897705, 3.5, 0.49999991059303284)
})
glass20.addComponentOrReplace(transform33)

const glass23 = new Entity('glass23')
engine.addEntity(glass23)
glass23.setParent(_scene)
glass23.addComponentOrReplace(gltfShape3)
const transform34 = new Transform({
  position: new Vector3(15.5, 10.5, 8.5),
  rotation: new Quaternion(-2.2161691681413893e-15, -0.7071067690849304, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(14.99999713897705, 3.5, 0.49999991059303284)
})
glass23.addComponentOrReplace(transform34)

const glass24 = new Entity('glass24')
engine.addEntity(glass24)
glass24.setParent(_scene)
glass24.addComponentOrReplace(gltfShape3)
const transform35 = new Transform({
  position: new Vector3(8, 10.5, 15.5),
  rotation: new Quaternion(-9.56433181622824e-15, -5.960464477539063e-8, -6.632167603596922e-15, -1),
  scale: new Vector3(14.999999046325684, 3.5, 0.4999999701976776)
})
glass24.addComponentOrReplace(transform35)

const fourSquareFloorPanel6 = new Entity('fourSquareFloorPanel6')
engine.addEntity(fourSquareFloorPanel6)
fourSquareFloorPanel6.setParent(_scene)
fourSquareFloorPanel6.addComponentOrReplace(gltfShape4)
const transform36 = new Transform({
  position: new Vector3(16, 14, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(8, 2.5, 8)
})
fourSquareFloorPanel6.addComponentOrReplace(transform36)

const glass25 = new Entity('glass25')
engine.addEntity(glass25)
glass25.setParent(_scene)
glass25.addComponentOrReplace(gltfShape3)
const transform37 = new Transform({
  position: new Vector3(0.5, 10.5, 8),
  rotation: new Quaternion(-2.2161691681413893e-15, -0.7071067690849304, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(14.99999713897705, 3.5, 0.49999991059303284)
})
glass25.addComponentOrReplace(transform37)

const glass26 = new Entity('glass26')
engine.addEntity(glass26)
glass26.setParent(_scene)
glass26.addComponentOrReplace(gltfShape3)
const transform38 = new Transform({
  position: new Vector3(8, 3.5, 1),
  rotation: new Quaternion(-9.56433181622824e-15, -5.960464477539063e-8, -6.632167603596922e-15, -1),
  scale: new Vector3(14.999999046325684, 3.5, 0.4999999701976776)
})
glass26.addComponentOrReplace(transform38)

const glass8 = new Entity('glass8')
engine.addEntity(glass8)
glass8.setParent(_scene)
glass8.addComponentOrReplace(gltfShape3)
const transform39 = new Transform({
  position: new Vector3(8, 10.5, 1),
  rotation: new Quaternion(-9.56433181622824e-15, -5.960464477539063e-8, -6.632167603596922e-15, -1),
  scale: new Vector3(14.999999046325684, 3.5, 0.4999999701976776)
})
glass8.addComponentOrReplace(transform39)

const glass11 = new Entity('glass11')
engine.addEntity(glass11)
glass11.setParent(_scene)
glass11.addComponentOrReplace(gltfShape3)
const transform40 = new Transform({
  position: new Vector3(8, 7, 15.5),
  rotation: new Quaternion(-9.56433181622824e-15, -5.960464477539063e-8, -6.632167603596922e-15, -1),
  scale: new Vector3(14.999999046325684, 3.5, 0.4999999701976776)
})
glass11.addComponentOrReplace(transform40)

const glass13 = new Entity('glass13')
engine.addEntity(glass13)
glass13.setParent(_scene)
glass13.addComponentOrReplace(gltfShape3)
const transform41 = new Transform({
  position: new Vector3(0.5, 7, 8),
  rotation: new Quaternion(-2.2161691681413893e-15, -0.7071067690849304, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(14.99999713897705, 3.5, 0.49999991059303284)
})
glass13.addComponentOrReplace(transform41)

const glass17 = new Entity('glass17')
engine.addEntity(glass17)
glass17.setParent(_scene)
glass17.addComponentOrReplace(gltfShape3)
const transform42 = new Transform({
  position: new Vector3(15.5, 14, 8.5),
  rotation: new Quaternion(-2.2161691681413893e-15, -0.7071067690849304, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(14.99999713897705, 3.5, 0.49999991059303284)
})
glass17.addComponentOrReplace(transform42)

      
const rainLight2 = new Entity('rainLight2')
engine.addEntity(rainLight2)
rainLight2.setParent(_scene)
const transform62 = new Transform({
  position: new Vector3(8, 8, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rainLight2.addComponentOrReplace(transform62)

const verticalCircularPl = new Entity('verticalCircularPl')
engine.addEntity(verticalCircularPl)
verticalCircularPl.setParent(_scene)
const transform63 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
verticalCircularPl.addComponentOrReplace(transform63)

const glass6 = new Entity('glass6')
engine.addEntity(glass6)
glass6.setParent(_scene)
glass6.addComponentOrReplace(gltfShape3)
const transform64 = new Transform({
  position: new Vector3(4, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(7.499998569488525, 3.5, 0.49999991059303284)
})
glass6.addComponentOrReplace(transform64)

const glass16 = new Entity('glass16')
engine.addEntity(glass16)
glass16.setParent(_scene)
glass16.addComponentOrReplace(gltfShape3)
const transform65 = new Transform({
  position: new Vector3(4, 7, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(7.499998569488525, 3.5, 0.49999991059303284)
})
glass16.addComponentOrReplace(transform65)

const glass21 = new Entity('glass21')
engine.addEntity(glass21)
glass21.setParent(_scene)
glass21.addComponentOrReplace(gltfShape3)
const transform66 = new Transform({
  position: new Vector3(13, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.999999046325684, 3.5, 0.49999991059303284)
})
glass21.addComponentOrReplace(transform66)

const glass22 = new Entity('glass22')
engine.addEntity(glass22)
glass22.setParent(_scene)
glass22.addComponentOrReplace(gltfShape3)
const transform67 = new Transform({
  position: new Vector3(13, 7, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.999999046325684, 3.5, 0.49999991059303284)
})
glass22.addComponentOrReplace(transform67)



const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
script1.init(options)
script2.init(options) 
script3.init(options)
script4.init(options) 
script1.spawn(l1n1, {"id":"0","contract":"0xd07dc4262bcdbf85190c01c996b4c06a461d2430","style":"Minimal_White","color":"#FFFFFF","ui":true}, createChannel(channelId, l1n1, channelBus))
script2.spawn(rainLight, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight, channelBus))
script2.spawn(rainLight2, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight2, channelBus))
script3.spawn(verticalCircularPl, {"distance":16,"speed":3,"autoStart":true,"onReachEnd":[{"entityName":"verticalCircularPl","actionId":"goToStart","values":{}}],"onReachStart":[{"entityName":"verticalCircularPl","actionId":"goToEnd","values":{}}]}, createChannel(channelId, verticalCircularPl, channelBus))

// export function sleep(ms: number = 0) {
//   return new Promise(r => setTimeout(r, ms));
// }
 
  
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
  
     art.addComponent(
        new OnPointerDown(
          () => {
            openNFTDialog(nft, null)
          },
          { hoverText: 'Open UI' }
        )
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