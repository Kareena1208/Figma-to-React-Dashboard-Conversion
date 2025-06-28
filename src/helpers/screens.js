function deviceDetect() {
  let windowWidth = window.innerWidth;

  function handleResize() {
    windowWidth = window.innerWidth;
  }

  window.addEventListener('resize', handleResize);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  const isDesktop = windowWidth >= 1024;

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
}

export default deviceDetect;