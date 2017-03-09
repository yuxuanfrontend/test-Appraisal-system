import App from '../App'
import mainpage from '../components/main-page'
import apply from '../managedidentify/apply'
import transfer from '../managedidentify/transfer'
import notify from '../managedidentify/notify'
import handover from '../managedidentify/handover'
import outbound from '../managedidentify/outbound'
import distribution from '../managedidentify/distribution'
import querydistribution from '../managedidentify/query-distribution'


var config = [
  {
    path:'/',
    component:mainpage,

    children:[
      {
        path:'apply',
        component:apply
      },
      {
        path:'transfer',
        component:transfer
      },
      {
        path:'outbound',
        component:outbound
      },
      {
        path:'/handover',
        component:handover
      },
      {
        path:'notify',
        component:notify
      },
      {
        path:'distribution',
        component:distribution
      },
      {
        path:'querydistribution',
        component:querydistribution
      }
    ]
  }
];

export default config
