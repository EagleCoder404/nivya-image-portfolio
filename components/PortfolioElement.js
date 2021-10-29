import Image from "next/image"
export default function PortfolioElement(props) {
    const image_url = "https://foiizfofxaqqnnqfsgbn.supabase.in/storage/v1/object/public/images/" + props.data.name

    return(
        <div className="p-4 flex-col flex items-center">
            <Image
                src={image_url}
                alt="wow"
                width="200px"
                height="200px"
                objectFit="cover"
                objectPosition="center"
            />
        </div>
    )
}