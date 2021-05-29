import { useState } from 'react';

const useModel = () => {
  const [isModel, setIsModel] = useState(false);

  const closeModel = () => {
    setIsModel(false);
  };

  const openModel = () => {
    setIsModel(true);
  };

  return { isModel, openModel, closeModel };
};

export default useModel;
