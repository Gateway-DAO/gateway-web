import { CeramicClient } from '@ceramicnetwork/http-client';
import { TileDocument } from '@ceramicnetwork/stream-tile';

const ceramic = new CeramicClient('http://ceramic-node.mygateway.xyz:7007');

const data = await ceramic.loadStream("kjzl6cwe1jw14al22b7apgduowpq91qrgrlwt73hvn10u94v7ulxngk8ghhzrsg")
console.log(data.content)