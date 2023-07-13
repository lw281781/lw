import myhttp from '@/utils/http.js'

export  function list (){
  return  myhttp({
    url:'/admin/api/v1/service_type/ladderlist'
  })
}
export function list1() {
  return myhttp({
    url:'/api/v1/technical/list'
  })
}
export  function getdata (page = 1,id1='',id2='',id3='',id4='',id5='',id6=''){
  return  myhttp({
    url:'/api/v1/service/list',
    params:{
      pageNum: page,
      pageSize:10,
      serviceTypeId:id1,
      serviceTypeId2:id2,
      technicalId:id3,
      dataOrigin:id4,
      province:id5,
      keywords:id6,
    }
  })
}