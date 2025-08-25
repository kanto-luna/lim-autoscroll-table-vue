<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const props = defineProps({
  columns: {
    type: Array,
    default: () => ([])
  },
  data: {
    type: Array,
    default: () => ([])
  },
  autoScroll: {
    type: Boolean,
    default: false
  },
  hover2Stop: {
    type: Boolean,
    default: true,
  },
  scrollStep: {
    type: Number,
    default: 50
  },
  scrollTimeStep: {
    type: Number,
    default: 1000
  },
  cellTextAlign: {
    type: String,
    default: 'center'
  },
})

const scrollBody = ref(null);

let autoScrollInterval = null;
let stop = false;

function scroll2Bottom() {
  if (!scrollBody.value) {
    console.debug("the scrollBody is null")
    return
  }
  if (stop) {
    return
  }

  scrollBody.value.scrollTo({
    top: scrollBody.value.scrollTop + props.scrollStep || 50,
    behavior: 'smooth'
  })
  if (scrollBody.value.scrollTop + scrollBody.value.clientHeight >= scrollBody.value.scrollHeight) {
    scrollBody.value.scrollTo({
      top: 0,
      behavior: "instant"
    })
  }
}

onMounted(() => {
  if (props.autoScroll) {
    autoScrollInterval = setInterval(() => {
      scroll2Bottom()
    }, props.scrollTimeStep || 1000)
  }
  if (props.hover2Stop) {
    const scrollTable = document.getElementById('scrollTable');
    scrollTable.addEventListener('mouseenter', () => {
      stop = true;
    })
    scrollTable.addEventListener('mouseleave', () => {
      stop = false;
    })
  }
})

onUnmounted(() => {
  if (autoScrollInterval) {
    clearInterval(autoScrollInterval)
  }
})

</script>

<template>
  <div class="w-full h-full overflow-hidden" id="scrollTable">
    <div class="w-full h-full overflow-auto smooth scrollbar-hide" ref="scrollBody">
      <table class="w-full h-full" table-layout="auto">
        <thead class="sticky">
          <tr>
            <th v-for="column in columns" :key="'col-' + column.prop">
              {{ column.label }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="'row-' + item.id">
            <td 
              v-for="column in columns" :key="'col-' + column.prop"
              :class="`text-${props.cellTextAlign}`"
            >
              <template v-if="column.component">
                <component :is="column.component" />
              </template>
              <template v-else-if="column.prop">
                {{ item[column.prop] }}
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.w-full {
  width: 100%;
}

.h-full {
  height: 100%;
}

.overflow-hidden {
  overflow: hidden;
}

.overflow-auto {
  overflow: auto;
}

.sticky {
  position: sticky;
  top: 0;
  background-color: #fff;
}

.smooth {
  scroll-behavior: smooth;
}

.scrollbar-hide {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.text-center {
  text-align: center;
}

</style>