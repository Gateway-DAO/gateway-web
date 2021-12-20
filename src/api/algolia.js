// For the default version
import algoliasearch from 'algoliasearch';

export const client = algoliasearch('AQ2002FW0Y', '0c4a78c254eac46069ba3959f86a8745');
export const daos = client.initIndex('daos');
// daos.setSettings({
//     searchableAttributes:[
//         "name",
//         "categories",
//         "chains",
//         "description"
//     ]
// })
