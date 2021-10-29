import Image from "next/image"
export default function PortfolioElement(props) {
    const image_url = "https://foiizfofxaqqnnqfsgbn.supabase.in/storage/v1/object/public/images/" + props.data.name
    console.log(image_url)
    return(
        <div>
            An Image
            <Image
                src={image_url}
                alt="wow"
                width="200"
                height="200"
            />
        </div>
    )
}