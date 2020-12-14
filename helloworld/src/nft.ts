
export function createNFT(url, position, scale, rotation) {
  const nft = new Entity()
  const parts = url.split('/');
  let asset_id = parts[parts.length-2] + '/' + parts[parts.length-1]
  nft.addComponent(new Transform({ position, scale, rotation }))
  nft.addComponent(new NFTShape('ethereum://' + asset_id, Color3.Black()))
  // nft.addComponent(new NFTShape('ethereum://0xd07dc4262bcdbf85190c01c996b4c06a461d2430/59357', Color3.Black()))
  engine.addEntity(nft)
  return nft 
} 

