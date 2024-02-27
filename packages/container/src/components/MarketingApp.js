import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';

/**
 * Composant permetant d importer le service Marketing dans le container principal
 * */
export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  });

  return <div ref={ref} />;
};
