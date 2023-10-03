import { useState } from "react";

const cityNames  = ['Mumbai', 'Pune', 'Surat', 'Vadodara', 'Hyderabad', 'Chandigarh','Agra','Gurugram', 'Amritsar','Madurai', 'Thiruvananthapuram', 'Faridabad', 'Panvel', 'Udaipur','Thane','Jalandhar', 'Vijayawada','Cuttak','Raipur','Tiruchirapalli','Ludhiana','Noida','Jamshedpur','Ghazibad','Belagavi','Meerut','Guntur','Patna','Nashik','Aurangabad','Prayagraj','Dehradun','Guwahati','New Delhi','Lucknow','Kochi','Navi Mumbai','Coimbatore','Ahmedabad','Indore','Kolkata','Jaipur','Visakhapatnam','Jodhpur','Varanasi','Bhubaneswar','Nagpur','Mangaluru','Bhopal','Bengaluru','Chennai'];

const CityNames = () => {
    const [city, setCity] = useState(cityNames);
    const [searchItem, setSearchItem] = useState('');
    
    const handleSearch = (e)=>{
        setSearchItem(e.target.value);
    };
    const filteredCities = city.filter((city)=>
        //  here include() casesensitive and checks that item present or not.
            city.toLowerCase().includes(searchItem.toLowerCase())
        );
    return <>
        <input type="text"
        placeholder="Enter City Name"
        id='searchbar'
        value={searchItem}
        onChange={handleSearch}
        />
        <div>{filteredCities.map((data)=><li>{data}</li>)}</div>
    </>
}
export default CityNames;