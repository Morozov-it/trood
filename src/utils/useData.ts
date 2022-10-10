import { useState, useEffect } from 'react'

export const useData = <T,>(fetcher: () => Promise<T>, ms: number = 0) => {
    const [data, setData] = useState<T>()
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await fetcher()
            //artificial delay
            setTimeout(() => {
                setData(response)
                setLoading(false)
            }, ms)
        } catch (e: any) {
            setLoading(false)
            setError(e)
        }
    }

    useEffect(() => {
        fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        data,
        loading,
        error
    }
}