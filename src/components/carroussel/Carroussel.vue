<template>
  <carousel :data="data" indicator-type="disc"></carousel>
</template>

<script>

import image1 from '../../assets/carroussel/news1.jpg';
import image2 from '../../assets/carroussel/news2.jpg';
import image3 from '../../assets/carroussel/news3.jpg';

export default {
  data() {
    return {
      data: [
        {
          id: 1,
          message: 'First message',
          content(createElement) {
            return createElement('img', {
              attrs: {
                src: image1,
              },
            });
          },
        },
        {
          id: 2,
          message: 'First message',
          content(createElement) {
            return createElement('img', {
              attrs: {
                src: image2,
              },
            });
          },
        },
        {
          id: 3,
          message: 'First message',
          content(createElement) {
            return createElement('img', {
              attrs: {
                src: image3,
              },
            });
          },
        },
      ],
    };
  },
};

</script>

<style scoped>

</style>
