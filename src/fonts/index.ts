import { 
    Alfa_Slab_One, 
    Playfair_Display 
} from "next/font/google"

export const alfaFont = Alfa_Slab_One({ 
    subsets: ["latin"], 
    weight: "400",
    variable: "--alfa" 
})

export const playfairFont = Playfair_Display({ 
    subsets : [ "latin" ],
    variable: "--playfair"
})