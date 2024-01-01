import React from 'react'
import { SelectDesign } from './SelectDesign';
import { useRouter } from 'next/router';
import { CheckBoxFill } from './CheckBoxFill';
const company = ['Amazon', "Flipkart", "Myntra", "Ajio", "Nykaa"]
const Filteration = () => {
  const router = useRouter();
  const handleSort = (event: any)=>{
    if(event.target.value){
      router.push(`?sort=${event.target.value}`)
    }else{
      router.push("")
    }
  }
  const handleCompanies = (event: any, filterName:string)=>{
    const {checked, name} = event.target;
    const query: any = router.query;
    const comp: string | undefined = query.companies || undefined;
    let updated;
    if(comp){
      if(checked){
         updated = {...query, [filterName]:  `${comp},${name}` }
      }else{
        const filtered = comp?.split(",").filter(item=> item !== name).join(",")
        updated = {...query, [filterName]:  filtered }
      }
    }else{
       updated = {...query, [filterName]:  `${name}` }
    }
    router.push({ pathname: '/', query: updated });
   
  }
  return (
    <div className='px-4 py-2'>
        {/* sorting */}
        <div className='p-2'>
            <SelectDesign onChangehandler={handleSort}>
              <option value="">Sort by</option>
              <option value="ltoh">Low to High</option>
              <option value="htol">High to Low</option>
            </SelectDesign>
        </div>
        {/* filters by company */}
        <div className='p-2'>
          <h3 className='py-2 text-xl'>Companies</h3>
          {company.map((item, ind)=>(
            <CheckBoxFill handleChange={handleCompanies} filterName={'companies'} name={item} key={ind}/>
          ))}
        </div>
    </div>
  )
}
export default Filteration;


