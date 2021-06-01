import { findUser } from './findUser';
import { fireDb } from './firebaseConfig';

export const addUser = async userData => {
  const { displayName, email, photoURL, uid } = userData;
  const doc = await fireDb.collection('users').add({
    displayName: displayName ? displayName : email.split('@')[0],
    email: email,
    UID: uid,
    photoURL: photoURL
      ? photoURL
      : 'https://firebasestorage.googleapis.com/v0/b/photo-sight.appspot.com/o/default_user.png?alt=media&token=93e215bf-4b99-4dde-9127-21eefb65df16'
  });

  const snapshot = await fireDb.collection('users').doc(doc.id).get();
  return await snapshot.data();
};

export const addSocialUser = async userData => {
  const isUser = await findUser(userData.uid);
  if (!isUser.data) {
    return await addUser(userData);
  } else {
    return isUser;
  }
};
