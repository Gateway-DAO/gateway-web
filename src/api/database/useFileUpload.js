import { useState } from 'react'
import { Storage } from 'aws-amplify'

export const useFileUpload = () => {
    const [imgLoading, setImgLoading] = useState(false)

    const uploadFile = async (fileName, file, config) => {
        setImgLoading(true)
        await Storage.put(fileName, file, config)
        const url = await Storage.get(fileName, {
            level: config.level,
        })
        setImgLoading(false)
        console.log(url)
        return url.split('?')[0].toString()
    }

    return {
        uploadFile,
        imgLoading,
    }
}
