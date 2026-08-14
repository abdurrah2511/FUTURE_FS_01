export const fadeUp={
  hidden:{
    opacity:0,
    y:40
  },
  visible:{
    opacity:1,
    y:0,
    transition:{
      duration:.7,
      ease:[.22,1,.36,1]
    }
  }
};

export const fadeIn={
  hidden:{
    opacity:0
  },
  visible:{
    opacity:1,
    transition:{
      duration:.7
    }
  }
};

export const scaleIn={
  hidden:{
    opacity:0,
    scale:.9
  },
  visible:{
    opacity:1,
    scale:1,
    transition:{
      duration:.7,
      ease:[.22,1,.36,1]
    }
  }
};

export const staggerContainer={
  hidden:{},
  visible:{
    transition:{
      staggerChildren:.1
    }
  }
};