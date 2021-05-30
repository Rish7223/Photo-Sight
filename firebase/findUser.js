import { fireDb } from './firebaseConfig';

export const findUser = async UID => {
  let data = null;
  let id = '';
  const snapshot = await fireDb.collection('users').get();
  snapshot.forEach(doc => {
    const body = doc.data();
    if (body.UID === UID) {
      data = body;
      id = doc.id;
    }
  });
  return { data, id };
};
