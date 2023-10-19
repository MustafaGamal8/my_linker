const toastConfig = (IsMobile) => {
  return {
    theme: "colored",
    position: "top-center",
    autoClose: 1000,
    pauseOnHover: false,
    rtl: true,
    limit: 3,
    style: {
      width: IsMobile ? "70%" : "35%",
    },
  };
};

export default toastConfig;
