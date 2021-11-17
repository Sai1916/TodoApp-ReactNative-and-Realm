/* eslint-disable prettier/prettier */
import Realm from 'realm';

const Todo = {
  name: 'Todo',
  primaryKey :'id',
  properties: {
    id: 'objectId',
    title: 'string',
    description: 'string',
  },
};

const realm = new Realm({schema: [Todo]});

export default realm;
