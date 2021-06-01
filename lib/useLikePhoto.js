import { useEffect, useState } from 'react';
import { usePhotoContext } from '../context/PhotoContext';
import firebase, { fireDb } from '../firebase/firebaseConfig';

const collectionRef = fireDb.collection('photos');

const useLikePhoto = (photo, userId) => {
  const { likes: photoLikes, photoId } = photo;
  const [isLiked, setIsLiked] = useState(false);
  const [error, setError] = useState(null);

  const { useFetchPhotosLikes } = usePhotoContext();

  useEffect(() => {
    if (userId && photoLikes.length > 0) {
      const isLike = photoLikes.includes(userId);
      if (isLike) {
        setIsLiked(true);
      } else {
        setIsLiked(false);
      }
    }
  }, [photoLikes]);

  const likePhoto = async () => {
    try {
      const res = photoLikes.includes(userId);
      if (res) {
        setIsLiked(false);
        await collectionRef.doc(photoId).update({
          likes: firebase.firestore.FieldValue.arrayRemove(userId)
        });
        useFetchPhotosLikes();
      } else {
        setIsLiked(true);
        await collectionRef.doc(photoId).update({
          likes: firebase.firestore.FieldValue.arrayUnion(userId)
        });
        useFetchPhotosLikes();
      }
    } catch (error) {
      if (error.message) {
        setError({ type: 'error', message: error.message });
      } else {
        setError({ type: 'error', message: 'server or network error!' });
      }
    }
  };

  return { isLiked, likePhoto, error };
};

export default useLikePhoto;
