import React, { useState, useEffect } from 'react';

interface IProps {
  milliSeconds?: number;
  isShow: boolean;
}

const HideDelay: React.FC<IProps> = (props) => {
  const [isShow, setShow] = useState(props.isShow);

  useEffect(() => {
    if (isShow && !props.isShow) {
      setTimeout(() => {
        setShow(props.isShow);
      }, props.milliSeconds || 300);
    }
    if (!isShow && props.isShow) {
      setShow(props.isShow);
    }
  }, [props.isShow]);

  return <>{isShow && props.children}</>;
};

export default HideDelay;
