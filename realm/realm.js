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

const options = {
  schema: [Todo],
  path: 'todoList.realm',
};

export default new Realm(options);
