import { useState, createContext, useContext } from "react"

const PriceValueContext = createContext<number>(0)
const PriceActionContext = createContext<{
    setTotalPrice: React.Dispatch<React.SetStateAction<number>>
    addPrice: (price: number) => void
    removePrice: (price: number) => void
    setZero: () => void
}>({
    setTotalPrice: () => {},
    addPrice: () => {},
    removePrice: () => {},
    setZero: () => {}
})

export default function PriceProvider({ children }: { children: React.ReactNode }) {
    const [totalPrice, setTotalPrice] = useState<number>(0)

    const addPrice = (price: number) => setTotalPrice(prev => prev + price)
    const removePrice = (price: number) => setTotalPrice(prev => prev - price)
    const setZero = () => setTotalPrice(0)

    return (
        <PriceValueContext.Provider value={totalPrice}>
            <PriceActionContext.Provider value={{ setTotalPrice, addPrice, removePrice, setZero }}>
                {children}
            </PriceActionContext.Provider>
        </PriceValueContext.Provider>
    )
}

export function usePrice() {
    const totalPrice = useContext(PriceValueContext)
    const { setTotalPrice, addPrice, removePrice, setZero } = useContext(PriceActionContext)
    return { totalPrice, setTotalPrice, addPrice, removePrice, setZero }
}
