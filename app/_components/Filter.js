"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams(); // 2.Ikinci ? dan sonraki hisse ucun, yeni parametrleri URLSEARCHPARAMS a kecirmek ucun useSearchParams() hookunu istifade edirik.

  const router = useRouter(); // 4. navigasiya etmek ucun useRouter() hookunu istifade edirik. 

  const pathname = usePathname(); // 6. url yolunu elde edidik.
  // hal hazirdaki veziyyetde /cabins nezerde tutulub. pathname odur.

  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter){
    
    // SEHIFEDE CABINLERI FILTER ETMEK UCUN SEHIFENI YENILEMEK LAZIMDIR URL ILE 

    const params = new URLSearchParams(searchParams); // 1. Birinci butun URLdeki paramslari tuturuq.

    params.set("capacity", filter); // 3. URLdeki parametrlere yeni deyeri elave edirik. Bu case de : "all", "small", "medium", "large". (capacity = all) kimi. Lakin bu yalniz URL- i yaradir, ve hemin urle navigasiya etmir. Bunun ucun 4. cu hisse..

    router.replace(`${pathname}?${params.toString()}`,{scroll: false}) // 5. Ve burada hansi route-a gedeciyimizi yaradiriq. Urlimizde catismayan bir bolum var oda ki, /cabins bolumudur. Paramslarimiz hazirdi. Cabinsi elde etmek ucun 6. ci hisse.. ve pathname-i alib elave edirik. scroll-false ikinci argument kimi oturulur yeni oraya kecdikde sehifeni yuxari qaytarmamaq ucundur. 

  }

  return (
    <div className="border border-primary-800 flex">
      <Button filter='all' activeFilter={activeFilter} handleFilter={handleFilter}>
        All cabins
      </Button>
      <Button  filter='small' activeFilter={activeFilter} handleFilter={handleFilter}>
        1&mdash; 3 guests
      </Button>
      <Button filter='medium' activeFilter={activeFilter} handleFilter={handleFilter}>
        4&mdash; 7 guests
      </Button>
      <Button filter='large' activeFilter={activeFilter} handleFilter={handleFilter}>
        8&mdash; 12 guests
      </Button>

        {/* <button className="px-5 py-2 hover:bg-primary-700" onClick={()=> handleFilter("all")}>All cabins</button>
        <button className="px-5 py-2 hover:bg-primary-700" onClick={()=> handleFilter("small")}>1&mdash; 3 guests</button>
        <button className="px-5 py-2 hover:bg-primary-700" onClick={()=> handleFilter("medium")}>4&mdash; 7 guests</button>
        <button className="px-5 py-2 hover:bg-primary-700" onClick={()=> handleFilter("large")}>8&mdash; 12 guests</button> */}
       
    </div>
  )
}


function Button({filter, handleFilter, activeFilter, children}){
  return <button className={`px-5 py-2 hover:bg-primary-700 ${activeFilter === filter ? "bg-primary-700": " "}`} onClick={()=> handleFilter(filter)}>{children}</button>
}


export default Filter;