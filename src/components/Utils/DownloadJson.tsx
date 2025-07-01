import { useCallback } from 'react'
import { saveAs } from 'file-saver'

type DownloadJsonOptions = {
    fileName: string
    prettify?: boolean
};

export const useDownloadJson = () => {
    const downloadJson = useCallback(
        (data: unknown, { fileName, prettify = true }: DownloadJsonOptions) => {
            const jsonString = prettify
                ? JSON.stringify(data, null, 2)
                : JSON.stringify(data)

            const blob = new Blob([jsonString], { type: 'application/json' })
            const saveName = `${fileName}_${new Date().toISOString()}`.toLowerCase().replace(/[\s-]/g, '_')

            saveAs(blob, saveName + '.json')
        },
        []
    );

    return downloadJson
}