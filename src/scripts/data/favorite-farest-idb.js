import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DB_NAME, DB_VERSION, OBJECT_STORE_NAME } = CONFIG;

const openIdb = openDB(DB_NAME, DB_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteFarestIdb = {

  async getResto(id) {
    return (await openIdb).get(OBJECT_STORE_NAME, id);
  },

  async getAllResto() {
    return (await openIdb).getAll(OBJECT_STORE_NAME);
  },

  async putResto(resto) {
    return (await openIdb).put(OBJECT_STORE_NAME, resto);
  },

  async deleteResto(id) {
    return (await openIdb).delete(OBJECT_STORE_NAME, id);
  },
};

export default FavoriteFarestIdb;
