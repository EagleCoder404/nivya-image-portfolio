import PortfolioElement from "./PortfolioElement"
import { useEffect, useState } from "react"

export default function ImagePortfolio() {

    const [imageList, setImageList] = useState([])

    useEffect(() => {
        fetch("/api/get_files")
            .then( r => r.json())
            .then( imagesData => setImageList(imagesData))
    }, [])
    
    const portfolioElementComponents = imageList.map( imageItem => <PortfolioElement key={imageItem.id} data={imageItem}/>)
    
    return(
        <div className="max-w-4xl mx-auto mt-8">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                    { portfolioElementComponents }
            </div>
        </div>
    )
}