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
        <div>
            <h2>
                Image Portfolio
            </h2>
            { portfolioElementComponents }
        </div>
    )
}