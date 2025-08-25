import { createApp } from 'vue'

import limAutoscrollTable from './components/lim-autoscroll-table.vue'
import { h } from 'vue'

/*
const app = createApp(limAutoscrollTable, {
  data: [
    { 
      currentMonthCount: 12907, 
      growthCount: 12907,
      growthRate: 100,
      previousMonthCount: 0,
      sourceName: "APP"
    },
    { 
      currentMonthCount: 12907, 
      growthCount: 12907,
      growthRate: 100,
      previousMonthCount: 0,
      sourceName: "WEB"
    },
    {
      currentMonthCount: 12907, 
      growthCount: 12907,
      growthRate: 100,
      previousMonthCount: 0,
      sourceName: "API"
    },
    {
      currentMonthCount: 12907, 
      growthCount: 12907,
      growthRate: 100,
      previousMonthCount: 0,
      sourceName: "MOBILE"
    },
    { 
      currentMonthCount: 12907, 
      growthCount: 12907,
      growthRate: 100,
      previousMonthCount: 0,
      sourceName: "APP"
    },
    { 
      currentMonthCount: 12907, 
      growthCount: 12907,
      growthRate: 100,
      previousMonthCount: 0,
      sourceName: "WEB"
    },
    {
      currentMonthCount: 12907, 
      growthCount: 12907,
      growthRate: 100,
      previousMonthCount: 0,
      sourceName: "API"
    },
    {
      currentMonthCount: 12907, 
      growthCount: 12907,
      growthRate: 100,
      previousMonthCount: 0,
      sourceName: "MOBILE"
    },
    { 
      currentMonthCount: 12907, 
      growthCount: 12907,
      growthRate: 100,
      previousMonthCount: 0,
      sourceName: "APP"
    },
    { 
      currentMonthCount: 12907, 
      growthCount: 12907,
      growthRate: 100,
      previousMonthCount: 0,
      sourceName: "WEB"
    },
    {
      currentMonthCount: 12907, 
      growthCount: 12907,
      growthRate: 100,
      previousMonthCount: 0,
      sourceName: "API"
    },
    {
      currentMonthCount: 12907, 
      growthCount: 12907,
      growthRate: 100,
      previousMonthCount: 0,
      sourceName: "MOBILE"
    }
  ]
})
app.mount('#app')

*/

createApp(limAutoscrollTable, {
  columns: [
    {
      label: "排行",
      component: (props) => {
        return h("img", {
          src: "/github_icon.png",
          alt: "logo",
          width: 30,
          height: 30
        })
      },
      
    },
    {
      label: "系统简称",
      prop: "sourceName"
    },
    {
      label: "错误次数",
      prop: "currentMonthCount"
    },
    {
      label: "月增长率",
      prop: "growthRate"
    },
  ],
  data: [
    { 
      currentMonthCount: 12907, 
      growthCount: 12907,
      growthRate: 100,
      previousMonthCount: 0,
      sourceName: "APP"
    },
    { 
      currentMonthCount: 12907, 
      growthCount: 12907,
      growthRate: 100,
      previousMonthCount: 0,
      sourceName: "WEB"
    },
    {
      currentMonthCount: 12907, 
      growthCount: 12907,
      growthRate: 100,
      previousMonthCount: 0,
      sourceName: "API"
    },
    {
      currentMonthCount: 12907, 
      growthCount: 12907,
      growthRate: 100,
      previousMonthCount: 0,
      sourceName: "MOBILE"
    },
        { 
      currentMonthCount: 12907, 
      growthCount: 12907,
      growthRate: 100,
      previousMonthCount: 0,
      sourceName: "APP"
    },
    { 
      currentMonthCount: 12907, 
      growthCount: 12907,
      growthRate: 100,
      previousMonthCount: 0,
      sourceName: "WEB"
    },
    {
      currentMonthCount: 12907, 
      growthCount: 12907,
      growthRate: 100,
      previousMonthCount: 0,
      sourceName: "API"
    },
    {
      currentMonthCount: 12907, 
      growthCount: 12907,
      growthRate: 100,
      previousMonthCount: 0,
      sourceName: "MOBILE"
    },
        { 
      currentMonthCount: 12907, 
      growthCount: 12907,
      growthRate: 100,
      previousMonthCount: 0,
      sourceName: "APP"
    },
    { 
      currentMonthCount: 12907, 
      growthCount: 12907,
      growthRate: 100,
      previousMonthCount: 0,
      sourceName: "WEB"
    },
    {
      currentMonthCount: 12907, 
      growthCount: 12907,
      growthRate: 100,
      previousMonthCount: 0,
      sourceName: "API"
    },
    {
      currentMonthCount: 12907, 
      growthCount: 12907,
      growthRate: 100,
      previousMonthCount: 0,
      sourceName: "MOBILE"
    },
  ],
  autoScroll: true,
  scrollStep: 1,
  scrollTimeStep: 50,
}).mount('#app')
