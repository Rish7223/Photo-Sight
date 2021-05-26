import { fireDb } from './firebaseConfig';

export const findUser = async UID => {
  var data;
  const snapshot = await fireDb.collection('users').get();
  snapshot.forEach(doc => {
    const body = doc.data();
    if (body.UID === UID) {
      data = body;
    }
  });
  return data;
};
