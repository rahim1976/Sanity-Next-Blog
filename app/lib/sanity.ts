import {createClient} from "next-sanity"
import  ImageUrlBuilder  from "@sanity/image-url"
import { SanityImageSource } from "@sanity/image-url/lib/types/types";



export const client = createClient({
    apiVersion: '2023-05-03',
    dataset: 'production',
    projectId: '5n44n1r6',
    useCdn: false,
})


const builder = ImageUrlBuilder(client)

export function urlFor(source: SanityImageSource){
    return builder.image(source);
}