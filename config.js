const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Mascots NFT's - Kauji Kingz Mascots";
const description = "1000 Kauji Mascots exist in the metaverse ready to party it up at the Carnival. Join the Mascots to celebrate the success of the parent NFT collections and get the chance to win your very own parent NFT. ";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically

const layerConfigurations = [
  {
    growEditionSizeTo: 2000,
    layersOrder: [
      { name: "Costume Color" },
      { name: "Body" },
      { name: "Skin" },
      { name: "Face" },
      { name: "Hair" },
      { name: "Eyes" },
      { name: "Hat" },
    ],
  },
  {
    growEditionSizeTo: 2050,
    layersOrder: [
      { name: "Costume Color" },
      { name: "Body" },
      { name: "Skin" },
      { name: "Face" },
      { name: "Hair" },
      { name: "Bandana" },
      { name: "Eyes" },
    ],
  },
  {
    growEditionSizeTo: 2100,
    layersOrder: [
      { name: "Costume Color" },
      { name: "Body" },
      { name: "Skin" },
      { name: "Face" },
      { name: "Hair" },
      { name: "Big Crown" },
      { name: "Eyes" },
    ],
  },
  {
    growEditionSizeTo: 2150,
    layersOrder: [
      { name: "Costume Color" },
      { name: "Body" },
      { name: "Skin" },
      { name: "Face" },
      { name: "Hair" },
      { name: "Eye Patch" },
      { name: "Hat" },
    ],
  },
  {
    growEditionSizeTo: 2300,
    layersOrder: [
      { name: "Costume Color" },
      { name: "Body" },
      { name: "Skin" },
      { name: "Face" },
      { name: "Hair" },
      { name: "Eye Patch" },
      { name: "Big Crown" },
    ],
  },
  {
    growEditionSizeTo: 2450,
    layersOrder: [
      { name: "Costume Color" },
      { name: "Body" },
      { name: "Skin" },
      { name: "Face" },
      { name: "Hair" },
      { name: "Laser" },
      { name: "Hat" },
    ],
  },
  {
    growEditionSizeTo: 2600,
    layersOrder: [
      { name: "Costume Color" },
      { name: "Body" },
      { name: "Skin" },
      { name: "Face" },
      { name: "Hair" },
      { name: "Laser" },
      { name: "Bandana" },
    ],
  },
  {
    growEditionSizeTo: 2750,
    layersOrder: [
      { name: "Costume Color" },
      { name: "Body" },
      { name: "Skin" },
      { name: "Face" },
      { name: "Hair" },
      { name: "Laser" },
      { name: "Big Crown" },
    ],
  },
  {
    growEditionSizeTo: 2900,
    layersOrder: [
      { name: "Costume Color" },
      { name: "Body" },
      { name: "Skin" },
      { name: "Face" },
      { name: "Hair" },
      { name: "Angered" },
      { name: "Bandana" },
    ],
  },
  {
    growEditionSizeTo: 3050,
    layersOrder: [
      { name: "Costume Color" },
      { name: "Body" },
      { name: "Skin" },
      { name: "Face" },
      { name: "Hair" },
      { name: "Angered" },
      { name: "Big Crown" },
    ],
  },
  {
    growEditionSizeTo: 3183,
    layersOrder: [
      { name: "Costume Color" },
      { name: "Body" },
      { name: "Skin" },
      { name: "Face" },
      { name: "Hair" },
      { name: "Angered" },
      { name: "Hat" },
    ],
  },
  {
    growEditionSizeTo: 3188,
    layersOrder: [
      { name: "Legendaries" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 3600,
  height: 3600,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: false,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {
  artist: "@paulinakaterina"
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
