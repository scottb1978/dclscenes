# Free Decentraland Buildings - Provided by https://rentabyl.com

These are buildings created and made available for free by [Rentabyl](https://rentabyl.com) to help reduce the barriers to people achieving an outcome. 
For example if you are an artist, your goal is to sell art and spending time creating a gallery to display your art isn't good use of your time. 

These buildings are provided free for anyone to download and use. 
If you get stuck come to our [Discord](https://discord.gg/JAJEd5dKjv) and we will try to help you out.

# Art Galleries
## 1x1 Glass Art Gallery
The Glass Art Gallery perfect for artists who want to showcase their artwork with ~34 art frames that can be easily configured to show anything that is on opensea.

Check it out here:
https://glassartgallery.rentabyl.vercel.app/

### Download & install the dclscenes repository & sdk
  1. CD 1x1GlassArtGallery
  1. npm install
  1. dcl start

### Configure the art
  1. Download the json https://api.jsonbin.io/b/5fd82578fbb23c2e36a6e548/1
  1. Use a json editor that formats it nicely like Visual Studio Code 
  1. Each art frame has a location name in the format level(1, 2 or 3) direction(n, s, e or w) and then position. There are 4 positions on each wall starting with 1 on the left.  
  1. Search for the first panel in the top left of the room when you walk into the building with location l1n1
  1. The json element has an art section which then has contract & id which you can change with your art
  1. Do dcl start to see your art in place
  1. Go through all the frames and change them

### Deploy the json to a server
  1. Sign up to https://jsonbin.io/
  1. Copy your json and publish it

### Configure your building to point to the json server
  1. Open src\game.ts
  1. Go to line 449 > let frames = 'https://api.jsonbin.io/b/5fd82578fbb23c2e36a6e548/1'
  1. Change the url to be your json url 
  
You should now be able to deploy it to your land. If you are having issues with     
  
